WITH
index_base AS (
    SELECT 
        'ch.so.agi.av.gebaeudeadressen.gebaeudeeingaenge'::text AS subclass,
        t_id AS id_in_class,
        concat(strassenname, ' ', hausnummer, ', ', plz, ' ', ortschaft, ' (Adresse)') AS displaytext,
        concat(strassenname, ' ', hausnummer, ' ', plz, ' ', ortschaft) AS part_1,
        'Adresse'::text AS part_3,
        (st_asgeojson(st_envelope(lage), 0, 1)::json -> 'bbox'::text)::text AS bbox  
    FROM 
        agi_mopublic_pub.mopublic_gebaeudeadresse
    WHERE 
        strassenname IS NOT NULL AND hausnummer IS NOT NULL AND ist_offizielle_bezeichnung IS TRUE
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
