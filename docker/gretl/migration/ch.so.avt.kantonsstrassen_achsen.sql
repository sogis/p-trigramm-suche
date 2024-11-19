WITH
index_base AS (
    SELECT 
        'ch.so.avt.kantonsstrassen_achsen'::text AS subclass,
        achsenumme AS id_in_class,
        concat('Nr. ', achsenumme, ' (Kantonsstrasse Achse)') AS displaytext,
        achsenumme AS part_1,
        'Kantonsstrasse Nr'::text AS part_3,
        (st_asgeojson(st_envelope(st_collect(geometrie)), 0, 1)::json -> 'bbox'::text)::text AS bbox  
    FROM 
        avt_kantonsstrassen_pub.achse
    WHERE 
        achsenumme IS NOT NULL
    GROUP BY 
        achsenumme
)
SELECT
    displaytext AS anzeige,
    lower((part_1 || ' '::text) || index_base.part_3) AS suchbegriffe,
    subclass AS layer_ident,
    bbox as ausdehnung,
    id_in_class::text AS id_feature,
    'achsenumme'::text as id_spalten_name,
    'str:y'::text = 'str:y' as id_in_hochkomma 
FROM
    index_base
;
