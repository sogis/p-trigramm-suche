WITH
index_base AS (
    SELECT 
        'ch.so.alw.bienenstandorte_und_sperrgebiete.bienenstandorte_geschuetzt'::text AS subclass,
        t_id AS id_in_class,
        concat('Nr: ', bienenstand_nummer, ' (Bienenstandort)') AS displaytext,
        bienenstand_nummer AS part_1,
        'Bienenstandort Nr'::text AS part_3,
        (st_asgeojson(st_envelope(geometrie), 0, 1)::json -> 'bbox'::text)::text AS bbox  
    FROM 
        alw_landwirtschaft_tierhaltung_pub_v1.betrbsdttrktrdten_tierstandort
    WHERE 
        standorttyp::text = 'Bienenstand'::text AND bienenstand_nummer IS NOT NULL
)
SELECT
    displaytext AS anzeige,
    lower((part_1 || ' '::text) || index_base.part_3) AS suchbegriffe,
    subclass AS layer_ident,
    bbox as ausdehnung,
    id_in_class::text AS id_feature,
    't_id'::text as id_spalten_name,
    'str:n'::text = 'str:y' as id_in_hochkomma 
FROM
    index_base
;
