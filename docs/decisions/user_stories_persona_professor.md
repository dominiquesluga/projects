# User Stories – Persona: Professor ((Pro)VaCaSy)

Dieses Dokument enthält die funktionalen User Stories für die Rolle **Professor (Self-Service)** im Rahmen des Projekts **(Pro)VaCaSy**. Die Anforderungen basieren auf den im Protokoll vom 08. Oktober 2026 festgelegten Rahmenbedingungen.

---

## US-01: Eigenes Urlaubskontingent und Status im Dashboard einsehen

* **Als** Professor
* **möchte ich** auf einem übersichtlichen Dashboard mein persönliches Urlaubskontingent einsehen (Basisanspruch, Vorjahresübertrag, geplante Tage, genommene Tage und Resttage),
* **um** jederzeit Transparenz über meine verfügbaren Urlaubstage zu haben und meine Abwesenheiten verlässlich planen zu können.

### Akzeptanzkriterien
1. **Detaillierte Aufschlüsselung:** Das Dashboard zeigt die Werte für Jahresanspruch (Standard: 30 Tage), Übertrag aus dem Vorjahr, geplante Tage, genommene Tage sowie die verbleibenden Resttage an.
2. **Warnanzeige bei Überziehung:** Übersteigt die Summe der geplanten und genommenen Tage das Kontingent (z. B. $32 > 30$), blockiert das System den Benutzer nicht, sondern hebt das Defizit über eine deutliche visuelle Warnung hervor.
3. **Echtzeitberechnung:** Änderungen an Urlaubsanträgen aktualisieren die Kennzahlen auf dem Dashboard ohne Verzögerung.

---

## US-02: Urlaub eintragen und beantragen

* **Als** Professor
* **möchte ich** Urlaubszeiten über eine Datumsauswahl bzw. Kalenderkomponente im System erfassen,
* **um** meine geplante Abwesenheit einzureichen und den flexiblen Genehmigungsworkflow anzustoßen.

### Akzeptanzkriterien
1. **Erfassung:** Start- und Enddatum lassen sich intuitiv auswählen.
2. **Automatische Werktagsberechnung:** Samstage, Sonntage und gesetzliche Feiertage werden bei der Berechnung der abzuziehenden Arbeitstage automatisch ausgelassen.
3. **Statusführung:** Nach dem Absenden erhält der Antrag den Status `Geplant` bzw. `Eingereicht` und wird unmittelbar im persönlichen Dashboard gegengerechnet.
4. **Keine harte Blockade:** Anträge oberhalb der 30 Tage können eingereicht werden, werden jedoch systemintern für das Sekretariat markiert.

---

## US-03: Eigene Urlaubsanträge anpassen oder stornieren

* **Als** Professor
* **möchte ich** bestehende Urlaubsanträge nachträglich verändern oder stornieren können,
* **um** flexibel auf Terminänderungen im Semesterbetrieb reagieren zu können.

### Akzeptanzkriterien
1. **Änderbarkeit:** Zeiträume von geplanten Anträgen können angepasst werden.
2. **Gutschrift:** Bei Löschung oder Verkürzung eines Urlaubs wird das Kontingent im Dashboard sofort wieder gutgeschrieben.
3. **Transparenz:** Statusänderungen werden für das Sekretariat bzw. Dekanat nachvollziehbar im System protokolliert.


---

## US-04: Kollegiumskalender zur Anwesenheitsübersicht einsehen (Read-Only)

* **Als** Professor
* **möchte ich** einen lesenden Zugriff auf den gemeinsamen Fakultätskalender haben,
* **um** zu sehen, welche Kolleginnen und Kollegen an bestimmten Tagen anwesend oder abwesend sind.

### Akzeptanzkriterien
1. **Aggregierte Ansicht:** Der Kalender visualisiert zeitliche Abwesenheiten (Urlaub / Konferenz) der Fakultätsmitglieder.
2. **Datenschutz:** Es werden keine persönlichen Kontingente, Resturlaubstage oder statistischen Details anderer Personen angezeigt.
3. **Filterfunktion:** Die Ansicht kann nach Wochen- oder Monatsansicht gefiltert werden.

---

## US-05: Automatische Synchronisation mit Outlook (App $\rightarrow$ Outlook)

* **Als** Professor
* **möchte ich**, dass meine in (Pro)VaCaSy erfassten Urlaube und Konferenzen automatisch in meinen persönlichen Outlook-Kalender übertragen werden,
* **um** doppelte Terminpflege zu vermeiden und Terminkollisionen in Outlook direkt sichtbar zu machen.

### Akzeptanzkriterien
1. **Einweg-Synchronisation:** Bei Neuanlage oder Bestätigung einer Abwesenheit wird in Outlook ein passender Termin (z. B. Ganztagesereignis mit Status „Abwesend“) erzeugt.
2. **Aktualisierung / Löschung:** Änderungen oder Stornierungen im System werden an Outlook übertragen.
3. **Rücksynchronisation:** Eine Synchronisation von Outlook zurück in (Pro)VaCaSy ist nicht vorgesehen.

---

## US-6: Single Sign-On (SSO) Authentifizierung

* **Als** Professor
* **möchte ich** mich zentral über Keycloak mit meinen bestehenden Hochschul-Zugangsdaten anmelden,
* **um** eine unkomplizierte Authentifizierung ohne separate Kontoverwaltung zu nutzen.

### Akzeptanzkriterien
1. **OIDC/OAuth2:** Der Login wird vollständig an die Keycloak-Instanz delegiert.
2. **Rollenauflösung:** Nach erfolgreichem Login wird der Benutzer mit der Rolle `Professor` identifiziert.
3. **Berechtigungsprüfung:** Administrative Administrations- und Sekretariatsansichten (z. B. Quoten-Übersichten aller Kollegen) sind für diese Rolle gesperrt.