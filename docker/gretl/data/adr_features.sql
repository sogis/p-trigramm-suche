WITH 

adr_concat AS (
  SELECT 
    concat_ws(
      ' ', 
      lower(plz::text), 
      lower(ortschaft), 
      lower(strassenname), 
      lower(hausnummer)
    ) AS indexed
  FROM 
    public.adr 
)

SELECT indexed, 1 AS dataset_id FROM adr_concat
UNION ALL 
SELECT indexed, 2 AS dataset_id FROM adr_concat
UNION ALL 
SELECT indexed, 3 AS dataset_id FROM adr_concat
UNION ALL 
SELECT indexed, 4 AS dataset_id FROM adr_concat
UNION ALL 
SELECT indexed, 5 AS dataset_id FROM adr_concat
UNION ALL 
SELECT indexed, 6 AS dataset_id FROM adr_concat
UNION ALL 
SELECT indexed, 7 AS dataset_id FROM adr_concat
UNION ALL 
SELECT indexed, 8 AS dataset_id FROM adr_concat
UNION ALL 
SELECT indexed, 9 AS dataset_id FROM adr_concat
UNION ALL 
SELECT indexed, 10 AS dataset_id FROM adr_concat
;