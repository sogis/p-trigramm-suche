DROP TABLE IF EXISTS public.layer;

CREATE TABLE public.layer (
    ident varchar(255) NOT NULL, -- Identifier. Bsp. ch.so.agi.gemeindegrenzen
	display varchar(255) NOT NULL, -- Anzeige des Layers im Suchresultat (Titel)
	layer_type varchar(255) NOT NULL,
	dset_children text NULL, -- Json Array der Kinder des Layers, mit jeweils ident und display. Null bei kinderlosen Ebenen.
	has_dset_info bool NOT NULL, -- Sind Metainformationen vorhanden? (i)-Knopf
	search_1 text NOT NULL, -- Suchindex Prio 1
	search_2 text NOT NULL, -- Suchindex Prio 2
	search_3 text NOT NULL, -- Suchindex Prio 3
	is_bg_map bool NOT NULL -- Ist der layer eine Background-Map? 
);