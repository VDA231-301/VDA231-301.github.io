---
title: Subschemata
order: 3
description: Wie Subschemata das Generic Schema für spezifische Standards erweitern.
---

Subschemata erweitern das Generic Schema um spezialisierte Inhalte für einen bestimmten Standard oder eine bestimmte Empfehlung. Jedes Subschema fügt domänen-, prozess- oder regulierungsspezifische Attribute hinzu und hält dabei die Kerndefinitionen und Gestaltungsprinzipien des Generic Schema ein.

## Lebenszyklus

Ein Subschema durchläuft zwei Phasen, bevor es als offiziell gilt:

**Phase 1 — Entwurf und Diskussion.** Jedes Subschema beginnt als eigenständiges GitHub-Repository. Diese Repositories sind öffentlich zugängliche Arbeitsentwürfe, die zur Diskussion einladen und Rückmeldungen über GitHub Issues und Discussions sammeln. Subschemata in dieser Phase sind noch nicht offiziell versioniert.

**Phase 2 — Offizielle Veröffentlichung.** Sobald ein Subschema von der zuständigen VDA-Projektgruppe geprüft und freigegeben wurde, erhält es eine Versionsnummer und wird im zentralen Schema-Repository veröffentlicht. Nur Subschemata im Schema-Repository gelten als offiziell freigegeben.

## Detaillierungsgrad

Ein Subschema kann Anforderungen auf zwei Ebenen definieren:

- **Muss** — Pflichtanforderungen gemäß dem referenzierten Standard
- **Kann** — optionale Anforderungen, häufig durch interne Werknormen definiert

Beide Ebenen werden in JSON Schema unterstützt und können entsprechend validiert werden.

## Versionierung

Jedes Schema muss eine eindeutige Versionierung nach Semantic Versioning aufweisen (z. B. `v1.0.0`). Änderungen müssen in einem Changelog dokumentiert und ausschließlich über Pull Requests eingebracht werden, um Konsistenz, Rückverfolgbarkeit und Transparenz zu gewährleisten.

## Erstellen eines Subschemas

Leitlinien zur Entwicklung eines neuen Subschemas sind im Repository verfügbar:

- [Englische Leitlinien](https://github.com/VDA231-301/VDA231-301/blob/main/docs/guidelines_for_creating_subschemas_VDA231-301_en.md)
- [Deutsche Leitlinien](https://github.com/VDA231-301/VDA231-301/blob/main/docs/guidelines_for_creating_subschemas_VDA231-301_de.md)
