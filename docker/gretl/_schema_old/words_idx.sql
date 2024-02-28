CREATE INDEX idx_words_word ON words USING GIN (word gin_trgm_ops);
--CREATE INDEX idx_words_word ON words USING GIST (word gist_trgm_ops); gin performt 3 mal besser wie gist
CREATE INDEX idx_words_doc ON words (doc_id);
CREATE INDEX idx_words_dataset ON words (dataset_id);

ANALYZE;