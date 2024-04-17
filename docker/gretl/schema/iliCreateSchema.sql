CREATE SEQUENCE agi_suchindex_v1.t_ili2db_seq;;
-- SO_AGI_Suchindex_20240415.Indexe.Feature
CREATE TABLE agi_suchindex_v1.feature (
  T_Id bigint PRIMARY KEY DEFAULT nextval('agi_suchindex_v1.t_ili2db_seq')
  ,T_Ili_Tid uuid NULL DEFAULT uuid_generate_v4()
  ,identifier varchar(255) NOT NULL
  ,id_in_hochkomma boolean NOT NULL
  ,layer_ident varchar(255) NOT NULL
  ,suchbegriffe text NOT NULL
  ,anzeige varchar(255) NOT NULL
  ,ausdehnung varchar(255) NULL
)
;
COMMENT ON TABLE agi_suchindex_v1.feature IS 'Gemeinsamer GDI-weiter Index aller suchbaren Features.
Bei Features ohne Geometrie ist das Attribut "Ausdehnung" null.';
COMMENT ON COLUMN agi_suchindex_v1.feature.identifier IS 'Innerhalb Layer eindeutige und stabile "ID" des Feature (z.B. t_ili_id)';
COMMENT ON COLUMN agi_suchindex_v1.feature.id_in_hochkomma IS 'Muss die Feature-ID dem Dataservice in Hochkomma übergeben werden?';
COMMENT ON COLUMN agi_suchindex_v1.feature.layer_ident IS 'Identifier des Layers (Bsp. ch.so.agi.gemeindegrenzen)';
COMMENT ON COLUMN agi_suchindex_v1.feature.suchbegriffe IS 'Trigram indexierte Begriffe, über welche das Feature gesucht wird';
COMMENT ON COLUMN agi_suchindex_v1.feature.anzeige IS 'Anzeige des Features im Suchresultat';
COMMENT ON COLUMN agi_suchindex_v1.feature.ausdehnung IS 'Ausdehnung notiert als Json-Array.
Gemäss Geojson-Spez für bbox, aber in EPSG:2056.
Beispiel: [2630403,1237579,2633431,1240412]';
-- SO_AGI_Suchindex_20240415.Indexe.Ebene
CREATE TABLE agi_suchindex_v1.ebene (
  T_Id bigint PRIMARY KEY DEFAULT nextval('agi_suchindex_v1.t_ili2db_seq')
  ,T_Ili_Tid uuid NULL DEFAULT uuid_generate_v4()
  ,identifier varchar(255) NOT NULL
  ,anzeige varchar(255) NOT NULL
  ,unter_ebenen text NULL
  ,ist_hintergrund boolean NOT NULL
  ,hat_beschreibung boolean NOT NULL
  ,suchbegriffe_p1 text NOT NULL
  ,suchbegriffe_p2 text NOT NULL
  ,suchbegriffe_p3 text NOT NULL
)
;
COMMENT ON TABLE agi_suchindex_v1.ebene IS 'Gemeinsamer GDI-weiter Index aller suchbaren Features.
Bei Features ohne Geometrie ist das Attribut "Ausdehnung" null.';
COMMENT ON COLUMN agi_suchindex_v1.ebene.identifier IS 'Identifier. Bsp. ch.so.agi.gemeindegrenzen';
COMMENT ON COLUMN agi_suchindex_v1.ebene.anzeige IS 'Anzeige der Ebene im Suchresultat (Titel der Ebene)';
COMMENT ON COLUMN agi_suchindex_v1.ebene.unter_ebenen IS 'Bei Ebenengruppen: Json-Array der Kind-Ebenen.
NULL Ebenen ohne explizite Unter-Ebenen (Datasetview, Facadelayer)';
COMMENT ON COLUMN agi_suchindex_v1.ebene.ist_hintergrund IS 'Ist die Ebene im Web GIS nicht angebotene eine Hintegrundebene?';
COMMENT ON COLUMN agi_suchindex_v1.ebene.hat_beschreibung IS 'Falsch, falls die Ebene (noch) nicht beschrieben ist.';
COMMENT ON COLUMN agi_suchindex_v1.ebene.suchbegriffe_p1 IS 'Trigram indexierte Begriffe der Priorität 1';
COMMENT ON COLUMN agi_suchindex_v1.ebene.suchbegriffe_p2 IS 'Trigram indexierte Begriffe der Priorität 2';
COMMENT ON COLUMN agi_suchindex_v1.ebene.suchbegriffe_p3 IS 'Trigram indexierte Begriffe der Priorität 3';
CREATE TABLE agi_suchindex_v1.T_ILI2DB_BASKET (
  T_Id bigint PRIMARY KEY
  ,dataset bigint NULL
  ,topic varchar(200) NOT NULL
  ,T_Ili_Tid varchar(200) NULL
  ,attachmentKey varchar(200) NOT NULL
  ,domains varchar(1024) NULL
)
;
CREATE TABLE agi_suchindex_v1.T_ILI2DB_DATASET (
  T_Id bigint PRIMARY KEY
  ,datasetName varchar(200) NULL
)
;
CREATE TABLE agi_suchindex_v1.T_ILI2DB_INHERITANCE (
  thisClass varchar(1024) PRIMARY KEY
  ,baseClass varchar(1024) NULL
)
;
CREATE TABLE agi_suchindex_v1.T_ILI2DB_SETTINGS (
  tag varchar(60) PRIMARY KEY
  ,setting varchar(8000) NULL
)
;
CREATE TABLE agi_suchindex_v1.T_ILI2DB_TRAFO (
  iliname varchar(1024) NOT NULL
  ,tag varchar(1024) NOT NULL
  ,setting varchar(1024) NOT NULL
)
;
CREATE TABLE agi_suchindex_v1.T_ILI2DB_MODEL (
  filename varchar(250) NOT NULL
  ,iliversion varchar(3) NOT NULL
  ,modelName text NOT NULL
  ,content text NOT NULL
  ,importDate timestamp NOT NULL
  ,PRIMARY KEY (modelName,iliversion)
)
;
CREATE TABLE agi_suchindex_v1.T_ILI2DB_CLASSNAME (
  IliName varchar(1024) PRIMARY KEY
  ,SqlName varchar(1024) NOT NULL
)
;
CREATE TABLE agi_suchindex_v1.T_ILI2DB_ATTRNAME (
  IliName varchar(1024) NOT NULL
  ,SqlName varchar(1024) NOT NULL
  ,ColOwner varchar(1024) NOT NULL
  ,Target varchar(1024) NULL
  ,PRIMARY KEY (SqlName,ColOwner)
)
;
CREATE TABLE agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (
  tablename varchar(255) NOT NULL
  ,subtype varchar(255) NULL
  ,columnname varchar(255) NOT NULL
  ,tag varchar(1024) NOT NULL
  ,setting varchar(8000) NOT NULL
)
;
CREATE TABLE agi_suchindex_v1.T_ILI2DB_TABLE_PROP (
  tablename varchar(255) NOT NULL
  ,tag varchar(1024) NOT NULL
  ,setting varchar(8000) NOT NULL
)
;
CREATE UNIQUE INDEX T_ILI2DB_DATASET_datasetName_key ON agi_suchindex_v1.T_ILI2DB_DATASET (datasetName)
;
CREATE UNIQUE INDEX T_ILI2DB_MODEL_modelName_iliversion_key ON agi_suchindex_v1.T_ILI2DB_MODEL (modelName,iliversion)
;
CREATE UNIQUE INDEX T_ILI2DB_ATTRNAME_SqlName_ColOwner_key ON agi_suchindex_v1.T_ILI2DB_ATTRNAME (SqlName,ColOwner)
;
INSERT INTO agi_suchindex_v1.T_ILI2DB_CLASSNAME (IliName,SqlName) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Feature','feature');
INSERT INTO agi_suchindex_v1.T_ILI2DB_CLASSNAME (IliName,SqlName) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene','ebene');
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Feature.Layer_Ident','layer_ident','feature',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene.Anzeige','anzeige','ebene',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Feature.Ausdehnung','ausdehnung','feature',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene.Identifier','identifier','ebene',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene.Ist_Hintergrund','ist_hintergrund','ebene',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene.Unter_Ebenen','unter_ebenen','ebene',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Feature.Suchbegriffe','suchbegriffe','feature',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene.Hat_Beschreibung','hat_beschreibung','ebene',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene.Suchbegriffe_P3','suchbegriffe_p3','ebene',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene.Suchbegriffe_P2','suchbegriffe_p2','ebene',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene.Suchbegriffe_P1','suchbegriffe_p1','ebene',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Feature.Identifier','identifier','feature',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Feature.ID_in_Hochkomma','id_in_hochkomma','feature',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_ATTRNAME (IliName,SqlName,ColOwner,Target) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Feature.Anzeige','anzeige','feature',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_TRAFO (iliname,tag,setting) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Feature','ch.ehi.ili2db.inheritance','newClass');
INSERT INTO agi_suchindex_v1.T_ILI2DB_TRAFO (iliname,tag,setting) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene','ch.ehi.ili2db.inheritance','newClass');
INSERT INTO agi_suchindex_v1.T_ILI2DB_INHERITANCE (thisClass,baseClass) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Feature',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_INHERITANCE (thisClass,baseClass) VALUES ('SO_AGI_Suchindex_20240415.Indexe.Ebene',NULL);
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('feature',NULL,'id_in_hochkomma','ch.ehi.ili2db.typeKind','BOOLEAN');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'suchbegriffe_p2','ch.ehi.ili2db.textKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'suchbegriffe_p2','ch.ehi.ili2db.typeKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'hat_beschreibung','ch.ehi.ili2db.typeKind','BOOLEAN');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'suchbegriffe_p3','ch.ehi.ili2db.textKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'suchbegriffe_p3','ch.ehi.ili2db.typeKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'suchbegriffe_p1','ch.ehi.ili2db.textKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'suchbegriffe_p1','ch.ehi.ili2db.typeKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene','ebene','ist_hintergrund','ch.ehi.ili2db.enumDomain','INTERLIS.BOOLEAN');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('feature','feature','id_in_hochkomma','ch.ehi.ili2db.enumDomain','INTERLIS.BOOLEAN');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'identifier','ch.ehi.ili2db.typeKind','TEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('feature',NULL,'T_Ili_Tid','ch.ehi.ili2db.oidDomain','INTERLIS.UUIDOID');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene','ebene','hat_beschreibung','ch.ehi.ili2db.enumDomain','INTERLIS.BOOLEAN');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('feature',NULL,'identifier','ch.ehi.ili2db.typeKind','TEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'T_Ili_Tid','ch.ehi.ili2db.oidDomain','INTERLIS.UUIDOID');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'unter_ebenen','ch.ehi.ili2db.textKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'unter_ebenen','ch.ehi.ili2db.typeKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('feature',NULL,'ausdehnung','ch.ehi.ili2db.typeKind','TEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'ist_hintergrund','ch.ehi.ili2db.typeKind','BOOLEAN');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('ebene',NULL,'anzeige','ch.ehi.ili2db.typeKind','TEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('feature',NULL,'layer_ident','ch.ehi.ili2db.typeKind','TEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('feature',NULL,'suchbegriffe','ch.ehi.ili2db.textKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('feature',NULL,'suchbegriffe','ch.ehi.ili2db.typeKind','MTEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_COLUMN_PROP (tablename,subtype,columnname,tag,setting) VALUES ('feature',NULL,'anzeige','ch.ehi.ili2db.typeKind','TEXT');
INSERT INTO agi_suchindex_v1.T_ILI2DB_TABLE_PROP (tablename,tag,setting) VALUES ('ebene','ch.ehi.ili2db.tableKind','CLASS');
INSERT INTO agi_suchindex_v1.T_ILI2DB_TABLE_PROP (tablename,tag,setting) VALUES ('feature','ch.ehi.ili2db.tableKind','CLASS');
INSERT INTO agi_suchindex_v1.T_ILI2DB_MODEL (filename,iliversion,modelName,content,importDate) VALUES ('SO_AGI_Suchindex_20240415.ili','2.3','SO_AGI_Suchindex_20240415','INTERLIS 2.3;

/** ! 
 * !! Definiert das Schema der Index-Tabellen für den Such-Service.
 * !! Json-Felder wurden der einfachheit halber als Strings modelliert.
 * !!------------------------------------------------------------------------------
 * !! Version    | wer | Änderung
 * !!------------------------------------------------------------------------------
 * !! 2024-04-15 | Jek | Erstellt
 * !!==============================================================================
 */
!!@ technicalContact=mailto:agi@so.ch
MODEL SO_AGI_Suchindex_20240415 (de)
AT "http://www.geo.so.ch/models/AGI"
VERSION "2024-04-15"  =

  TOPIC Indexe =
    OID AS INTERLIS.UUIDOID;

    DOMAIN

    /** Gemeinsamer GDI-weiter Index aller suchbaren Features.
     *  Bei Features ohne Geometrie ist das Attribut "Ausdehnung" null.
     */
    CLASS Feature =
      /** Innerhalb Layer eindeutige und stabile "ID" des Feature (z.B. t_ili_id)
      */
      Identifier : MANDATORY TEXT*255;

      /** Muss die Feature-ID dem Dataservice in Hochkomma übergeben werden?
      */
      ID_in_Hochkomma : MANDATORY BOOLEAN;

      /** Identifier des Layers (Bsp. ch.so.agi.gemeindegrenzen)
      */
      Layer_Ident : MANDATORY TEXT*255;

      /** Trigram indexierte Begriffe, über welche das Feature gesucht wird
      */
      Suchbegriffe : MANDATORY MTEXT;

      /** Anzeige des Features im Suchresultat
      */
      Anzeige : MANDATORY TEXT*255;

      /** Ausdehnung notiert als Json-Array.
      * Gemäss Geojson-Spez für bbox, aber in EPSG:2056. 
      * Beispiel: [2630403,1237579,2633431,1240412]
      */
      Ausdehnung : TEXT*255;
      
    END Feature;

        /** Gemeinsamer GDI-weiter Index aller suchbaren Features.
     *  Bei Features ohne Geometrie ist das Attribut "Ausdehnung" null.
     */
    CLASS Ebene =
      /** Identifier. Bsp. ch.so.agi.gemeindegrenzen
      */
      Identifier : MANDATORY TEXT*255;

      /** Anzeige der Ebene im Suchresultat (Titel der Ebene)
      */
      Anzeige : MANDATORY TEXT*255;

      /** Bei Ebenengruppen: Json-Array der Kind-Ebenen.
      * NULL Ebenen ohne explizite Unter-Ebenen (Datasetview, Facadelayer)
      */
      Unter_Ebenen : MTEXT;

      /** Ist die Ebene im Web GIS nicht angebotene eine Hintegrundebene?
      */
      Ist_Hintergrund :  MANDATORY BOOLEAN;

      /** Falsch, falls die Ebene (noch) nicht beschrieben ist.
      */
      Hat_Beschreibung : MANDATORY BOOLEAN;

      /** Trigram indexierte Begriffe der Priorität 1
      */
      Suchbegriffe_P1 : MANDATORY MTEXT;

      /** Trigram indexierte Begriffe der Priorität 2
      */
      Suchbegriffe_P2 : MANDATORY MTEXT;

      /** Trigram indexierte Begriffe der Priorität 3
      */
      Suchbegriffe_P3 : MANDATORY MTEXT;
      
    END Ebene;

  END Indexe;

END SO_AGI_Suchindex_20240415.','2024-04-17 14:18:40.839');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.interlis.ili2c.ilidirs','/home/gradle/project/gretl/schema');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.arrayTrafo','coalesce');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.localisedTrafo','expand');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.jsonTrafo','coalesce');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.sender','ili2pg-4.9.1-edeb4647bbdea52480a419b5aa605d425fcbd5df');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.defaultSrsAuthority','EPSG');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.maxSqlNameLength','60');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.uuidDefaultValue','uuid_generate_v4()');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.inheritanceTrafo','smart1');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.catalogueRefTrafo','coalesce');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.multiPointTrafo','coalesce');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.multiLineTrafo','coalesce');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.multiSurfaceTrafo','coalesce');
INSERT INTO agi_suchindex_v1.T_ILI2DB_SETTINGS (tag,setting) VALUES ('ch.ehi.ili2db.multilingualTrafo','expand');
