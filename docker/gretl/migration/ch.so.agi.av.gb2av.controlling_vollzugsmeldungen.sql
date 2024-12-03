WITH
index_base AS (
    SELECT
        'ch.so.agi.av.gb2av.controlling_vollzugsmeldungen'::text AS subclass,
        t_id AS id_in_class,
        concat(mutationsnummer, ' / ', nbident, ' (Mut.-Nr. Vollzugsmeldung)') AS displaytext,
        concat(mutationsnummer, ' ', nbident) AS part_1,
        av_beschreibung::text AS part_3,
        (st_asgeojson(st_envelope(perimeter), 0, 1)::json -> 'bbox'::text)::text AS bbox
    FROM
        agi_gb2av_controlling_pub.controlling_gb2av_vollzugsmeldung_delta
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