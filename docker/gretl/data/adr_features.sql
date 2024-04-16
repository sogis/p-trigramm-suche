WITH 

adr_index AS (
    SELECT 
        concat_ws(
            ' ', 
            lower(plz::text), 
            lower(ortschaft), 
            lower(strassenname), 
            lower(hausnummer)
        ) AS suchbegriffe,
        concat_ws(
            ' ', 
            lower(plz::text), 
            lower(ortschaft), 
            lower(strassenname), 
            lower(hausnummer)
        ) AS anzeige,
        TRUE AS id_in_hochkomma,
        'ch.so.agi.gemeindegrenzen' AS layer_ident,
        jsonb_extract_path(
            (st_asgeojson(st_envelope(lage), 0, 1))::jsonb,
            'bbox'
        ) AS ausdehnung,
        t_ili_tid,
        t_ili_tid AS identifier
    FROM 
        agi_mopublic_pub.mopublic_gebaeudeadresse
)

SELECT concat_ws('.', layer_ident, '1') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
UNION ALL
SELECT concat_ws('.', layer_ident, '2') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
UNION ALL
SELECT concat_ws('.', layer_ident, '3') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
UNION ALL
SELECT concat_ws('.', layer_ident, '4') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
UNION ALL
SELECT concat_ws('.', layer_ident, '5') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
UNION ALL
SELECT concat_ws('.', layer_ident, '6') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
UNION ALL
SELECT concat_ws('.', layer_ident, '7') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
UNION ALL
SELECT concat_ws('.', layer_ident, '8') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
UNION ALL
SELECT concat_ws('.', layer_ident, '9') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
UNION ALL
SELECT concat_ws('.', layer_ident, '10') AS layer_ident, t_ili_tid, identifier, id_in_hochkomma, suchbegriffe, anzeige, ausdehnung FROM adr_index
;