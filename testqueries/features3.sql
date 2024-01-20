WITH

query_words AS (
  SELECT 
    *
  FROM (
    VALUES ('winz', 'moos', '6')
  ) t(q1, q2, q3)
),

query AS (
  SELECT 
    indexed,
    dataset_id,
    similarity(q1, indexed) AS sml1,
    similarity(q2, indexed) AS sml2,
    similarity(q3, indexed) AS sml3
  FROM 
    features,
    query_words
  WHERE 
      indexed LIKE '%' || q1 || '%'
    AND
      indexed LIKE '%' || q2 || '%'
    AND
      indexed LIKE '%' || q3 || '%'
    AND 
      dataset_id IN (7)
    AND 
      similarity(q1, indexed)  > 0
    AND 
      similarity(q2, indexed)  > 0
    AND 
      similarity(q3, indexed)  > 0
  LIMIT 
    50
)
  
SELECT 
  * 
FROM
  query
ORDER BY 
  sml1 + sml2 + sml3 DESC
;