WITH

query_term AS (
  SELECT 
    *
  FROM (
    VALUES ('emme', 'wasser')
  ) t(t1, t2)
),

query AS (
  SELECT 
    display,
    ident,
    coalesce(similarity(t1, index_1), 0) AS sml_t1_i1,
    coalesce(similarity(t1, index_2), 0) AS sml_t1_i2,
    coalesce(similarity(t1, index_3), 0) AS sml_t1_i3,
    coalesce(similarity(t2, index_1), 0) AS sml_t2_i1,
    coalesce(similarity(t2, index_2), 0) AS sml_t2_i2,
    coalesce(similarity(t2, index_3), 0) AS sml_t2_i3
  FROM 
    layer,
    query_term
  WHERE 
    ( -- t1
        (index_1 LIKE '%' || t1 || '%' AND similarity(t1, index_1)  > 0)
      OR
        (index_2 LIKE '%' || t1 || '%' AND similarity(t1, index_2)  > 0)
      OR
        (index_3 LIKE '%' || t1 || '%' AND similarity(t1, index_3)  > 0)
    )
    AND
    ( -- t2
        (index_1 LIKE '%' || t2 || '%' AND similarity(t2, index_1)  > 0)
      OR
        (index_2 LIKE '%' || t2 || '%' AND similarity(t2, index_2)  > 0)
      OR
        (index_3 LIKE '%' || t2 || '%' AND similarity(t2, index_3)  > 0)
    )
  LIMIT 
    50
)
  
SELECT 
  * 
FROM
  query
ORDER BY 
  sml_t1_i1 * 100 + sml_t2_i1 * 100 + sml_t1_i2 * 10 + sml_t2_i2 * 10 + sml_t1_i3 + sml_t2_i3 DESC
;