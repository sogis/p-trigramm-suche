
# API-Vergleichsbericht
Generiert am: 30.6.2025, 09:40:26

## Zusammenfassung
- **Gesamte Tests:** 69
- **Übersprungen:** 0
- **Bestanden:** 56
- **Bestanden mit Warnungen:** 7
- **Fehlgeschlagen:** 13
- **Tests mit leeren Ergebnissen:** 7
- **Strukturelle Unterschiede:** 3
- **Inhaltliche Unterschiede:** 10
- **Ignorierte Felder:** 399

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
**Suchtext:** "115/300"
**Filter:** "ch.so.ada.archaeologie.flaechenfundstellen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:13

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 2: 
**Status:** ✅ Bestanden
**Suchtext:** "115 300"
**Filter:** "ch.so.ada.archaeologie.flaechenfundstellen_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:14

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 3: 
**Status:** ✅ Bestanden
**Suchtext:** "115 270"
**Filter:** "ch.so.ada.archaeologie.punktfundstellen_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:15

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 4: 
**Status:** ✅ Bestanden
**Suchtext:** "115/270"
**Filter:** "ch.so.ada.archaeologie.punktfundstellen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:16

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 5: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "Steinbruch Steingruebe"
**Filter:** "ch.so.afu.abbaustellen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:17

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[0].feature.display`
  - API 1: 'Name: Steinbruch Steingruebe (Abbaustelle)'
  - API 2: 'Nr: Steinbruch Steingruebe (Abbaustelle)'

---

### Test 6: 
**Status:** ✅ Bestanden
**Suchtext:** "Verwerfung Martinsflue"
**Filter:** "ch.so.afu.geotope.aufschluss"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:18

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 7: 
**Status:** ✅ Bestanden
**Suchtext:** "mp 22 ruine"
**Filter:** "ch.so.afu.geotope.fundstelle_grabung_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:19

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 8: 
**Status:** ✅ Bestanden
**Suchtext:** "Heidenloch-Höhle Born"
**Filter:** "ch.so.afu.geotope.hoehle"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:20

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 9: 
**Status:** ✅ Bestanden
**Suchtext:** "Erratiker Chalchgraben 2"
**Filter:** "ch.so.afu.geotope.erratiker"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:21

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 10: 
**Status:** ✅ Bestanden
**Suchtext:** "Halbklus Balmberg "
**Filter:** "ch.so.afu.geotope.landschaftsform"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:22

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 11: 
**Status:** ✅ Bestanden
**Suchtext:** "alte Gipsquelle Mineralwasser L1"
**Filter:** "ch.so.afu.geotope.quelle"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:23

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 12: 
**Status:** ✅ Bestanden
**Suchtext:** "Kreuzackerstrasse 1 2401"
**Filter:** "ch.so.afu.gewaesserschutz_lw.standort_mit_erhebung"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:24

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 13: 
**Status:** ✅ Bestanden
**Suchtext:** "Egerkingen-Vorstadt 23, 2401"
**Filter:** "ch.so.afu.gewaesserschutz_lw.standort_ohne_erhebung"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:25

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 14: 
**Status:** ✅ Bestanden
**Suchtext:** "2546-43 Bann"
**Filter:** "ch.so.afu.bodeninformationen.bodenprofilstandorte"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:27

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 15: 
**Status:** ✅ Bestanden
**Suchtext:** "605228058 Einbaute"
**Filter:** "ch.so.afu.wasserbewirtschaftung.weitere_einbauten_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:28

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 16: 
**Status:** ⚠️ Bestanden mit Warnungen
**Suchtext:** "603220024 objekt nr fassung"
**Filter:** "ch.so.afu.gewaesserschutz.fassungen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:29

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)
- ⚠️ API2: Leeres Results-Array (0 Elemente)
- ⚠️ Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet

**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️

---

### Test 17: 
**Status:** ✅ Bestanden
**Suchtext:** "603220024 objekt nr fassung"
**Filter:** "ch.so.afu.wasserbewirtschaftung.fassung"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:30

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 18: 
**Status:** ✅ Bestanden
**Suchtext:** "596218006 objekt nr fassung"
**Filter:** "ch.so.afu.wasserbewirtschaftung.fassung_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:31

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 19: 
**Status:** ✅ Bestanden
**Suchtext:** "626238008 objekt nr wärmenutzung"
**Filter:** "ch.so.afu.wasserbewirtschaftung.grundwasserwaermenutzung"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:32

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 20: 
**Status:** ✅ Bestanden
**Suchtext:** "607228238 objekt nr wärmenutzung"
**Filter:** "ch.so.afu.wasserbewirtschaftung.grundwasserwaermenutzung_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:33

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 21: 
**Status:** ✅ Bestanden
**Suchtext:** "blüttengraben 110002100"
**Filter:** "ch.so.afu.fliessgewaesser.netz"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:34

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 22: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "22.019.0002a belasteter"
**Filter:** "ch.so.afu.altlasten.standorte"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:35

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[0].feature.display`
  - API 1: 'ID: 22.019.0002A (Belasteter Standort)'
  - API 2: 'Nr: 22.019.0002A (Belasteter Standort)'

---

### Test 23: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "22.079.0011a belasteter"
**Filter:** "ch.so.afu.altlasten.standorte_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:36

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[0].feature.display`
  - API 1: 'ID: 22.079.0011A (Belasteter Standort altlast4web)'
  - API 2: 'Nr: 22.079.0011A (Belasteter Standort altlast4web)'

---

### Test 24: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "so-1982-r-00012"
**Filter:** "ch.so.afu.naturereigniskataster.basisinformation"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:37

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **null_mismatch** bei `results[0].feature.bbox`
  - API 1: null
  - API 2: [ 2618871, 1246030, 2618871, 1246030 ]

---

### Test 25: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "so-2023-s-10002"
**Filter:** "ch.so.afu.naturereigniskataster.prozessraum.sturz"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:38

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

### Test 26: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "so-2021-w-10006"
**Filter:** "ch.so.afu.naturereigniskataster.prozessraum.wasser"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:39

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)

**Strukturelle Unterschiede:**
- structure_mismatch
  - API 1: { result_counts: 'empty_array', results: 'empty_array' }
  - API 2: { result_counts: 'array[[object Object]]', results: 'array[[object Object]]' }

---

### Test 27: 
**Status:** ✅ Bestanden
**Suchtext:** "5385 sichtungsmeldung"
**Filter:** "ch.so.afu.asiatische_hornisse"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:40

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 28: 
**Status:** ⚠️ Bestanden mit Warnungen
**Suchtext:** "613255002 objekt nr quelle"
**Filter:** "ch.so.afu.gewaesserschutz.quellen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:41

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)
- ⚠️ API2: Leeres Results-Array (0 Elemente)
- ⚠️ Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet

**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️

---

### Test 29: 
**Status:** ✅ Bestanden
**Suchtext:** "613255002 objekt nr quelle"
**Filter:** "ch.so.afu.wasserbewirtschaftung.quellen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:42

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 30: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "613255002 objekt nr quelle"
**Filter:** "ch.so.afu.wasserbewirtschaftung.quellen_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:43

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **value_mismatch** bei `results[0].feature.display`
  - API 1: 'Nr: 613255002 (VEGAS Quellen)'
  - API 2: 'Nr: 613255002 (VEGAS Quelle)'

---

### Test 31: 
**Status:** ✅ Bestanden
**Suchtext:** "597226037 objekt nr sondierung"
**Filter:** "ch.so.afu.wasserbewirtschaftung.sondierung"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:45

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 32: 
**Status:** ✅ Bestanden
**Suchtext:** "597226037 objekt nr sondierung"
**Filter:** "ch.so.afu.wasserbewirtschaftung.sondierung_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:46

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 33: 
**Status:** ✅ Bestanden
**Suchtext:** "Schafstall 167"
**Filter:** "ch.so.afu.gewaesserschutz_lw.stall"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:47

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 34: 
**Status:** ✅ Bestanden
**Suchtext:** "602249009 objekt nr trinkwasser"
**Filter:** "ch.so.afu.wasserbewirtschaftung.trinkwasserversorgung_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:48

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 35: 
**Status:** ✅ Bestanden
**Suchtext:** "640245019 objekt nr versickerung"
**Filter:** "ch.so.afu.wasserbewirtschaftung.versickerungsschacht"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:49

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 36: 
**Status:** ✅ Bestanden
**Suchtext:** "640245019 objekt nr versickerung"
**Filter:** "ch.so.afu.wasserbewirtschaftung.versickerungsschacht_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:50

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 37: 
**Status:** ✅ Bestanden
**Suchtext:** "solothurn bezirk name"
**Filter:** "ch.so.agi.bezirksgrenzen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:51

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 38: 
**Status:** ✅ Bestanden
**Suchtext:** "190688569 gebäude"
**Filter:** "ch.so.agi.av.bodenbedeckung"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:52

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 39: 
**Status:** ✅ Bestanden
**Suchtext:** "1216 so0300002511 parzellierung"
**Filter:** "ch.so.agi.av.gb2av.controlling_vollzugsmeldungen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:53

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 40: 
**Status:** ✅ Bestanden
**Suchtext:** "1164 SO0200002426 parzellierung"
**Filter:** "ch.so.agi.av.gb2av.controlling_mutationen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:54

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 41: 
**Status:** ✅ Bestanden
**Suchtext:** "holle nunningen flurname"
**Filter:** "ch.so.agi.av.nomenklatur.flurnamen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:55

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 3, API2: 3
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 42: 
**Status:** ✅ Bestanden
**Suchtext:** "schürmatt 3 4655 stüsslingen"
**Filter:** "ch.so.agi.av.gebaeudeadressen.gebaeudeeingaenge"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:56

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 43: 
**Status:** ✅ Bestanden
**Suchtext:** "bahnhofplatz olten geländename"
**Filter:** "ch.so.agi.av.nomenklatur.gelaendenamen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:57

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 44: 
**Status:** ✅ Bestanden
**Suchtext:** "aeschi (so) 2511 gemeinde"
**Filter:** "ch.so.agi.gemeindegrenzen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:58

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 45: 
**Status:** ✅ Bestanden
**Suchtext:** "ch181232069746 liegenschaft egrid"
**Filter:** "ch.so.agi.av.grundstuecke.rechtskraeftig"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:39:59

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 46: 
**Status:** ✅ Bestanden
**Suchtext:** "1013 breitenbach gb-nr"
**Filter:** "ch.so.agi.av.grundstuecke.projektierte"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:00

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 47: 
**Status:** ✅ Bestanden
**Suchtext:** "394047 bienenstandort"
**Filter:** "ch.so.alw.bienenstandorte_und_sperrgebiete.bienenstandorte"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:01

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 48: 
**Status:** ⚠️ Bestanden mit Warnungen
**Suchtext:** "68076 bienenstandort"
**Filter:** "ch.so.alw.bienenstandorte_und_sperrgebiete.bienenstandorte_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:02

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)
- ⚠️ API2: Leeres Results-Array (0 Elemente)
- ⚠️ Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet

**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️

---

### Test 49: 
**Status:** ✅ Bestanden
**Suchtext:** "794621 geoid kultur"
**Filter:** "ch.so.alw.landwirtschaft_tierhaltung.kultur_punktelement_bff_qualitaetsstufe_I"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:04

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 50: 
**Status:** ⚠️ Bestanden mit Warnungen
**Suchtext:** "794621 geoid kultur"
**Filter:** "ch.so.alw.landwirtschaft_tierhaltung.kultur_punktelement_bff_qualitaetsstufe_I_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:05

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)
- ⚠️ API2: Leeres Results-Array (0 Elemente)
- ⚠️ Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet

**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️

---

### Test 51: 
**Status:** ⚠️ Bestanden mit Warnungen
**Suchtext:** "230527 geoid kultur"
**Filter:** "ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_bff_qualitaetsstufe_I"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:06

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)
- ⚠️ API2: Leeres Results-Array (0 Elemente)
- ⚠️ Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet

**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️

---

### Test 52: 
**Status:** ⚠️ Bestanden mit Warnungen
**Suchtext:** "676736 geoid kultur"
**Filter:** "ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_bff_qualitaetsstufe_I_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:07

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)
- ⚠️ API2: Leeres Results-Array (0 Elemente)
- ⚠️ Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet

**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️

---

### Test 53: 
**Status:** ✅ Bestanden
**Suchtext:** "883484 geoid kultur"
**Filter:** "ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_hauptkategorien"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:08

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 54: 
**Status:** ⚠️ Bestanden mit Warnungen
**Suchtext:** "235326 geoid kultur"
**Filter:** "ch.so.alw.landwirtschaft_tierhaltung.kulturflaechen_hauptkategorien_geschuetzt"
**Authentifizierung:** 🔒 Basic Auth
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:09

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 0, API2: 0
**Datenstruktur:** API1: results_array, API2: results_array

**Warnungen:**
- ⚠️ API1: Leeres Results-Array (0 Elemente)
- ⚠️ API2: Leeres Results-Array (0 Elemente)
- ⚠️ Beide APIs liefern leere Ergebnisse, aber Ergebnisse wurden erwartet

**Resultat:** APIs liefern identische Ergebnisse, aber es gibt Warnungen ⚠️

---

### Test 55: 
**Status:** ✅ Bestanden
**Suchtext:** "rymatt naturreservat name"
**Filter:** "ch.so.arp.naturreservate.reservate"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:10

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 56: 
**Status:** ✅ Bestanden
**Suchtext:** "4920 kantonsstrasse nr"
**Filter:** "ch.so.avt.kantonsstrassen_achsen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:11

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 57: 
**Status:** ✅ Bestanden
**Suchtext:** "1100-1 kantonsstrasse nr bezeichnung"
**Filter:** "ch.so.avt.kantonsstrassen_bezugspunkte"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:12

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 8, API2: 8
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 58: 
**Status:** ✅ Bestanden
**Suchtext:** "286 verkehrszählstelle name"
**Filter:** "ch.so.avt.verkehrszaehlstellen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:13

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 59: 
**Status:** ✅ Bestanden
**Suchtext:** "burg im leimental dorfplatz"
**Filter:** "ch.so.avt.oev.haltestellen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:14

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 60: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "101 fischerei"
**Filter:** "ch.so.awjf.gewaesser.patentgewaesser"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:15

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

### Test 61: 
**Status:** ✅ Bestanden
**Suchtext:** "101 fischereinutzung fischereireviere id"
**Filter:** "ch.so.awjf.gewaesser.fischereireviere"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:16

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 62: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "42865 bestandestyp id"
**Filter:** "ch.so.awjf.bestandeskarte_wald_flaechen"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:17

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **null_mismatch** bei `results[0].feature.bbox`
  - API 1: null
  - API 2: [ 2592807, 1228604, 2594168, 1229022 ]

---

### Test 63: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "42865 waldplan eigentum id"
**Filter:** "ch.so.awjf.waldplan.waldeigentum"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:18

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **null_mismatch** bei `results[0].feature.bbox`
  - API 1: null
  - API 2: [ 2592807, 1228604, 2594168, 1229022 ]

---

### Test 64: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "42865 waldplan funktion id"
**Filter:** "ch.so.awjf.waldplan.waldfunktion"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:20

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **null_mismatch** bei `results[0].feature.bbox`
  - API 1: null
  - API 2: [ 2592807, 1228604, 2594168, 1229022 ]

---

### Test 65: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "42590 waldplan typ id"
**Filter:** "ch.so.awjf.waldplan.waldplantyp"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:21

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **null_mismatch** bei `results[0].feature.bbox`
  - API 1: null
  - API 2: [ 2593539, 1226905, 2593825, 1226991 ]

---

### Test 66: 
**Status:** ✅ Bestanden
**Suchtext:** "seew-11 schutzwald perimeter name"
**Filter:** "ch.so.awjf.schutzwaldausscheidung"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:22

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 67: 
**Status:** ✅ Bestanden
**Suchtext:** "seew-11 schutzwald naturgefahr name"
**Filter:** "ch.so.awjf.schutzwald_hauptgefahrenpotentiale"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:23

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 68: 
**Status:** ✅ Bestanden
**Suchtext:** "vögel auf dem born"
**Filter:** "ch.so.awjf.waldwanderwege_posten"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:24

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Resultat:** Beide APIs liefern identische Ergebnisse ✅

---

### Test 69: 
**Status:** ❌ Fehlgeschlagen
**Suchtext:** "berit klinik goldach standortname"
**Filter:** "ch.so.gesa.leistungserbringerstandorte_erreichbarkeitsanalyse"
**Authentifizierung:** 🔓 Öffentlich
**Erwartete Ergebnisse:** ✅ Ja
**Zeit:** 30.6.2025, 09:40:25

**Status Codes:** API1: 200, API2: 200
**Ergebnis-Anzahl:** API1: 1, API2: 1
**Datenstruktur:** API1: results_array, API2: results_array

**Inhaltliche Unterschiede (erste 10):**
- **null_mismatch** bei `results[0].feature.bbox`
  - API 1: null
  - API 2: [ 2753463, 1260269, 2753463, 1260269 ]

---

