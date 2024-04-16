CREATE INDEX IF NOT EXISTS idx_feature_trgm ON ${db_schema}.feature USING GIN (suchbegriffe gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_ebene_trgm_1 ON ${db_schema}.ebene USING GIN (suchbegriffe_p1 gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_ebene_trgm_2 ON ${db_schema}.ebene USING GIN (suchbegriffe_p2 gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_ebene_trgm_3 ON ${db_schema}.ebene USING GIN (suchbegriffe_p3 gin_trgm_ops);

ANALYZE;