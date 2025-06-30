import axios from 'axios';
import fs from 'fs';
import util from 'util';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { parseArgs } from 'util';
import 'dotenv/config';
import readline from 'readline';

class APIComparator {
    constructor(options = {}) {
        this.results = [];
        this.baseURL1 = 'https://geo.so.ch/api/search/v2/';
        this.baseURL2 = 'https://geo-t.so.ch/api/search/v2/';
        this.baseAuthURL1 = 'https://geo.so.ch/api-auth/search/v2/';
        this.baseAuthURL2 = 'https://geo-t.so.ch/api-auth/search/v2/';
        this.filterPrefix = options.filterPrefix || null; // CLI Filter
        this.summary = {
            totalTests: 0,
            passed: 0,
            failed: 0,
            warnings: 0,
            structuralDifferences: 0,
            contentDifferences: 0,
            ignoredFields: 0,
            emptyResultsTests: 0,
            skippedTests: 0
        };

        // Basic Auth Credentials (aus Umgebungsvariablen oder Standard)
        this.basicAuth = {
            username: process.env.username,
            password: process.env.password
        };

        // Felder die beim Vergleich ignoriert werden
        this.ignoreFields = [
            'feature_id',
            'srid',
            'timestamp',
            'created_at',
            'updated_at',
            'id',
            'uuid',
            'last_modified',
            'version',
            'result_counts'
        ];
    }

    // Testfälle filtern basierend auf CLI-Parameter
    getFilteredTestCases() {
        const allTestCases = this.getTestCases();

        if (!this.filterPrefix) {
            return allTestCases;
        }

        const filteredCases = allTestCases.filter(testCase => {
            return testCase.filter.startsWith(this.filterPrefix);
        });

        console.log(`🔍 Filter aktiv: "${this.filterPrefix}"`);
        console.log(`📋 ${filteredCases.length} von ${allTestCases.length} Tests werden ausgeführt`);

        if (filteredCases.length === 0) {
            console.log(`⚠️  Kein Testfall gefunden, der mit "${this.filterPrefix}" beginnt`);
            console.log(`📝 Verfügbare Filter:`);
            allTestCases.forEach(tc => {
                if (tc.filter) {
                    console.log(`   - ${tc.filter} `);
                }
            });
        }

        return filteredCases;
    }
    // Testfälle definieren
    getTestCases() {
        return [

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
            { "searchtext": "bauzonengrenzen", "filter": "background,foreground,g", "description": "ch.so.arp.bauzonengrenzen", "auth": false },
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
            { "searchtext": "vereinbarungsflächen mehrjahresprogramm natur und landschaft (mjpnl), vereinbarungsflächen mjpnl", "filter": "background,foreground", "description": "ch.so.arp.naturschutzobjekte.mjpnl_vereinbarungsflaechen", "auth": false },
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
            { "searchtext": "wildtierkorridore", "filter": "background,foreground", "description": "ch.so.awjf.wildtierkorridore", "auth": false },
            { "searchtext": "waldplan (in bearbeitung, geschützt)", "filter": "background,foreground", "description": "ch.so.awjf.waldplan_in_bearbeitung", "auth": true },
            { "searchtext": "bauzonenstatistik (geschützt)", "filter": "background,foreground", "description": "ch.so.arp.bauzonenstatistik", "auth": true },
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
            { searchtext: '115/300', filter: 'ch.so.ada.archaeologie.flaechenfundstellen' },
            { searchtext: '115 300', filter: 'ch.so.ada.archaeologie.flaechenfundstellen_geschuetzt', auth: true },
            { searchtext: '115 270', filter: 'ch.so.ada.archaeologie.punktfundstellen_geschuetzt', auth: true },
            { searchtext: '115/270', filter: 'ch.so.ada.archaeologie.punktfundstellen' },

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
            // {
            //     name: 'Leere Suche',
            //     searchtext: '',
            //     filter: '',
            //     auth: false,
            //     dontExpectResults: true // Hier erwarten wir keine/wenige Ergebnisse
            // }
        ];
    }

    // HTTP Request mit Axios und optionaler Basic Auth
    async makeRequest(url, useAuth = false) {
        try {
            const config = {
                timeout: 10000,
                headers: {
                    'User-Agent': 'API-Comparator/1.0',
                    'Accept': 'application/json'
                }
            };

            // Basic Auth hinzufügen wenn erforderlich
            if (useAuth) {
                config.auth = {
                    username: this.basicAuth.username,
                    password: this.basicAuth.password
                };
            }

            const response = await axios.get(url, config);

            return {
                statusCode: response.status,
                headers: response.headers,
                data: response.data
            };
        } catch (error) {
            if (error.response) {
                // Server responded with error status
                return {
                    statusCode: error.response.status,
                    headers: error.response.headers,
                    data: error.response.data,
                    error: `HTTP ${error.response.status}: ${error.response.statusText}`
                };
            } else if (error.request) {
                // Request was made but no response received
                throw new Error(`Network error: ${error.message}`);
            } else {
                // Something else happened
                throw new Error(`Request error: ${error.message}`);
            }
        }
    }

    // URL Builder
    buildURL(baseURL, params) {
        const url = new URL(baseURL);
        Object.keys(params).forEach(key => {
            if (params[key] !== undefined && params[key] !== '') {
                url.searchParams.append(key, params[key]);
            }
        });
        return url.toString();
    }

    // Analysiere Response-Daten auf leere Results
    analyzeResponseData(data, apiName) {
        const analysis = {
            hasResults: false,
            resultCount: 0,
            structure: null,
            warnings: []
        };

        if (!data) {
            analysis.warnings.push(`${apiName}: Keine Daten erhalten`);
            return analysis;
        }

        // Prüfe verschiedene mögliche Strukturen
        if (data.results) {
            analysis.resultCount = Array.isArray(data.results) ? data.results.length : 0;
            analysis.hasResults = analysis.resultCount > 0;
            analysis.structure = 'results_array';
        } else if (Array.isArray(data)) {
            analysis.resultCount = data.length;
            analysis.hasResults = analysis.resultCount > 0;
            analysis.structure = 'direct_array';
        } else if (data.features) {
            analysis.resultCount = Array.isArray(data.features) ? data.features.length : 0;
            analysis.hasResults = analysis.resultCount > 0;
            analysis.structure = 'geojson_features';
        } else {
            analysis.structure = 'unknown';
            analysis.warnings.push(`${apiName}: Unbekannte Datenstruktur`);
        }

        if (!analysis.hasResults && analysis.structure !== 'unknown') {
            analysis.warnings.push(`${apiName}: Leeres Results-Array (${analysis.resultCount} Elemente)`);
        }

        return analysis;
    }

    // Prüfen ob ein Feld ignoriert werden soll
    shouldIgnoreField(path) {
        // Direkter Feldname
        const fieldName = path.split('.').pop().split('[')[0];
        if (this.ignoreFields.includes(fieldName)) {
            return true;
        }

        // Pfad-basierte Ignorierung (z.B. "results[0].feature_id")
        return this.ignoreFields.some(ignoreField => {
            return path.includes(ignoreField) || path.endsWith(ignoreField);
        });
    }

    // Tiefe Objektvergleiche mit Ignorierung bestimmter Felder
    compareObjects(_obj1, _obj2, path = '') {
        const differences = [];

        let obj1, obj2;
        // if (Array.isArray(_obj1.results) && Array.isArray(_obj2.results)) {
            obj1 = sortJsonDeep(_obj1);
            obj2 = sortJsonDeep(_obj2);
        // }
        // else {
        //     obj1 = _obj1;
        //     obj2 = _obj2;
        // }


        // Prüfen ob dieses Feld ignoriert werden soll
        if (this.shouldIgnoreField(path)) {
            this.summary.ignoredFields++;
            return differences; // Leeres Array - keine Unterschiede für ignorierte Felder
        }

        // Typ-Vergleich
        if (typeof obj1 !== typeof obj2) {
            differences.push({
                type: 'type_mismatch',
                path: path,
                api1: typeof obj1,
                api2: typeof obj2
            });
            return differences;
        }

        // Null-Werte behandeln
        if (obj1 === null || obj2 === null) {
            if (obj1 !== obj2) {
                differences.push({
                    type: 'null_mismatch',
                    path: path,
                    api1: obj1,
                    api2: obj2
                });
            }
            return differences;
        }

        // Arrays vergleichen
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            if (obj1.length !== obj2.length) {
                differences.push({
                    type: 'array_length_mismatch',
                    path: path,
                    api1: obj1.length,
                    api2: obj2.length
                });
            }

            const maxLength = Math.max(obj1.length, obj2.length);
            for (let i = 0; i < maxLength; i++) {
                const newPath = `${path}[${i}]`;
                if (i >= obj1.length) {
                    differences.push({
                        type: 'missing_in_api1',
                        path: newPath,
                        api2: obj2[i]
                    });
                } else if (i >= obj2.length) {
                    differences.push({
                        type: 'missing_in_api2',
                        path: newPath,
                        api1: obj1[i]
                    });
                } else {
                    differences.push(...this.compareObjects(obj1[i], obj2[i], newPath));
                }
            }
            return differences;
        }

        // Objekte vergleichen
        if (typeof obj1 === 'object' && typeof obj2 === 'object') {
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);
            const allKeys = [...new Set([...keys1, ...keys2])];

            for (const key of allKeys) {
                const newPath = path ? `${path}.${key}` : key;

                // Feld ignorieren falls es in der Ignore-Liste steht
                if (this.shouldIgnoreField(newPath)) {
                    this.summary.ignoredFields++;
                    continue;
                }

                if (!(key in obj1)) {
                    differences.push({
                        type: 'missing_in_api1',
                        path: newPath,
                        api2: obj2[key]
                    });
                } else if (!(key in obj2)) {
                    differences.push({
                        type: 'missing_in_api2',
                        path: newPath,
                        api1: obj1[key]
                    });
                } else {
                    differences.push(...this.compareObjects(obj1[key], obj2[key], newPath));
                }
            }
            return differences;
        }

        // Primitive Werte vergleichen
        if (obj1 !== obj2) {
            differences.push({
                type: 'value_mismatch',
                path: path,
                api1: obj1,
                api2: obj2
            });
        }

        return differences;
    }

    // Strukturanalyse
    analyzeStructure(obj, path = '') {
        const structure = {};

        if (obj === null) {
            return 'null';
        }

        if (Array.isArray(obj)) {
            if (obj.length === 0) {
                return 'empty_array';
            }
            // Struktur des ersten Elements analysieren
            return `array[${this.analyzeStructure(obj[0])}]`;
        }

        if (typeof obj === 'object') {
            const keys = Object.keys(obj).sort();
            const objStructure = {};
            keys.forEach(key => {
                objStructure[key] = this.analyzeStructure(obj[key], path ? `${path}.${key}` : key);
            });
            return objStructure;
        }

        return typeof obj;
    }

    // Einzelnen Testfall ausführen
    async runTestCase(testCase) {
        // console.log(`\n🔍 Teste: `);
        console.log(`   Suchtext: "${testCase.searchtext}"`);
        if (testCase.description) console.log(`   Details: "${testCase.description}"`);
        console.log(`   Filter: "${testCase.filter}"`);
        console.log(`   Auth: ${testCase.auth ? '🔒 Ja' : '🔓 Nein'}`);

        // Standard: Erwarte Ergebnisse (außer explizit dontExpectResults: true)
        const expectResults = !testCase.dontExpectResults || true;
        console.log(`   Erwarte Ergebnisse: ${expectResults ? '✅ Ja' : '❌ Nein'}`);

        // Prüfen ob Test übersprungen werden soll
        if (this.filterPrefix && !testCase.filter.startsWith(this.filterPrefix)) {
            console.log(`   ⏭️  Übersprungen (Filter stimmt nicht überein)`);
            this.summary.skippedTests++;
            return {
                testCase: testCase,
                timestamp: new Date().toISOString(),
                status: 'skipped',
                reason: `Filter "${testCase.filter}" stimmt nicht mit "${this.filterPrefix}" überein`
            };
        }

        const testResult = {
            testCase: testCase,
            timestamp: new Date().toISOString(),
            status: 'unknown',
            api1: null,
            api2: null,
            api1Analysis: null,
            api2Analysis: null,
            differences: [],
            structuralDifferences: [],
            contentDifferences: [],
            warnings: [],
            error: null
        };

        try {
            // URLs erstellen basierend auf Auth-Requirement
            const params = {
                searchtext: testCase.searchtext,
                filter: testCase.filter
            };

            const baseUrl1 = testCase.auth ? this.baseAuthURL1 : this.baseURL1;
            const baseUrl2 = testCase.auth ? this.baseAuthURL2 : this.baseURL2;

            const url1 = this.buildURL(baseUrl1, params);
            const url2 = this.buildURL(baseUrl2, params);

            console.log(`   API 1: ${url1}`);
            console.log(`   API 2: ${url2}`);

            if (testCase.auth) {
                console.log(`   🔐 Verwende Basic Auth: ${this.basicAuth.username}:***`);
            }

            // Parallel requests mit optionaler Auth
            const [response1, response2] = await Promise.all([
                this.makeRequest(url1, testCase.auth),
                this.makeRequest(url2, testCase.auth)
            ]);

            testResult.api1 = response1;
            testResult.api2 = response2;

            // Auth-Fehler spezifisch behandeln
            if (response1.statusCode === 401 || response2.statusCode === 401) {
                console.log(`   🚫 Authentication Failed - überprüfe Credentials`);
                testResult.warnings.push('Authentication failed - check credentials');
            }

            // Status Codes vergleichen
            if (response1.statusCode !== response2.statusCode) {
                testResult.differences.push({
                    type: 'status_code_mismatch',
                    path: 'statusCode',
                    api1: response1.statusCode,
                    api2: response2.statusCode
                });
            }

            // Nur bei erfolgreichen Responses Inhalte vergleichen
            if (response1.statusCode === 200 && response2.statusCode === 200) {
                // Response-Daten analysieren
                testResult.api1Analysis = this.analyzeResponseData(response1.data, 'API1');
                testResult.api2Analysis = this.analyzeResponseData(response2.data, 'API2');

                // Warnungen sammeln
                testResult.warnings.push(...testResult.api1Analysis.warnings);
                testResult.warnings.push(...testResult.api2Analysis.warnings);

                // Ergebnis-spezifische Logs
                console.log(`   📊 API 1: ${testResult.api1Analysis.resultCount} Ergebnisse (${testResult.api1Analysis.structure})`);
                console.log(`   📊 API 2: ${testResult.api2Analysis.resultCount} Ergebnisse (${testResult.api2Analysis.structure})`);

                // Leere Ergebnisse behandeln
                const bothEmpty = !testResult.api1Analysis.hasResults && !testResult.api2Analysis.hasResults;
                const oneEmpty = testResult.api1Analysis.hasResults !== testResult.api2Analysis.hasResults;

                if (bothEmpty) {
                    this.summary.emptyResultsTests++;
                    if (expectResults) {
                        testResult.warnings.push('Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet');
                        console.log(`   ⚠️  Beide APIs liefern leere Ergebnisse (erwartet: Ergebnisse)`);
                    } else {
                        console.log(`   ℹ️  Beide APIs liefern leere Ergebnisse (wie erwartet)`);
                    }
                }

                if (oneEmpty) {
                    testResult.differences.push({
                        type: 'result_count_mismatch',
                        path: 'results',
                        api1: testResult.api1Analysis.resultCount,
                        api2: testResult.api2Analysis.resultCount
                    });
                    console.log(`   ⚠️  Unterschiedliche Anzahl Ergebnisse: API1(${testResult.api1Analysis.resultCount}) vs API2(${testResult.api2Analysis.resultCount})`);
                }

                // Struktur analysieren
                const structure1 = this.analyzeStructure(response1.data);
                const structure2 = this.analyzeStructure(response2.data);

                if (JSON.stringify(structure1) !== JSON.stringify(structure2)) {
                    testResult.structuralDifferences.push({
                        type: 'structure_mismatch',
                        api1: structure1,
                        api2: structure2
                    });
                }

                // Inhalte vergleichen (nur wenn beide Ergebnisse haben)
                if (testResult.api1Analysis.hasResults && testResult.api2Analysis.hasResults) {
                    const contentDiffs = this.compareObjects(response1.data, response2.data);
                    testResult.contentDifferences = contentDiffs;
                    testResult.differences.push(...contentDiffs);
                } else if (bothEmpty) {
                    // Beide leer - das ist auch ein gültiger Vergleich
                    console.log(`   ℹ️  Beide APIs leer - Inhaltsvergleich übersprungen`);
                }
            }

            // Status bestimmen
            const hasWarnings = testResult.warnings.length > 0;
            const hasDifferences = testResult.differences.length > 0;

            if (!hasDifferences && !hasWarnings) {
                testResult.status = 'passed';
                console.log(`   ✅ Test bestanden`);
            } else if (!hasDifferences && hasWarnings) {
                testResult.status = 'passed_with_warnings';
                this.summary.warnings++;
                console.log(`   ⚠️  Test bestanden mit Warnungen (${testResult.warnings.length})`);
            } else {
                testResult.status = 'failed';
                console.log(`   ❌ Test fehlgeschlagen (${testResult.differences.length} Unterschiede, ${testResult.warnings.length} Warnungen)`);
            }

        } catch (error) {
            testResult.status = 'error';
            testResult.error = error.message;
            console.log(`   💥 Fehler: ${error.message}`);
        }

        return testResult;
    }

    // Bericht formatieren
    formatReport(results) {
        let report = `
# API-Vergleichsbericht
Generiert am: ${new Date().toLocaleString('de-CH')}

## Zusammenfassung
- **Gesamte Tests:** ${this.summary.totalTests}
- **Übersprungen:** ${this.summary.skippedTests}
- **Bestanden:** ${this.summary.passed}
- **Bestanden mit Warnungen:** ${this.summary.warnings}
- **Fehlgeschlagen:** ${this.summary.failed}
- **Tests mit leeren Ergebnissen:** ${this.summary.emptyResultsTests}
- **Strukturelle Unterschiede:** ${this.summary.structuralDifferences}
- **Inhaltliche Unterschiede:** ${this.summary.contentDifferences}
- **Ignorierte Felder:** ${this.summary.ignoredFields}

## API-Endpunkte
- **Produktiv (öffentlich):** ${this.baseURL1}
- **Test (öffentlich):** ${this.baseURL2}
- **Produktiv (authentifiziert):** ${this.baseAuthURL1}
- **Test (authentifiziert):** ${this.baseAuthURL2}

## Ignorierte Felder
Die folgenden Felder werden beim Vergleich ignoriert:
${this.ignoreFields.map(field => `- \`${field}\``).join('\n')}

## Detaillierte Ergebnisse

`;

        results.forEach((result, index) => {
            const statusEmoji = {
                'passed': '✅',
                'passed_with_warnings': '⚠️',
                'failed': '❌',
                'error': '💥'
            };

            const statusText = {
                'passed': 'Bestanden',
                'passed_with_warnings': 'Bestanden mit Warnungen',
                'failed': 'Fehlgeschlagen',
                'error': 'Fehler'
            };

            report += `### Test ${index + 1}: \n`;

            if (result.status === 'skipped') {
                report += `**Status:** ⏭️ Übersprungen\n`;
                report += `**Grund:** ${result.reason}\n`;
                report += `**Filter:** "${result.testCase.filter}"\n\n`;
                report += `---\n\n`;
                return;
            }
            report += `**Status:** ${statusEmoji[result.status] || '❓'} ${statusText[result.status] || result.status}\n`;
            report += `**Suchtext:** "${result.testCase.searchtext}"\n`;
            report += `**Filter:** "${result.testCase.filter}"\n`;
            report += `**Authentifizierung:** ${result.testCase.auth ? '🔒 Basic Auth' : '🔓 Öffentlich'}\n`;
            report += `**Erwartete Ergebnisse:** ${!result.testCase.dontExpectResults ? '✅ Ja' : '❌ Nein'}\n`;
            report += `**Zeit:** ${new Date(result.timestamp).toLocaleString('de-CH')}\n\n`;

            if (result.error) {
                report += `**Fehler:** ${result.error}\n\n`;
            }

            if (result.api1 && result.api2) {
                report += `**Status Codes:** API1: ${result.api1.statusCode}, API2: ${result.api2.statusCode}\n`;

                if (result.api1Analysis && result.api2Analysis) {
                    report += `**Ergebnis-Anzahl:** API1: ${result.api1Analysis.resultCount}, API2: ${result.api2Analysis.resultCount}\n`;
                    report += `**Datenstruktur:** API1: ${result.api1Analysis.structure}, API2: ${result.api2Analysis.structure}\n`;
                }
                report += `\n`;
            }

            if (result.warnings.length > 0) {
                report += `**Warnungen:**\n`;
                result.warnings.forEach(warning => {
                    report += `- ⚠️ ${warning}\n`;
                });
                report += `\n`;
            }

            if (result.structuralDifferences.length > 0) {
                report += `**Strukturelle Unterschiede:**\n`;
                result.structuralDifferences.forEach(diff => {
                    report += `- ${diff.type}\n`;
                    report += `  - API 1: ${util.inspect(diff.api1, { depth: 2, compact: true })}\n`;
                    report += `  - API 2: ${util.inspect(diff.api2, { depth: 2, compact: true })}\n`;
                });
                report += `\n`;
            }

            if (result.contentDifferences.length > 0) {
                report += `**Inhaltliche Unterschiede (erste 10):**\n`;
                result.contentDifferences.slice(0, 10).forEach(diff => {
                    report += `- **${diff.type}** bei \`${diff.path}\`\n`;
                    if (diff.api1 !== undefined) report += `  - API 1: ${util.inspect(diff.api1, { compact: true })}\n`;
                    if (diff.api2 !== undefined) report += `  - API 2: ${util.inspect(diff.api2, { compact: true })}\n`;
                });

                if (result.contentDifferences.length > 10) {
                    report += `- ... und ${result.contentDifferences.length - 10} weitere Unterschiede\n`;
                }
                report += `\n`;
            }

            if (result.status === 'passed') {
                report += `**Resultat:** Beide APIs liefern identische Ergebnisse ✅\n\n`;
            } else if (result.status === 'passed_with_warnings') {
                report += `**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️\n\n`;
            }

            report += `---\n\n`;
        });

        return report;
    }

    // Hauptfunktion
    async run() {
        console.log('🚀 Starte API-Vergleich...');
        console.log(`📊 Vergleiche: ${this.baseURL1} vs ${this.baseURL2}`);
        console.log(`🔐 Auth URLs: ${this.baseAuthURL1} vs ${this.baseAuthURL2}`);

        // Filter Info
        if (this.filterPrefix) {
            console.log(`🔍 Filter aktiv: Nur Tests mit Filter beginnend mit "${this.filterPrefix}"`);
        }

        // Credentials Info
        if (process.env.username && process.env.password) {
            console.log(`🔑 Auth-Credentials aus Umgebungsvariablen geladen`);
        } else {
            console.log(`⚠️  Standard-Credentials verwendet - setze username und password Umgebungsvariablen`);
        }

        const testCases = this.getFilteredTestCases();

        if (testCases.length === 0) {
            console.log(`❌ Keine Tests zum Ausführen gefunden`);
            return {
                results: [],
                summary: this.summary,
                report: 'Keine Tests ausgeführt'
            };
        }

        this.summary.totalTests = testCases.length;

        let countTest = 1;
        for (const testCase of testCases) {
            console.log(`\n🔍 Teste: ${countTest++} von ${this.summary.totalTests}`);
            const result = await this.runTestCase(testCase);
            this.results.push(result);

            // Statistiken aktualisieren
            if (result.status === 'passed') {
                this.summary.passed++;
            } else if (result.status === 'passed_with_warnings') {
                this.summary.passed++;
                // Warnungen werden bereits in runTestCase gezählt
            } else if (result.status === 'failed') {
                this.summary.failed++;
            } else if (result.status === 'skipped') {
                // Übersprungene Tests werden nicht zu den strukturellen/inhaltlichen Differenzen gezählt
                continue;
            }

            if (result.status !== 'passed') {
                await waitForUserInteraction();
            }

            this.summary.structuralDifferences += result.structuralDifferences.length;
            this.summary.contentDifferences += result.contentDifferences.length;

            // Kurze Pause zwischen Requests
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Bericht generieren
        const report = this.formatReport(this.results);

        // Bericht speichern
        const filename = `api-comparison-${Date.now()}.md`;
        fs.writeFileSync(filename, report);

        console.log(`\n📄 Bericht gespeichert: ${filename}`);
        console.log(`\n📊 Finale Zusammenfassung:`);
        console.log(`   Tests gesamt: ${this.summary.totalTests}`);
        console.log(`   Übersprungen: ${this.summary.skippedTests}`);
        console.log(`   Bestanden: ${this.summary.passed}`);
        console.log(`   Bestanden mit Warnungen: ${this.summary.warnings}`);
        console.log(`   Fehlgeschlagen: ${this.summary.failed}`);
        console.log(`   Tests mit leeren Ergebnissen: ${this.summary.emptyResultsTests}`);
        console.log(`   Strukturelle Unterschiede: ${this.summary.structuralDifferences}`);
        console.log(`   Inhaltliche Unterschiede: ${this.summary.contentDifferences}`);
        console.log(`   Ignorierte Felder: ${this.summary.ignoredFields}`);

        return {
            results: this.results,
            summary: this.summary,
            report: report
        };
    }
}

// Anwendung starten
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function waitForUserInteraction() {
    return new Promise(resolve => {
        rl.question('\nWeiter mit Enter...', () => resolve());
    });
}

function sortJsonDeep(obj) {
    if (Array.isArray(obj)) {
        // Arrays sortieren - erst Inhalte rekursiv sortieren, dann Array selbst
        return obj
            .map(item => sortJsonDeep(item))
            .sort((a, b) => {
                // Sortierung nach display-Feld falls vorhanden
                const getDisplayValue = (item) => {
                    if (item?.dataproduct?.display) return item.dataproduct.display;
                    if (item?.feature?.display) return item.feature.display;
                    if (item?.display) return item.display;
                    return JSON.stringify(item);
                };

                const displayA = getDisplayValue(a);
                const displayB = getDisplayValue(b);

                return displayA.localeCompare(displayB);
            });
    } else if (typeof obj === 'object' && obj !== null) {
        // Objekte: Schlüssel sortieren und Werte rekursiv sortieren
        const sortedObj = {};
        Object.keys(obj)
            .sort()
            .forEach(key => {
                sortedObj[key] = sortJsonDeep(obj[key]);
            });
        return sortedObj;
    }

    return obj;
}

function showHelp() {
    console.log(`
🔍 API Comparator Tool - Geo APIs Vergleich

Verwendung:
  node ${__filename.split('/').pop()} [Optionen]

Optionen:
  --filter <prefix>     Führt nur Tests aus, deren Filter mit dem Prefix beginnen
  --help               Zeigt diese Hilfe an

Beispiele:
  node ${__filename.split('/').pop()}                    # Alle Tests ausführen
  node ${__filename.split('/').pop()} --filter ch.so.agi  # Nur AGI-Tests
  node ${__filename.split('/').pop()} --filter background # Nur Background-Tests
  node ${__filename.split('/').pop()} --filter ch.so.ada  # Nur ADA-Tests

Umgebungsvariablen:
  username          Basic Auth Username
  password          Basic Auth Password
`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
    try {
        const { values } = parseArgs({
            args: process.argv.slice(2),
            options: {
                filter: { type: 'string', short: 'f' },
                help: { type: 'boolean', short: 'h' }
            }
        });

        if (values.help) {
            showHelp();
            process.exit(0);
        }

        const options = {};
        if (values.filter) {
            options.filterPrefix = values.filter;
        }

        const comparator = new APIComparator(options);
        comparator.run().catch(console.error);

    } catch (error) {
        console.error('❌ Fehler beim Parsen der Argumente:', error.message);
        showHelp();
        process.exit(1);
    }
}

export default APIComparator;
