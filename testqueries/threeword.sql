WITH

query_words AS (
  SELECT 
    *
  FROM (
    VALUES ('solo', '4', 'röti')
  ) t(q1, q2, q3)
),

q1 AS (
  SELECT 
    word,
    doc_id,
    dataset_id,
    similarity(q1, word) AS sml_rank
  FROM 
    words,
    query_words
  WHERE 
    word LIKE '%' || q1 || '%'
),

q2 AS (
  SELECT 
    word,
    doc_id,
    dataset_id,
    similarity(q2, word) AS sml_rank
  FROM 
    words,
    query_words
  WHERE 
    word LIKE '%' || q2 || '%'
),

q3 AS (
  SELECT 
    word,
    doc_id,
    dataset_id,
    similarity(q3, word) AS sml_rank
  FROM 
    words,
    query_words
  WHERE 
    word LIKE '%' || q3 || '%'
),

join_rank AS (
  SELECT 
    q1.doc_id,
    q1.dataset_id,
    q1.sml_rank + q2.sml_rank + q3.sml_rank AS sml_rank,
    q1.word AS q1_word,
    q2.word AS q2_word,
    q3.word AS q3_word
  FROM 
    q1
  JOIN 
    q2 ON q1.doc_id = q2.doc_id AND q1.dataset_id = q2.dataset_id
  JOIN 
    q3 ON q1.doc_id = q3.doc_id AND q1.dataset_id = q3.dataset_id
) 
  
SELECT 
  * 
FROM
  join_rank
ORDER BY 
  sml_rank DESC
LIMIT 
  50
;