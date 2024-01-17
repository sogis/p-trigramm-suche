CREATE TABLE public.word (
    dataset_id int8 NOT NULL, -- dataset(adresse, grundstück, ...) zu welchem das dokument gehört
	doc_id int8 NOT NULL, -- dokument, zu welchem das wort gehört
	word varchar(100)) NOT NULL
);