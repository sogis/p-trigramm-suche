
# API-Vergleichsbericht
Generiert am: 30.6.2025, 09:46:37

## Zusammenfassung
- **Gesamte Tests:** 258
- **Übersprungen:** 0
- **Bestanden:** 203
- **Bestanden mit Warnungen:** 2
- **Fehlgeschlagen:** 55
- **Tests mit leeren Ergebnissen:** 2
- **Strukturelle Unterschiede:** 256
- **Inhaltliche Unterschiede:** 328
- **Ignorierte Felder:** 1478

## API-Endpunkte
- **Produktiv (öffentlich):** https://geo.so.ch/api/search/v2/
- **Test (öffentlich):** https://geo-t.so.ch/api/search/v2/
- **Produktiv (authentifiziert):** https://geo.so.ch/api-auth/search/v2/
- **Test (authentifiziert):** https://geo-t.so.ch/api-auth/search/v2/

## Ignorierte Felder
Die folgenden Felder werden beim Vergleich ignoriert:
- `feature_id`
- `srid`
- `timestamp`
- `created_at`
- `updated_at`
- `id`
- `uuid`
- `last_modified`
- `version`
- `result_counts`

## Detaillierte Ergebnisse

### Test 1: 
**Status:** ✅ Bestanden
**Suchtext:** "fliessgewässer - eigenschaften, fliessgewässer, gewässernetz, oberflächengewässer, gewässer, fluss, flüsse, bach, bäche"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:56

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 2: 
**Status:** ✅ Bestanden
**Suchtext:** "ausgleichsabgabe publikation (geschützt), mehrwertabgabe"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:56

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 3: 
**Status:** ✅ Bestanden
**Suchtext:** "abwasser werkplan (quelle emch+berger), leitungskataster lk"
**Filter:** "background,foreground,"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:56

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 4: 
**Status:** ✅ Bestanden
**Suchtext:** "statische waldgrenze (review, geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:57

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 5: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "sondernutzungsgebiet (richtplan)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:57

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 6: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "siedlungstrenngürtel (richtplan)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:57

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 7: 
**Status:** ✅ Bestanden
**Suchtext:** "ökomorphologie der fliessgewässer"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:57

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 8: 
**Status:** ✅ Bestanden
**Suchtext:** "pikettregionen militärjustiz, militär, militärjustiz, pikettregionen, pikett"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:57

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 9: 
**Status:** ✅ Bestanden
**Suchtext:** "öv-güteklassen, erschliessungsgüte"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:57

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 10: 
**Status:** ✅ Bestanden
**Suchtext:** "waldstandorte, waldgesellschaft"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:58

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 11: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "bauzonengrenzen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:58

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Baulinien (Erschliessungsplanung)'
  - API 2: 'Nutzungsplanung'
- **value_mismatch** bei `results[1].dataproduct.type`
  - API 1: 'singleactor'
  - API 2: 'layergroup'
- **missing_in_api1** bei `results[1].dataproduct.sublayers`
  - API 2: [ { dataproduct_id: 'ch.so.arp.nutzungsplanung.erschliessungsplanung.baulinien',
    display: 'Baulinien (Erschliessungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.astra.baulinien-nationalstrassen_v2_0.oereb',
    display: 'Baulinien Nationalstrassen V2.0 ÖREB (Quelle Bund)',
    dset_info: false,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.erschliessungsplanung',
    display: 'Erschliessungsplanung (Erschliessungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.sondernutzungsplaene',
    display: 'Sondernutzungspläne (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.ortsbildschutz',
    display: 'Ortsbildschutz (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.natur_landschaft_gruppe',
    display: 'Natur / Landschaft (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.weitere',
    display: 'weitere Festlegungen (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.gewaesser',
    display: 'Gewässer (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.grundwasserschutz',
    display: 'Grundwasserschutz (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.wald',
    display: 'Wald (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.grundnutzung',
    display: 'Grundnutzung (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' } ]
- **value_mismatch** bei `results[2].dataproduct.display`
  - API 1: 'Nutzungsplanung'
  - API 2: 'Baulinien (Erschliessungsplanung)'
- **missing_in_api2** bei `results[2].dataproduct.sublayers`
  - API 1: [ { dataproduct_id: 'ch.so.arp.nutzungsplanung.erschliessungsplanung.baulinien',
    display: 'Baulinien (Erschliessungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.astra.baulinien-nationalstrassen_v2_0.oereb',
    display: 'Baulinien Nationalstrassen V2.0 ÖREB (Quelle Bund)',
    dset_info: false,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.erschliessungsplanung',
    display: 'Erschliessungsplanung (Erschliessungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.sondernutzungsplaene',
    display: 'Sondernutzungspläne (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.ortsbildschutz',
    display: 'Ortsbildschutz (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.natur_landschaft_gruppe',
    display: 'Natur / Landschaft (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.weitere',
    display: 'weitere Festlegungen (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.gewaesser',
    display: 'Gewässer (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.grundwasserschutz',
    display: 'Grundwasserschutz (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.wald',
    display: 'Wald (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.grundnutzung',
    display: 'Grundnutzung (Nutzungsplanung)',
    dset_info: true,
    type: 'singleactor' } ]
- **value_mismatch** bei `results[2].dataproduct.type`
  - API 1: 'layergroup'
  - API 2: 'singleactor'

---

### Test 12: 
**Status:** ✅ Bestanden
**Suchtext:** "relief digitales oberflächenmodell (lidar)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:58

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 13: 
**Status:** ✅ Bestanden
**Suchtext:** "relief digitales terrainmodell (lidar)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:58

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 14: 
**Status:** ✅ Bestanden
**Suchtext:** "abbaustellen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:58

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 15: 
**Status:** ✅ Bestanden
**Suchtext:** "baulinien (erschliessungsplanung), abstandslinien"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:58

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 16: 
**Status:** ✅ Bestanden
**Suchtext:** "lärm (nutzungsplanung), empfindlichkeitsstufen, lärmempfindlichkeitsstufen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:58

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 17: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "vb mjpnl intern (geschützt), vereinbarungsflächen mjpnl"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:59

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.naturschutzobjekte_geschuetzt',
     display: 'Naturschutzobjekte (geschützt)',
     dset_info: true,
     stacktype: 'foreground',
     sublayers:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     type: 'layergroup' } }

---

### Test 18: 
**Status:** ✅ Bestanden
**Suchtext:** "pixelkarte farbig (quelle bund), landeskarte, pixelkarte, swisstopo"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:59

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 19: 
**Status:** ✅ Bestanden
**Suchtext:** "groblärmkataster"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:59

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 20: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "kantonale uferschutzzone (richtplan)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:59

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 21: 
**Status:** ✅ Bestanden
**Suchtext:** "hangneigung digitales terrainmodell (lidar)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:59

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 22: 
**Status:** ✅ Bestanden
**Suchtext:** "übersichtsplan 2009 (historische karte)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:45:59

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 23: 
**Status:** ✅ Bestanden
**Suchtext:** "strassenlärm belastungen, strassenlärm belastungen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:00

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 24: 
**Status:** ✅ Bestanden
**Suchtext:** "polizeiregionen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:00

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 25: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "vereinbarungsflächen mehrjahresprogramm natur und landschaft (mjpnl), vereinbarungsflächen mjpnl"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:00

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results[1].dataproduct.sublayers`
  - API 1: 15
  - API 2: 16
- **value_mismatch** bei `results[1].dataproduct.sublayers[4].display`
  - API 1: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
  - API 2: 'Fledermausfundorte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[5].display`
  - API 1: 'Flachmoore regionaler Bedeutung'
  - API 2: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[6].display`
  - API 1: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
  - API 2: 'Flachmoore regionaler Bedeutung'
- **value_mismatch** bei `results[1].dataproduct.sublayers[7].display`
  - API 1: 'Blaue Flächen Grenchen'
  - API 2: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[8].display`
  - API 1: 'Flechte'
  - API 2: 'Blaue Flächen Grenchen'
- **value_mismatch** bei `results[1].dataproduct.sublayers[9].display`
  - API 1: 'Moos'
  - API 2: 'Flechte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[10].display`
  - API 1: 'Witischutzzone'
  - API 2: 'Moos'
- **value_mismatch** bei `results[1].dataproduct.sublayers[11].display`
  - API 1: 'Reservate (Naturreservate)'
  - API 2: 'Witischutzzone'
- **value_mismatch** bei `results[1].dataproduct.sublayers[12].display`
  - API 1: 'Teilgebiete (Naturreservate)'
  - API 2: 'Reservate (Naturreservate)'
- ... und 3 weitere Unterschiede

---

### Test 26: 
**Status:** ✅ Bestanden
**Suchtext:** "pflanzengesundheit schadorganismen massnahmengebiete (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:00

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 27: 
**Status:** ✅ Bestanden
**Suchtext:** "tiergesundheit massnahmengebiet"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:00

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 28: 
**Status:** ✅ Bestanden
**Suchtext:** "eidgenössische gebäude- und wohnungsregister (gwr)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:00

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 29: 
**Status:** ✅ Bestanden
**Suchtext:** "wald - wegsanierungen (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:00

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 30: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "regionaler naturpark von nationaler bedeutung (richtplan)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:01

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 31: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "av-gwr abgleich"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:01

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 32: 
**Status:** ✅ Bestanden
**Suchtext:** "pflanzengesundheit schadorganismen massnahmengebiete"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:01

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 33: 
**Status:** ✅ Bestanden
**Suchtext:** "gefahrenhinweis ufererosion"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:01

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 34: 
**Status:** ✅ Bestanden
**Suchtext:** "mehrjahresplanung (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:01

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 35: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "gefahrenkarte synoptisch (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:02

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 4, API2: 4
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Synoptische IK Wasser (Naturgefahren)'
  - API 2: 'Synoptische IK Sturz (Naturgefahren)'
- **array_length_mismatch** bei `results[1].dataproduct.sublayers`
  - API 1: 8
  - API 2: 9
- **value_mismatch** bei `results[1].dataproduct.sublayers[0].display`
  - API 1: 'Synoptische IK Überschwemmung 0 - 30 Jahre (Naturgefahren)'
  - API 2: 'Synoptische IK Einsturz / Absenkung (Naturgefahren)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[1].display`
  - API 1: 'Synoptische IK Überschwemmung 30 - 100 Jahre (Naturgefahren)'
  - API 2: 'Synoptische IK Fels- und Bersturz 0 - 30 Jahre (Naturgefahren)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[2].display`
  - API 1: 'Synoptische IK Überschwemmung 100 - 300 Jahre (Naturgefahren)'
  - API 2: 'Synoptische IK Fels- und Bersturz 30 - 100 Jahre (Naturgefahren)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[3].display`
  - API 1: 'Synoptische IK Überschwemmung  Restgefährdung  (Naturgefahren)'
  - API 2: 'Synoptische IK Fels- und Bersturz 100 - 300 Jahre (Naturgefahren)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[4].display`
  - API 1: 'Synoptische IK Übermurung 0 - 30 Jahre (Naturgefahren)'
  - API 2: 'Synoptische IK Fels- und Bersturz Restgefährdung (Naturgefahren)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[5].display`
  - API 1: 'Synoptische IK Übermurung 30 - 100 Jahre (Naturgefahren)'
  - API 2: 'Synoptische IK Stein- und Blockschlag 0 - 30 Jahre (Naturgefahren)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[6].display`
  - API 1: 'Synoptische IK Übermurung 100 - 300 Jahre (Naturgefahren)'
  - API 2: 'Synoptische IK Stein- und Blockschlag 30 - 100 Jahre (Naturgefahren)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[7].display`
  - API 1: 'Synoptische IK Übermurung  Restgefährdung  (Naturgefahren)'
  - API 2: 'Synoptische IK Stein- und Blockschlag 100 - 300 Jahre (Naturgefahren)'
- ... und 25 weitere Unterschiede

---

### Test 36: 
**Status:** ✅ Bestanden
**Suchtext:** "gefahrenkarte rutschung (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:02

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 37: 
**Status:** ✅ Bestanden
**Suchtext:** "betreiber gas (leitungskataster)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:02

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 38: 
**Status:** ✅ Bestanden
**Suchtext:** "gefahrenkarte sturz (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:02

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 39: 
**Status:** ✅ Bestanden
**Suchtext:** "betreiber elektrizität (leitungskataster), netzbetreiber, netzebene, stromversorgung, stromversorgungssicherheit"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:02

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 40: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "regionale standortförderung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:02

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 41: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "wildtierkorridore"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:02

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.richtplan.siedlungstrennguertel',
     display: 'Siedlungstrenngürtel (Richtplan)',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }

---

### Test 42: 
**Status:** ✅ Bestanden
**Suchtext:** "waldplan (in bearbeitung, geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:03

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 43: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "bauzonenstatistik (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:03

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 3
  - API 2: 2
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Liegenschaften nach Bebauungsstand (Bauzonenstatistik, geschützt)'
  - API 2: 'Inventar Arbeitszonenbewirtschaftung (geschützt)'
- **value_mismatch** bei `results[1].dataproduct.dset_info`
  - API 1: true
  - API 2: false
- **value_mismatch** bei `results[1].dataproduct.type`
  - API 1: 'singleactor'
  - API 2: 'layergroup'
- **missing_in_api1** bei `results[1].dataproduct.sublayers`
  - API 2: [ { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.bauzonenstatistik',
    display: 'Bauzonenstatistik (Arbeitszonenbewirtschaftung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.inventar_Watchlist_geschuetzt',
    display: 'Inventar Watchlist (Arbeitszonenbewirtschaftung, geschützt)',
    dset_info: false,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.regionen',
    display: 'Region Arbeitszonenbewirtschaftung',
    dset_info: true,
    type: 'singleactor' } ]
- **missing_in_api2** bei `results[2]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.bauzonenstatistik.uebersteuerung_bebauungsstand',
     display: 'Übersteuerung Bebauungsstand (Bauzonenstatistik, geschützt)',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }

---

### Test 44: 
**Status:** ✅ Bestanden
**Suchtext:** "nutzungsplanung, nplso, zonenplan, gesamtplan, nutzungszonen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:03

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 45: 
**Status:** ✅ Bestanden
**Suchtext:** "betreiber fernwärme (leitungskataster)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:03

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 46: 
**Status:** ✅ Bestanden
**Suchtext:** "gefahrenkarte wasser (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:03

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 47: 
**Status:** ✅ Bestanden
**Suchtext:** "elektrizitätsproduktionsanlagen (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:03

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 48: 
**Status:** ✅ Bestanden
**Suchtext:** "emissionskataster ekat 2005"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:04

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 49: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "arbeitszonen, wohnzonen, arbeitszonen, mischzonen, kernzonen, zone für die öffentliche nutzung, eingeschränkte bauzone, tourismus- und freizeitzonen, spezialzone, wald, landwirtschaft, gewässer"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:04

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[0].dataproduct.display`
  - API 1: 'Arbeitszonen'
  - API 2: 'Grundnutzung (Arbeitszonenbewirtschaftung)'

---

### Test 50: 
**Status:** ✅ Bestanden
**Suchtext:** "normalisiertes oberflächenmodell (lidar), laserscanning, ndom"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:04

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 51: 
**Status:** ✅ Bestanden
**Suchtext:** "pro natura waldreservate (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:04

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 52: 
**Status:** ✅ Bestanden
**Suchtext:** "emissionskataster ekat 2010"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:04

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 53: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "naturschutzobjekte"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:04

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results[0].dataproduct.sublayers`
  - API 1: 15
  - API 2: 16
- **value_mismatch** bei `results[0].dataproduct.sublayers[4].display`
  - API 1: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
  - API 2: 'Fledermausfundorte'
- **value_mismatch** bei `results[0].dataproduct.sublayers[5].display`
  - API 1: 'Flachmoore regionaler Bedeutung'
  - API 2: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
- **value_mismatch** bei `results[0].dataproduct.sublayers[6].display`
  - API 1: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
  - API 2: 'Flachmoore regionaler Bedeutung'
- **value_mismatch** bei `results[0].dataproduct.sublayers[7].display`
  - API 1: 'Blaue Flächen Grenchen'
  - API 2: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
- **value_mismatch** bei `results[0].dataproduct.sublayers[8].display`
  - API 1: 'Flechte'
  - API 2: 'Blaue Flächen Grenchen'
- **value_mismatch** bei `results[0].dataproduct.sublayers[9].display`
  - API 1: 'Moos'
  - API 2: 'Flechte'
- **value_mismatch** bei `results[0].dataproduct.sublayers[10].display`
  - API 1: 'Witischutzzone'
  - API 2: 'Moos'
- **value_mismatch** bei `results[0].dataproduct.sublayers[11].display`
  - API 1: 'Reservate (Naturreservate)'
  - API 2: 'Witischutzzone'
- **value_mismatch** bei `results[0].dataproduct.sublayers[12].display`
  - API 1: 'Teilgebiete (Naturreservate)'
  - API 2: 'Reservate (Naturreservate)'
- ... und 3 weitere Unterschiede

---

### Test 54: 
**Status:** ✅ Bestanden
**Suchtext:** "schutzwald - modell  (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:04

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 55: 
**Status:** ✅ Bestanden
**Suchtext:** "naturreservate review (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:05

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 56: 
**Status:** ✅ Bestanden
**Suchtext:** "revitalisierung fliessgewässer"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:05

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 57: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "digitales oberflächenmodell (lidar)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:05

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 4, API2: 4
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[2].dataproduct.display`
  - API 1: 'Normalisiertes Oberflächenmodell (LiDAR)'
  - API 2: 'Vegetation Entwicklungsstufen digitales Oberflächenmodell'
- **value_mismatch** bei `results[2].dataproduct.dset_info`
  - API 1: true
  - API 2: false
- **value_mismatch** bei `results[2].dataproduct.sublayers[0].display`
  - API 1: 'Normalisiertes Oberflächenmodell (LiDAR 2023)'
  - API 2: 'Vegetation Entwicklungsstufen digitales Oberflächenmodell 2023'
- **value_mismatch** bei `results[2].dataproduct.sublayers[0].dset_info`
  - API 1: true
  - API 2: false
- **value_mismatch** bei `results[2].dataproduct.sublayers[1].display`
  - API 1: 'Normalisiertes Oberflächenmodell (LiDAR 2019)'
  - API 2: 'Vegetation Entwicklungsstufen digitales Oberflächenmodell 2019'
- **value_mismatch** bei `results[2].dataproduct.sublayers[1].dset_info`
  - API 1: true
  - API 2: false
- **value_mismatch** bei `results[2].dataproduct.sublayers[2].display`
  - API 1: 'Normalisiertes Oberflächenmodell (LiDAR 2018)'
  - API 2: 'Vegetation Entwicklungsstufen digitales Oberflächenmodell 2018'
- **value_mismatch** bei `results[2].dataproduct.sublayers[3].display`
  - API 1: 'Normalisiertes digitales Oberflächenmodell (LiDAR 2014)'
  - API 2: 'Vegetation Entwicklungsstufen digitales Oberflächenmodell 2014'
- **value_mismatch** bei `results[2].dataproduct.sublayers[3].dset_info`
  - API 1: false
  - API 2: true
- **value_mismatch** bei `results[3].dataproduct.display`
  - API 1: 'Vegetation Entwicklungsstufen digitales Oberflächenmodell'
  - API 2: 'Normalisiertes Oberflächenmodell (LiDAR)'
- ... und 8 weitere Unterschiede

---

### Test 58: 
**Status:** ✅ Bestanden
**Suchtext:** "plakatstandorte bestimmungen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:05

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 59: 
**Status:** ✅ Bestanden
**Suchtext:** "statische waldgrenze"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:05

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 60: 
**Status:** ✅ Bestanden
**Suchtext:** "neozoen – asiatische hornisse"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:05

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 61: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "amphibienlaichgebiete von nationaler bedeutung - wanderobjekte (quelle bund), wanderobjekte, ianb"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:06

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Naturschutzobjekte'
  - API 2: 'Amphibienlaichgebiete von nationaler Bedeutung - Ortsfeste Objekte (Quelle Bund)'
- **missing_in_api2** bei `results[1].dataproduct.sublayers`
  - API 1: [ { dataproduct_id: 'ch.so.arp.naturschutzobjekte.amphibienstandorte',
    display: 'Amphibienstandorte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-amphibien_wanderobjekte',
    display: 'Amphibienlaichgebiete von nationaler Bedeutung - Wanderobjekte (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-amphibien',
    display:
     'Amphibienlaichgebiete von nationaler Bedeutung - Ortsfeste Objekte (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.amphibien_karch',
    display: 'KARCH-Objekte Amphibien',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.mjpnl_vereinbarungsflaechen',
    display: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.flachmoore_regionaler_bedeutung',
    display: 'Flachmoore regionaler Bedeutung',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-flachmoore',
    display: 'Flachmoore von nationaler Bedeutung (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.blaue_flaechen_grenchen',
    display: 'Blaue Flächen Grenchen',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.flechte',
    display: 'Flechte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.moos',
    display: 'Moos',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.witischutzzone',
    display: 'Witischutzzone',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturreservate.reservate',
    display: 'Reservate (Naturreservate)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturreservate.teilgebiete',
    display: 'Teilgebiete (Naturreservate)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-trockenwiesen_trockenweiden',
    display: 'Trockenwiesen und -weiden (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-hochmoore',
    display: 'Hoch- und Übergangsmoore von nationaler Bedeutung (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' } ]
- **value_mismatch** bei `results[1].dataproduct.type`
  - API 1: 'layergroup'
  - API 2: 'singleactor'
- **value_mismatch** bei `results[2].dataproduct.display`
  - API 1: 'Amphibienlaichgebiete von nationaler Bedeutung - Ortsfeste Objekte (Quelle Bund)'
  - API 2: 'Naturschutzobjekte'
- **value_mismatch** bei `results[2].dataproduct.type`
  - API 1: 'singleactor'
  - API 2: 'layergroup'
- **missing_in_api1** bei `results[2].dataproduct.sublayers`
  - API 2: [ { dataproduct_id: 'ch.so.arp.naturschutzobjekte.amphibienstandorte',
    display: 'Amphibienstandorte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-amphibien_wanderobjekte',
    display: 'Amphibienlaichgebiete von nationaler Bedeutung - Wanderobjekte (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-amphibien',
    display:
     'Amphibienlaichgebiete von nationaler Bedeutung - Ortsfeste Objekte (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.amphibien_karch',
    display: 'KARCH-Objekte Amphibien',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.fledermausfundorte',
    display: 'Fledermausfundorte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.mjpnl_vereinbarungsflaechen',
    display: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.flachmoore_regionaler_bedeutung',
    display: 'Flachmoore regionaler Bedeutung',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-flachmoore',
    display: 'Flachmoore von nationaler Bedeutung (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.blaue_flaechen_grenchen',
    display: 'Blaue Flächen Grenchen',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.flechte',
    display: 'Flechte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.moos',
    display: 'Moos',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.witischutzzone',
    display: 'Witischutzzone',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturreservate.reservate',
    display: 'Reservate (Naturreservate)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturreservate.teilgebiete',
    display: 'Teilgebiete (Naturreservate)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-trockenwiesen_trockenweiden',
    display: 'Trockenwiesen und -weiden (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-hochmoore',
    display: 'Hoch- und Übergangsmoore von nationaler Bedeutung (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' } ]

---

### Test 62: 
**Status:** ✅ Bestanden
**Suchtext:** "tierstandorte (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:06

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 63: 
**Status:** ✅ Bestanden
**Suchtext:** "hintergrundkarte orthofoto"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:06

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 64: 
**Status:** ✅ Bestanden
**Suchtext:** "landwirtschaftliche zonengrenzen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:06

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 65: 
**Status:** ✅ Bestanden
**Suchtext:** "gemeindegrenzen, kommune, stadt"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:06

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 66: 
**Status:** ✅ Bestanden
**Suchtext:** "fischerei - reviere"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:06

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 67: 
**Status:** ✅ Bestanden
**Suchtext:** "fischerei - patentgewässer"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:07

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 68: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "verkehrsmodell miv 2019 / 2030 / 2040"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:07

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.avt.verkehrsmodell_2019_miv_details',
     display: 'Verkehrsmodell MIV 2019 / 2030 / 2040 Details',
     dset_info: true,
     stacktype: 'foreground',
     sublayers: [ [Object], [Object], [Object] ],
     type: 'layergroup' } }

---

### Test 69: 
**Status:** ✅ Bestanden
**Suchtext:** "samenerntekataster (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:07

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 70: 
**Status:** ✅ Bestanden
**Suchtext:** "bodeneignung kulturtyp (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:07

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 71: 
**Status:** ✅ Bestanden
**Suchtext:** "geotope"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:07

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 72: 
**Status:** ✅ Bestanden
**Suchtext:** "schutzwald"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:07

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 73: 
**Status:** ✅ Bestanden
**Suchtext:** "regionale führungsstäbe (rfs)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:07

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 74: 
**Status:** ✅ Bestanden
**Suchtext:** "schutzzonen der ganzen schweiz (quelle geodienste.ch)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:08

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 75: 
**Status:** ✅ Bestanden
**Suchtext:** "immobilienportfolio (gebäude und grundstücke)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:08

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 76: 
**Status:** ✅ Bestanden
**Suchtext:** "klimaeignung übersicht (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:08

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 77: 
**Status:** ✅ Bestanden
**Suchtext:** "einzugsgebiet fliessgewässer"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:08

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 78: 
**Status:** ✅ Bestanden
**Suchtext:** "schutzareal der ganzen schweiz (quelle geodienste.ch)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:08

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 79: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "liegenschaften nach bebauungsstand (bauzonenstatistik, geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:08

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 3
  - API 2: 2
- **value_mismatch** bei `results[0].dataproduct.display`
  - API 1: 'Liegenschaften nach Bebauungsstand (Bauzonenstatistik, geschützt)'
  - API 2: 'Bauzonenstatistik (geschützt)'
- **value_mismatch** bei `results[0].dataproduct.type`
  - API 1: 'singleactor'
  - API 2: 'layergroup'
- **missing_in_api1** bei `results[0].dataproduct.sublayers`
  - API 2: [ { dataproduct_id: 'ch.so.arp.bauzonenstatistik.uebersteuerung_bebauungsstand',
    display: 'Übersteuerung Bebauungsstand (Bauzonenstatistik, geschützt)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.bauzonenstatistik.liegenschaft_nach_bebauungsstand',
    display: 'Liegenschaften nach Bebauungsstand (Bauzonenstatistik, geschützt)',
    dset_info: true,
    type: 'singleactor' } ]
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Bauzonenstatistik (geschützt)'
  - API 2: 'Liegenschaften nach Bebauungsstand (Bauzonenstatistik, geschützt)'
- **missing_in_api2** bei `results[1].dataproduct.sublayers`
  - API 1: [ { dataproduct_id: 'ch.so.arp.bauzonenstatistik.uebersteuerung_bebauungsstand',
    display: 'Übersteuerung Bebauungsstand (Bauzonenstatistik, geschützt)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.bauzonenstatistik.liegenschaft_nach_bebauungsstand',
    display: 'Liegenschaften nach Bebauungsstand (Bauzonenstatistik, geschützt)',
    dset_info: true,
    type: 'singleactor' } ]
- **value_mismatch** bei `results[1].dataproduct.type`
  - API 1: 'layergroup'
  - API 2: 'singleactor'
- **missing_in_api2** bei `results[2]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.bauzonenstatistik.uebersteuerung_bebauungsstand',
     display: 'Übersteuerung Bebauungsstand (Bauzonenstatistik, geschützt)',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }

---

### Test 80: 
**Status:** ✅ Bestanden
**Suchtext:** "laufende bohrarbeiten (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:08

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 81: 
**Status:** ✅ Bestanden
**Suchtext:** "stehende gewässer (im aufbau), see, teich, fischteich, löschweiher, weiher"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:09

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 82: 
**Status:** ✅ Bestanden
**Suchtext:** "schutzzonen (review, geschützt), grundwasserschutzzonen, fassungsbereich, s1, s2, s3, gwsz, grundwasserschutzareale"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:09

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 83: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "karst"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:09

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 5, API2: 5
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[2].dataproduct.display`
  - API 1: 'Geotope'
  - API 2: 'Naturgefahrenhinweiskarte'
- **array_length_mismatch** bei `results[2].dataproduct.sublayers`
  - API 1: 6
  - API 2: 4
- **value_mismatch** bei `results[2].dataproduct.sublayers[0].display`
  - API 1: 'Quelle (Geotope)'
  - API 2: 'Karst (Geologie)'
- **value_mismatch** bei `results[2].dataproduct.sublayers[1].display`
  - API 1: 'Höhlen (Geotope)'
  - API 2: 'Steinschläge (Naturgefahrenhinweiskarte)'
- **value_mismatch** bei `results[2].dataproduct.sublayers[2].display`
  - API 1: 'Erratiker (Geotope)'
  - API 2: 'Rutschungen (Naturgefahrenhinweiskarte)'
- **value_mismatch** bei `results[2].dataproduct.sublayers[3].display`
  - API 1: 'Karst (Geologie)'
  - API 2: 'Wassergefahren (Naturgefahrenhinweiskarte)'
- **missing_in_api2** bei `results[2].dataproduct.sublayers[4]`
  - API 1: { dataproduct_id: 'ch.so.afu.geotope.aufschluss',
  display: 'Aufschluss (Geotope)',
  dset_info: true,
  type: 'singleactor' }
- **missing_in_api2** bei `results[2].dataproduct.sublayers[5]`
  - API 1: { dataproduct_id: 'ch.so.afu.geotope.landschaftsform',
  display: 'Landschaftsform (Geotope)',
  dset_info: true,
  type: 'singleactor' }
- **value_mismatch** bei `results[3].dataproduct.display`
  - API 1: 'Naturgefahrenhinweiskarte'
  - API 2: 'Geotope'
- **array_length_mismatch** bei `results[3].dataproduct.sublayers`
  - API 1: 4
  - API 2: 6
- ... und 6 weitere Unterschiede

---

### Test 84: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "sentinel-2 satellitenbildmosaik 2018"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:09

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[0].dataproduct.display`
  - API 1: 'Sentinel-2 Satellitenbildmosaik 2018'
  - API 2: ' Sentinel-2 Satellitenbildmosaik 2018'

---

### Test 85: 
**Status:** ✅ Bestanden
**Suchtext:** "gefährdungskarte oberflächenabfluss (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:09

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 86: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "inventar der historischen verkehrswege der schweiz ivs: national (quelle bund), ivs"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:09

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 4, API2: 4
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[2].dataproduct.display`
  - API 1: 'Inventar der historischen Verkehrswege der Schweiz IVS: Regional und Lokal (Quelle Bund)'
  - API 2: 'Inventar der historischen Verkehrswege der Schweiz IVS: Wegbegleiter (Quelle Bund)'
- **value_mismatch** bei `results[3].dataproduct.display`
  - API 1: 'Inventar der historischen Verkehrswege der Schweiz IVS: Wegbegleiter (Quelle Bund)'
  - API 2: 'Inventar der historischen Verkehrswege der Schweiz IVS: Regional und Lokal (Quelle Bund)'

---

### Test 87: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "inventar der historischen verkehrswege der schweiz ivs: nationale bed. hist. verlauf (quelle bund), ivs"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:10

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 4, API2: 4
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[0].dataproduct.display`
  - API 1: 'Inventar der historischen Verkehrswege der Schweiz IVS: nationale Bed. hist. Verlauf (Quelle Bund)'
  - API 2: 'Inventar der historischen Verkehrswege der Schweiz IVS: National (Quelle Bund)'
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Inventar der historischen Verkehrswege der Schweiz IVS: National (Quelle Bund)'
  - API 2: 'Inventar der historischen Verkehrswege der Schweiz IVS: nationale Bed. hist. Verlauf (Quelle Bund)'
- **value_mismatch** bei `results[2].dataproduct.display`
  - API 1: 'Inventar der historischen Verkehrswege der Schweiz IVS: Regional und Lokal (Quelle Bund)'
  - API 2: 'Inventar der historischen Verkehrswege der Schweiz IVS: Wegbegleiter (Quelle Bund)'
- **value_mismatch** bei `results[3].dataproduct.display`
  - API 1: 'Inventar der historischen Verkehrswege der Schweiz IVS: Wegbegleiter (Quelle Bund)'
  - API 2: 'Inventar der historischen Verkehrswege der Schweiz IVS: Regional und Lokal (Quelle Bund)'

---

### Test 88: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "trockenwiesen und -weiden (quelle bund), tww"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:10

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results[1].dataproduct.sublayers`
  - API 1: 15
  - API 2: 16
- **value_mismatch** bei `results[1].dataproduct.sublayers[4].display`
  - API 1: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
  - API 2: 'Fledermausfundorte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[5].display`
  - API 1: 'Flachmoore regionaler Bedeutung'
  - API 2: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[6].display`
  - API 1: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
  - API 2: 'Flachmoore regionaler Bedeutung'
- **value_mismatch** bei `results[1].dataproduct.sublayers[7].display`
  - API 1: 'Blaue Flächen Grenchen'
  - API 2: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[8].display`
  - API 1: 'Flechte'
  - API 2: 'Blaue Flächen Grenchen'
- **value_mismatch** bei `results[1].dataproduct.sublayers[9].display`
  - API 1: 'Moos'
  - API 2: 'Flechte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[10].display`
  - API 1: 'Witischutzzone'
  - API 2: 'Moos'
- **value_mismatch** bei `results[1].dataproduct.sublayers[11].display`
  - API 1: 'Reservate (Naturreservate)'
  - API 2: 'Witischutzzone'
- **value_mismatch** bei `results[1].dataproduct.sublayers[12].display`
  - API 1: 'Teilgebiete (Naturreservate)'
  - API 2: 'Reservate (Naturreservate)'
- ... und 3 weitere Unterschiede

---

### Test 89: 
**Status:** ✅ Bestanden
**Suchtext:** "landschaften und naturdenkmäler (quelle bund), bln"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:10

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 90: 
**Status:** ✅ Bestanden
**Suchtext:** "wasser- und zugvogelreservate von internationaler und nationaler bedeutung (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:10

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 91: 
**Status:** ✅ Bestanden
**Suchtext:** "smaragd gebiete (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:10

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 92: 
**Status:** ✅ Bestanden
**Suchtext:** "rodungen und rodungsersatz (flächen)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:10

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 93: 
**Status:** ✅ Bestanden
**Suchtext:** "religionsgemeinschaften"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:10

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 94: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "flachmoore von nationaler bedeutung (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:11

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results[1].dataproduct.sublayers`
  - API 1: 15
  - API 2: 16
- **value_mismatch** bei `results[1].dataproduct.sublayers[4].display`
  - API 1: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
  - API 2: 'Fledermausfundorte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[5].display`
  - API 1: 'Flachmoore regionaler Bedeutung'
  - API 2: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[6].display`
  - API 1: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
  - API 2: 'Flachmoore regionaler Bedeutung'
- **value_mismatch** bei `results[1].dataproduct.sublayers[7].display`
  - API 1: 'Blaue Flächen Grenchen'
  - API 2: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[8].display`
  - API 1: 'Flechte'
  - API 2: 'Blaue Flächen Grenchen'
- **value_mismatch** bei `results[1].dataproduct.sublayers[9].display`
  - API 1: 'Moos'
  - API 2: 'Flechte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[10].display`
  - API 1: 'Witischutzzone'
  - API 2: 'Moos'
- **value_mismatch** bei `results[1].dataproduct.sublayers[11].display`
  - API 1: 'Reservate (Naturreservate)'
  - API 2: 'Witischutzzone'
- **value_mismatch** bei `results[1].dataproduct.sublayers[12].display`
  - API 1: 'Teilgebiete (Naturreservate)'
  - API 2: 'Reservate (Naturreservate)'
- ... und 3 weitere Unterschiede

---

### Test 95: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "hoch- und übergangsmoore von nationaler bedeutung (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:11

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results[1].dataproduct.sublayers`
  - API 1: 15
  - API 2: 16
- **value_mismatch** bei `results[1].dataproduct.sublayers[4].display`
  - API 1: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
  - API 2: 'Fledermausfundorte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[5].display`
  - API 1: 'Flachmoore regionaler Bedeutung'
  - API 2: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[6].display`
  - API 1: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
  - API 2: 'Flachmoore regionaler Bedeutung'
- **value_mismatch** bei `results[1].dataproduct.sublayers[7].display`
  - API 1: 'Blaue Flächen Grenchen'
  - API 2: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[8].display`
  - API 1: 'Flechte'
  - API 2: 'Blaue Flächen Grenchen'
- **value_mismatch** bei `results[1].dataproduct.sublayers[9].display`
  - API 1: 'Moos'
  - API 2: 'Flechte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[10].display`
  - API 1: 'Witischutzzone'
  - API 2: 'Moos'
- **value_mismatch** bei `results[1].dataproduct.sublayers[11].display`
  - API 1: 'Reservate (Naturreservate)'
  - API 2: 'Witischutzzone'
- **value_mismatch** bei `results[1].dataproduct.sublayers[12].display`
  - API 1: 'Teilgebiete (Naturreservate)'
  - API 2: 'Reservate (Naturreservate)'
- ... und 3 weitere Unterschiede

---

### Test 96: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "amphibienlaichgebiete von nationaler bedeutung - ortsfeste objekte (quelle bund), ianb"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:11

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Naturschutzobjekte'
  - API 2: 'Amphibienlaichgebiete von nationaler Bedeutung - Wanderobjekte (Quelle Bund)'
- **missing_in_api2** bei `results[1].dataproduct.sublayers`
  - API 1: [ { dataproduct_id: 'ch.so.arp.naturschutzobjekte.amphibienstandorte',
    display: 'Amphibienstandorte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-amphibien_wanderobjekte',
    display: 'Amphibienlaichgebiete von nationaler Bedeutung - Wanderobjekte (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-amphibien',
    display:
     'Amphibienlaichgebiete von nationaler Bedeutung - Ortsfeste Objekte (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.amphibien_karch',
    display: 'KARCH-Objekte Amphibien',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.mjpnl_vereinbarungsflaechen',
    display: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.flachmoore_regionaler_bedeutung',
    display: 'Flachmoore regionaler Bedeutung',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-flachmoore',
    display: 'Flachmoore von nationaler Bedeutung (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.blaue_flaechen_grenchen',
    display: 'Blaue Flächen Grenchen',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.flechte',
    display: 'Flechte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.moos',
    display: 'Moos',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.witischutzzone',
    display: 'Witischutzzone',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturreservate.reservate',
    display: 'Reservate (Naturreservate)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturreservate.teilgebiete',
    display: 'Teilgebiete (Naturreservate)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-trockenwiesen_trockenweiden',
    display: 'Trockenwiesen und -weiden (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-hochmoore',
    display: 'Hoch- und Übergangsmoore von nationaler Bedeutung (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' } ]
- **value_mismatch** bei `results[1].dataproduct.type`
  - API 1: 'layergroup'
  - API 2: 'singleactor'
- **value_mismatch** bei `results[2].dataproduct.display`
  - API 1: 'Amphibienlaichgebiete von nationaler Bedeutung - Wanderobjekte (Quelle Bund)'
  - API 2: 'Naturschutzobjekte'
- **value_mismatch** bei `results[2].dataproduct.type`
  - API 1: 'singleactor'
  - API 2: 'layergroup'
- **missing_in_api1** bei `results[2].dataproduct.sublayers`
  - API 2: [ { dataproduct_id: 'ch.so.arp.naturschutzobjekte.amphibienstandorte',
    display: 'Amphibienstandorte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-amphibien_wanderobjekte',
    display: 'Amphibienlaichgebiete von nationaler Bedeutung - Wanderobjekte (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-amphibien',
    display:
     'Amphibienlaichgebiete von nationaler Bedeutung - Ortsfeste Objekte (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.amphibien_karch',
    display: 'KARCH-Objekte Amphibien',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.fledermausfundorte',
    display: 'Fledermausfundorte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.mjpnl_vereinbarungsflaechen',
    display: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.flachmoore_regionaler_bedeutung',
    display: 'Flachmoore regionaler Bedeutung',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-flachmoore',
    display: 'Flachmoore von nationaler Bedeutung (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.blaue_flaechen_grenchen',
    display: 'Blaue Flächen Grenchen',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.flechte',
    display: 'Flechte',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturschutzobjekte.moos',
    display: 'Moos',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.nutzungsplanung.witischutzzone',
    display: 'Witischutzzone',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturreservate.reservate',
    display: 'Reservate (Naturreservate)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.naturreservate.teilgebiete',
    display: 'Teilgebiete (Naturreservate)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-trockenwiesen_trockenweiden',
    display: 'Trockenwiesen und -weiden (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.bafu.bundesinventare-hochmoore',
    display: 'Hoch- und Übergangsmoore von nationaler Bedeutung (Quelle Bund)',
    dset_info: true,
    type: 'singleactor' } ]

---

### Test 97: 
**Status:** ✅ Bestanden
**Suchtext:** "inventar der historischen verkehrswege der schweiz ivs: regional und lokal (quelle bund), ivs"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:11

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 4, API2: 4
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 98: 
**Status:** ✅ Bestanden
**Suchtext:** "kernkraftwerke (quelle bund), kkw, atomkraftwerk"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:11

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 99: 
**Status:** ✅ Bestanden
**Suchtext:** "öreb-kataster review (geschützt), grundstückinformation, öffentlich-rechtlichen eigentumsbeschränkungen, oereb"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:11

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 100: 
**Status:** ✅ Bestanden
**Suchtext:** "rodungen und rodungsersatz (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:12

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 101: 
**Status:** ✅ Bestanden
**Suchtext:** "vegetation entwicklungsstufen digitales oberflächenmodell"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:12

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 102: 
**Status:** ✅ Bestanden
**Suchtext:** "benannte gebiete (amtliche vermessung)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:12

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 103: 
**Status:** ✅ Bestanden
**Suchtext:** "agglomerationsprogramme"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:12

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 104: 
**Status:** ✅ Bestanden
**Suchtext:** "verkehrsmodell öv 2019 / 2040 passagiere"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:12

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 105: 
**Status:** ✅ Bestanden
**Suchtext:** "synoptische ik rutschung (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:12

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 106: 
**Status:** ✅ Bestanden
**Suchtext:** "finanz- und lastenausgleich fila (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:12

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 107: 
**Status:** ✅ Bestanden
**Suchtext:** "waldwanderung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:13

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 108: 
**Status:** ✅ Bestanden
**Suchtext:** "hydrologische messstationen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:13

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 109: 
**Status:** ⚠️ Bestanden mit Warnungen
**Suchtext:** "differenzen av-gb, abgleich, vergleich"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:13

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)
- ⚠️ API2: Leeres Results-Array (0 Elemente)
- ⚠️ Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet

**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️

---

### Test 110: 
**Status:** ✅ Bestanden
**Suchtext:** "zuströmbereiche der ganzen schweiz (quelle geodienste.ch)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:13

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 111: 
**Status:** ✅ Bestanden
**Suchtext:** "pro natura naturschutzgebiete (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:13

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 112: 
**Status:** ✅ Bestanden
**Suchtext:** "hindernisse kantonale ausnahmetransportrouten (quelle geodienste.ch)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:13

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 113: 
**Status:** ✅ Bestanden
**Suchtext:** "routen kantonale ausnahmetransportrouten (quelle geodienste.ch)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:13

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 114: 
**Status:** ✅ Bestanden
**Suchtext:** "inventar der historischen verkehrswege der schweiz ivs: wegbegleiter (quelle bund), ivs"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:14

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 115: 
**Status:** ✅ Bestanden
**Suchtext:** "synoptische ik wasser (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:14

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 116: 
**Status:** ✅ Bestanden
**Suchtext:** "zonenpläne für den notfallschutz (quelle bund), kernkraftwerk, zonenplan, notfallschutz, kkw"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:14

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 117: 
**Status:** ✅ Bestanden
**Suchtext:** "auengebiete von nationaler bedeutung (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:14

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 118: 
**Status:** ✅ Bestanden
**Suchtext:** "schützenswerten ortsbilder der schweiz von nationaler bedeutung (quelle bund), isos"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:14

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 119: 
**Status:** ✅ Bestanden
**Suchtext:** "hydranten wasser"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:14

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 120: 
**Status:** ⚠️ Bestanden mit Warnungen
**Suchtext:** "sirenenplanung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:14

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)
- ⚠️ API2: Leeres Results-Array (0 Elemente)
- ⚠️ Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet

**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️

---

### Test 121: 
**Status:** ✅ Bestanden
**Suchtext:** "wald - übersicht, waldflächen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:15

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 122: 
**Status:** ✅ Bestanden
**Suchtext:** "bezirksgrenzen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:15

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 123: 
**Status:** ✅ Bestanden
**Suchtext:** "denkmalschutz (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:15

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 124: 
**Status:** ✅ Bestanden
**Suchtext:** "gewässerschutz (geschützt), pumpwerke, grundwasser, grundwassergebiet, grundwasserspiegel"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:15

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 125: 
**Status:** ✅ Bestanden
**Suchtext:** "bodentyp (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:15

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 126: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "bewertung (wirtschaftsförderung, geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:16

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 127: 
**Status:** ✅ Bestanden
**Suchtext:** "nachführungseinheiten abwasser (leitungskataster), lk, leitungskataster, abwasser, zuständigkeit"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:16

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 128: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "strukturverbesserungen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:16

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.alw.drainagenplaene',
     display: 'Drainagenpläne ',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }

---

### Test 129: 
**Status:** ✅ Bestanden
**Suchtext:** "nachführungseinheiten wasser (leitungskataster), lk, leitungskataster, wasser, zuständigkeit"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:16

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 130: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "nutzungsplanung kontrolle (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:16

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'ÖREB-Kataster Review (geschützt)'
  - API 2: 'Nutzungsplanung Review (geschützt)'
- **value_mismatch** bei `results[1].dataproduct.dset_info`
  - API 1: true
  - API 2: false
- **array_length_mismatch** bei `results[1].dataproduct.sublayers`
  - API 1: 14
  - API 2: 12
- **value_mismatch** bei `results[1].dataproduct.sublayers[0].display`
  - API 1: 'Waldabstandslinien (Review, geschützt)'
  - API 2: 'Nutzungsplanung Kontrolle (geschützt)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[1].display`
  - API 1: 'Baulinien (kantonal/kommunal) (Review, geschützt)'
  - API 2: 'Baulinien (Review, geschützt)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[2].display`
  - API 1: 'Sondernutzungspläne (Review, geschützt)'
  - API 2: 'Erschliessungsplanung  (Review, geschützt)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[3].display`
  - API 1: 'Nutzungsplanung überlagernd (geschützt)'
  - API 2: 'Sondernutzungspläne (Review, geschützt)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[3].dset_info`
  - API 1: true
  - API 2: false
- **value_mismatch** bei `results[1].dataproduct.sublayers[4].display`
  - API 1: 'Nutzungsplanung Grundnutzung (Review, geschützt)'
  - API 2: 'Ortsbildschutz (Review, geschützt)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[5].display`
  - API 1: 'Planungszonen (Review, geschützt)'
  - API 2: 'Natur / Landschaft (Review, geschützt)'
- ... und 30 weitere Unterschiede

---

### Test 131: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "naturreservate, naturschutzgebiete"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:16

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 3
  - API 2: 2
- **missing_in_api2** bei `results[2]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.nutzungsplanung',
     display: 'Nutzungsplanung',
     dset_info: true,
     stacktype: 'foreground',
     sublayers:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     type: 'layergroup' } }

---

### Test 132: 
**Status:** ✅ Bestanden
**Suchtext:** "digitales terrainmodell (lidar)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:17

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 4, API2: 4
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 133: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "gebäudeeingänge (amtliche vermesssung)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:17

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.agi.gebaeudeinformation_und_adressen',
     display: 'Gebäudeinformation und Adressen',
     dset_info: true,
     stacktype: 'foreground',
     sublayers: [ [Object], [Object], [Object] ],
     type: 'layergroup' } }

---

### Test 134: 
**Status:** ✅ Bestanden
**Suchtext:** "gefahrenkartenberichte pro gemeinde (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:17

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 135: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "fledermausfundorte (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:17

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.naturschutzobjekte_geschuetzt',
     display: 'Naturschutzobjekte (geschützt)',
     dset_info: true,
     stacktype: 'foreground',
     sublayers:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     type: 'layergroup' } }

---

### Test 136: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "wirtschaftsflächen (arbeitszonenbewirtschaftung)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:17

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 137: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "richtplan"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:17

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 8, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 8
  - API 2: 2
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Juraschutzzone (Richtplan)'
  - API 2: 'Abbaustellen'
- **missing_in_api2** bei `results[2]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.richtplan.sondernutzungsgebiet',
     display: 'Sondernutzungsgebiet (Richtplan)',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }
- **missing_in_api2** bei `results[3]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.richtplan.regionaler_naturpark_von_nationaler_bedeutung',
     display: 'Regionaler Naturpark von nationaler Bedeutung (Richtplan)',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }
- **missing_in_api2** bei `results[4]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.richtplan.siedlungstrennguertel',
     display: 'Siedlungstrenngürtel (Richtplan)',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }
- **missing_in_api2** bei `results[5]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.richtplan.kantonale_uferschutzzonen',
     display: 'Kantonale Uferschutzzone (Richtplan)',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }
- **missing_in_api2** bei `results[6]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.richtplan.entwicklungsgebiete_arbeiten',
     display: 'Entwicklungsgebiete Arbeiten (Richtplan)',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }
- **missing_in_api2** bei `results[7]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.afu.abbaustellen',
     display: 'Abbaustellen',
     dset_info: true,
     stacktype: 'foreground',
     type: 'singleactor' } }

---

### Test 138: 
**Status:** ✅ Bestanden
**Suchtext:** "neophyten (geschützt), invasive gebietsfremde pflanzen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:17

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 139: 
**Status:** ✅ Bestanden
**Suchtext:** "sobau geschäfte"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:18

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 140: 
**Status:** ✅ Bestanden
**Suchtext:** "wasserhaushalt nach fal 24+ (boden, geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:18

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 141: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "naturschutzobjekte (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:18

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 142: 
**Status:** ✅ Bestanden
**Suchtext:** "controlling avgbs-vollzugsmeldungen , avgbs, gb2av, grundbuch, amtliche vermessung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:18

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 143: 
**Status:** ✅ Bestanden
**Suchtext:** "fruchtfolgeflächen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:18

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 144: 
**Status:** ✅ Bestanden
**Suchtext:** "grundwasserbewirtschaftung (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:19

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 145: 
**Status:** ✅ Bestanden
**Suchtext:** "controlling av-mutationen, avgbs, mutationen, amtliche vermessung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:19

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 146: 
**Status:** ✅ Bestanden
**Suchtext:** "landwirtschaftliche kulturflächen (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:19

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 147: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "region arbeitszonenbewirtschaftung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:19

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 3
  - API 2: 2
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Erfassung Arbeitszonenbewirtschaftung (geschützt)'
  - API 2: 'Inventar Arbeitszonenbewirtschaftung (geschützt)'
- **array_length_mismatch** bei `results[1].dataproduct.sublayers`
  - API 1: 5
  - API 2: 3
- **value_mismatch** bei `results[1].dataproduct.sublayers[0].display`
  - API 1: 'Inventarisierung (Arbeitszonenbewirtschaftung, geschützt)'
  - API 2: 'Bauzonenstatistik (Arbeitszonenbewirtschaftung)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[1].display`
  - API 1: 'Inventar (Arbeitszonenbewirtschaftung, geschützt)'
  - API 2: 'Inventar Watchlist (Arbeitszonenbewirtschaftung, geschützt)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[2].display`
  - API 1: 'Arbeitszonen (geschützt)'
  - API 2: 'Region Arbeitszonenbewirtschaftung'
- **missing_in_api2** bei `results[1].dataproduct.sublayers[3]`
  - API 1: { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.bauzonenstatistik_geschuetzt',
  display: 'Bebauungsstand Arbeitszonen (geschützt)',
  dset_info: true,
  type: 'singleactor' }
- **missing_in_api2** bei `results[1].dataproduct.sublayers[4]`
  - API 1: { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.regionen_geschuetzt',
  display: 'Region Arbeitszonenbewirtschaftung (geschützt)',
  dset_info: true,
  type: 'singleactor' }
- **missing_in_api2** bei `results[2]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung',
     display: 'Inventar Arbeitszonenbewirtschaftung (geschützt)',
     dset_info: false,
     stacktype: 'foreground',
     sublayers: [ [Object], [Object], [Object], [Object] ],
     type: 'layergroup' } }

---

### Test 148: 
**Status:** ✅ Bestanden
**Suchtext:** "jagd - banngebiete"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:19

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 149: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "erfassung arbeitszonenbewirtschaftung (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:19

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results[0].dataproduct.sublayers`
  - API 1: 5
  - API 2: 2
- **value_mismatch** bei `results[0].dataproduct.sublayers[0].display`
  - API 1: 'Inventarisierung (Arbeitszonenbewirtschaftung, geschützt)'
  - API 2: 'Bewertung (Arbeitszonenbewirtschaftung, geschützt)'
- **value_mismatch** bei `results[0].dataproduct.sublayers[1].display`
  - API 1: 'Inventar (Arbeitszonenbewirtschaftung, geschützt)'
  - API 2: 'Grundnutzung (Arbeitszonenbewirtschaftung)'
- **value_mismatch** bei `results[0].dataproduct.sublayers[1].dset_info`
  - API 1: false
  - API 2: true
- **missing_in_api2** bei `results[0].dataproduct.sublayers[2]`
  - API 1: { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.arbeitszonen_geschuetzt',
  display: 'Arbeitszonen (geschützt)',
  dset_info: true,
  type: 'singleactor' }
- **missing_in_api2** bei `results[0].dataproduct.sublayers[3]`
  - API 1: { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.bauzonenstatistik_geschuetzt',
  display: 'Bebauungsstand Arbeitszonen (geschützt)',
  dset_info: true,
  type: 'singleactor' }
- **missing_in_api2** bei `results[0].dataproduct.sublayers[4]`
  - API 1: { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.regionen_geschuetzt',
  display: 'Region Arbeitszonenbewirtschaftung (geschützt)',
  dset_info: true,
  type: 'singleactor' }

---

### Test 150: 
**Status:** ✅ Bestanden
**Suchtext:** "luftbelastung prognose 2020"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:20

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 151: 
**Status:** ✅ Bestanden
**Suchtext:** "fliessrichtungen (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:20

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 152: 
**Status:** ✅ Bestanden
**Suchtext:** "nutzungsplanung review (geschützt), nplso, zonenplan, gesamtplan, nutzungszonen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:20

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 153: 
**Status:** ✅ Bestanden
**Suchtext:** "jagd - reviere"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:20

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 154: 
**Status:** ✅ Bestanden
**Suchtext:** "luftbelastung zustand 2010"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:20

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 155: 
**Status:** ✅ Bestanden
**Suchtext:** "orthofoto cir, luftbilder"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:20

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 156: 
**Status:** ✅ Bestanden
**Suchtext:** "orthofoto rgb, luftbilder"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:21

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 157: 
**Status:** ✅ Bestanden
**Suchtext:** "biodiversität qualitätsstufe ii (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:21

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 158: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "gebäudeinformation und adressen, adressen, av, amtliche vermessung, strassenachsen, gwr, gebäudeingang, eingang, heizung, wärmeerzeugung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:21

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 159: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "kantonsstrassen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:21

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 5, API2: 4
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 5
  - API 2: 4
- **array_length_mismatch** bei `results[0].dataproduct.sublayers`
  - API 1: 3
  - API 2: 2
- **value_mismatch** bei `results[0].dataproduct.sublayers[1].display`
  - API 1: 'Signalisierte Geschwindigkeiten (Kantonsstrassen)'
  - API 2: 'Achsen (Kantonsstrassen)'
- **missing_in_api2** bei `results[0].dataproduct.sublayers[2]`
  - API 1: { dataproduct_id: 'ch.so.avt.kantonsstrassen_achsen',
  display: 'Achsen (Kantonsstrassen)',
  dset_info: true,
  type: 'singleactor' }
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Kunstbauten'
  - API 2: 'Strassenlärm Belastungen'
- **value_mismatch** bei `results[2].dataproduct.display`
  - API 1: 'Strassenlärm Belastungen'
  - API 2: 'Kunstbauten'
- **missing_in_api2** bei `results[4]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.nutzungsplanung',
     display: 'Nutzungsplanung',
     dset_info: true,
     stacktype: 'foreground',
     sublayers:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     type: 'layergroup' } }

---

### Test 160: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "plz und ortschaften"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:21

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.agi.av.amtliche_vermessung',
     display: 'Amtliche Vermessung',
     dset_info: true,
     stacktype: 'foreground',
     sublayers: [ [Object], [Object], [Object], [Object], [Object], [Object], [Object] ],
     type: 'layergroup' } }

---

### Test 161: 
**Status:** ✅ Bestanden
**Suchtext:** "forstkreis und forstreviere, forstorganisation"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:21

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 162: 
**Status:** ✅ Bestanden
**Suchtext:** "jungwald"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:21

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 163: 
**Status:** ✅ Bestanden
**Suchtext:** "landwirtschaftliche kulturflächen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:22

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 164: 
**Status:** ✅ Bestanden
**Suchtext:** "grundwassergeometrie"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:22

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 165: 
**Status:** ✅ Bestanden
**Suchtext:** "landwirtschaftliche bewirtschaftungseinheiten"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:22

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 166: 
**Status:** ✅ Bestanden
**Suchtext:** "schutzwald (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:22

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 167: 
**Status:** ✅ Bestanden
**Suchtext:** "denkmalschutz"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:22

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 168: 
**Status:** ✅ Bestanden
**Suchtext:** "amtliche vermessung, av, grundbuchplan, kataster"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:22

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 169: 
**Status:** ✅ Bestanden
**Suchtext:** "differenzen av-kaso, abgleich, vergleich, katasterschätzung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:22

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 170: 
**Status:** ✅ Bestanden
**Suchtext:** "kunstbauten"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:23

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 171: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "geotope (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:23

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.afu.geotope',
     display: 'Geotope',
     dset_info: true,
     stacktype: 'foreground',
     sublayers: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
     type: 'layergroup' } }

---

### Test 172: 
**Status:** ✅ Bestanden
**Suchtext:** "bodeninformationen landwirtschaft, bodenkartierung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:23

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 173: 
**Status:** ✅ Bestanden
**Suchtext:** "drainagenpläne , entwässerung, abfluss"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:23

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 174: 
**Status:** ✅ Bestanden
**Suchtext:** "fliesstiefen (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:23

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 175: 
**Status:** ✅ Bestanden
**Suchtext:** "schadendienst (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:23

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 176: 
**Status:** ✅ Bestanden
**Suchtext:** "landwirtschaftliche bewirtschaftungseinheiten (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:24

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 177: 
**Status:** ✅ Bestanden
**Suchtext:** "neophyten - erdmandelgras, erdmandelgras"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:24

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 178: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "witischutzzone"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:24

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results[1].dataproduct.sublayers`
  - API 1: 15
  - API 2: 16
- **value_mismatch** bei `results[1].dataproduct.sublayers[4].display`
  - API 1: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
  - API 2: 'Fledermausfundorte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[5].display`
  - API 1: 'Flachmoore regionaler Bedeutung'
  - API 2: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[6].display`
  - API 1: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
  - API 2: 'Flachmoore regionaler Bedeutung'
- **value_mismatch** bei `results[1].dataproduct.sublayers[7].display`
  - API 1: 'Blaue Flächen Grenchen'
  - API 2: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
- **value_mismatch** bei `results[1].dataproduct.sublayers[8].display`
  - API 1: 'Flechte'
  - API 2: 'Blaue Flächen Grenchen'
- **value_mismatch** bei `results[1].dataproduct.sublayers[9].display`
  - API 1: 'Moos'
  - API 2: 'Flechte'
- **value_mismatch** bei `results[1].dataproduct.sublayers[10].display`
  - API 1: 'Witischutzzone'
  - API 2: 'Moos'
- **value_mismatch** bei `results[1].dataproduct.sublayers[11].display`
  - API 1: 'Reservate (Naturreservate)'
  - API 2: 'Witischutzzone'
- **value_mismatch** bei `results[1].dataproduct.sublayers[12].display`
  - API 1: 'Teilgebiete (Naturreservate)'
  - API 2: 'Reservate (Naturreservate)'
- ... und 3 weitere Unterschiede

---

### Test 179: 
**Status:** ✅ Bestanden
**Suchtext:** "wanderwege mit sperrungen und umleitungen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:24

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 180: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "drainagen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:24

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[0].dataproduct.display`
  - API 1: 'Drainagen'
  - API 2: 'Drainagen neu'
- **value_mismatch** bei `results[0].dataproduct.sublayers[1].display`
  - API 1: 'Landwirtschaftliche Entwässerungen (Drainagen)'
  - API 2: 'Drainagen'
- **value_mismatch** bei `results[0].dataproduct.sublayers[1].dset_info`
  - API 1: true
  - API 2: false
- **array_length_mismatch** bei `results[2].dataproduct.sublayers`
  - API 1: 15
  - API 2: 16
- **value_mismatch** bei `results[2].dataproduct.sublayers[4].display`
  - API 1: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
  - API 2: 'Fledermausfundorte'
- **value_mismatch** bei `results[2].dataproduct.sublayers[5].display`
  - API 1: 'Flachmoore regionaler Bedeutung'
  - API 2: 'Vereinbarungsflächen Mehrjahresprogramm Natur und Landschaft (MJPNL)'
- **value_mismatch** bei `results[2].dataproduct.sublayers[6].display`
  - API 1: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
  - API 2: 'Flachmoore regionaler Bedeutung'
- **value_mismatch** bei `results[2].dataproduct.sublayers[7].display`
  - API 1: 'Blaue Flächen Grenchen'
  - API 2: 'Flachmoore von nationaler Bedeutung (Quelle Bund)'
- **value_mismatch** bei `results[2].dataproduct.sublayers[8].display`
  - API 1: 'Flechte'
  - API 2: 'Blaue Flächen Grenchen'
- **value_mismatch** bei `results[2].dataproduct.sublayers[9].display`
  - API 1: 'Moos'
  - API 2: 'Flechte'
- ... und 6 weitere Unterschiede

---

### Test 181: 
**Status:** ✅ Bestanden
**Suchtext:** "walkerkarte (historische karte)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:24

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 182: 
**Status:** ✅ Bestanden
**Suchtext:** "controlling av-validierung, mocheckso, validierung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:25

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 183: 
**Status:** ✅ Bestanden
**Suchtext:** "baulinien nationalstrassen v2.0 öreb (quelle bund)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:25

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 184: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "miv - verkehrszählstellen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:25

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 185: 
**Status:** ✅ Bestanden
**Suchtext:** "hofdüngeranlagen und ställe (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:25

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 186: 
**Status:** ✅ Bestanden
**Suchtext:** "bodenprofilstandorte (bodendaten nabodat), bodenprofile, bodenkartierung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:25

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 187: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "inventar arbeitszonenbewirtschaftung (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:25

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **array_length_mismatch** bei `results[0].dataproduct.sublayers`
  - API 1: 4
  - API 2: 3
- **value_mismatch** bei `results[0].dataproduct.sublayers[0].display`
  - API 1: 'Inventar (Arbeitszonenbewirtschaftung, geschützt)'
  - API 2: 'Bauzonenstatistik (Arbeitszonenbewirtschaftung)'
- **value_mismatch** bei `results[0].dataproduct.sublayers[0].dset_info`
  - API 1: false
  - API 2: true
- **value_mismatch** bei `results[0].dataproduct.sublayers[1].display`
  - API 1: 'Arbeitszonen (geschützt)'
  - API 2: 'Inventar Watchlist (Arbeitszonenbewirtschaftung, geschützt)'
- **value_mismatch** bei `results[0].dataproduct.sublayers[1].dset_info`
  - API 1: true
  - API 2: false
- **value_mismatch** bei `results[0].dataproduct.sublayers[2].display`
  - API 1: 'Bebauungsstand Arbeitszonen (geschützt)'
  - API 2: 'Region Arbeitszonenbewirtschaftung'
- **missing_in_api2** bei `results[0].dataproduct.sublayers[3]`
  - API 1: { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.regionen_geschuetzt',
  display: 'Region Arbeitszonenbewirtschaftung (geschützt)',
  dset_info: true,
  type: 'singleactor' }
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.arp.arbeitszonenbewirtschaftung.erfassung',
     display: 'Erfassung Arbeitszonenbewirtschaftung (geschützt)',
     dset_info: false,
     stacktype: 'foreground',
     sublayers: [ [Object], [Object], [Object], [Object], [Object] ],
     type: 'layergroup' } }

---

### Test 188: 
**Status:** ✅ Bestanden
**Suchtext:** "neozoen – asiatische hornisse erfassung (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:26

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 189: 
**Status:** ✅ Bestanden
**Suchtext:** "neophyten,  invasive gebietsfremde pflanzen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:26

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 190: 
**Status:** ✅ Bestanden
**Suchtext:** "hanglagen (daten geoportal bundesamt für landwirtschaft)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:26

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 191: 
**Status:** ✅ Bestanden
**Suchtext:** "nutzungsvereinbarungen (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:26

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 192: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "grundbuchkreise"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:26

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 2
  - API 2: 1
- **missing_in_api2** bei `results[1]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.agi.av.amtliche_vermessung',
     display: 'Amtliche Vermessung',
     dset_info: true,
     stacktype: 'foreground',
     sublayers: [ [Object], [Object], [Object], [Object], [Object], [Object], [Object] ],
     type: 'layergroup' } }

---

### Test 193: 
**Status:** ✅ Bestanden
**Suchtext:** "aus vsb entlassen, prüfperimeter bodenabtrag, verdachtsflächen, vsb"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:26

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 194: 
**Status:** ✅ Bestanden
**Suchtext:** "bienenstandorte und -sperrgebiete (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:27

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 195: 
**Status:** ✅ Bestanden
**Suchtext:** "gewässerschutz, planerischer gewässerschutz, grundwasserschutz"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:27

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 196: 
**Status:** ✅ Bestanden
**Suchtext:** "prüfperimeter bodenabtrag, schadstoffbelastete böden, verdachtsflächen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:27

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 197: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "übersteuerung bebauungsstand (bauzonenstatistik, geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:27

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[0].dataproduct.display`
  - API 1: 'Übersteuerung Bebauungsstand (Bauzonenstatistik, geschützt)'
  - API 2: 'Bauzonenstatistik (geschützt)'
- **value_mismatch** bei `results[0].dataproduct.type`
  - API 1: 'singleactor'
  - API 2: 'layergroup'
- **missing_in_api1** bei `results[0].dataproduct.sublayers`
  - API 2: [ { dataproduct_id: 'ch.so.arp.bauzonenstatistik.uebersteuerung_bebauungsstand',
    display: 'Übersteuerung Bebauungsstand (Bauzonenstatistik, geschützt)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.bauzonenstatistik.liegenschaft_nach_bebauungsstand',
    display: 'Liegenschaften nach Bebauungsstand (Bauzonenstatistik, geschützt)',
    dset_info: true,
    type: 'singleactor' } ]
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Bauzonenstatistik (geschützt)'
  - API 2: 'Übersteuerung Bebauungsstand (Bauzonenstatistik, geschützt)'
- **missing_in_api2** bei `results[1].dataproduct.sublayers`
  - API 1: [ { dataproduct_id: 'ch.so.arp.bauzonenstatistik.uebersteuerung_bebauungsstand',
    display: 'Übersteuerung Bebauungsstand (Bauzonenstatistik, geschützt)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.arp.bauzonenstatistik.liegenschaft_nach_bebauungsstand',
    display: 'Liegenschaften nach Bebauungsstand (Bauzonenstatistik, geschützt)',
    dset_info: true,
    type: 'singleactor' } ]
- **value_mismatch** bei `results[1].dataproduct.type`
  - API 1: 'layergroup'
  - API 2: 'singleactor'

---

### Test 198: 
**Status:** ✅ Bestanden
**Suchtext:** "schadstoffbelastete böden (geschützt), prüfperimeter bodenabtrag, verdachtsflächen, vsb"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:27

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 199: 
**Status:** ✅ Bestanden
**Suchtext:** "werkkataster siedlungsentwässerung (gep), gep, leitungskataster, werkkataster, abwasser"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:27

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 200: 
**Status:** ✅ Bestanden
**Suchtext:** "leitungskataster wasser (lkmap)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:28

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 201: 
**Status:** ✅ Bestanden
**Suchtext:** "bienenstandorte und -sperrgebiete"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:28

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 202: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "sonde erdwärme (erdwärmesonden)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:28

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results`
  - API 1: 3
  - API 2: 2
- **value_mismatch** bei `results[1].dataproduct.display`
  - API 1: 'Bohrtiefenabfrage Erdwärmesonden'
  - API 2: 'Grundwasserbewirtschaftung'
- **value_mismatch** bei `results[1].dataproduct.type`
  - API 1: 'singleactor'
  - API 2: 'layergroup'
- **missing_in_api1** bei `results[1].dataproduct.sublayers`
  - API 2: [ { dataproduct_id: 'ch.so.afu.wasserbewirtschaftung.sondierung',
    display: 'Sondierungen (Grundwasserbewirtschaftung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.afu.wasserbewirtschaftung.fassung',
    display: 'Fassungen (Grundwasserbewirtschaftung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.afu.wasserbewirtschaftung.quellen',
    display: 'Quellen (Grundwasserbewirtschaftung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.afu.wasserbewirtschaftung.versickerungsschacht',
    display: 'Versickerungsschächte (Grundwasserbewirtschaftung)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.afu.erdwaerme.sonde',
    display: 'Sonde Erdwärme (Erdwärmesonden)',
    dset_info: true,
    type: 'singleactor' },
  { dataproduct_id: 'ch.so.afu.wasserbewirtschaftung.grundwasserwaermenutzung',
    display: 'Grundwasserwärmenutzung (Grundwasserbewirtschaftung)',
    dset_info: true,
    type: 'singleactor' } ]
- **missing_in_api2** bei `results[2]`
  - API 1: { dataproduct:
   { dataproduct_id: 'ch.so.afu.wasserbewirtschaftung',
     display: 'Grundwasserbewirtschaftung',
     dset_info: true,
     stacktype: 'foreground',
     sublayers: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
     type: 'layergroup' } }

---

### Test 203: 
**Status:** ✅ Bestanden
**Suchtext:** "abklärungsperimeter (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:28

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 204: 
**Status:** ✅ Bestanden
**Suchtext:** "waldplan"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:28

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 205: 
**Status:** ✅ Bestanden
**Suchtext:** "grundwasserbewirtschaftung, grundwassernutzung, grundwasservorkommen, grundwasserspiegel"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:28

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 206: 
**Status:** ✅ Bestanden
**Suchtext:** "emissionskataster ekat 2015"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:28

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 207: 
**Status:** ✅ Bestanden
**Suchtext:** "bodentyp"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:29

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 208: 
**Status:** ✅ Bestanden
**Suchtext:** "wald - bestandeskarte"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:29

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 209: 
**Status:** ✅ Bestanden
**Suchtext:** "nachführungsmeldungen amtlichen vermessung (bodenbedeckung, geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:29

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 210: 
**Status:** ✅ Bestanden
**Suchtext:** "hinweiskarte waldbrandgefährdung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:29

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 211: 
**Status:** ✅ Bestanden
**Suchtext:** "grundwassergeometrie (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:29

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 212: 
**Status:** ✅ Bestanden
**Suchtext:** "erschliessungen ausserhalb bauzone (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:29

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 213: 
**Status:** ✅ Bestanden
**Suchtext:** "bodeninformationen wald, bodenkartierung"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:30

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 214: 
**Status:** ✅ Bestanden
**Suchtext:** "öffentlicher verkehr - öv (karte)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:30

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 215: 
**Status:** ✅ Bestanden
**Suchtext:** "abwasser (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:30

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 216: 
**Status:** ✅ Bestanden
**Suchtext:** "landwerte (geschützt), kaso, steuer"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:30

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 217: 
**Status:** ✅ Bestanden
**Suchtext:** "kantonsgrenzen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:30

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 218: 
**Status:** ✅ Bestanden
**Suchtext:** "hintergrundkarte farbig"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:30

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 219: 
**Status:** ✅ Bestanden
**Suchtext:** "notfalltreffpunkte"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:31

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 220: 
**Status:** ✅ Bestanden
**Suchtext:** "satellitenbild thal (april 2014)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:31

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 221: 
**Status:** ✅ Bestanden
**Suchtext:** "geologie, geologische gis-karte, gesteinsschichten, karstformen "
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:31

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 222: 
**Status:** ✅ Bestanden
**Suchtext:** "baugrundklassen nach sia 261, seismische baugrundklassen, baugrundklassenkarte, erdbeben"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:31

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 223: 
**Status:** ✅ Bestanden
**Suchtext:** "baulinien (von solothurn und obergerlafingen), abstandslinien"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:31

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 224: 
**Status:** ✅ Bestanden
**Suchtext:** "kataster der belasteten standorte (kbs, geschützt), altlasten, ablagerungsstandorte, betriebsstandorte, unfallstandorte, deponien"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:31

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 225: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "hochwasserschutz/revitalisierung emme, emme, hochwasserschutz, renaturierung, revitalisierung , orthofoto"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:32

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Inhaltliche Unterschiede (erste 10):**
- **array_length_mismatch** bei `results[0].dataproduct.sublayers`
  - API 1: 13
  - API 2: 12
- **value_mismatch** bei `results[0].dataproduct.sublayers[0].display`
  - API 1: 'Emme:  Hochwasserschutz - Zeitstand 25.03.2025'
  - API 2: 'Emme:  Hochwasserschutz - Zeitstand 06.02.2024'
- **value_mismatch** bei `results[0].dataproduct.sublayers[1].display`
  - API 1: 'Emme:  Hochwasserschutz - Zeitstand 06.02.2024'
  - API 2: 'Emme: Hochwasserschutz - Zeitstand 21.02.2023'
- **value_mismatch** bei `results[0].dataproduct.sublayers[2].display`
  - API 1: 'Emme: Hochwasserschutz - Zeitstand 21.02.2023'
  - API 2: 'Emme: Hochwasserschutz - Zeitstand 17.01.2022'
- **value_mismatch** bei `results[0].dataproduct.sublayers[3].display`
  - API 1: 'Emme: Hochwasserschutz - Zeitstand 17.01.2022'
  - API 2: 'Emme: Hochwasserschutz - Zeitstand 13.09.2021'
- **value_mismatch** bei `results[0].dataproduct.sublayers[4].display`
  - API 1: 'Emme: Hochwasserschutz - Zeitstand 13.09.2021'
  - API 2: 'Emme: Hochwasserschutz - Zeitstand 08.01.2021'
- **value_mismatch** bei `results[0].dataproduct.sublayers[5].display`
  - API 1: 'Emme: Hochwasserschutz - Zeitstand 08.01.2021'
  - API 2: 'Emme: Hochwasserschutz - Zeitstand 08.09.2020'
- **value_mismatch** bei `results[0].dataproduct.sublayers[6].display`
  - API 1: 'Emme: Hochwasserschutz - Zeitstand 08.09.2020'
  - API 2: 'Emme: Hochwasserschutz - Zeitstand 31.07.2020'
- **value_mismatch** bei `results[0].dataproduct.sublayers[7].display`
  - API 1: 'Emme: Hochwasserschutz - Zeitstand 31.07.2020'
  - API 2: 'Emme: Hochwasserschutz - Zeitstand 03.06.2020'
- **value_mismatch** bei `results[0].dataproduct.sublayers[8].display`
  - API 1: 'Emme: Hochwasserschutz - Zeitstand 03.06.2020'
  - API 2: 'Emme: Hochwasserschutz - Zeitstand 19.03.2020'
- ... und 4 weitere Unterschiede

---

### Test 226: 
**Status:** ✅ Bestanden
**Suchtext:** "belastete standorte"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:32

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 227: 
**Status:** ✅ Bestanden
**Suchtext:** "erreichbarkeitsanalyse leistungserbringerstandorte (spitäler/kliniken)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:32

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 228: 
**Status:** ✅ Bestanden
**Suchtext:** "störfallverordnung, konsultationsbereiche"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:32

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 229: 
**Status:** ✅ Bestanden
**Suchtext:** "höhenkurven 1m (lidar), laserscanning, ndom"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:32

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 230: 
**Status:** ✅ Bestanden
**Suchtext:** "hintergrundkarte schwarz-weiss"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:32

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 231: 
**Status:** ✅ Bestanden
**Suchtext:** "archäologische fundstellen (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:32

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 232: 
**Status:** ✅ Bestanden
**Suchtext:** "schutzwaldmassnahmen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:33

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 233: 
**Status:** ✅ Bestanden
**Suchtext:** "klimaanalysekarte nacht 2020"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:33

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 4, API2: 4
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 234: 
**Status:** ✅ Bestanden
**Suchtext:** "jungwaldpflege"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:33

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 235: 
**Status:** ✅ Bestanden
**Suchtext:** "alter projektierte av-gebäude, av, projektiert, gebäude, alter"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:33

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 236: 
**Status:** ✅ Bestanden
**Suchtext:** "klimaanalysekarte tag 2060"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:33

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 237: 
**Status:** ✅ Bestanden
**Suchtext:** "klimaanalysekarte tag 2020"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:33

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 238: 
**Status:** ✅ Bestanden
**Suchtext:** "planungshinweiskarte nacht 2020"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:33

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 239: 
**Status:** ✅ Bestanden
**Suchtext:** "klimaanalysekarte nacht 2060"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:34

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 4, API2: 4
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 240: 
**Status:** ✅ Bestanden
**Suchtext:** "schutzbautenkataster (geschützt), schutzbauten, schutzbautenkataster"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:34

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 241: 
**Status:** ✅ Bestanden
**Suchtext:** "planungshinweiskarte tag 2020"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:34

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 242: 
**Status:** ✅ Bestanden
**Suchtext:** "archäologische fundstellen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:34

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 243: 
**Status:** ✅ Bestanden
**Suchtext:** "ereigniskataster naturgefahren"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:34

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 244: 
**Status:** ✅ Bestanden
**Suchtext:** "kataster der belasteten standorte (kbs), altlasten, ablagerungsstandorte, betriebsstandorte, unfallstandorte, deponien"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:34

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 245: 
**Status:** ✅ Bestanden
**Suchtext:** "bohrtiefenabfrage erdwärmesonden, machbarkeit erdwärmesonden, online-abfrage ews, erdsonden, erdwärme, geothermie"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:34

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 246: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "dtv - täglicher verkehr prognose 2030 (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:35

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'empty_array' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

---

### Test 247: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "dtv - täglicher verkehr prognose 2040 (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:35

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'empty_array' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

---

### Test 248: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "verkehrsmodell miv 2019 / 2030 / 2040 (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:35

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'empty_array' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

---

### Test 249: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "dtv - täglicher verkehr stand 2019 (geschützt)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:35

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'empty_array' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

---

### Test 250: 
**Status:** ✅ Bestanden
**Suchtext:** "programm biodiversität im wald, waldportal"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:35

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 251: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "juraschutzzone (richtplan)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:36

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 252: 
**Status:** ✅ Bestanden
**Suchtext:** "dufourkarte (historische karte)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:36

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 253: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "entwicklungsgebiete arbeiten (richtplan), esp"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:36

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API2: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'empty_array', results: 'empty_array' }

---

### Test 254: 
**Status:** ✅ Bestanden
**Suchtext:** "naturgefahrenhinweiskarte, murgang, übersarung, überflutung, blockschlag, steinschlag, rutschungen"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:36

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 255: 
**Status:** ✅ Bestanden
**Suchtext:** "quellen ungefasst"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:36

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 256: 
**Status:** ✅ Bestanden
**Suchtext:** "synoptische ik sturz (naturgefahren)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:36

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 257: 
**Status:** ✅ Bestanden
**Suchtext:** "siegfriedkarte (historische karte)"
**Filter:** "background,foreground"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:36

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 258: 
**Status:** ✅ Bestanden
**Suchtext:** "ausgleichsabgabe erfassung (geschützt), mehrwertabgabe"
**Filter:** "background,foreground"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:46:37

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 2, API2: 2
**Datenstruktur:** API1: results_array, API2: results_array

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'array[[object Object]]' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

