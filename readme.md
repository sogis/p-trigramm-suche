# Schritte

## Import Features

Adressen aus geopackage mittels QGIS Database-Manager in data db importiert.

## Import Layers

Aus der Simi-View solr_layer_base2_v. Entspricht solr_layer_base_v, bis auf das angepasste CTE solr_record:

        solr_record AS (
        SELECT 
            json_build_array(dp_typ, identifier::TEXT)::text AS id,
            concat_ws(', ', title, synonyms) AS search_1_stem,
            concat_ws(', ', description, amt_kurz, amt_name, keywords, titles_c, synonyms_c) AS search_2_stem,
            concat_ws(', ', keywords_c, description_c) AS search_3_stem,
            title AS display,
            json_arr::text AS dset_children,
            dprod_has_info AS dset_info,
            CASE
            WHEN identifier IN ('ch.so.agi.hintergrundkarte_sw','ch.so.agi.hintergrundkarte_farbig','ch.so.agi.hintergrundkarte_ortho') THEN 'background'
            ELSE 'foreground'
            END AS facet
        FROM 
            dp_published dp
        LEFT JOIN
            prodlist_children_bgkorr c ON dp.dp_id = c.pl_id
        JOIN
            dp_amt a ON dp.dp_id = a.dp_id
        )

