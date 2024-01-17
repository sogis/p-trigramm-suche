WITH 

adr_concat AS (
  SELECT 
    concat_ws(' ', plz, ortschaft, strassenname, hausnummer) AS adr_concat,
    fid AS doc_id
  FROM 
    public.adr
  LIMIT 10  
),

adr_words AS (
  SELECT 
    (unnest(
      to_tsvector('simple', adr_concat)
    )).lexeme AS word,
    doc_id
  FROM 
    adr_concat
)

SELECT 
  word,
  doc_id,
  1 AS dataset_id
FROM 
  adr_words
;