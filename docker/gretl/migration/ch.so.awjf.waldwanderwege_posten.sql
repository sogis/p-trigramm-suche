WITH
index_base AS (
    SELECT
        'ch.so.awjf.waldwanderwege_posten'::text AS subclass,
        t_id AS id_in_class,
        concat(aname, ' (Waldwanderung Posten)') AS displaytext,
        aname AS part_1,
        'Waldwanderung Posten'::text AS part_3,
        (st_asgeojson(st_envelope(lage), 0, 1)::json -> 'bbox'::text)::text AS bbox
    FROM
        awjf_waldwanderwege_pub.waldwanderwege_posten
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
