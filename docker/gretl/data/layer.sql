SELECT 
  trim('" ' FROM (string_to_array(trim('[]' FROM id), ','))[2]) AS ident,
  display,
  trim('" ' FROM (string_to_array(trim('[]' FROM id), ','))[1]) AS layer_type,
  dset_info AS has_dset_info,
  (facet = 'background') AS is_bg_map,
  search_1_stem AS search_1,
  search_2_stem AS search_2,
  search_3_stem AS search_3
FROM 
  public.solr_layer_base_v
;