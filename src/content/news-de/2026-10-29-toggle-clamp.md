---
title: "Vom Bauteil zum Prüfbericht: VDA 231-301 am Beispiel einer Toggle Clamp"
date: 2026-10-29
summary: "Das Toggle-Clamp-Beispiel zeigt, wie VDA 231-301 CAD-Komponenten, physische Prüfobjekte und strukturierte Prüfergebnisse miteinander verbindet. Ergänzende Beispiel-Prüfberichte veranschaulichen künftig die Verbindung mit lesbaren PDF/A-Dokumenten."
draft: true
---

Wie lassen sich CAD-Daten, einzelne Bauteile, reale Prüflinge und die dazugehörigen Prüfergebnisse digital miteinander verknüpfen? Ein neues Toggle-Clamp-Beispiel veranschaulicht diesen Zusammenhang anhand einer kompletten Baugruppe und bildet zugleich die Grundlage für die Verknüpfung mit menschenlesbaren Prüfberichten im PDF/A-Format.

![Toggle Clamp – VDA 231-301 Anwendungsbeispiel](/graphic/toggle-clamp-vda-231-301.png)

*Toggle Clamp als Anwendungsbeispiel für die Verknüpfung von Komponenten-, Material- und Prüfinformationen mit VDA 231-301.*

Das Beispiel bildet eine Toggle Clamp, einen Kniehebelspanner, mit ihrer Komponentenstruktur ab. Die Baugruppe reicht vom Mounting Base und den Bearing Pins über Lever Bar und Clamping Arm bis hin zu Hand Grip und Rubber Thrust Pad.

Dabei geht es nicht allein um die Beschreibung eines Materials oder eines Prüfergebnisses. Mit VDA 231-301 können strukturierte Material- und Prüfinformationen interoperabel ausgetauscht werden. Die Modellierung unterscheidet dabei unter anderem zwischen Komponenten und konkreten physischen Instanzen.

> **CAD-Modell → Komponente → physisches Prüfobjekt → Prüfung → strukturiertes Ergebnis → lesbarer Prüfbericht**

## Von der CAD-Komponente zum Prüfling

Das Toggle-Clamp-Beispiel zeigt die Verbindung mehrerer Informationsebenen: Die Baugruppenstruktur wird digital beschrieben und einzelne Komponenten werden mit ihren Vorkommen in den CAD-Daten verknüpft. Daneben können konkrete physische Prüfobjekte und die zugehörigen Prüfungen abgebildet werden.

Im bereitgestellten Toggle-Clamp-Beispiel werden unter anderem Zug- und Härteprüfungen verwendet. Prüfobjekt, Prüfkörper, Testausführung und Ergebnisse lassen sich dadurch innerhalb des strukturierten Datenmodells miteinander in Beziehung setzen.

Diese Vorgehensweise entspricht dem grundlegenden Ziel von VDA 231-301, Material- und Prüfinformationen strukturiert und maschinenlesbar zwischen unterschiedlichen Beteiligten und IT-Systemen austauschbar zu machen.

## Weitere Prüfungen machen das Beispiel greifbarer

Die Toggle Clamp soll schrittweise um weitere beispielhafte Prüfinformationen ergänzt werden. Dazu gehören unter anderem Ergebnisse für einzelne Subkomponenten wie Rubber Thrust Pad und Hand Grip, beispielsweise aus Geruchsprüfungen nach VDA 270.

Darüber hinaus sind beispielhafte Prüfberichte beziehungsweise Daten zu 3.1-Zeugnissen und mechanischen Eigenschaften aus dem Zugversuch im Zusammenhang mit SEP 1240 und EN 10204 vorgesehen.

> **Hinweis:** Die zugehörigen Beispiel-Prüfberichte befinden sich derzeit noch in Erstellung. Alle darin verwendeten Namen, Aufträge, Laborinformationen und Ergebnisse sind Beispieldaten und stellen keine zertifizierten Prüfberichte dar.

## Der nächste Schritt: strukturierte Daten und PDF/A zusammenbringen

Ein strukturierter JSON-Datensatz ist für die maschinelle Verarbeitung geeignet. Im betrieblichen Austausch werden Prüfergebnisse jedoch häufig zusätzlich in einer unmittelbar lesbaren Dokumentform benötigt.

Hier setzt das derzeit als **Working Draft** vorliegende VDA-231-301-PDF-Package-Konzept an. Es beschreibt einen PDF/A-basierten Transportcontainer, der einen lesbaren Report mit einem Manifest sowie strukturierten Daten und optionalen weiteren Dateien zusammenführen kann.

Der derzeit dokumentierte Manifest Contract hat den Stand **Draft 0.1.0**. Dabei handelt es sich ausdrücklich noch nicht um eine freigegebene Spezifikation.

Das Manifest stellt die Zuordnung der enthaltenen Dateien her. Nach dem aktuellen Working Draft umfasst ein Package:

- einen menschenlesbaren Report,
- ein Manifest,
- genau einen Main-JSON-Payload,
- optional weitere Subdocuments,
- optional binäre Attachments.

Das Beispiel macht damit sichtbar, wie technische Daten aus unterschiedlichen Informationswelten miteinander in Beziehung gesetzt werden können, ohne den menschenlesbaren Prüfbericht durch reine Maschinendaten zu ersetzen.

## Transparenz zum aktuellen Stand

Das Toggle-Clamp-Beispiel dient der Demonstration der Modellierung und des Datenaustauschs. Die in den Beispielen verwendeten technischen und organisatorischen Angaben sowie Prüfergebnisse sind illustrativ.

Auch das PDF/A-Package ist aktuell als **Working Draft** einzuordnen. Package-Konzept und Manifest Contract stehen damit noch nicht für eine freigegebene VDA-231-301-PDF/A-Spezifikation.

