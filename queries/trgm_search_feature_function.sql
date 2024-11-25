CREATE OR REPLACE FUNCTION agi_suchindex_v1.trgm_search_feature(
    search_terms TEXT[],          -- Array von Suchbegriffen
    layer_filters TEXT[],         -- Array von Layernamen
    limit_results INT DEFAULT 200 -- Maximalanzahl der Ergebnisse
)
RETURNS TABLE (
    anzeige TEXT,
    layer_ident TEXT,
    id_spalten_name TEXT,
    id_feature TEXT,
    ausdehnung TEXT,
    srid TEXT,
    sml NUMERIC
) AS $$
DECLARE
    dynamic_query TEXT;           -- Zum Speichern der dynamischen SQL-Abfrage
    term_conditions TEXT;         -- Dynamische WHERE-Bedingungen für Suchbegriffe
    similarity_calculation TEXT;  -- Berechnung der Similarity-Summe
    layer_condition TEXT;         -- Dynamische WHERE-Bedingung für Layernamen
BEGIN
    -- Dynamische WHERE-Bedingungen für Suchbegriffe erstellen
    SELECT STRING_AGG(
        format(
        	'(
			suchbegriffe LIKE ''%%%s%%'' 
			AND 
			similarity(''%s'', suchbegriffe) > 0
			)', lower(term), lower(term)),
        ' AND '
    )
    INTO term_conditions
    FROM unnest(search_terms) AS term;

    -- Dynamische Berechnung der Similarity-Summe erstellen
    SELECT STRING_AGG(
        format('CAST(similarity(suchbegriffe, ''%s'') AS NUMERIC)', lower(term)),
        ' + '
    )
    INTO similarity_calculation
    FROM unnest(search_terms) AS term;

    -- Dynamische WHERE-Bedingungen für Layernamen erstellen
    SELECT STRING_AGG(format('''%s''', layer), ', ')
    INTO layer_condition
    FROM unnest(layer_filters) AS layer;

    -- Dynamische SQL-Abfrage erstellen
    dynamic_query := format(
    	'SELECT 
        	anzeige::text AS anzeige, 
            layer_ident::text AS layer_ident, 
			id_spalten_name::text AS id_spalten_name,
			id_feature::text AS id_feature,
			ausdehnung::text AS ausdehnung,
			%s AS srid,
            %s AS sml
        FROM 
			agi_suchindex_v1.feature
        WHERE 
			layer_ident IN (%s) 
           	AND 
			%s
     	ORDER BY 
			sml DESC
    	LIMIT 
			%s',
        quote_literal('EPSG:2056'),
        similarity_calculation, -- Dynamische Similarity-Summe
        layer_condition,        -- Dynamische Layer-Bedingungen
        term_conditions,        -- Dynamische WHERE-Bedingungen
        limit_results           -- Begrenzung der Ergebnisse
    );

    -- Dynamische Abfrage ausführen und Ergebnisse zurückgeben
    RETURN QUERY EXECUTE dynamic_query;
END $$ LANGUAGE plpgsql;