import axios from 'axios';
import fs from 'fs';
import util from 'util';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { parseArgs } from 'util';
import 'dotenv/config';

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
            structuralDifferences: 0,
            contentDifferences: 0,
            ignoredFields: 0,
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
            { searchtext: '394047 bienenstandort', filter: 'ch.so.alw.bienenstandorte_und_sperrgebiete.bienenstandorte' },
            { searchtext: '68076 bienenstandort', filter: 'ch.so.alw.bienenstandorte_und_sperrgebiete.bienenstandorte_geschuetzt', auth: true }

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
    compareObjects(obj1, obj2, path = '') {
        const differences = [];

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
        console.log(`\n🔍 Teste:`);
        console.log(`   Suchtext: "${testCase.searchtext}"`);
        console.log(`   Filter: "${testCase.filter}"`);
        console.log(`   Auth: ${testCase.auth ? '🔒 Ja' : '🔓 Nein'}`);

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
            differences: [],
            structuralDifferences: [],
            contentDifferences: [],
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

                // Inhalte vergleichen
                const contentDiffs = this.compareObjects(response1.data, response2.data);
                testResult.contentDifferences = contentDiffs;
                testResult.differences.push(...contentDiffs);
            }

            // Status bestimmen
            if (testResult.differences.length === 0) {
                testResult.status = 'passed';
                console.log(`   ✅ Test bestanden`);
            } else {
                testResult.status = 'failed';
                console.log(`   ❌ Test fehlgeschlagen (${testResult.differences.length} Unterschiede)`);
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
- **Bestanden:** ${this.summary.passed}
- **Fehlgeschlagen:** ${this.summary.failed}
- **Übersprungen:** ${this.summary.skippedTests}
- **Strukturelle Unterschiede:** ${this.summary.structuralDifferences}
- **Inhaltliche Unterschiede:** ${this.summary.contentDifferences}
- **Ignorierte Felder:** ${this.summary.ignoredFields}

## Ignorierte Felder
Die folgenden Felder werden beim Vergleich ignoriert:
${this.ignoreFields.map(field => `- \`${field}\``).join('\n')}

## Detaillierte Ergebnisse

`;

        results.forEach((result, index) => {
            report += `### Test ${index + 1}: \n`;

            if (result.status === 'skipped') {
                report += `**Status:** ⏭️ Übersprungen\n`;
                report += `**Grund:** ${result.reason}\n`;
                report += `**Filter:** "${result.testCase.filter}"\n\n`;
                report += `---\n\n`;
                return;
            }

            report += `**Status:** ${result.status === 'passed' ? '✅ Bestanden' : result.status === 'failed' ? '❌ Fehlgeschlagen' : '💥 Fehler'}\n`;
            report += `**Suchtext:** "${result.testCase.searchtext}"\n`;
            report += `**Filter:** "${result.testCase.filter}"\n`;
            report += `**Authentifizierung:** ${result.testCase.auth ? '🔒 Basic Auth' : '🔓 Öffentlich'}\n`;
            report += `**Zeit:** ${new Date(result.timestamp).toLocaleString('de-CH')}\n\n`;

            if (result.error) {
                report += `**Fehler:** ${result.error}\n\n`;
            }

            if (result.api1 && result.api2) {
                report += `**Status Codes:** API1: ${result.api1.statusCode}, API2: ${result.api2.statusCode}\n\n`;
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
            }

            report += `---\n\n`;
        });

        return report;
    }

    // Hauptfunktion
    async run() {
        console.log(`🚀 Starte API-Vergleich...`);
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

        for (const testCase of testCases) {
            const result = await this.runTestCase(testCase);
            this.results.push(result);

            // Statistiken aktualisieren
            if (result.status === 'passed') {
                this.summary.passed++;
            } else if (result.status === 'failed') {
                this.summary.failed++;
            } else if (result.status === 'skipped') {
                // Übersprungene Tests werden nicht zu den strukturellen/inhaltlichen Differenzen gezählt
                continue;
            }

            this.summary.structuralDifferences += result.structuralDifferences.length;
            this.summary.contentDifferences += result.contentDifferences.length;

            // Kurze Pause zwischen Requests
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Bericht generieren
        const report = this.formatReport(this.results);

        // Bericht speichern
        const filename = `api-comparison-${Date.now()}.md`;
        fs.writeFileSync(filename, report);

        console.log(`\n📄 Bericht gespeichert: ${filename}`);
        console.log(`\n📊 Finale Zusammenfassung:`);
        console.log(`   Tests gesamt: ${this.summary.totalTests}`);
        console.log(`   Bestanden: ${this.summary.passed}`);
        console.log(`   Fehlgeschlagen: ${this.summary.failed}`);
        console.log(`   Übersprungen: ${this.summary.skippedTests}`);
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

// CLI Argument Parsing und Anwendung starten
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
