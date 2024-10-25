WITH
index_base AS (
    SELECT
        'ch.so.afu.gewaesserschutz_lw.standort_ohne_erhebung'::text AS subclass,
        id AS id_in_class,
        concat(aname, ', ', plz_ort, ' | HDA: ', COALESCE(hda_nr::text, '-'::text), ' PID: ', COALESCE(gelan_pid::text, '-'::text), ' (Standort)') AS part_1,
        concat('Name Bewirtschafter ', name_bewirtschafter, ' STAO:', id) AS part_3,
        (st_asgeojson(st_envelope(geometrie), 0, 1)::json -> 'bbox'::text)::text AS bbox        
    FROM 
        afu_igel_pub_v1.igel_standort
    WHERE 
        aktuellsteerhebung IS NULL
)
SELECT
    part_1 AS anzeige,
    lower((part_1 || ' '::text) || part_3) AS suchbegriffe,
    subclass AS layer_ident,
    bbox as ausdehnung,
    id_in_class::text AS id_feature,
    'id'::text as id_spalten_name,
    'str:n'::text = 'str:y' as id_in_hochkomma 
FROM
    index_base
;
