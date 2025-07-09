import https from 'https';
import axios from 'axios';
import fs from 'fs';
import 'dotenv/config';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Kommandozeilen-Argumente verarbeiten
const args = process.argv.slice(2);
const filterPrefix = args.find(arg => arg.startsWith('--filter='))?.split('=')[1] || null;


// Konfiguration der zu testenden Parameter
const testCases = [

    { "searchtext": "fliessgewässer - eigenschaften, fliessgewässer, gewässernetz, oberflächengewässer, gewässer, fluss, flüsse, bach, bäche", "filter": "background,foreground", "description": "ch.so.afu.fliessgewaesser.netz", "auth": false },
    { "searchtext": "ausgleichsabgabe publikation (geschützt), mehrwertabgabe", "filter": "background,foreground", "description": "ch.so.dsbjd.ausgleichsabgabe_publikation_geschuetzt", "auth": true },
    { "searchtext": "abwasser werkplan (quelle emch+berger), leitungskataster lk", "filter": "background,foreground", "description": "ch.emchberger.abwasser_werkplan_gde", "auth": false },
    { "searchtext": "statische waldgrenze (review, geschützt)", "filter": "background,foreground", "description": "ch.so.awjf.statische_waldgrenze_review", "auth": true },
    { "searchtext": "sondernutzungsgebiet (richtplan)", "filter": "background,foreground", "description": "ch.so.arp.richtplan.sondernutzungsgebiet", "auth": false },
    { "searchtext": "siedlungstrenngürtel (richtplan)", "filter": "background,foreground", "description": "ch.so.arp.richtplan.siedlungstrennguertel", "auth": false },
    { "searchtext": "ökomorphologie der fliessgewässer", "filter": "background,foreground", "description": "ch.so.afu.fliessgewaesser.oekomorphologie", "auth": false },
    { "searchtext": "pikettregionen militärjustiz, militär, militärjustiz, pikettregionen, pikett", "filter": "background,foreground", "description": "ch.so.dsbjd.pikettregionen_militaerjustiz", "auth": false },
    { "searchtext": "öv-güteklassen, erschliessungsgüte", "filter": "background,foreground", "description": "ch.so.avt.oev_gueteklasse", "auth": false },
    { "searchtext": "waldstandorte, waldgesellschaft", "filter": "background,foreground", "description": "ch.so.awjf.natuerliche_waldstandorte", "auth": false },
    { "searchtext": "bauzonengrenzen", "filter": "background,foreground", "description": "ch.so.arp.bauzonengrenzen", "auth": false },
    { "searchtext": "relief digitales oberflächenmodell (lidar)", "filter": "background,foreground", "description": "ch.so.agi.lidar.dsm_relief", "auth": false },
    { "searchtext": "relief digitales terrainmodell (lidar)", "filter": "background,foreground", "description": "ch.so.agi.lidar.dtm_relief", "auth": false },
    { "searchtext": "abbaustellen", "filter": "background,foreground", "description": "ch.so.afu.abbaustellen", "auth": false },
    { "searchtext": "baulinien (erschliessungsplanung), abstandslinien", "filter": "background,foreground", "description": "ch.so.arp.nutzungsplanung.erschliessungsplanung.baulinien", "auth": false },
    { "searchtext": "lärm (nutzungsplanung), empfindlichkeitsstufen, lärmempfindlichkeitsstufen", "filter": "background,foreground", "description": "ch.so.arp.nutzungsplanung.laerm", "auth": false },
    { "searchtext": "vb mjpnl intern (geschützt), vereinbarungsflächen mjpnl", "filter": "background,foreground", "description": "ch.so.arp.naturschutzobjekte.mjpnl_vereinbarungsflaechen_geschuetzt_v2", "auth": true },
    { "searchtext": "pixelkarte farbig (quelle bund), landeskarte, pixelkarte, swisstopo", "filter": "background,foreground", "description": "ch.swisstopo.pixelkarte-farbe", "auth": false },
    { "searchtext": "groblärmkataster", "filter": "background,foreground", "description": "ch.so.avt.groblaermkataster", "auth": false },
    { "searchtext": "kantonale uferschutzzone (richtplan)", "filter": "background,foreground", "description": "ch.so.arp.richtplan.kantonale_uferschutzzonen", "auth": false },
    { "searchtext": "hangneigung digitales terrainmodell (lidar)", "filter": "background,foreground", "description": "ch.so.agi.lidar.dtm_slope", "auth": false },
    { "searchtext": "übersichtsplan 2009 (historische karte)", "filter": "background,foreground", "description": "ch.so.agi.uebersichtsplan", "auth": false },
    { "searchtext": "strassenlärm belastungen, strassenlärm belastungen", "filter": "background,foreground", "description": "ch.so.avt.strassenlaerm", "auth": false },
    { "searchtext": "polizeiregionen", "filter": "background,foreground", "description": "ch.so.agi.polizeiregionen", "auth": false },
    { "searchtext": "vereinbarungsflächen mehrjahresprogramm natur und landschaft (mjpnl), vereinbarungsflächen mjpnl detaillierte informationen", "filter": "background,foreground,g", "description": "ch.so.arp.naturschutzobjekte.mjpnl_vereinbarungsflaechen", "auth": false },
    { "searchtext": "pflanzengesundheit schadorganismen massnahmengebiete (geschützt)", "filter": "background,foreground", "description": "ch.so.alw.pflanzengesundheit_massnahmen_geschuetzt", "auth": true },
    { "searchtext": "tiergesundheit massnahmengebiet", "filter": "background,foreground", "description": "ch.so.alw.tiergesundheit_massnahmen", "auth": false },
    { "searchtext": "eidgenössische gebäude- und wohnungsregister (gwr)", "filter": "background,foreground", "description": "ch.bfs.gebaeude_wohnungs_register", "auth": false },
    { "searchtext": "wald - wegsanierungen (geschützt)", "filter": "background,foreground", "description": "ch.so.awjf.wegsanierungen", "auth": true },
    { "searchtext": "regionaler naturpark von nationaler bedeutung (richtplan)", "filter": "background,foreground", "description": "ch.so.arp.richtplan.regionaler_naturpark_von_nationaler_bedeutung", "auth": false },
    { "searchtext": "av-gwr abgleich", "filter": "background,foreground", "description": "ch.so.agi.av_gwr_abgleich", "auth": false },
    { "searchtext": "pflanzengesundheit schadorganismen massnahmengebiete", "filter": "background,foreground", "description": "ch.so.alw.pflanzengesundheit_massnahmen", "auth": false },
    { "searchtext": "gefahrenhinweis ufererosion", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.ufererosion", "auth": false },
    { "searchtext": "mehrjahresplanung (geschützt)", "filter": "background,foreground", "description": "ch.so.avt.mehrjahresplanung_geschuetzt", "auth": true },
    { "searchtext": "gefahrenkarte synoptisch (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.synoptisches_gefahrengebiet", "auth": false },
    { "searchtext": "gefahrenkarte rutschung (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.gefahrengebiet_rutschung", "auth": false },
    { "searchtext": "betreiber gas (leitungskataster)", "filter": "background,foreground", "description": "ch.so.agi.lk.netzgebiete.betreiber_gas", "auth": false },
    { "searchtext": "gefahrenkarte sturz (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.gefahrengebiet_sturz", "auth": false },
    { "searchtext": "betreiber elektrizität (leitungskataster), netzbetreiber, netzebene, stromversorgung, stromversorgungssicherheit", "filter": "background,foreground", "description": "ch.so.agi.lk.netzgebiete.betreiber_elektrizitaet", "auth": false },
    { "searchtext": "regionale standortförderung", "filter": "background,foreground", "description": "ch.so.arp.arbeitszonenbewirtschaftung.regionen.wirtschaftsfoerderung", "auth": false },
    { "searchtext": "wildtierkorridore awjf", "filter": "background,foreground", "description": "ch.so.awjf.wildtierkorridore", "auth": false },
    { "searchtext": "waldplan (in bearbeitung, geschützt)", "filter": "background,foreground", "description": "ch.so.awjf.waldplan_in_bearbeitung", "auth": true },
    { "searchtext": "bauzonenstatistik (geschützt) siedlungsgebiet automatisch", "filter": "background,foreground", "description": "ch.so.arp.bauzonenstatistik", "auth": true },
    { "searchtext": "nutzungsplanung, nplso, zonenplan, gesamtplan, nutzungszonen", "filter": "background,foreground", "description": "ch.so.arp.nutzungsplanung", "auth": false },
    { "searchtext": "betreiber fernwärme (leitungskataster)", "filter": "background,foreground", "description": "ch.so.agi.lk.netzgebiete.betreiber_fernwaerme", "auth": false },
    { "searchtext": "gefahrenkarte wasser (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.gefahrengebiet_wasser", "auth": false },
    { "searchtext": "elektrizitätsproduktionsanlagen (quelle bund)", "filter": "background,foreground", "description": "ch.bfe.elektrizitaetsproduktionsanlagen", "auth": false },
    { "searchtext": "emissionskataster ekat 2005", "filter": "background,foreground", "description": "ch.so.afu.ekat2005", "auth": false },
    { "searchtext": "arbeitszonen, wohnzonen, arbeitszonen, mischzonen, kernzonen, zone für die öffentliche nutzung, eingeschränkte bauzone, tourismus- und freizeitzonen, spezialzone, wald, landwirtschaft, gewässer", "filter": "background,foreground", "description": "ch.so.arp.arbeitszonenbewirtschaftung.arbeitszonen", "auth": false },
    { "searchtext": "normalisiertes oberflächenmodell (lidar), laserscanning, ndom", "filter": "background,foreground", "description": "ch.so.agi.lidar.ndsm", "auth": false },
    { "searchtext": "pro natura waldreservate (quelle bund)", "filter": "background,foreground", "description": "ch.pronatura.waldreservate", "auth": false },
    { "searchtext": "emissionskataster ekat 2010", "filter": "background,foreground", "description": "ch.so.afu.ekat2010", "auth": false },
    { "searchtext": "naturschutzobjekte", "filter": "background,foreground", "description": "ch.so.arp.naturschutzobjekte", "auth": false },
    { "searchtext": "lärm (dataservice)", "filter": "background,foreground", "description": "ch.so.arp.nutzungsplanung.laerm.data", "auth": false },
    { "searchtext": "schutzwald - modell  (geschützt)", "filter": "background,foreground", "description": "ch.so.awjf.silvaprotect", "auth": true },
    { "searchtext": "naturreservate review (geschützt)", "filter": "background,foreground", "description": "ch.so.arp.naturreservate_review", "auth": true },
    { "searchtext": "revitalisierung fliessgewässer", "filter": "background,foreground", "description": "ch.so.afu.fliessgewaesser_revitalisierung", "auth": false },
    { "searchtext": "digitales oberflächenmodell (lidar)", "filter": "background,foreground", "description": "ch.so.agi.lidar.dsm", "auth": false },
    { "searchtext": "plakatstandorte bestimmungen", "filter": "background,foreground", "description": "ch.so.sk.plakatstandorte.standorte", "auth": false },
    { "searchtext": "statische waldgrenze", "filter": "background,foreground", "description": "ch.so.awjf.statische_waldgrenze", "auth": false },
    { "searchtext": "neozoen – asiatische hornisse", "filter": "background,foreground", "description": "ch.so.afu.asiatische_hornisse", "auth": false },
    { "searchtext": "amphibienlaichgebiete von nationaler bedeutung - wanderobjekte (quelle bund), wanderobjekte, ianb", "filter": "background,foreground", "description": "ch.bafu.bundesinventare-amphibien_wanderobjekte", "auth": false },
    { "searchtext": "tierstandorte (geschützt)", "filter": "background,foreground", "description": "ch.so.alw.landwirtschaft_tierhaltung.tierstandorte_geschuetzt", "auth": true },
    { "searchtext": "hintergrundkarte orthofoto", "filter": "background,foreground", "description": "ch.so.agi.hintergrundkarte_ortho", "auth": false },
    { "searchtext": "landwirtschaftliche zonengrenzen", "filter": "background,foreground", "description": "ch.so.alw.landwirtschaftliche_zonengrenzen", "auth": false },
    { "searchtext": "gemeindegrenzen, kommune, stadt", "filter": "background,foreground", "description": "ch.so.agi.gemeindegrenzen", "auth": false },
    { "searchtext": "fischerei - reviere", "filter": "background,foreground", "description": "ch.so.awjf.gewaesser.fischereireviere", "auth": false },
    { "searchtext": "fischerei - patentgewässer", "filter": "background,foreground", "description": "ch.so.awjf.gewaesser.patentgewaesser", "auth": false },
    { "searchtext": "verkehrsmodell miv 2019 / 2030 / 2040", "filter": "background,foreground", "description": "ch.so.avt.verkehrsmodell_2019_miv", "auth": false },
    { "searchtext": "samenerntekataster (geschützt)", "filter": "background,foreground", "description": "ch.so.awjf.samenerntekataster.flaeche_geschuetzt", "auth": true },
    { "searchtext": "bodeneignung kulturtyp (quelle bund)", "filter": "background,foreground", "description": "ch.blw.bodeneignung-kulturtyp", "auth": false },
    { "searchtext": "geotope", "filter": "background,foreground", "description": "ch.so.afu.geotope", "auth": false },
    { "searchtext": "schutzwald", "filter": "background,foreground", "description": "ch.so.awjf.schutzwald", "auth": false },
    { "searchtext": "regionale führungsstäbe (rfs)", "filter": "background,foreground", "description": "ch.so.amb.regionale_fuehrungsstaebe", "auth": false },
    { "searchtext": "schutzzonen der ganzen schweiz (quelle geodienste.ch)", "filter": "background,foreground", "description": "ch.geodienste.planerischer_gewaesserschutz", "auth": false },
    { "searchtext": "immobilienportfolio (gebäude und grundstücke)", "filter": "background,foreground", "description": "ch.so.hba.immobilienportfolio", "auth": false },
    { "searchtext": "klimaeignung übersicht (quelle bund)", "filter": "background,foreground", "description": "ch.blw.klimaeignung-typ", "auth": false },
    { "searchtext": "einzugsgebiet fliessgewässer", "filter": "background,foreground", "description": "ch.so.afu.fliessgewaesser_einzugsgebiet", "auth": false },
    { "searchtext": "schutzareal der ganzen schweiz (quelle geodienste.ch)", "filter": "background,foreground", "description": "ch.geodienste.planerischer_gewaesserschutz_areal", "auth": false },
    { "searchtext": "liegenschaften nach bebauungsstand (bauzonenstatistik, geschützt)", "filter": "background,foreground", "description": "ch.so.arp.bauzonenstatistik.liegenschaft_nach_bebauungsstand", "auth": true },
    { "searchtext": "laufende bohrarbeiten (geschützt)", "filter": "background,foreground", "description": "ch.so.afu.erdwaerme.uplus.laufende_Bohrarbeiten", "auth": true },
    { "searchtext": "stehende gewässer (im aufbau), see, teich, fischteich, löschweiher, weiher", "filter": "background,foreground", "description": "ch.so.afu.stehende_gewaesser", "auth": false },
    { "searchtext": "schutzzonen (review, geschützt), grundwasserschutzzonen, fassungsbereich, s1, s2, s3, gwsz, grundwasserschutzareale", "filter": "background,foreground", "description": "ch.so.afu.gewaesserschutz.schutzzonen_review", "auth": true },
    { "searchtext": "karst", "filter": "background,foreground", "description": "ch.so.afu.karst", "auth": false },
    { "searchtext": "sentinel-2 satellitenbildmosaik 2018", "filter": "background,foreground", "description": "ch.swisstopo.sentinel_2018", "auth": false },
    { "searchtext": "gefährdungskarte oberflächenabfluss (quelle bund)", "filter": "background,foreground", "description": "ch.bafu.gefaehrdungskarte-oberflaechenabfluss", "auth": false },
    { "searchtext": "inventar der historischen verkehrswege der schweiz ivs: national (quelle bund), ivs", "filter": "background,foreground", "description": "ch.astra.ivs-nat", "auth": false },
    { "searchtext": "inventar der historischen verkehrswege der schweiz ivs: nationale bed. hist. verlauf (quelle bund), ivs", "filter": "background,foreground", "description": "ch.astra.ivs-nat-verlaeufe", "auth": false },
    { "searchtext": "trockenwiesen und -weiden (quelle bund), tww", "filter": "background,foreground", "description": "ch.bafu.bundesinventare-trockenwiesen_trockenweiden", "auth": false },
    { "searchtext": "landschaften und naturdenkmäler (quelle bund), bln", "filter": "background,foreground", "description": "ch.bafu.bundesinventare-bln", "auth": false },
    { "searchtext": "wasser- und zugvogelreservate von internationaler und nationaler bedeutung (quelle bund)", "filter": "background,foreground", "description": "ch.bafu.bundesinventare-vogelreservate", "auth": false },
    { "searchtext": "smaragd gebiete (quelle bund)", "filter": "background,foreground", "description": "ch.bafu.schutzgebiete-smaragd", "auth": false },
    { "searchtext": "rodungen und rodungsersatz (flächen)", "filter": "background,foreground", "description": "ch.so.awjf.rodung_rodungsersatz_flaechen", "auth": false },
    { "searchtext": "religionsgemeinschaften", "filter": "background,foreground", "description": "ch.so.ags.religionsgemeinschaften.religionsgemeinschaft", "auth": false },
    { "searchtext": "flachmoore von nationaler bedeutung (quelle bund)", "filter": "background,foreground", "description": "ch.bafu.bundesinventare-flachmoore", "auth": false },
    { "searchtext": "hoch- und übergangsmoore von nationaler bedeutung (quelle bund)", "filter": "background,foreground", "description": "ch.bafu.bundesinventare-hochmoore", "auth": false },
    { "searchtext": "amphibienlaichgebiete von nationaler bedeutung - ortsfeste objekte (quelle bund), ianb", "filter": "background,foreground", "description": "ch.bafu.bundesinventare-amphibien", "auth": false },
    { "searchtext": "inventar der historischen verkehrswege der schweiz ivs: regional und lokal (quelle bund), ivs", "filter": "background,foreground", "description": "ch.astra.ivs-reg_loc", "auth": false },
    { "searchtext": "kernkraftwerke (quelle bund), kkw, atomkraftwerk", "filter": "background,foreground", "description": "ch.bfe.kernkraftwerke", "auth": false },
    { "searchtext": "öreb-kataster review (geschützt), grundstückinformation, öffentlich-rechtlichen eigentumsbeschränkungen, oereb", "filter": "background,foreground", "description": "ch.so.oereb", "auth": true },
    { "searchtext": "rodungen und rodungsersatz (geschützt)", "filter": "background,foreground", "description": "ch.so.awjf.rodung_rodungsersatz_geschuetzt", "auth": true },
    { "searchtext": "vegetation entwicklungsstufen digitales oberflächenmodell", "filter": "background,foreground", "description": "ch.so.awjf.vegetation_entwicklungsstufen", "auth": false },
    { "searchtext": "benannte gebiete (amtliche vermessung)", "filter": "background,foreground", "description": "ch.so.agi.av.gebaeudeadressen.benannte_gebiete", "auth": false },
    { "searchtext": "agglomerationsprogramme", "filter": "background,foreground", "description": "ch.so.arp.agglomerationsprogramme", "auth": false },
    { "searchtext": "verkehrsmodell öv 2019 / 2040 passagiere", "filter": "background,foreground", "description": "ch.so.avt.verkehrsmodell_2019_oev", "auth": false },
    { "searchtext": "synoptische ik rutschung (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.synoptische_ik.rutschung", "auth": false },
    { "searchtext": "finanz- und lastenausgleich fila (geschützt)", "filter": "background,foreground", "description": "ch.so.agem.fila", "auth": true },
    { "searchtext": "waldwanderung", "filter": "background,foreground", "description": "ch.so.awjf.waldwanderwege", "auth": false },
    { "searchtext": "hydrologische messstationen", "filter": "background,foreground", "description": "ch.so.afu.hydrometrie.messstationen", "auth": false },
    { "searchtext": "differenzen av-gb, abgleich, vergleich", "filter": "background,foreground", "description": "ch.so.agi.av_gb_abgleich", "auth": false },
    { "searchtext": "zuströmbereiche der ganzen schweiz (quelle geodienste.ch)", "filter": "background,foreground", "description": "ch.geodienste.planerischer_gewaesserschutz_zustroembereich", "auth": false },
    { "searchtext": "pro natura naturschutzgebiete (quelle bund)", "filter": "background,foreground", "description": "ch.pronatura.naturschutzgebiete", "auth": false },
    { "searchtext": "hindernisse kantonale ausnahmetransportrouten (quelle geodienste.ch)", "filter": "background,foreground", "description": "ch.geodienste.kantonale_ausnahmetransportrouten.hindernisse", "auth": false },
    { "searchtext": "routen kantonale ausnahmetransportrouten (quelle geodienste.ch)", "filter": "background,foreground", "description": "ch.geodienste.kantonale_ausnahmetransportrouten.routen", "auth": false },
    { "searchtext": "inventar der historischen verkehrswege der schweiz ivs: wegbegleiter (quelle bund), ivs", "filter": "background,foreground", "description": "ch.astra.ivs-nat_wegbegleiter", "auth": false },
    { "searchtext": "synoptische ik wasser (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.synoptische_ik.wasser", "auth": false },
    { "searchtext": "zonenpläne für den notfallschutz (quelle bund), kernkraftwerk, zonenplan, notfallschutz, kkw", "filter": "background,foreground", "description": "ch.ensi.zonenplan-notfallschutz-kernanlagen", "auth": false },
    { "searchtext": "auengebiete von nationaler bedeutung (quelle bund)", "filter": "background,foreground", "description": "ch.bafu.bundesinventare-auen", "auth": false },
    { "searchtext": "schützenswerten ortsbilder der schweiz von nationaler bedeutung (quelle bund), isos", "filter": "background,foreground", "description": "ch.bak.bundesinventar-schuetzenswerte-ortsbilder", "auth": false },
    { "searchtext": "hydranten wasser", "filter": "background,foreground", "description": "ch.so.agi.leitungskataster.wasser.hydranten", "auth": false },
    { "searchtext": "sirenenplanung", "filter": "background,foreground", "description": "ch.so.amb.sirenenplanung_geschuetzt", "auth": false },
    { "searchtext": "wald - übersicht, waldflächen", "filter": "background,foreground", "description": "ch.so.awjf.wald_uebersicht", "auth": false },
    { "searchtext": "bezirksgrenzen", "filter": "background,foreground", "description": "ch.so.agi.bezirksgrenzen", "auth": false },
    { "searchtext": "denkmalschutz (geschützt)", "filter": "background,foreground", "description": "ch.so.ada.denkmalschutz_geschuetzt", "auth": true },
    { "searchtext": "gewässerschutz (geschützt), pumpwerke, grundwasser, grundwassergebiet, grundwasserspiegel", "filter": "background,foreground", "description": "ch.so.afu.gewaesserschutz_geschuetzt", "auth": true },
    { "searchtext": "bodentyp (geschützt)", "filter": "background,foreground", "description": "ch.so.afu.bodeninformation.bodentypen_geschuetzt", "auth": true },
    { "searchtext": "bewertung (wirtschaftsförderung, geschützt)", "filter": "background,foreground", "description": "ch.so.arp.arbeitszonenbewirtschaftung.bewertung_wf_geschuetzt", "auth": true },
    { "searchtext": "nachführungseinheiten abwasser (leitungskataster), lk, leitungskataster, abwasser, zuständigkeit", "filter": "background,foreground", "description": "ch.so.agi.lk.netzgebiete.nachfuehrungseinheiten_abwasser", "auth": false },
    { "searchtext": "strukturverbesserungen", "filter": "background,foreground", "description": "ch.so.alw.strukturverbesserungen", "auth": false },
    { "searchtext": "nachführungseinheiten wasser (leitungskataster), lk, leitungskataster, wasser, zuständigkeit", "filter": "background,foreground", "description": "ch.so.agi.lk.netzgebiete.nachfuehrungseinheiten_wasser", "auth": false },
    { "searchtext": "nutzungsplanung kontrolle (geschützt)", "filter": "background,foreground", "description": "ch.so.arp.nutzungsplanung_kontrolle", "auth": true },
    { "searchtext": "naturreservate, naturschutzgebiete", "filter": "background,foreground", "description": "ch.so.arp.naturreservate", "auth": false },
    { "searchtext": "digitales terrainmodell (lidar)", "filter": "background,foreground", "description": "ch.so.agi.lidar.dtm", "auth": false },
    { "searchtext": "gebäudeeingänge (amtliche vermesssung)", "filter": "background,foreground", "description": "ch.so.agi.av.gebaeudeadressen.gebaeudeeingaenge", "auth": false },
    { "searchtext": "gefahrenkartenberichte pro gemeinde (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.dokumente_pro_gemeinde", "auth": false },
    { "searchtext": "fledermausfundorte (geschützt)", "filter": "background,foreground", "description": "ch.so.arp.fledermausfundorte_geschuetzt", "auth": true },
    { "searchtext": "wirtschaftsflächen (arbeitszonenbewirtschaftung)", "filter": "background,foreground", "description": "ch.so.arp.arbeitszonenbewirtschaftung.wirtschaftsflaechen", "auth": false },
    { "searchtext": "richtplan", "filter": "background,foreground", "description": "ch.so.arp.richtplan", "auth": false },
    { "searchtext": "neophyten (geschützt), invasive gebietsfremde pflanzen", "filter": "background,foreground", "description": "ch.so.afu.neophyten_infoflora_geschuetzt", "auth": true },
    { "searchtext": "sobau geschäfte", "filter": "background,foreground", "description": "ch.so.arp.baugis.geschaefte", "auth": false },
    { "searchtext": "wasserhaushalt nach fal 24+ (boden, geschützt)", "filter": "background,foreground", "description": "ch.so.afu.bodeninformation.wasserhaushalt_geschuetzt", "auth": true },
    { "searchtext": "naturschutzobjekte (geschützt)", "filter": "background,foreground", "description": "ch.so.arp.naturschutzobjekte_geschuetzt", "auth": true },
    { "searchtext": "controlling avgbs-vollzugsmeldungen , avgbs, gb2av, grundbuch, amtliche vermessung", "filter": "background,foreground", "description": "ch.so.agi.av.gb2av.controlling_vollzugsmeldungen", "auth": false },
    { "searchtext": "fruchtfolgeflächen", "filter": "background,foreground", "description": "ch.so.alw.fruchtfolgeflaechen", "auth": false },
    { "searchtext": "grundwasserbewirtschaftung (geschützt)", "filter": "background,foreground", "description": "ch.so.afu.wasserbewirtschaftung_geschuetzt", "auth": true },
    { "searchtext": "controlling av-mutationen, avgbs, mutationen, amtliche vermessung", "filter": "background,foreground", "description": "ch.so.agi.av.gb2av.controlling_mutationen", "auth": false },
    { "searchtext": "landwirtschaftliche kulturflächen (geschützt)", "filter": "background,foreground", "description": "ch.so.alw.landwirtschaft_tierhaltung.landwirtschaftliche_kulturflaechen_geschuetzt", "auth": true },
    { "searchtext": "region arbeitszonenbewirtschaftung", "filter": "background,foreground", "description": "ch.so.arp.arbeitszonenbewirtschaftung.regionen", "auth": false },
    { "searchtext": "jagd - banngebiete", "filter": "background,foreground", "description": "ch.so.awjf.jagdbanngebiete", "auth": false },
    { "searchtext": "erfassung arbeitszonenbewirtschaftung (geschützt)", "filter": "background,foreground", "description": "ch.so.arp.arbeitszonenbewirtschaftung.erfassung", "auth": true },
    { "searchtext": "luftbelastung prognose 2020", "filter": "background,foreground", "description": "ch.so.afu.luftbelastung.prognose_2020", "auth": false },
    { "searchtext": "fliessrichtungen (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.fliessrichtungen", "auth": false },
    { "searchtext": "nutzungsplanung review (geschützt), nplso, zonenplan, gesamtplan, nutzungszonen", "filter": "background,foreground", "description": "ch.so.arp.nutzungsplanung_staging", "auth": true },
    { "searchtext": "jagd - reviere", "filter": "background,foreground", "description": "ch.so.awjf.jagdreviere", "auth": false },
    { "searchtext": "luftbelastung zustand 2010", "filter": "background,foreground", "description": "ch.so.afu.luftbelastung.zustand_2010", "auth": false },
    { "searchtext": "orthofoto cir, luftbilder", "filter": "background,foreground", "description": "ch.so.agi.orthofoto_cir_alle", "auth": false },
    { "searchtext": "orthofoto rgb, luftbilder", "filter": "background,foreground", "description": "ch.so.agi.orthofoto_rgb_alle", "auth": false },
    { "searchtext": "biodiversität qualitätsstufe ii (geschützt)", "filter": "background,foreground", "description": "ch.so.alw.landwirtschaft_tierhaltung.bff_qualitaet_II_geschuetzt", "auth": true },
    { "searchtext": "gebäudeinformation und adressen, adressen, av, amtliche vermessung, strassenachsen, gwr, gebäudeingang, eingang, heizung, wärmeerzeugung", "filter": "background,foreground", "description": "ch.so.agi.gebaeudeinformation_und_adressen", "auth": false },
    { "searchtext": "kantonsstrassen", "filter": "background,foreground", "description": "ch.so.avt.kantonsstrassen", "auth": false },
    { "searchtext": "plz und ortschaften", "filter": "background,foreground", "description": "ch.so.agi.gebaeudeadressen.plz_ortschaften", "auth": false },
    { "searchtext": "forstkreis und forstreviere, forstorganisation", "filter": "background,foreground", "description": "ch.so.awjf.forstreviere.forstkreis_forstreviere", "auth": false },
    { "searchtext": "jungwald", "filter": "background,foreground", "description": "ch.so.awjf.jungwald", "auth": false },
    { "searchtext": "landwirtschaftliche kulturflächen", "filter": "background,foreground", "description": "ch.so.alw.landwirtschaft_tierhaltung.landwirtschaftliche_kulturflaechen", "auth": false },
    { "searchtext": "grundwassergeometrie", "filter": "background,foreground", "description": "ch.so.afu.grundwasser", "auth": false },
    { "searchtext": "landwirtschaftliche bewirtschaftungseinheiten", "filter": "background,foreground", "description": "ch.so.alw.landwirtschaft_tierhaltung.landwirtschaftliche_bewirtschaftungseinheiten", "auth": false },
    { "searchtext": "schutzwald (geschützt)", "filter": "background,foreground", "description": "ch.so.awjf.schutzwald_geschuetzt", "auth": true },
    { "searchtext": "denkmalschutz", "filter": "background,foreground", "description": "ch.so.ada.denkmalschutz", "auth": false },
    { "searchtext": "amtliche vermessung, av, grundbuchplan, kataster", "filter": "background,foreground", "description": "ch.so.agi.av.amtliche_vermessung", "auth": false },
    { "searchtext": "differenzen av-kaso, abgleich, vergleich, katasterschätzung", "filter": "background,foreground", "description": "ch.so.agi.av_kaso_abgleich", "auth": false },
    { "searchtext": "kunstbauten", "filter": "background,foreground", "description": "ch.so.avt.kunstbauten", "auth": false },
    { "searchtext": "geotope (geschützt)", "filter": "background,foreground", "description": "ch.so.afu.geotope_geschuetzt", "auth": true },
    { "searchtext": "bodeninformationen landwirtschaft, bodenkartierung", "filter": "background,foreground", "description": "ch.so.afu.bodeninformation_landwirtschaft", "auth": false },
    { "searchtext": "drainagenpläne , entwässerung, abfluss", "filter": "background,foreground", "description": "ch.so.alw.drainagenplaene", "auth": false },
    { "searchtext": "fliesstiefen (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.fliesstiefen", "auth": false },
    { "searchtext": "schadendienst (geschützt)", "filter": "background,foreground", "description": "ch.so.afu.schadendienst", "auth": true },
    { "searchtext": "landwirtschaftliche bewirtschaftungseinheiten (geschützt)", "filter": "background,foreground", "description": "ch.so.alw.landwirtschaft_tierhaltung.landwirtschaftliche_bewirtschaftungseinheiten_geschuetzt", "auth": true },
    { "searchtext": "neophyten - erdmandelgras, erdmandelgras", "filter": "background,foreground", "description": "ch.so.afu.neophyten_infoflora.erdmandelgras", "auth": false },
    { "searchtext": "witischutzzone", "filter": "background,foreground", "description": "ch.so.arp.nutzungsplanung.witischutzzone", "auth": false },
    { "searchtext": "wanderwege mit sperrungen und umleitungen", "filter": "background,foreground", "description": "ch.so.arp.wanderwege_mit_sperrungen_umleitungen", "auth": false },
    { "searchtext": "drainagen", "filter": "background,foreground", "description": "ch.so.alw.drainagen.daten.bemerkungen", "auth": false },
    { "searchtext": "walkerkarte (historische karte)", "filter": "background,foreground", "description": "ch.so.agi.walkerkarte", "auth": false },
    { "searchtext": "controlling av-validierung, mocheckso, validierung", "filter": "background,foreground", "description": "ch.so.agi.av.validierung", "auth": false },
    { "searchtext": "baulinien nationalstrassen v2.0 öreb (quelle bund)", "filter": "background,foreground", "description": "ch.astra.baulinien-nationalstrassen_v2_0.oereb", "auth": false },
    { "searchtext": "miv - verkehrszählstellen", "filter": "background,foreground", "description": "ch.so.avt.verkehrszaehlstellen", "auth": false },
    { "searchtext": "hofdüngeranlagen und ställe (geschützt)", "filter": "background,foreground", "description": "ch.so.afu.abwasser_lw", "auth": true },
    { "searchtext": "bodenprofilstandorte (bodendaten nabodat), bodenprofile, bodenkartierung", "filter": "background,foreground", "description": "ch.so.afu.bodeninformationen.bodenprofilstandorte", "auth": false },
    { "searchtext": "inventar arbeitszonenbewirtschaftung (geschützt)", "filter": "background,foreground", "description": "ch.so.arp.arbeitszonenbewirtschaftung", "auth": true },
    { "searchtext": "neozoen – asiatische hornisse erfassung (geschützt)", "filter": "background,foreground", "description": "ch.so.afu.asiatische_hornisse.erfassung_geschuetzt", "auth": true },
    { "searchtext": "neophyten,  invasive gebietsfremde pflanzen", "filter": "background,foreground", "description": "ch.so.afu.neophyten_infoflora", "auth": false },
    { "searchtext": "hanglagen (daten geoportal bundesamt für landwirtschaft)", "filter": "background,foreground", "description": "ch.so.alw.hanglagen", "auth": false },
    { "searchtext": "nutzungsvereinbarungen (geschützt)", "filter": "background,foreground", "description": "ch.so.arp.nutzungsvereinbarung", "auth": true },
    { "searchtext": "grundbuchkreise", "filter": "background,foreground", "description": "ch.so.agi.av.grundbuchkreise", "auth": false },
    { "searchtext": "aus vsb entlassen, prüfperimeter bodenabtrag, verdachtsflächen, vsb", "filter": "background,foreground", "description": "ch.so.afu.schadstoffbelastete_boeden.geschuetzt_vsb_entlassen", "auth": false },
    { "searchtext": "bienenstandorte und -sperrgebiete (geschützt)", "filter": "background,foreground", "description": "ch.so.alw.bienenstandorte_und_sperrgebiete_geschuetzt", "auth": true },
    { "searchtext": "gewässerschutz, planerischer gewässerschutz, grundwasserschutz", "filter": "background,foreground", "description": "ch.so.afu.gewaesserschutz", "auth": false },
    { "searchtext": "prüfperimeter bodenabtrag, schadstoffbelastete böden, verdachtsflächen", "filter": "background,foreground", "description": "ch.so.afu.schadstoffbelastete_boeden", "auth": false },
    { "searchtext": "übersteuerung bebauungsstand (bauzonenstatistik, geschützt)", "filter": "background,foreground", "description": "ch.so.arp.bauzonenstatistik.uebersteuerung_bebauungsstand", "auth": true },
    { "searchtext": "schadstoffbelastete böden (geschützt), prüfperimeter bodenabtrag, verdachtsflächen, vsb", "filter": "background,foreground", "description": "ch.so.afu.schadstoffbelastete_boeden.geschuetzt", "auth": true },
    { "searchtext": "werkkataster siedlungsentwässerung (gep), gep, leitungskataster, werkkataster, abwasser", "filter": "background,foreground", "description": "ch.so.afu.gep.werkkataster", "auth": false },
    { "searchtext": "leitungskataster wasser (lkmap)", "filter": "background,foreground", "description": "ch.so.agi.lkmap.wasser", "auth": false },
    { "searchtext": "bienenstandorte und -sperrgebiete", "filter": "background,foreground", "description": "ch.so.alw.bienenstandorte_und_sperrgebiete", "auth": false },
    { "searchtext": "sonde erdwärme (erdwärmesonden)", "filter": "background,foreground", "description": "ch.so.afu.erdwaerme.sonde", "auth": false },
    { "searchtext": "abklärungsperimeter (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.abklaerungsperimeter", "auth": false },
    { "searchtext": "waldplan", "filter": "background,foreground", "description": "ch.so.awjf.waldplan", "auth": false },
    { "searchtext": "grundwasserbewirtschaftung, grundwassernutzung, grundwasservorkommen, grundwasserspiegel", "filter": "background,foreground", "description": "ch.so.afu.wasserbewirtschaftung", "auth": false },
    { "searchtext": "emissionskataster ekat 2015", "filter": "background,foreground", "description": "ch.so.afu.ekat2015", "auth": false },
    { "searchtext": "bodentyp", "filter": "background,foreground", "description": "ch.so.afu.bodeninformationen.bodentypen", "auth": false },
    { "searchtext": "wald - bestandeskarte", "filter": "background,foreground", "description": "ch.so.awjf.bestandeskarte_wald", "auth": false },
    { "searchtext": "nachführungsmeldungen amtlichen vermessung (bodenbedeckung, geschützt)", "filter": "background,foreground", "description": "ch.so.agi.av.meldewesen.meldungen_geschuetzt", "auth": true },
    { "searchtext": "hinweiskarte waldbrandgefährdung", "filter": "background,foreground", "description": "ch.so.awjf.waldbrandvorsorge", "auth": false },
    { "searchtext": "grundwassergeometrie (geschützt)", "filter": "background,foreground", "description": "ch.so.afu.grundwasser_geschuetzt", "auth": true },
    { "searchtext": "erschliessungen ausserhalb bauzone (geschützt)", "filter": "background,foreground", "description": "ch.so.sgv.erschliessungen_ausserhalb_bauzonen", "auth": true },
    { "searchtext": "bodeninformationen wald, bodenkartierung", "filter": "background,foreground", "description": "ch.so.afu.bodeninformation_wald", "auth": false },
    { "searchtext": "öffentlicher verkehr - öv (karte)", "filter": "background,foreground", "description": "ch.so.avt.oev", "auth": false },
    { "searchtext": "abwasser (geschützt)", "filter": "background,foreground", "description": "ch.so.afu.abwasser", "auth": true },
    { "searchtext": "landwerte (geschützt), kaso, steuer", "filter": "background,foreground", "description": "ch.so.ksta.landwert_geschuetzt", "auth": true },
    { "searchtext": "kantonsgrenzen", "filter": "background,foreground", "description": "ch.so.agi.kantonsgrenzen", "auth": false },
    { "searchtext": "hintergrundkarte farbig", "filter": "background,foreground", "description": "ch.so.agi.hintergrundkarte_farbig", "auth": false },
    { "searchtext": "notfalltreffpunkte", "filter": "background,foreground", "description": "ch.so.amb.notfalltreffpunkte", "auth": false },
    { "searchtext": "satellitenbild thal (april 2014)", "filter": "background,foreground", "description": "ch.so.agi.satellitenbild_thal_2014", "auth": false },
    { "searchtext": "geologie, geologische gis-karte, gesteinsschichten, karstformen ", "filter": "background,foreground", "description": "ch.so.afu.geologie", "auth": false },
    { "searchtext": "baugrundklassen nach sia 261, seismische baugrundklassen, baugrundklassenkarte, erdbeben", "filter": "background,foreground", "description": "ch.so.afu.baugrundklassen", "auth": false },
    { "searchtext": "baulinien (von solothurn und obergerlafingen), abstandslinien", "filter": "background,foreground", "description": "ch.so.agi.baulinien", "auth": false },
    { "searchtext": "kataster der belasteten standorte (kbs, geschützt), altlasten, ablagerungsstandorte, betriebsstandorte, unfallstandorte, deponien", "filter": "background,foreground", "description": "ch.so.afu.altlasten.standorte_geschuetzt", "auth": true },
    { "searchtext": "hochwasserschutz/revitalisierung emme, emme, hochwasserschutz, renaturierung, revitalisierung , orthofoto", "filter": "background,foreground", "description": "ch.so.afu.emme.hochwasserschutz", "auth": false },
    { "searchtext": "belastete standorte", "filter": "background,foreground", "description": "ch.so.afu.altlasten.standorte.data_v2", "auth": false },
    { "searchtext": "erreichbarkeitsanalyse leistungserbringerstandorte (spitäler/kliniken)", "filter": "background,foreground", "description": "ch.so.gesa.leistungserbringerstandorte_erreichbarkeitsanalyse", "auth": false },
    { "searchtext": "störfallverordnung, konsultationsbereiche", "filter": "background,foreground", "description": "ch.so.afu.gefahrenhinweiskarte_stfv", "auth": false },
    { "searchtext": "höhenkurven 1m (lidar), laserscanning, ndom", "filter": "background,foreground", "description": "ch.so.agi.lidar.hoehenkurven", "auth": false },
    { "searchtext": "hintergrundkarte schwarz-weiss", "filter": "background,foreground", "description": "ch.so.agi.hintergrundkarte_sw", "auth": false },
    { "searchtext": "archäologische fundstellen (geschützt)", "filter": "background,foreground", "description": "ch.so.ada.archaeologie.fundstellen_geschuetzt", "auth": true },
    { "searchtext": "schutzwaldmassnahmen", "filter": "background,foreground", "description": "ch.so.awjf.waldportal.schutzwald", "auth": false },
    { "searchtext": "klimaanalysekarte nacht 2020", "filter": "background,foreground", "description": "ch.so.afu.klimaanalysekarte_nacht_2020", "auth": false },
    { "searchtext": "jungwaldpflege", "filter": "background,foreground", "description": "ch.so.awjf.waldportal.jungwaldpflege", "auth": false },
    { "searchtext": "alter projektierte av-gebäude, av, projektiert, gebäude, alter", "filter": "background,foreground", "description": "ch.so.agi.av.meldewesen.gebaeude_proj", "auth": false },
    { "searchtext": "klimaanalysekarte tag 2060", "filter": "background,foreground", "description": "ch.so.afu.klimaanalysekarte_tag_2060", "auth": false },
    { "searchtext": "klimaanalysekarte tag 2020", "filter": "background,foreground", "description": "ch.so.afu.klimaanalysekarte_tag_2020", "auth": false },
    { "searchtext": "planungshinweiskarte nacht 2020", "filter": "background,foreground", "description": "ch.so.afu.klimaanalysekarte.planungshinweiskarte_nacht_2020", "auth": false },
    { "searchtext": "klimaanalysekarte nacht 2060", "filter": "background,foreground", "description": "ch.so.afu.klimaanalysekarte_nacht_2060", "auth": false },
    { "searchtext": "schutzbautenkataster (geschützt), schutzbauten, schutzbautenkataster", "filter": "background,foreground", "description": "ch.so.afu.schutzbauten_geschuetzt", "auth": true },
    { "searchtext": "planungshinweiskarte tag 2020", "filter": "background,foreground", "description": "ch.so.afu.klimaanalysekarte.planungshinweiskarte_tag_2020", "auth": false },
    { "searchtext": "archäologische fundstellen", "filter": "background,foreground", "description": "ch.so.ada.archaeologie.fundstellen", "auth": false },
    { "searchtext": "ereigniskataster naturgefahren", "filter": "background,foreground", "description": "ch.so.afu.naturereigniskataster", "auth": false },
    { "searchtext": "kataster der belasteten standorte (kbs), altlasten, ablagerungsstandorte, betriebsstandorte, unfallstandorte, deponien", "filter": "background,foreground", "description": "ch.so.afu.altlasten.standorte", "auth": false },
    { "searchtext": "bohrtiefenabfrage erdwärmesonden, machbarkeit erdwärmesonden, online-abfrage ews, erdsonden, erdwärme, geothermie", "filter": "background,foreground", "description": "ch.so.afu.ewsabfrage.abfrage", "auth": false },
    { "searchtext": "dtv - täglicher verkehr prognose 2030 (geschützt)", "filter": "background,foreground", "description": "ch.so.avt.verkehrsmodell_2019_prognose_2030_geschuetzt", "auth": true },
    { "searchtext": "dtv - täglicher verkehr prognose 2040 (geschützt)", "filter": "background,foreground", "description": "ch.so.avt.verkehrsmodell_2019_prognose_2040_geschuetzt", "auth": true },
    { "searchtext": "verkehrsmodell miv 2019 / 2030 / 2040 (geschützt)", "filter": "background,foreground", "description": "ch.so.avt.verkehrsmodell_2019_miv_geschuetzt", "auth": true },
    { "searchtext": "dtv - täglicher verkehr stand 2019 (geschützt)", "filter": "background,foreground", "description": "ch.so.avt.verkehrsmodell_2019_stand_2019_geschuetzt", "auth": true },
    { "searchtext": "programm biodiversität im wald, waldportal", "filter": "background,foreground", "description": "ch.so.awjf.programm_biodiversitaet_wald_waldportal", "auth": false },
    { "searchtext": "juraschutzzone (richtplan)", "filter": "background,foreground", "description": "ch.so.arp.richtplan.juraschutz", "auth": false },
    { "searchtext": "dufourkarte (historische karte)", "filter": "background,foreground", "description": "ch.so.agi.dufourkarte", "auth": false },
    { "searchtext": "entwicklungsgebiete arbeiten (richtplan), esp", "filter": "background,foreground", "description": "ch.so.arp.richtplan.entwicklungsgebiete_arbeiten", "auth": false },
    { "searchtext": "naturgefahrenhinweiskarte, murgang, übersarung, überflutung, blockschlag, steinschlag, rutschungen", "filter": "background,foreground", "description": "ch.so.afu.naturgefahrenhinweis", "auth": false },
    { "searchtext": "quellen ungefasst", "filter": "background,foreground", "description": "ch.so.afu.quellen_ungefasst", "auth": false },
    { "searchtext": "synoptische ik sturz (naturgefahren)", "filter": "background,foreground", "description": "ch.so.afu.naturgefahren.synoptische_ik.sturz", "auth": false },
    { "searchtext": "siegfriedkarte (historische karte)", "filter": "background,foreground", "description": "ch.so.agi.siegfriedkarte", "auth": false },
    { "searchtext": "ausgleichsabgabe erfassung (geschützt), mehrwertabgabe", "filter": "background,foreground", "description": "ch.so.dsbjd.ausgleichsabgabe_erfassung_geschuetzt", "auth": true },

    // Archäologie
    { searchtext: '115 149', filter: 'ch.so.ada.archaeologie.flaechenfundstellen' },
    { searchtext: '115 149', filter: 'ch.so.ada.archaeologie.flaechenfundstellen_geschuetzt', auth: true },
    { searchtext: '115 326', filter: 'ch.so.ada.archaeologie.punktfundstellen_geschuetzt', auth: true },
    { searchtext: '115 270', filter: 'ch.so.ada.archaeologie.punktfundstellen' },

    // Amt für Umwelt - Abbaustellen und Geotope
    { searchtext: 'Steinbruch Steingruebe', filter: 'ch.so.afu.abbaustellen' },
    { searchtext: 'Verwerfung Martinsflue', filter: 'ch.so.afu.geotope.aufschluss' },
    { searchtext: 'mp 22 ruine', filter: 'ch.so.afu.geotope.fundstelle_grabung_geschuetzt', auth: true },
    { searchtext: 'Heidenloch-Höhle Born', filter: 'ch.so.afu.geotope.hoehle' },
    { searchtext: 'Erratiker Chalchgraben 2', filter: 'ch.so.afu.geotope.erratiker' },
    { searchtext: 'Halbklus Balmberg ', filter: 'ch.so.afu.geotope.landschaftsform' },
    { searchtext: 'alte Gipsquelle Mineralwasser L1', filter: 'ch.so.afu.geotope.quelle' },
    { searchtext: 'Kreuzackerstrasse 1 2401', filter: 'ch.so.afu.gewaesserschutz_lw.standort_mit_erhebung', auth: true },
    { searchtext: 'Egerkingen-Vorstadt 23, 2401', filter: 'ch.so.afu.gewaesserschutz_lw.standort_ohne_erhebung', auth: true },
    { searchtext: '2546-43 Bann', filter: 'ch.so.afu.bodeninformationen.bodenprofilstandorte' },
    { searchtext: '605228058 Einbaute', filter: 'ch.so.afu.wasserbewirtschaftung.weitere_einbauten_geschuetzt', auth: true },
    { searchtext: '603220024 objekt nr fassung', filter: 'ch.so.afu.gewaesserschutz.fassungen' },
    { searchtext: '603220024 objekt nr fassung', filter: 'ch.so.afu.wasserbewirtschaftung.fassung' },
    { searchtext: '596218006 objekt nr fassung', filter: 'ch.so.afu.wasserbewirtschaftung.fassung_geschuetzt', auth: true },
    { searchtext: '626238008 objekt nr wärmenutzung', filter: 'ch.so.afu.wasserbewirtschaftung.grundwasserwaermenutzung' },
    { searchtext: '607228238 objekt nr wärmenutzung', filter: 'ch.so.afu.wasserbewirtschaftung.grundwasserwaermenutzung_geschuetzt', auth: true },
    { searchtext: 'blüttengraben 110002100', filter: 'ch.so.afu.fliessgewaesser.netz' },
    { searchtext: '22.019.0002a belasteter', filter: 'ch.so.afu.altlasten.standorte' },
    { searchtext: '22.079.0011a belasteter', filter: 'ch.so.afu.altlasten.standorte_geschuetzt', auth: true },
    { searchtext: 'so-1982-r-00012', filter: 'ch.so.afu.naturereigniskataster.basisinformation' },
    { searchtext: 'so-2023-s-10002', filter: 'ch.so.afu.naturereigniskataster.prozessraum.sturz' },
    { searchtext: 'so-2021-w-10006', filter: 'ch.so.afu.naturereigniskataster.prozessraum.wasser' },
    { searchtext: '5385 sichtungsmeldung', filter: 'ch.so.afu.asiatische_hornisse' },
    { searchtext: '613255002 objekt nr quelle', filter: 'ch.so.afu.gewaesserschutz.quellen' },
    { searchtext: '613255002 objekt nr quelle', filter: 'ch.so.afu.wasserbewirtschaftung.quellen' },
    { searchtext: '613255002 objekt nr quelle', filter: 'ch.so.afu.wasserbewirtschaftung.quellen_geschuetzt', auth: true },
    { searchtext: '597226037 objekt nr sondierung', filter: 'ch.so.afu.wasserbewirtschaftung.sondierung' },
    { searchtext: '597226037 objekt nr sondierung', filter: 'ch.so.afu.wasserbewirtschaftung.sondierung_geschuetzt', auth: true },
    { searchtext: 'Schafstall 167', filter: 'ch.so.afu.gewaesserschutz_lw.stall', auth: true },
    { searchtext: '602249009 objekt nr trinkwasser', filter: 'ch.so.afu.wasserbewirtschaftung.trinkwasserversorgung_geschuetzt', auth: true },
    { searchtext: '640245019 objekt nr versickerung', filter: 'ch.so.afu.wasserbewirtschaftung.versickerungsschacht' },
    { searchtext: '640245019 objekt nr versickerung', filter: 'ch.so.afu.wasserbewirtschaftung.versickerungsschacht_geschuetzt', auth: true },

    // Amt für Geoinformation
    { searchtext: 'solothurn bezirk name', filter: 'ch.so.agi.bezirksgrenzen' },
    { searchtext: '190688569 gebäude', filter: 'ch.so.agi.av.bodenbedeckung' },
    { searchtext: '1216 so0300002511 parzellierung', filter: 'ch.so.agi.av.gb2av.controlling_vollzugsmeldungen' },
    { searchtext: '1164 SO0200002426 parzellierung', filter: 'ch.so.agi.av.gb2av.controlling_mutationen' },
    { searchtext: 'holle nunningen flurname', filter: 'ch.so.agi.av.nomenklatur.flurnamen' },
    { searchtext: 'schürmatt 3 4655 stüsslingen', filter: 'ch.so.agi.av.gebaeudeadressen.gebaeudeeingaenge' },
    { searchtext: 'bahnhofplatz olten geländename', filter: 'ch.so.agi.av.nomenklatur.gelaendenamen' },
    { searchtext: 'aeschi (so) 2511 gemeinde', filter: 'ch.so.agi.gemeindegrenzen' },
    { searchtext: 'ch181232069746 liegenschaft egrid', filter: 'ch.so.agi.av.grundstuecke.rechtskraeftig' },
    { searchtext: '1013 breitenbach gb-nr', filter: 'ch.so.agi.av.grundstuecke.projektierte' },

    // Amt für Landwirtschaft
    { searchtext: '394047 bienenstandort', filter: 'ch.so.alw.bienenstandorte_und_sperrgebiete.bienenstandorte' },
    { searchtext: '68076 bienenstandort', filter: 'ch.so.alw.bienenstandorte_und_sperrgebiete.bienenstandorte_geschuetzt', auth: true },
    { searchtext: '794621 geoid kultur', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kultur_punktelement_bff_qualitaetsstufe_I' },
    { searchtext: '794621 geoid kultur', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kultur_punktelement_bff_qualitaetsstufe_I_geschuetzt', auth: true },
    { searchtext: '230527 geoid kultur', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_bff_qualitaetsstufe_I' },
    { searchtext: '676736 geoid kultur', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_bff_qualitaetsstufe_I_geschuetzt', auth: true },
    { searchtext: '883484 geoid kultur', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_hauptkategorien' },
    { searchtext: '235326 geoid kultur', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_hauptkategorien_geschuetzt', auth: true },

    // Amt für Raumplanung
    { searchtext: 'rymatt naturreservat name', filter: 'ch.so.arp.naturreservate.reservate' },
    // { searchtext: 'a', filter: 'ch.so.arp.baugis.geschaefte' },

    // Amt für Verkehr und Tiefbau
    { searchtext: '4920 kantonsstrasse nr', filter: 'ch.so.avt.kantonsstrassen_achsen' },
    { searchtext: '1100-1 kantonsstrasse nr bezeichnung', filter: 'ch.so.avt.kantonsstrassen_bezugspunkte' },
    { searchtext: '286 verkehrszählstelle name', filter: 'ch.so.avt.verkehrszaehlstellen' },
    { searchtext: 'burg im leimental dorfplatz', filter: 'ch.so.avt.oev.haltestellen' },

    // Amt für Wald, Jagd und Fischerei
    { searchtext: '101 fischerei', filter: 'ch.so.awjf.gewaesser.patentgewaesser' },//funktioniert auch in PROD nicht, simi-t: Such-Ident = ch.so.awjf.gewaesser.patentgewaesser gesetzt
    { searchtext: '101 fischereinutzung fischereireviere id', filter: 'ch.so.awjf.gewaesser.fischereireviere' },
    { searchtext: '42865 bestandestyp id', filter: 'ch.so.awjf.bestandeskarte_wald_flaechen' },
    { searchtext: '42865 waldplan eigentum id', filter: 'ch.so.awjf.waldplan.waldeigentum' },
    { searchtext: '42865 waldplan funktion id', filter: 'ch.so.awjf.waldplan.waldfunktion' },
    { searchtext: '42590 waldplan typ id', filter: 'ch.so.awjf.waldplan.waldplantyp' },
    { searchtext: 'seew-11 schutzwald perimeter name', filter: 'ch.so.awjf.schutzwaldausscheidung' },
    { searchtext: 'seew-11 schutzwald naturgefahr name', filter: 'ch.so.awjf.schutzwald_hauptgefahrenpotentiale' },
    { searchtext: 'vögel auf dem born', filter: 'ch.so.awjf.waldwanderwege_posten' },

    // Gesundheitsamt
    { searchtext: 'berit klinik goldach standortname', filter: 'ch.so.gesa.leistungserbringerstandorte_erreichbarkeitsanalyse' }

];

// API-Endpunkte
const PROD_BASE_URL = 'geo.so.ch';
const TEST_BASE_URL = 'geo-t.so.ch';

class ApiComparator {
    constructor() {
        this.results = [];
        this.filterPrefix = filterPrefix;
        this.cookies = '';
        this.lock = Promise.resolve();

    }

    // Testfälle basierend auf Filter-Präfix filtern
    getFilteredTestCases() {
        if (!this.filterPrefix) {
            return testCases;
        }

        const filtered = testCases.filter(testCase =>
            testCase.filter.startsWith(this.filterPrefix)
        );

        //remove filter, if prefix='no'
        if (filterPrefix && filterPrefix.toLowerCase() == 'no') {
            filtered.forEach(testCase => {
                testCase.filter = '';
            });
        }

        console.log(`🔍 Filter aktiv: "${this.filterPrefix}"`);
        console.log(`📊 Gefilterte Tests: ${filtered.length}/${testCases.length}\n`);

        return filtered;
    }

    // HTTP GET Request mit axios
    async makeRequest(hostname, path, username = null, password = null, useCookies = false, saveCookies = false) {
        const url = `https://${hostname}${path}`;

        const config = {
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Node.js API Comparator',
                'Accept': 'application/json',
            },
            timeout: 10000,
            maxRedirects: 5,  // Anzahl erlaubter Redirects (Standard: 5)
            validateStatus: (status) => status < 400 // Nur Status < 400 als erfolgreich betrachten
        };

        // Basic Auth
        if (username && password) {
            config.auth = {
                username: username,
                password: password
            };
        }

        // Cookies senden wenn vorhanden und gewünscht
        if (useCookies && this.cookies) {
            config.headers['Cookie'] = this.cookies;
        }

        try {
            // Lock-Mechanismus beibehalten falls erforderlich
            await this.lock;

            const response = await axios(config);

            // Cookies speichern wenn gewünscht
            if (saveCookies && response.headers['set-cookie']) {
                this.cookies = response.headers['set-cookie']
                    .map(cookie => cookie.split(';')[0])
                    .join('; ');
            }

            return {
                statusCode: response.status,
                data: response.data, // axios parsed JSON automatisch
                headers: response.headers
            };

        } catch (error) {
            if (error.response) {
                // Server antwortete mit Status >= 400
                throw {
                    statusCode: error.response.status,
                    data: error.response.data,
                    headers: error.response.headers
                };
            } else if (error.request) {
                // Request wurde gesendet aber keine Antwort erhalten
                throw new Error('No response received');
            } else if (error.code === 'ECONNABORTED') {
                // Timeout
                throw new Error('Request timeout');
            } else {
                // Anderer Fehler
                throw error;
            }
        }
    }

    // // HTTP GET Request mit Promise
    // async makeRequest(hostname, path, username = null, password = null, useCookies = false, saveCookies = false) {
    //     return new Promise((resolve, reject) => {
    //         const options = {
    //             hostname: hostname,
    //             port: 443,
    //             path: path,
    //             method: 'GET',
    //             headers: {
    //                 'User-Agent': 'Node.js API Comparator',
    //                 'Accept': 'application/json',
    //             }
    //         };

    //         // Basic Auth
    //         if (username && password) {
    //             const credentials = Buffer.from(`${username}:${password}`).toString('base64');
    //             options.headers['Authorization'] = `Basic ${credentials}`;
    //         }

    //         this.lock = this.lock.then(() => new Promise(async resolve => {
    //             // Cookies senden wenn vorhanden und gewünscht
    //             if (useCookies && this.cookies) {
    //                 options.headers['Cookie'] = this.cookies;
    //             }
    //             resolve();
    //         }));

    //         const req = https.request(options, (res) => {
    //             let data = '';

    //             if (res.statusCode >= 400) {
    //                 reject({
    //                     statusCode: res.statusCode
    //                 });
    //             }

    //             // Cookies speichern wenn gewünscht
    //             if (saveCookies && res.headers['set-cookie']) {
    //                 this.cookies = res.headers['set-cookie']
    //                     .map(cookie => cookie.split(';')[0])
    //                     .join('; ');
    //             }

    //             res.on('data', (chunk) => {
    //                 data += chunk;
    //             });

    //             res.on('end', () => {
    //                 try {
    //                     const jsonData = JSON.parse(data);
    //                     resolve({
    //                         statusCode: res.statusCode,
    //                         data: jsonData,
    //                         headers: res.headers
    //                     });
    //                 } catch (error) {
    //                     reject(new Error(`makeRequest JSON Parse Error: ${error.message}`));
    //                 }
    //             });
    //         });

    //         req.on('error', (error) => {
    //             reject(error);
    //         });

    //         req.setTimeout(10000, () => {
    //             req.destroy();
    //             reject(new Error('Request timeout'));
    //         });

    //         req.end();
    //     });
    // }

    async loginApi(hostname, username, password) {
        const path = '/api-auth/search/v2/?searchtext=bla';
        try {

            await this.makeRequest(hostname, path, username, password, false, true)
                .then(response => {
                    console.log('  Login successful, cookies saved for: ' + hostname);
                    // console.log('  Status:', response.statusCode);
                });

        } catch (error) {
            console.error('loginApi Error:', error);
            throw error;
        }
    }

    // Einzelnen API-Aufruf durchführen
    async callApi(hostname, searchtext, filter, auth = false, limit = 25) {

        let backend = 'api';
        let username = null, password = null;
        if (auth) {
            backend = 'api-auth';
            username = process.env.username;
            password = process.env.password;
        }
        const path = `/${backend}/search/v2/?searchtext=${encodeURIComponent(searchtext)}&filter=${encodeURIComponent(filter)}&limit=${limit}`;

        try {
            const startTime = Date.now();

            const response = await this.makeRequest(hostname, path, username, password); //, false, false);

            const endTime = Date.now();

            return {
                success: true,
                hostname: hostname,
                path: path,
                statusCode: response.statusCode,
                responseTime: endTime - startTime,
                resultCount: response.data.results ? response.data.results.length : 0,
                data: response.data,
                headers: response.headers
            };
        } catch (error) {
            return {
                success: false,
                hostname: hostname,
                path: path,
                error: error.message,
                responseTime: null,
                resultCount: 0,
                data: null
            };
        }
    }

    // Zwei API-Responses vergleichen
    compareResponses(prodResponseAll, testResponseAll, filterdataproduct = false) {

        let prodResponse = '', testResponse = '';
        if (filterdataproduct) {
            prodResponse = prodResponseAll.data.results.filter(item => item.dataproduct);
            testResponse = testResponseAll.data.results.filter(item => item.dataproduct);
        }
        else {
            prodResponse = prodResponseAll.data.results.filter(item => item.feature);;
            testResponse = testResponseAll.data.results.filter(item => item.feature);;
        }

        const comparison = {
            statusCodeMatch: prodResponseAll.statusCode === testResponseAll.statusCode,
            resultCountMatch: prodResponse.length === testResponse.length && prodResponse.length > 0,
            responseTimeDiff: testResponseAll.responseTime - prodResponseAll.responseTime,
            resultStructureMatch: this.compareDataStructure(prodResponse, testResponse),
            contentMatch: this.compareContent(prodResponse, testResponse, filterdataproduct)
        };

        return comparison;
    }

    // Datenstruktur vergleichen
    compareDataStructure(data1, data2) {
        if (!data1 && !data2) return true;
        if (!data1 || !data2) return false;

        const keys1 = Object.keys(data1).sort();
        const keys2 = Object.keys(data2).sort();

        return JSON.stringify(keys1) === JSON.stringify(keys2);
    }

    // Inhalte vergleichen (auf geo.so.ch API-Struktur angepasst)
    compareContent(data1, data2, comparedataproduct = false) {
        if (!data1 && !data2) return true;
        if (!data1 || !data2) return false;

        // Vergleiche result_counts
        // if (!this.compareResultCounts(data1.result_counts, data2.result_counts)) {
        //     //return false;
        //     console.log('    ! kein Vergleich der json.result_counts');
        // }

        // Vergleiche results Array
        if (data1 && data2) {
            if (data1.length !== data2.length) return false;

            if (comparedataproduct) {
                // Vergleiche jeden Eintrag
                for (let i = 0; i < data1.length; i++) {
                    if (!this.compareDataproduct(data1[i], data2[i])) {
                        return false;
                    }
                }
            }
            else {
                // Vergleiche jeden Eintrag
                for (let i = 0; i < data1.length; i++) {
                    if (!this.compareFeature(data1[i], data2[i])) {
                        return false;
                    }
                }
            }

            return true;
        }

        // Fallback: kompletter JSON-Vergleich
        return JSON.stringify(data1) === JSON.stringify(data2);
    }

    // Vergleiche result_counts Arrays
    compareResultCounts(counts1, counts2) {
        if (!counts1 && !counts2) return true;
        if (!counts1 || !counts2) return false;
        if (counts1.length !== counts2.length) return false;

        // Sortiere beide Arrays nach dataproduct_id für konsistenten Vergleich
        const sorted1 = [...counts1].sort((a, b) => a.dataproduct_id.localeCompare(b.dataproduct_id));
        const sorted2 = [...counts2].sort((a, b) => a.dataproduct_id.localeCompare(b.dataproduct_id));

        for (let i = 0; i < sorted1.length; i++) {
            const rc1 = sorted1[i];
            const rc2 = sorted2[i];

            if (rc1.count !== rc2.count ||
                rc1.dataproduct_id !== rc2.dataproduct_id ||
                rc1.filterword !== rc2.filterword) {
                return false;
            }
        }

        return true;
    }

    // Vergleiche einzelne Features
    compareFeature(result1, result2) {
        if (!result1 && !result2) return true;
        if (!result1 || !result2) return false;

        const feature1 = result1.feature;
        const feature2 = result2.feature;

        if (!feature1 && !feature2) return true;
        if (!feature1 || !feature2) return false;

        // Vergleiche kritische Feature-Eigenschaften
        const criticalFields = [
            'dataproduct_id',
            'display',
            'id_field_name',
            'id_field_type'
            //'srid'
        ];

        for (const field of criticalFields) {
            if (feature1[field] !== feature2[field]) {
                return false;
            }
        }

        // Vergleiche bbox (Koordinaten-Array)
        if (feature1.bbox && feature1.bbox && !this.compareBbox(feature1.bbox, feature2.bbox)) {
            return false;
        }

        return true;
    }

    // Vergleiche einzelne Features
    compareDataproduct(result1, result2) {
        if (!result1 && !result2) return true;
        if (!result1 || !result2) return false;

        const feature1 = result1.dataproduct;
        const feature2 = result2.dataproduct;

        if (!feature1 && !feature2) return true;
        if (!feature1 || !feature2) return false;

        // Vergleiche kritische Feature-Eigenschaften
        const criticalFields = [
            'dataproduct_id',
            'display',
            'dset_info',
            'stacktype',
            'type'
        ];

        for (const field of criticalFields) {
            if (feature1[field] !== feature2[field]) {
                return false;
            }
        }

        return true;
    }

    // Vergleiche Bounding Box Koordinaten
    compareBbox(bbox1, bbox2) {
        if (!bbox1 && bbox2) return true;   //if bbox1 not defined: true
        if (!bbox1 || !bbox2) return false;
        if (bbox1.length !== bbox2.length) return false;

        // Vergleiche alle Koordinaten
        for (let i = 0; i < bbox1.length; i++) {
            if (bbox1[i] !== bbox2[i]) {
                return false;
            }
        }

        return true;
    }

    // Hauptvergleichsfunktion
    async runComparison() {
        console.log('🚀 Starte API-Vergleich...\n');

        console.log(`💥 ${PROD_BASE_URL} vs. ${TEST_BASE_URL} 💥\n`);

        // Gefilterte Testfälle abrufen
        const activeTestCases = this.getFilteredTestCases();

        if (activeTestCases.length === 0) {
            console.log(`❌ Keine Tests gefunden für Filter: "${this.filterPrefix}"`);
            return;
        }

        // try {
        //     const host = PROD_BASE_URL;
        //     await this.loginApi(host, process.env.username, process.env.password);
        //     console.log(`  ✅ Login erfolgreich ${host}\n`);

        // } catch (error) {
        //     console.error(`❌ Fehler bei Login`);
        //     throw new Error("Login Fehler - THE END.");
        // }

        for (let i = 0; i < activeTestCases.length; i++) {
            const testCase = activeTestCases[i];

            console.log(`📋 Test ${i + 1}/${activeTestCases.length}: ${testCase.searchtext} - ${testCase.filter} ${testCase.auth ? ' 🔒 AUTHENTICATED 🔒' : ''}`);

            try {
                // Parallele Aufrufe an beide APIs
                const [prodResponse, testResponse] = await Promise.all([
                    this.callApi(PROD_BASE_URL, testCase.searchtext, testCase.filter, testCase.auth || false),
                    this.callApi(TEST_BASE_URL, testCase.searchtext, testCase.filter, testCase.auth || false)
                ]);

                // Vergleich durchführen
                let comparison = null;
                if (prodResponse.success && testResponse.success) {

                    if (testCase.filter.includes('background') || testCase.filter.includes('foreground')) {
                        comparison = this.compareResponses(prodResponse, testResponse, true);
                    }
                    else {
                        comparison = this.compareResponses(prodResponse, testResponse);
                    }
                }

                // Ergebnis speichern
                const result = {
                    testCase: testCase,
                    production: prodResponse,
                    test: testResponse,
                    comparison: comparison,
                    timestamp: new Date().toISOString()
                };

                this.results.push(result);

                // Kurze Zusammenfassung ausgeben
                this.printTestSummary(result, i + 1);

            } catch (error) {
                console.error(`❌ Fehler bei Test ${i + 1}: ${error.message}`);
            }

            // Kurze Pause zwischen den Requests
            if (i < activeTestCases.length - 1) {
                await this.sleep(100);
            }
        }

        // Gesamtergebnis ausgeben
        this.printFinalSummary();

        // Ergebnisse in Datei speichern
        this.saveResults();
    }

    // Kurze Zusammenfassung für jeden Test
    printTestSummary(result, testNumber) {
        const prod = result.production;
        const test = result.test;
        const comp = result.comparison;

        if (!prod.success || !test.success) {
            console.log(`   ❌ Fehler: PROD=${prod.success ? 'OK' : prod.error}, TEST=${test.success ? 'OK' : test.error}`);
            return;
        }

        const statusIcon = comp.statusCodeMatch ? '✅' : '❌';
        const countIcon = comp.resultCountMatch ? '✅' : '❌';
        const contentIcon = comp.contentMatch ? '✅' : '⚠️';
        const structureIcon = comp.resultStructureMatch ? '✅' : '❌';

        console.log(`   ${statusIcon} Status: ${prod.statusCode} vs ${test.statusCode}`);
        console.log(`   ${countIcon} Anzahl: ${prod.resultCount} vs ${test.resultCount}`);
        console.log(`   ${contentIcon} Inhalt: ${comp.contentMatch ? 'Identisch' : 'Unterschiedlich'}`);

        // Zusätzliche Details bei Inhaltunterschieden
        if (!comp.contentMatch && prod.data && test.data) {
            this.printContentDifferences(prod.data, test.data);
        }
        console.log(`   ${structureIcon} Struktur: ${comp.resultStructureMatch ? 'Identisch' : 'Unterschiedlich'}`);
        console.log(`   ⏱️  Zeit: ${prod.responseTime}ms vs ${test.responseTime}ms (Δ${comp.responseTimeDiff > 0 ? '+' : ''}${comp.responseTimeDiff}ms)`);


        console.log('');
    }

    // Detaillierte Unterschiede bei Inhalten anzeigen
    printContentDifferences(prodData, testData) {
        // Result Counts Unterschiede
        if (prodData.result_counts && testData.result_counts) {
            const prodCounts = prodData.result_counts.length;
            const testCounts = testData.result_counts.length;
            if (prodCounts !== testCounts) {
                console.log(`     📊 Result Counts: PROD=${prodCounts}, TEST=${testCounts}`);
            }
        }

        // Results Array Unterschiede
        if (prodData.results && testData.results) {
            const prodResults = prodData.results.length;
            const testResults = testData.results.length;
            if (prodResults !== testResults) {
                console.log(`     📋 Results: PROD=${prodResults}, TEST=${testResults}`);
            } else if (prodResults > 0 && testResults > 0) {
                // Vergleiche ersten Eintrag für Details
                const prodFirst = prodData.results[0].feature;
                const testFirst = testData.results[0].feature;

                if (prodFirst && testFirst) {
                    // Vergleiche kritische Feature-Eigenschaften
                    const criticalFields = [
                        'id_field_name',
                        'id_field_type',
                        //'srid'
                        'dataproduct_id',
                        'display',
                        'dset_info',
                        'stacktype',
                        'type'
                    ];

                    for (const field of criticalFields) {
                        if (prodFirst[field] !== testFirst[field]) {
                            console.log(`     📝 ${field}: PROD="${prodFirst[field]}", TEST="${testFirst[field]}"`);
                        }
                    }
                    if (!this.compareBbox(prodFirst.bbox, testFirst.bbox)) {
                        console.log(`     📝 bbox: PROD="${prodFirst.bbox}", TEST="${testFirst.bbox}"`);
                    }
                }
            }
        }
    }

    // Finale Zusammenfassung
    printFinalSummary() {
        console.log('📊 GESAMTZUSAMMENFASSUNG');
        console.log('========================');

        const successful = this.results.filter(r => r.production.success && r.test.success);
        const failed = this.results.filter(r => !r.production.success || !r.test.success);

        console.log(`✅ Erfolgreiche API-Vergleiche: ${successful.length}/${this.results.length}`);
        console.log(`❌ Fehlgeschlagene API-Vergleiche: ${failed.length}/${this.results.length} \n`);

        if (successful.length > 0) {
            const statusMatches = successful.filter(r => r.comparison.statusCodeMatch).length;
            const countMatches = successful.filter(r => r.comparison.resultCountMatch).length;
            const contentMatches = successful.filter(r => r.comparison.contentMatch).length;

            console.log(`🎯 Status Code Übereinstimmungen: ${statusMatches}/${successful.length}`);
            console.log(`🔢 Ergebnis-Anzahl Übereinstimmungen: ${countMatches}/${successful.length}`);
            console.log(`📄 Inhalt Übereinstimmungen: ${contentMatches}/${successful.length}`);

            // Durchschnittliche Response-Zeiten
            const avgProdTime = successful.reduce((sum, r) => sum + r.production.responseTime, 0) / successful.length;
            const avgTestTime = successful.reduce((sum, r) => sum + r.test.responseTime, 0) / successful.length;

            console.log(`⏱️  Durchschnittliche Response-Zeit:`);
            console.log(`   Production: ${Math.round(avgProdTime)}ms`);
            console.log(`   Test: ${Math.round(avgTestTime)}ms`);
            console.log(`   Differenz: ${Math.round(avgTestTime - avgProdTime)}ms`);
        }

        console.log('\n💾 Detaillierte Ergebnisse wurden in comparison_results.json gespeichert');
    }

    // Ergebnisse in JSON-Datei speichern
    saveResults() {
        const fileName = `comparison_results_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;

        try {
            fs.writeFileSync(fileName, JSON.stringify(this.results, null, 2));
            console.log(`📁 Ergebnisse gespeichert in: ${fileName}`);
        } catch (error) {
            console.error(`❌ Fehler beim Speichern: ${error.message}`);
        }
    }

    // Hilfsfunktion für Verzögerung
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Hilfe-Text anzeigen
function showHelp() {
    console.log(`
🔧 API-Vergleichstool für '${PROD_BASE_URL}' und '${TEST_BASE_URL}'

VERWENDUNG:
  node geo_api_comparison.js [OPTIONEN]

OPTIONEN:
  --filter=PREFIX    Nur Filter mit bestimmtem Präfix testen
  --help             Diese Hilfe anzeigen

BEISPIELE:
  node geo_api_comparison.js
    → Alle Tests ausführen

  node geo_api_comparison.js --filter=ch.so.agi
    → Nur AGI-Filter testen

  node geo_api_comparison.js --filter=ch.so.afu
    → Nur AFU-Filter testen

  node geo_api_comparison.js --filter=ch.so.awjf
    → Nur AWJF-Filter testen

VERFÜGBARE FILTER-PRÄFIXE:
  ch.so.ada    - Archäologie
  ch.so.afu    - Amt für Umwelt
  ch.so.agi    - Amt für Geoinformation
  ch.so.alw    - Amt für Landwirtschaft
  ch.so.arp    - Amt für Raumplanung
  ch.so.avt    - Amt für Verkehr und Tiefbau
  ch.so.awjf   - Amt für Wald, Jagd und Fischerei
  ch.so.gesa   - Gesundheitsamt
`);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.argv[1] === __filename) {
    const args = process.argv.slice(2);

    // Hilfe anzeigen falls gewünscht
    if (args.includes('--help') || args.includes('-h')) {
        showHelp();
        process.exit(0);
    }

    const comparator = new ApiComparator();
    comparator.runComparison().catch(console.error);
}

export default ApiComparator;
