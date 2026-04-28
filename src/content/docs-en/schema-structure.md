---
title: Schema Structure
order: 2
description: How the Generic Schema is structured and what it contains.
---

The VDA 231-301 data model is represented using JSON Schema (draft 2020-12). The schema is designed to be machine-readable, extensible, and suitable for automated validation and processing.

## Core elements

The Generic Schema defines essential building blocks reused consistently across all subschemas:

- **Identifiers and references** — every referable object carries an internal `_id` field (UUID v4) that is unique within a transmission file and must not change after assignment
- **Metadata and context** — fields such as title, dates, order references, and party information
- **Generic object structures** — TestingProject, TestingCenter, Sample, and related entities
- **Patterns for extensibility** — subschemas add domain-specific fields while remaining structurally compatible

## Design principles

The schema follows these principles:

- Machine readability over human convenience
- Consistency across all subschemas through shared `$defs`
- Extensibility without schema duplication — subschemas `$ref` into the Generic Schema
- Suitability for automated processing and CI-based validation

## Identifiers

IDs in VDA 231-301 follow UUID v4 (RFC 4122):

```json
{
  "_id": "123e4567-e89b-12d3-a456-426655440000"
}
```

Rules:
- Every referable object must carry `_id`
- `_id` must be unique within a transmission file
- `_id` must not be changed after assignment
- Reference fields (e.g. `ContractorID`) use the same UUID v4 format
