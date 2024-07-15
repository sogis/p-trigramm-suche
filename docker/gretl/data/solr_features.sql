WITH 
solr_index AS (
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM ada_archaeologie_pub_v1.flaechenfundstellen_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM ada_archaeologie_pub_v1.punktfundstellen_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM ada_archaeologie_pub_v1.flaechenfundstellen_geschuetzt_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM afu_altlasten_pub_v2.belasteter_standort_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM afu_altlasten_restricted_pub_v1.belasteter_standort_altlast4web_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_igel_pub_v1.igel_standort_mit_erhebung_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_igel_pub_v1.igel_standort_ohne_erhebung_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_igel_pub_v1.igel_stall_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_bodendaten_nabodat_pub.bodenprofilstandort_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_geotope_pub.geotope_quelle_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_geotope_pub.geotope_hoehle_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_geotope_pub.geotope_erratiker_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_geotope_pub.geotope_aufschluss_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_geotope_pub.geotope_landschaftsform_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_geotope_pub.geotope_fundstelle_grabung_gesch_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_gewaesser_gewaessereigenschaften_pub_v1.gewisso_netz_solr_v UNION 
--SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung FROM afu_uplus_pub.tank_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_quelle_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_quelle_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_quelle_geschuetzt_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_quelle_geschuetzt_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_sondierung_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_sondierung_geschuetzt_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_fassung_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_fassung_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_fassung_geschuetzt_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_versickerung_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_versickerung_geschuetzt_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_waermenutzung_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_waermenutzung_geschuetzt_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_trinkwasser_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM afu_wasserbewirtschaftung_pub_v1.vegas_einbauten_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM afu_naturereigniskataster_pub_v1.afu_naturereigniskataster_basisinformation_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM afu_naturereigniskataster_pub_v1.afu_naturereigniskataster_pr_sturz_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM afu_naturereigniskataster_pub_v1.afu_naturereigniskataster_pr_wasser_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_mopublic_pub.mopublic_bodenbedeckung_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_mopublic_pub.mopublic_gebaeudeadresse_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_mopublic_pub.mopublic_grundstueck_proj_nummer_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_mopublic_pub.mopublic_grundstueck_nummer_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_mopublic_pub.mopublic_flurname_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_mopublic_pub.mopublic_gelaendename_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_hoheitsgrenzen_pub.hoheitsgrenzen_bezirksgrenze_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_hoheitsgrenzen_pub.hoheitsgrenzen_gemeindegrenze_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM alw_landwirtschaft_tierhaltung_pub_v1.bienenstandorte_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM alw_landwirtschaft_tierhaltung_pub_v1.bienenstandorte_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM arp_naturreservate_pub.naturreservate_reservat_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM avt_kantonsstrassen_pub.kantonsstrassen_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM avt_kantonsstrassen_pub.bezugspunkte_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM avt_oeffentlicher_verkehr_pub.haltestellen_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM avt_verkehrszaehlstellen_pub.verkehrszhlstllen_verkehrszaehlstelle_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM awjf_waldplan_bestandeskarte_pub_v1.waldplan_bestandeskarte_flaechen_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM awjf_gewaesser_fischerei_pub_v1.jfv_fischenz_nutz_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM awjf_schutzwald_pub_v1.schutzwald_perimeter_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM awjf_schutzwald_pub_v1.schutzwald_natgef_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM awjf_waldplan_bestandeskarte_pub_v1.waldplan_bestandeskarte_eigentum_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM awjf_waldplan_bestandeskarte_pub_v1.waldplan_bestandeskarte_funktion_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM awjf_waldplan_bestandeskarte_pub_v1.waldplan_bestandeskarte_typ_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_gb2av_controlling_pub.controlling_av2gb_mutationen_v_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM agi_gb2av_controlling_pub.controlling_gb2av_vollzugsmeldung_delta_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM awjf_waldwanderwege_pub.waldwanderwege_posten_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM alw_landwirtschaft_tierhaltung_pub_v1.kulturflaechen_hauptkategorien_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM alw_landwirtschaft_tierhaltung_pub_v1.kulturflaechen_hauptkategorien_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM alw_landwirtschaft_tierhaltung_pub_v1.kulturflaechen_hauptkategorien_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM alw_landwirtschaft_tierhaltung_pub_v1.kulturflaechen_hauptkategorien_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM alw_landwirtschaft_tierhaltung_pub_v1.kultur_punktelement_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, bbox AS ausdehnung, id AS identifier  FROM alw_landwirtschaft_tierhaltung_pub_v1.kultur_punktelement_solr_v UNION 
SELECT display as anzeige, lower(search_3_stem) as suchbegriffe, true as id_in_hochkomma, facet as layer_ident, NULL AS ausdehnung, id AS identifier  FROM gesa_leistungserbringerstandorte_analyse_pub_v1.analyse_standort_solr_v
)

SELECT *, uuid_generate_v4() AS t_ili_tid FROM solr_index






