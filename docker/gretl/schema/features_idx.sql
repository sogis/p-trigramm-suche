CREATE INDEX idx_features_indexed ON features USING GIN (indexed gin_trgm_ops);
CREATE INDEX idx_features_dataset ON features (dataset_id);

ANALYZE;