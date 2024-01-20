WITH

query_words AS (
  SELECT 
    *
  FROM (
    VALUES ('tan')
  ) t(q1)
),

query AS (
  SELECT 
    indexed,
    dataset_id,
    similarity(q1, indexed) AS sml1
  FROM 
    features,
    query_words
  WHERE 
      indexed LIKE '%' || q1 || '%'
    AND 
      dataset_id IN (7)
    AND 
      similarity(q1, indexed)  > 0
  LIMIT 
    50
)
  
SELECT 
  * 
FROM
  query
ORDER BY 
  sml1 DESC
;