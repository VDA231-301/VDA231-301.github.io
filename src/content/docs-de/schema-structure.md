---
title: Schemastruktur
order: 2
description: Wie das Generic Schema aufgebaut ist und was es enthält.
---

Das VDA 231-301-Datenmodell wird in JSON Schema (Draft 2020-12) repräsentiert. Das Schema ist maschinenlesbar, erweiterbar und für die automatisierte Validierung und Verarbeitung ausgelegt.

## Kernelemente

Das Generic Schema definiert wesentliche Bausteine, die konsistent in allen Subschemata wiederverwendet werden:

- **Identifikatoren und Referenzen** — jedes referenzierbare Objekt trägt ein internes `_id`-Feld (UUID v4), das innerhalb einer Übertragungsdatei eindeutig ist und nach der Zuweisung nicht geändert werden darf
- **Metadaten und Kontext** — Felder wie Titel, Datumsangaben, Bestellreferenzen und Parteiinformationen
- **Generische Objektstrukturen** — TestingProject, TestingCenter, Sample und verwandte Entitäten
- **Muster für Erweiterbarkeit** — Subschemata fügen domänenspezifische Felder hinzu und bleiben dabei strukturell kompatibel

## Gestaltungsprinzipien

Das Schema folgt diesen Prinzipien:

- Maschinenlesbarkeit vor menschlicher Bequemlichkeit
- Konsistenz aller Subschemata durch gemeinsame `$defs`
- Erweiterbarkeit ohne Schemaduplizierung — Subschemata referenzieren das Generic Schema per `$ref`
- Eignung für automatisierte Verarbeitung und CI-gestützte Validierung

## Identifikatoren

IDs in VDA 231-301 folgen UUID v4 (RFC 4122):

```json
{
  "_id": "123e4567-e89b-12d3-a456-426655440000"
}
```

Regeln:
- Jedes referenzierbare Objekt muss `_id` tragen
- `_id` muss innerhalb einer Übertragungsdatei eindeutig sein
- `_id` darf nach der Zuweisung nicht geändert werden
- Referenzfelder (z. B. `ContractorID`) verwenden dasselbe UUID v4-Format
