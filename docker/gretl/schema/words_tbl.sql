DROP TABLE IF EXISTS public.words;

CREATE TABLE public.words (
    dataset_id int4 NOT NULL, -- dataset(adresse, grundstück, ...) zu welchem das dokument gehört
	doc_id int4 NOT NULL, -- dokument, zu welchem das wort gehört
	word text NOT NULL
);