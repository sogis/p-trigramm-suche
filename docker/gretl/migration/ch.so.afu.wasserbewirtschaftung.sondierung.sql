WITH
index_base AS (
    SELECT 
        'ch.so.afu.wasserbewirtschaftung.sondierung'::text AS subclass,
        t_id AS id_in_class,
        concat('Nr: ', objektnummer, ' (VEGAS Sondierung)')  AS displaytext,
        objektnummer AS part_1,
        'Objekt Nr Sondierung'::text AS part_3,
        (st_asgeojson(st_envelope(geometrie), 0, 1)::json -> 'bbox'::text)::text AS bbox  
    FROM 
        afu_wasserbewirtschaftung_pub_v2.wassrbwrtschftung_grundwassereinbau_sondierung_v
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
