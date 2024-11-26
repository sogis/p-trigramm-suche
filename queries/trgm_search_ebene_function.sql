-- Abfrage für Search-Service EBENE
--
--SELECT  
--    anzeige AS display, 
--    identifier AS dataproduct_id, 
--    (hat_beschreibung = 't') AS has_info, 
--    unter_ebenen AS sublayers, 
--    sml
--FROM 
--    agi_suchindex_v1.trgm_search_ebene(
--        ARRAY['Grund', 'wasser']
--    );


CREATE OR REPLACE FUNCTION agi_suchindex_v1.trgm_search_ebene(
    search_terms TEXT[],       		-- Array von Suchbegriffen
    limit_results INT DEFAULT 200  	-- Maximalanzahl der Ergebnisse
)
RETURNS TABLE (
    anzeige TEXT,
    identifier TEXT,
    hat_beschreibung BOOLEAN,
    unter_ebenen TEXT,
    sml NUMERIC
) AS $$
DECLARE
    dynamic_query TEXT;				-- Zum Speichern der dynamischen SQL-Abfrage
      term_conditions TEXT; 			-- Dynamische WHERE-Bedingungen für Suchbegriffe
       similarity_calculation TEXT;	-- Berechnung der Similarity-Summe
BEGIN
    -- Dynamische WHERE-Bedingungen für alle Suchbegriffe erstellen
    -- Bedingungen für LIKE:
    SELECT STRING_AGG(
        format(
            '(
            suchbegriffe_p1 LIKE ''%%%s%%'' OR 
            suchbegriffe_p2 LIKE ''%%%s%%'' OR 
            suchbegriffe_p3 LIKE ''%%%s%%''
            )',
            lower(term), lower(term), lower(term)
        ),
        ' AND '
    ) 
    INTO term_conditions
    FROM unnest(search_terms) AS term;
       
    -- Dynamische Berechnung der Similarity-Summe erstellen
    SELECT STRING_AGG(
        format(
            'COALESCE(similarity(suchbegriffe_p1, ''%s''), 0) * 100 + ' ||
            'COALESCE(similarity(suchbegriffe_p2, ''%s''), 0) * 10 + ' ||
            'COALESCE(similarity(suchbegriffe_p3, ''%s''), 0)',
            lower(term), lower(term), lower(term)
        ),
        ' + '
    ) INTO similarity_calculation
    FROM unnest(search_terms) AS term;
    
       -- Dynamische SQL-Abfrage erstellen
    dynamic_query := format(
        'SELECT 
            anzeige::TEXT,
            identifier::TEXT,
            hat_beschreibung,
            unter_ebenen::TEXT,
            CAST(%s AS NUMERIC) AS sml
        FROM 
            agi_suchindex_v1.ebene
        WHERE 
            %s
        ORDER BY 
            sml DESC
        LIMIT 
            %s',
        similarity_calculation,  	-- Dynamische Similarity-Berechnung
        term_conditions,        	-- Dynamische Suchbedingungen
        limit_results				-- Begrenzung der Ergebnisse
    );

    -- Query ausführen
    RETURN QUERY EXECUTE dynamic_query;
END $$ LANGUAGE plpgsql;
