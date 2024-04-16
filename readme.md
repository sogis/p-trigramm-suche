# POC Suche mittels pg_trgm

Ziel des POC (Proof of Concept) war, die Performance und Treffgenauigkeit einer Implementation der "Volltextsuche" mittels der PostgreSQL Extension pg_trgm zu untersuchen. Es handelt sich dabei nicht um eine Volltextsuche im klassischen Sinn, in welcher Suchbegriffe auf die jeweiligen Wortstämme "referenziert" werden. Auch auf "Autokorrektur" der Sucheingaben wird bewusst verzichtet.

Das Resultat ist sowohl bezüglich Performance und Treffgenauigkeit sehr überzeugend. So werden bei einem Umfang der Indextabelle von gut einer Million Zeilen treffende Resultate in 0 - 50 ms zurückgegeben.

## Index-Tabellen

Im POC werden alle zu durchsuchenden Features (aus vielen unterschiedlichen Ebenen) in eine gemeinsame Indextabelle "feature" geladen. Die Suche nach GIS-Ebenen (mittels Metadaten) erfolgt über die Indextabelle "ebene".

Aus dem INTERLIS-Modell abgeleitetes DDL-Skript zur Erstellung der Tabellen: [iliCreateSchema.sql](./docker/gretl/schema/iliCreateSchema.sql)

## Test-Queries

Diese befinden sich im Ordner [testqueries/](./testqueries/).

Die Nummern in den Dateinamen beziehen sich dabei immer auf die simulierte Anzahl Begriffe der Benutzereingabe.

## Index-Befüllung

Im POC wie auch später im produktiven Betrieb werden die Index-Tabellen mittels [GRETL](https://github.com/sogis/gretl) "befüllt".
Die entsprechenden ETL-Skripte liegen im Ordner [gretl/](./docker/gretl/).
