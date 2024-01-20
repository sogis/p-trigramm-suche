WITH 

adr_concat AS (
  SELECT 
    concat_ws(' ', plz, ortschaft, strassenname, hausnummer) AS adr_concat,
    fid AS doc_id
  FROM 
    public.adr 
),

adr_words AS (
  SELECT 
  SELECT 
    (unnest(
      to_tsvector('simple', adr_concat)
    )).lexeme AS word,
    doc_id
  FROM 
    adr_concat
)

SELECT word, doc_id, 1 AS dataset_id FROM adr_words
UNION ALL 
SELECT word, doc_id, 2 AS dataset_id FROM adr_words
UNION ALL 
SELECT word, doc_id, 3 AS dataset_id FROM adr_words
UNION ALL 
SELECT word, doc_id, 4 AS dataset_id FROM adr_words
UNION ALL 
SELECT word, doc_id, 5 AS dataset_id FROM adr_words
UNION ALL 
SELECT word, doc_id, 6 AS dataset_id FROM adr_words
UNION ALL 
SELECT word, doc_id, 7 AS dataset_id FROM adr_words
UNION ALL 
SELECT word, doc_id, 8 AS dataset_id FROM adr_words
UNION ALL 
SELECT word, doc_id, 9 AS dataset_id FROM adr_words
UNION ALL 
SELECT word, doc_id, 10 AS dataset_id FROM adr_words
;