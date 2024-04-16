SELECT 
    trim('" ' FROM (string_to_array(trim('[]' FROM id), ','))[2]) AS identifier,
    display AS anzeige,
    dset_children AS unter_ebenen,
    (facet = 'background') AS ist_hintergrund,
    dset_info as hat_beschreibung,
    lower(search_1_stem) as suchbegriffe_p1,
    lower(search_2_stem) as suchbegriffe_p2,
    lower(search_3_stem) as suchbegriffe_p3
FROM public.solr_layer_base_v
;