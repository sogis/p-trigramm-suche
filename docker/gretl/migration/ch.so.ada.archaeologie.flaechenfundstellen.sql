WITH
index_base AS (
    SELECT
        'ch.so.ada.archaeologie.flaechenfundstellen'::text AS subclass,
        t_id AS id_in_class,
        concat('Nr: ',fundstellen_nummer,' (Flächenfundstelle)') AS displaytext,
        concat(' ',fundstellen_nummer)  AS part_1,
        'Flächenfundstelle Nr'::text AS part_3,
        (st_asgeojson(st_envelope(amultipolygon), 0, 1)::json -> 'bbox'::text)::text AS bbox        
    FROM
        ada_archaeologie_pub_v1.public_flaechenfundstelle_siedlungsgebiet
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
