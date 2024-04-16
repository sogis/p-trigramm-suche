WITH

query_words AS (
  SELECT 
    lower(q1) AS q1,
    lower(q2) AS q2
  FROM (
    VALUES ('osstr', '6') -- hier teststrings eingeben 
  ) t(q1, q2)
),

query AS (
  SELECT 
    anzeige,
    layer_ident,
    similarity(q1, suchbegriffe) AS sml1,
    similarity(q2, suchbegriffe) AS sml2
  FROM 
    agi_suchindex_v1.feature,
    query_words
  WHERE 
      suchbegriffe LIKE '%' || q1 || '%'
    AND
      suchbegriffe LIKE '%' || q2 || '%'
    AND 
      layer_ident IN ('ch.so.agi.gemeindegrenzen.3')
    AND 
      similarity(q1, suchbegriffe)  > 0
    AND 
      similarity(q2, suchbegriffe)  > 0
  LIMIT 
    200
)
  
SELECT 
  *,
  sml1 + sml2 AS sml_sum
FROM
  query
ORDER BY 
  sml1 + sml2 DESC
;