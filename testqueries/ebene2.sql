WITH

query_term AS (
  SELECT 
    *
  FROM (
    VALUES ('gefahr', 'wasser')
  ) t(t1, t2)
),

query AS (
  SELECT 
    anzeige,
    coalesce(similarity(t1, suchbegriffe_p1), 0) AS sml_t1_i1,
    coalesce(similarity(t1, suchbegriffe_p2), 0) AS sml_t1_i2,
    coalesce(similarity(t1, suchbegriffe_p3), 0) AS sml_t1_i3,
    coalesce(similarity(t2, suchbegriffe_p1), 0) AS sml_t2_i1,
    coalesce(similarity(t2, suchbegriffe_p2), 0) AS sml_t2_i2,
    coalesce(similarity(t2, suchbegriffe_p3), 0) AS sml_t2_i3
  FROM 
    agi_suchindex_v1.ebene,
    query_term
  WHERE 
    ( -- t1
        (suchbegriffe_p1 LIKE '%' || t1 || '%' AND similarity(t1, suchbegriffe_p1)  > 0)
      OR
        (suchbegriffe_p2 LIKE '%' || t1 || '%' AND similarity(t1, suchbegriffe_p2)  > 0)
      OR
        (suchbegriffe_p3 LIKE '%' || t1 || '%' AND similarity(t1, suchbegriffe_p3)  > 0)
    )
    AND
    ( -- t2
        (suchbegriffe_p1 LIKE '%' || t2 || '%' AND similarity(t2, suchbegriffe_p1)  > 0)
      OR
        (suchbegriffe_p2 LIKE '%' || t2 || '%' AND similarity(t2, suchbegriffe_p2)  > 0)
      OR
        (suchbegriffe_p3 LIKE '%' || t2 || '%' AND similarity(t2, suchbegriffe_p3)  > 0)
    )
  LIMIT 
    200
)
  
SELECT 
  *,
  sml_t1_i1 * 100 + sml_t2_i1 * 100 + sml_t1_i2 * 10 + sml_t2_i2 * 10 + sml_t1_i3 + sml_t2_i3 AS sml_sum
FROM
  query
ORDER BY 
  sml_t1_i1 * 100 + sml_t2_i1 * 100 + sml_t1_i2 * 10 + sml_t2_i2 * 10 + sml_t1_i3 + sml_t2_i3 DESC
;