WITH
index_base AS (
    SELECT
        'ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_hauptkategorien'::text AS subclass,
        t_id AS id_in_class,
        concat('GeoID: ', kultur_id, ' (Kultur)') AS displaytext,
        kultur_id AS part_1,
        'GeoID Kultur'::text AS part_3,
        (st_asgeojson(st_envelope(geometrie), 0, 1)::json -> 'bbox'::text)::text AS bbox
    FROM
        alw_landwirtschaft_tierhaltung_pub_v1.betrbsdttrktrdten_kultur_flaeche
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
