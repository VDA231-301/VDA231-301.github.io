---
title: Subschemas
order: 3
description: How subschemas extend the Generic Schema for specific standards.
---

Subschemas extend the Generic Schema with specialised content for a particular standard or recommendation. Each subschema adds domain-specific, process-specific, or regulation-specific attributes while complying with the core definitions and design principles of the Generic Schema.

## Lifecycle

A subschema moves through two phases before it is considered official:

**Phase 1 — Draft and discussion.** Each subschema begins as an independent GitHub repository. These repositories are publicly accessible working drafts that invite discussion and collect feedback via GitHub Issues and Discussions. Subschemas in this phase are not yet officially versioned.

**Phase 2 — Official publication.** Once a subschema has been reviewed and approved by the responsible VDA Project Group, it is assigned a version number and published in the central schema repository. Only subschemas in the schema repository are considered officially released.

## Level of detail

A subschema may define requirements at two levels:

- **Must** — mandatory requirements according to the referenced standard
- **Can** — optional requirements, often defined by internal factory standards

Both levels are supported in JSON Schema and can be validated accordingly.

## Versioning

Each schema must have clear versioning using semantic versioning (e.g. `v1.0.0`). Changes must be documented in a changelog and introduced only via pull requests to ensure consistency, traceability, and transparency.

## Creating a subschema

Guidelines for developing a new subschema are available in the repository:

- [English guidelines](https://github.com/VDA231-301/VDA231-301/blob/main/docs/guidelines_for_creating_subschemas_VDA231-301_en.md)
- [German guidelines (Deutsch)](https://github.com/VDA231-301/VDA231-301/blob/main/docs/guidelines_for_creating_subschemas_VDA231-301_de.md)
