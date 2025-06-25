import https from 'https';
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

    // { searchtext: 'geotope', filter: 'background,foreground,ch.so.afu.geotope.aufschluss' },

    // Archäologie
    { searchtext: '115/300', filter: 'ch.so.ada.archaeologie.flaechenfundstellen' },
    { searchtext: '115 263', filter: 'ch.so.ada.archaeologie.flaechenfundstellen_geschuetzt' },
    { searchtext: '115 270', filter: 'ch.so.ada.archaeologie.punktfundstellen_geschuetzt' },
    { searchtext: '115/270', filter: 'ch.so.ada.archaeologie.punktfundstellen' },

    // Amt für Umwelt - Abbaustellen und Geotope
    { searchtext: 'Steinbruch Steingruebe', filter: 'ch.so.afu.abbaustellen' },
    { searchtext: 'Verwerfung Martinsflue', filter: 'ch.so.afu.geotope.aufschluss' },
    { searchtext: 'mp 22 ruine', filter: 'ch.so.afu.geotope.fundstelle_grabung_geschuetzt' },
    { searchtext: 'Heidenloch-Höhle Born', filter: 'ch.so.afu.geotope.hoehle' },
    { searchtext: 'Erratiker Chalchgraben 2', filter: 'ch.so.afu.geotope.erratiker' },
    { searchtext: 'Halbklus Balmberg ', filter: 'ch.so.afu.geotope.landschaftsform' },
    { searchtext: 'alte Gipsquelle Mineralwasser L1', filter: 'ch.so.afu.geotope.quelle' },

    { searchtext: '6333', filter: 'ch.so.afu.gewaesserschutz_lw.standort_mit_erhebung' },
    { searchtext: '4500', filter: 'ch.so.afu.gewaesserschutz_lw.standort_ohne_erhebung' },
    { searchtext: 'Solothurn', filter: 'ch.so.afu.bodeninformationen.bodenprofilstandorte' },
    { searchtext: '6333', filter: 'ch.so.afu.wasserbewirtschaftung.weitere_einbauten_geschuetzt' },
    { searchtext: 'Solothurn', filter: 'ch.so.afu.wasserbewirtschaftung.fassung' },
    { searchtext: '6333', filter: 'ch.so.afu.gewaesserschutz.fassungen' },
    { searchtext: '4500', filter: 'ch.so.afu.wasserbewirtschaftung.fassung_geschuetzt' },
    { searchtext: 'Solothurn', filter: 'ch.so.afu.fliessgewaesser.netz' },
    { searchtext: '4500', filter: 'ch.so.afu.wasserbewirtschaftung.grundwasserwaermenutzung' },
    { searchtext: 'Solothurn', filter: 'ch.so.afu.wasserbewirtschaftung.grundwasserwaermenutzung_geschuetzt' },
    { searchtext: '4500', filter: 'ch.so.afu.altlasten.standorte' },
    { searchtext: 'Solothurn', filter: 'ch.so.afu.altlasten.standorte_geschuetzt' },
    { searchtext: '4500', filter: 'ch.so.afu.naturereigniskataster.basisinformation' },
    { searchtext: 'Solothurn', filter: 'ch.so.afu.naturereigniskataster.prozessraum.sturz' },
    { searchtext: '6333', filter: 'ch.so.afu.naturereigniskataster.prozessraum.wasser' },
    { searchtext: '4500', filter: 'ch.so.afu.asiatische_hornisse' },
    { searchtext: '6333', filter: 'ch.so.afu.gewaesserschutz.quellen' },
    { searchtext: '4500', filter: 'ch.so.afu.wasserbewirtschaftung.quellen' },
    { searchtext: 'Solothurn', filter: 'ch.so.afu.wasserbewirtschaftung.quellen_geschuetzt' },
    { searchtext: '6333', filter: 'ch.so.afu.wasserbewirtschaftung.sondierung' },
    { searchtext: '4500', filter: 'ch.so.afu.wasserbewirtschaftung.sondierung_geschuetzt' },
    { searchtext: 'Schafstall 167', filter: 'ch.so.afu.gewaesserschutz_lw.stall' },
    { searchtext: '6333', filter: 'ch.so.afu.wasserbewirtschaftung.trinkwasserversorgung_geschuetzt' },
    { searchtext: '4500', filter: 'ch.so.afu.wasserbewirtschaftung.versickerungsschacht' },
    { searchtext: 'Solothurn', filter: 'ch.so.afu.wasserbewirtschaftung.versickerungsschacht_geschuetzt' },

    // Amt für Geoinformation
    { searchtext: '6333', filter: 'ch.so.agi.bezirksgrenzen' },
    { searchtext: '4500', filter: 'ch.so.agi.av.bodenbedeckung' },
    { searchtext: 'Solothurn', filter: 'ch.so.agi.av.gb2av.controlling_vollzugsmeldungen' },
    { searchtext: '6333', filter: 'ch.so.agi.av.gb2av.controlling_mutationen' },
    { searchtext: '4500', filter: 'ch.so.agi.av.nomenklatur.flurnamen' },
    { searchtext: 'Solothurn', filter: 'ch.so.agi.av.gebaeudeadressen.gebaeudeeingaenge' },
    { searchtext: '6333', filter: 'ch.so.agi.av.nomenklatur.gelaendenamen' },
    { searchtext: '4500', filter: 'ch.so.agi.gemeindegrenzen' },
    { searchtext: '4590 Solothurn', filter: 'ch.so.agi.av.grundstuecke.rechtskraeftig' },
    { searchtext: '6333', filter: 'ch.so.agi.av.grundstuecke.projektierte' },

    // Amt für Landwirtschaft
    { searchtext: '4500', filter: 'ch.so.alw.bienenstandorte_und_sperrgebiete.bienenstandorte' },
    { searchtext: 'Solothurn', filter: 'ch.so.alw.bienenstandorte_und_sperrgebiete.bienenstandorte_geschuetzt' },
    { searchtext: '6333', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kultur_punktelement_bff_qualitaetsstufe_I' },
    { searchtext: '4500', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kultur_punktelement_bff_qualitaetsstufe_I_geschuetzt' },
    { searchtext: 'Solothurn', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_bff_qualitaetsstufe_I' },
    { searchtext: '6333', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_bff_qualitaetsstufe_I_geschuetzt' },
    { searchtext: '4500', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_hauptkategorien' },
    { searchtext: 'Solothurn', filter: 'ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_hauptkategorien_geschuetzt' },

    // Amt für Raumplanung
    { searchtext: '6333', filter: 'ch.so.arp.naturreservate.reservate' },
    { searchtext: '4500', filter: 'ch.so.arp.baugis.geschaefte' },

    // Amt für Verkehr und Tiefbau
    { searchtext: 'Solothurn', filter: 'ch.so.avt.kantonsstrassen_achsen' },
    { searchtext: '6333', filter: 'ch.so.avt.kantonsstrassen_bezugspunkte' },
    { searchtext: '4500', filter: 'ch.so.avt.verkehrszaehlstellen' },
    { searchtext: 'Solothurn', filter: 'ch.so.avt.oev.haltestellen' },

    // Amt für Wald, Jagd und Fischerei
    { searchtext: '6333', filter: 'ch.so.awjf.gewaesser.patentgewaesser' },
    { searchtext: '4500', filter: 'ch.so.awjf.gewaesser.fischereireviere' },
    { searchtext: 'Solothurn', filter: 'ch.so.awjf.bestandeskarte_wald_flaechen' },
    { searchtext: '6333', filter: 'ch.so.awjf.waldplan.waldeigentum' },
    { searchtext: '4500', filter: 'ch.so.awjf.waldplan.waldfunktion' },
    { searchtext: 'Solothurn', filter: 'ch.so.awjf.schutzwaldausscheidung' },
    { searchtext: '6333', filter: 'ch.so.awjf.schutzwald_hauptgefahrenpotentiale' },
    { searchtext: '4500', filter: 'ch.so.awjf.waldplan.waldplantyp' },
    { searchtext: 'Solothurn', filter: 'ch.so.awjf.waldwanderwege_posten' },

    // Gesundheitsamt
    { searchtext: '6333', filter: 'ch.so.gesa.leistungserbringerstandorte_erreichbarkeitsanalyse' }
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

    // HTTP GET Request mit Promise
    async makeRequest(hostname, path, username = null, password = null, useCookies = false, saveCookies = false) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: hostname,
                port: 443,
                path: path,
                method: 'GET',
                headers: {
                    'User-Agent': 'Node.js API Comparator',
                    'Accept': 'application/json',
                }
            };

            // Basic Auth
            if (username && password) {
                const credentials = Buffer.from(`${username}:${password}`).toString('base64');
                options.headers['Authorization'] = `Basic ${credentials}`;
            }

            this.lock = this.lock.then(() => new Promise(async resolve => {
                // Cookies senden wenn vorhanden und gewünscht
                if (useCookies && this.cookies) {
                    options.headers['Cookie'] = this.cookies;
                }
                resolve();
            }));

            const req = https.request(options, (res) => {
                let data = '';

                if (res.statusCode > 200) {
                    reject({
                        statusCode: res.statusCode
                    });
                }

                // Cookies speichern wenn gewünscht
                if (saveCookies && res.headers['set-cookie']) {
                    this.cookies = res.headers['set-cookie']
                        .map(cookie => cookie.split(';')[0])
                        .join('; ');
                }

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    try {
                        const jsonData = JSON.parse(data);
                        resolve({
                            statusCode: res.statusCode,
                            data: jsonData,
                            headers: res.headers
                        });
                    } catch (error) {
                        reject(new Error(`makeRequest JSON Parse Error: ${error.message}`));
                    }
                });
            });

            req.on('error', (error) => {
                reject(error);
            });

            req.setTimeout(10000, () => {
                req.destroy();
                reject(new Error('Request timeout'));
            });

            req.end();
        });
    }

    async loginApi(hostname) {
        const path = '/api-auth/search/v2/?searchtext=bla';
        try {

            await this.makeRequest(hostname, path, process.env.username, process.env.password, false, true)
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
    async callApi(hostname, searchtext, filter, limit = 25) {
        const path = `/api/search/v2/?searchtext=${encodeURIComponent(searchtext)}&filter=${encodeURIComponent(filter)}&limit=${limit}`;

        try {
            const startTime = Date.now();

            const response = await this.makeRequest(hostname, path);
            // const response = await this.makeRequest(hostname, path, 'user', 'password', false, false);
            //const response = await this.makeRequest(hostname, path, null, null, true, false);

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
    compareResponses(prodResponse, testResponse) {
        const comparison = {
            statusCodeMatch: prodResponse.statusCode === testResponse.statusCode,
            resultCountMatch: prodResponse.resultCount === testResponse.resultCount,
            responseTimeDiff: testResponse.responseTime - prodResponse.responseTime,
            dataStructureMatch: this.compareDataStructure(prodResponse.data, testResponse.data),
            contentMatch: this.compareContent(prodResponse.data, testResponse.data)
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
    compareContent(data1, data2) {
        if (!data1 && !data2) return true;
        if (!data1 || !data2) return false;

        // Vergleiche result_counts
        if (!this.compareResultCounts(data1.result_counts, data2.result_counts)) {
            //return false;
            console.log('    ! kein Vergleich der json.result_counts');
        }

        // Vergleiche results Array
        if (data1.results && data2.results) {
            if (data1.results.length !== data2.results.length) return false;

            // Vergleiche jeden Eintrag
            for (let i = 0; i < data1.results.length; i++) {
                if (!this.compareFeature(data1.results[i], data2.results[i])) {
                    return false;
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
            //'feature_id',
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
        if (!this.compareBbox(feature1.bbox, feature2.bbox)) {
            return false;
        }

        return true;
    }

    // Vergleiche Bounding Box Koordinaten
    compareBbox(bbox1, bbox2) {
        if (!bbox1 && !bbox2) return true;
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
        //     await this.loginApi(host);
        //     console.log(`  ✅ Login erfolgreich ${host}\n`);

        // } catch (error) {
        //     console.error(`❌ Fehler bei Login`);
        //     throw new Error("Login Fehler - THE END.");
        // }

        for (let i = 0; i < activeTestCases.length; i++) {
            const testCase = activeTestCases[i];

            console.log(`📋 Test ${i + 1}/${activeTestCases.length}: ${testCase.searchtext} - ${testCase.filter}`);

            try {
                // Parallele Aufrufe an beide APIs
                const [prodResponse, testResponse] = await Promise.all([
                    this.callApi(PROD_BASE_URL, testCase.searchtext, testCase.filter),
                    this.callApi(TEST_BASE_URL, testCase.searchtext, testCase.filter)
                ]);

                // Vergleich durchführen
                let comparison = null;
                if (prodResponse.success && testResponse.success) {
                    comparison = this.compareResponses(prodResponse, testResponse);
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
                await this.sleep(1000);
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

        console.log(`   ${statusIcon} Status: ${prod.statusCode} vs ${test.statusCode}`);
        console.log(`   ${countIcon} Anzahl: ${prod.resultCount} vs ${test.resultCount}`);
        console.log(`   ${contentIcon} Inhalt: ${comp.contentMatch ? 'Identisch' : 'Unterschiedlich'}`);
        console.log(`   ⏱️  Zeit: ${prod.responseTime}ms vs ${test.responseTime}ms (Δ${comp.responseTimeDiff > 0 ? '+' : ''}${comp.responseTimeDiff}ms)`);

        // Zusätzliche Details bei Inhaltunterschieden
        if (!comp.contentMatch && prod.data && test.data) {
            this.printContentDifferences(prod.data, test.data);
        }

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
                    /*                     if (prodFirst.feature_id !== testFirst.feature_id) {
                                            console.log(`     🆔 Feature ID: PROD=${prodFirst.feature_id}, TEST=${testFirst.feature_id}`);
                                        } */
                    if (prodFirst.display !== testFirst.display) {
                        console.log(`     📝 Display: PROD="${prodFirst.display}", TEST="${testFirst.display}"`);
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
