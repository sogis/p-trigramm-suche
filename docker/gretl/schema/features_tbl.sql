DROP TABLE IF EXISTS public.features;

CREATE TABLE public.features (
    dataset_id int4 NOT NULL, -- dataset(adresse, grundstück, ...) zu welchem das dokument gehört
	indexed text NOT NULL
);