WITH

query_words AS (
  SELECT 
    *
  FROM (
    VALUES ('moosa', '6')
  ) t(q1, q2)
),

query AS (
  SELECT 
    indexed,
    dataset_id,
    similarity(q1, indexed) AS sml1,
    similarity(q2, indexed) AS sml2
  FROM 
    features,
    query_words
  WHERE 
      indexed LIKE '%' || q1 || '%'
    AND
      indexed LIKE '%' || q2 || '%'
    AND 
      dataset_id IN (7)
    AND 
      similarity(q1, indexed)  > 0
    AND 
      similarity(q2, indexed)  > 0
  LIMIT 
    50
)
  
SELECT 
  * 
FROM
  query
ORDER BY 
  sml1 + sml2 DESC
;