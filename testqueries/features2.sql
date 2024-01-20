WITH

query_words AS (
  SELECT 
    *
  FROM (
    VALUES ('solo', 'istra')
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
)
  
SELECT 
  * 
FROM
  query
WHERE 
    dataset_id IN (7)
  AND 
    sml1 > 0
  AND 
    sml2 > 0
ORDER BY 
  sml1 + sml2 DESC
LIMIT 
  50
;