CREATE INDEX idx_layer_search_1 ON layer USING GIN (search_1 gin_trgm_ops);
CREATE INDEX idx_layer_search_2 ON layer USING GIN (search_2 gin_trgm_ops);
CREATE INDEX idx_layer_search_3 ON layer USING GIN (search_3 gin_trgm_ops);

ANALYZE;