CREATE INDEX idx_feature_search ON features USING GIN (searchstr gin_trgm_ops);

ANALYZE;