WITH

query_words AS (
  SELECT 
    lower(q1) AS q1
  FROM (
    VALUES ('osstr') -- hier teststring eingeben 
  ) t(q1)
),

query AS (
  SELECT 
    anzeige,
    layer_ident,
    similarity(q1, suchbegriffe) AS sml1
  FROM 
    agi_suchindex_v1.feature,
    query_words
  WHERE 
      suchbegriffe LIKE '%' || q1 || '%'
    AND 
      layer_ident IN ('ch.so.agi.gemeindegrenzen.3')
    AND 
      similarity(q1, suchbegriffe)  > 0
  LIMIT 
    200
)
  
SELECT 
  *
FROM
  query
ORDER BY 
  sml1 DESC
;