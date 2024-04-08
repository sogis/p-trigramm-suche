DROP TABLE IF EXISTS public.feature;

CREATE TABLE public.feature (    
    feat_id varchar(255) NOT NULL, -- Innerhalb Layer eindeutige und stabile ID des Feature (z.B. t_ili_id)
    feat_id_quoted boolean NOT NULL, -- Muss die Feature-ID beim Dataservice mit Hochkomma übergeben werden?
    feat_bbox varchar(255) NOT NULL, -- bbox des Feature gemäss Geojson-Spezifikation. Bei Punktobjekten können daraus einfach die Koordinaten abgeleitet werden.
	layer_ident varchar(255) NOT NULL, -- Identifier des Layers (Bsp. ch.so.agi.gemeindegrenzen)
    display varchar(255) NOT NULL, -- Anzeige des Feature im Suchresultat
	searchstr text NOT NULL -- Trigram indexierte Zeichenfolge, über welche das Feature gesucht wird
);