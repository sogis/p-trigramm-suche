WITH
index_base AS (
    SELECT 'ch.so.agi.av.grundstuecke.rechtskraeftig'::text AS subclass,
    grundstueck.t_id AS id_in_class,
    grundstueck.nummer AS name_in_class,
        CASE
            WHEN grundstueck.grundbuch::text = grundstueck.gemeinde::text THEN
            CASE
                WHEN grundstueck.art_txt::text = 'SelbstRecht.Baurecht'::text THEN concat('GB-Nr: ', grundstueck.nummer, ' - ', grundstueck.grundbuch, ' (Baurecht)')
                WHEN grundstueck.art_txt::text = 'SelbstRecht.Quellenrecht'::text THEN concat('GB-Nr: ', grundstueck.nummer, ' - ', grundstueck.grundbuch, ' (Quellenrecht)')
                ELSE concat('GB-Nr: ', grundstueck.nummer, ' - ', grundstueck.grundbuch, ' (Liegenschaft)')
            END
            ELSE
            CASE
                WHEN grundstueck.art_txt::text = 'SelbstRecht.Baurecht'::text THEN concat('GB-Nr: ', grundstueck.nummer, ' - ', grundstueck.grundbuch, ' [', grundstueck.gemeinde, '] (Baurecht)')
                WHEN grundstueck.art_txt::text = 'SelbstRecht.Quellenrecht'::text THEN concat('GB-Nr: ', grundstueck.nummer, ' - ', grundstueck.grundbuch, ' [', grundstueck.gemeinde, '] (Quellenrecht)')
                ELSE concat('GB-Nr: ', grundstueck.nummer, ' - ', grundstueck.grundbuch, ' [', grundstueck.gemeinde, '] (Liegenschaft)')
            END
        END AS displaytext,
        CASE
            WHEN grundstueck.grundbuch::text = grundstueck.gemeinde::text THEN concat(grundstueck.nummer, ' ', grundstueck.grundbuch)
            ELSE concat(grundstueck.nummer, ' ', grundstueck.grundbuch, ' ', grundstueck.gemeinde)
        END AS part_1,
    (st_asgeojson(st_envelope(grundstueck.geometrie), 0, 1)::json -> 'bbox'::text)::text AS bbox,
        CASE
            WHEN grundstueck.art_txt::text = 'SelbstRecht.Baurecht'::text THEN concat('GB-Nr gbnr Grundstück SDR Baurecht')
            WHEN grundstueck.art_txt::text = 'SelbstRecht.Quellenrecht'::text THEN concat('GB-Nr gbnr Grundstück Quellenrecht')
            ELSE concat('GB-Nr gbnr Grundstück Parzelle Liegenschaft')
        END AS part_3
    FROM agi_mopublic_pub.mopublic_grundstueck grundstueck
    UNION ALL
    SELECT 'ch.so.agi.av.grundstuecke.rechtskraeftig'::text AS subclass,
    grundstueck.t_id AS id_in_class,
    grundstueck.egrid AS name_in_class,
        CASE
            WHEN grundstueck.art_txt::text = 'SelbstRecht.Baurecht'::text THEN concat('EGRID: ', grundstueck.egrid, ' (Baurecht)')
            WHEN grundstueck.art_txt::text = 'SelbstRecht.Quellenrecht'::text THEN concat('EGRID: ', grundstueck.egrid, ' (Quellenrecht)')
            ELSE concat('EGRID: ', grundstueck.egrid, ' (Liegenschaft)')
        END AS displaytext,
    grundstueck.egrid AS part_1,
    (st_asgeojson(st_envelope(grundstueck.geometrie), 0, 1)::json -> 'bbox'::text)::text AS bbox,
        CASE
            WHEN grundstueck.art_txt::text = 'SelbstRecht.Baurecht'::text THEN concat('Baurecht EGRID')
            WHEN grundstueck.art_txt::text = 'SelbstRecht.Quellenrecht'::text THEN concat('Quellenrecht EGRID')
            ELSE concat('Liegenschaft EGRID')
        END AS part_3
    FROM agi_mopublic_pub.mopublic_grundstueck grundstueck
    WHERE grundstueck.egrid IS NOT NULL
)
SELECT
    displaytext AS anzeige,
    lower((part_1 || ' '::text) || index_base.part_3) AS suchbegriffe,
    subclass AS layer_ident,
    bbox as ausdehnung,
    array_to_json(ARRAY[subclass, id_in_class::text, name_in_class::text])::text AS id_feature,
    't_id'::text as id_spalten_name,
    'str:n'::text = 'str:y' as id_in_hochkomma 
FROM
    index_base
;
