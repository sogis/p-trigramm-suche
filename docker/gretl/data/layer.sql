SELECT 
  trim('" ' FROM (string_to_array(trim('[]' FROM id), ','))[2]) AS ident,
  display,
  trim('" ' FROM (string_to_array(trim('[]' FROM id), ','))[1]) AS layer_type,
  dset_info AS has_dset_info,
  (facet = 'background') AS is_bg_map,
  lower(search_1_stem) AS index_1,
  lower(search_2_stem) AS index_2,
  lower(search_3_stem) AS index_3
FROM 
  public.solr_layer_base2_v
;