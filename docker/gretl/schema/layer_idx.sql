CREATE INDEX idx_layer_index_1 ON layer USING GIN (index_1 gin_trgm_ops);
CREATE INDEX idx_layer_index_2 ON layer USING GIN (index_2 gin_trgm_ops);
CREATE INDEX idx_layer_index_3 ON layer USING GIN (index_3 gin_trgm_ops);

ANALYZE;