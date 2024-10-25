WITH
index_base AS (
    SELECT
        'ch.so.afu.abbaustellen'::text AS subclass,
        t_id AS id_in_class,
        concat('Nr: ',bezeichnung,' (Abbaustelle)') AS displaytext,
        concat(' ',bezeichnung)  AS part_1,
        'Abbaustelle Nr'::text AS part_3,
        (st_asgeojson(st_envelope(mpoly), 0, 1)::json -> 'bbox'::text)::text AS bbox        
    FROM
        afu_abbaustellen_pub_v2.abbaustelle
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