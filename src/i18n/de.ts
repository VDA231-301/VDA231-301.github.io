export const ui = {
  nav: {
    home: "Startseite",
    docs: "Dokumentation",
    validator: "Validator",
    news: "News",
  },
  lang: {
    switch: "English",
    switchHref: "/",
    current: "DE",
  },
  footer: {
    tagline: "Eine offizielle Empfehlung des VDA — Verband der Automobilindustrie.",
    colStandard: "Standard",
    colProject: "Projekt",
    colResources: "Ressourcen",
    docs: "Dokumentation",
    validator: "Validator",
    github: "GitHub",
    news: "News",
    catalog: "Schemakatalog",
    vda: "VDA-Website",
    workingGroup: "Projektgruppe",
    officialDoc: "Offizielles Dokument",
    vda300: "VDA 231-300",
    catenaX: "Catena-X",
    copyright: "© 2025 VDA 231-301 Projektgruppe",
    license: "MIT-Lizenz",
    imprint: "Impressum",
    privacy: "Datenschutz",
  },
  home: {
    heroTitle: "VDA 231-301",
    heroSubtitle: "Werkstoffliche Bemusterung",
    heroDescription:
      "Eine offene, maschinenlesbare Grundlage für interoperable Materialinformationen: Anforderungen, Prüfergebnisse, Zertifikate und Konformitätsnachweise entlang industrieller Lieferketten.",
    ctaValidator: "Zum Validator",
    ctaDocs: "Zur Dokumentation",
    whatTitle: "Was ist VDA 231-301?",
    whatLead:
      "VDA 231-301 ermöglicht den interoperablen, maschinenlesbaren Austausch von Werkstoff-, Prüf- und Bemusterungsdaten über Systemgrenzen, Unternehmen und digitale Ökosysteme hinweg.",
    whatBody: `VDA 231-301 definiert ein einheitliches Datenformat für die Übermittlung von Werkstoffprüf- und
      Bemusterungsergebnissen zwischen OEMs, Lieferanten und Prüflaboren. Das Datenmodell wird als offenes,
      versioniertes JSON-Schema bereitgestellt, damit Systeme Materialinformationen automatisch validieren,
      austauschen und verarbeiten können. Der Standard wird von der VDA 231-301 Projektgruppe gepflegt und entwickelt sich durch
      offene Zusammenarbeit auf GitHub weiter.`,
    factsTitle: "Auf einen Blick",
    factsSchema: "Offene, versionierte JSON-Schema-Repräsentationen zur automatischen Validierung",
    factsSubschemas: "Modulare Subschema-Architektur",
    factsOpenSource: "Open Source — MIT-Lizenz",
    factsVDA: "Offizielle VDA-Empfehlung",

    // TODO: translate — landing page is currently EN-only; keys exist for type/runtime parity
    challengeEyebrow: "Heutige Realität",
    challengeTitle:
      "Der Werkstoffdatenaustausch entlang der Wertschöpfungskette bleibt manuell, fragmentiert und fehleranfällig.",
    challengeManualHead: "Manueller Prozess",
    challengeManualItem1: "Prüfplanung und Dokumentation",
    challengeManualItem2: "Ergebniskonsolidierung und Berichterstellung",
    challengeManualItem3: "Mehrfacheingabe über mehrere Systeme",
    challengeCoordHead: "Hoher Koordinationsaufwand",
    challengeCoordItem1: "Hersteller",
    challengeCoordItem2: "Lieferanten",
    challengeCoordItem3: "Prüflabore",
    challengeRiskHead: "Qualitäts- und Compliance-Risiken",
    challengeRiskItem1: "Mehrdeutige Interpretationen",
    challengeRiskItem2: "Übertragungs- und Formatierungsfehler",
    challengeRiskItem3: "Kostspielige Nacharbeit",
    challengeFooter: "Das Ergebnis: fragmentierte Daten, eingeschränkte Vergleichbarkeit und zunehmendes regulatorisches und Compliance-Risiko.",

    solutionEyebrow: "Die standardisierte Antwort",
    solutionTitle: "VDA 231-300 und VDA 231-301 — eine standardisierte, maschinenlesbare Grundlage für interoperable Werkstoffdaten.",
    solutionMatHead: "Einheitliche Werkstoffdefinition",
    solutionMatItem1: "Standardisierte Material- und Oberflächensemantik (VDA 231-300)",
    solutionMatItem2: "Klarer Bezug auf 3D-Produktdaten – JT / ISO 14306",
    solutionMatItem3: "Eindeutige Grundlage für nachgelagerte Prüf- und Compliance-Daten",
    solutionResHead: "Interoperable Prüf- und Messdaten",
    solutionResItem1: "Maschinenlesbare Prüf- und Messergebnisse (VDA 231-301)",
    solutionResItem2: "Standardisierte Struktur mit formalen Validierungsregeln",
    solutionResItem3: "Direkter System-zu-System-Austausch ohne Nacherfassung",
    solutionResChip4: "Systemfähig",
    solutionShareHead: "Gemeinsames semantisches Verständnis",
    solutionShareItem1: "Einheitliche Interpretation von Material- und Prüfdaten",
    solutionShareItem2: "Weniger Koordinationsaufwand zwischen Unternehmen",
    solutionShareItem3: "Zuverlässiger Datenaustausch",
    solutionResChip1: "Hersteller",
    solutionResChip2: "Lieferanten",
    solutionResChip3: "Prüflabore",
    solutionFooterLead: "Definiert, was geprüft wird und wie Werkstoffe beschrieben werden.",
    solutionFooterTail:
      "Definiert, wie Ergebnisse strukturiert und ausgetauscht werden — für nahtlosen Datenfluss ohne Nacherfassung und Interpretationslücken.",

    ctaEyebrow: "Mitwirken",
    ctaTitle: "Standard anwenden.<br />Systeme verbinden.<br />Interoperable Werkstoffdaten gestalten.",
    ctaPrimary: "Auf GitHub erkunden",
    ctaSecondary: "Kontakt zur VDA-Projektgruppe",
    ctaTertiary: "Offizielle Empfehlung lesen",
    ctaBody: `VDA 231‑301 definiert ein standardisiertes, maschinenlesbares Datenmodell für Material- und Prüfinformationen und ermöglicht interoperablen Datenaustausch über Organisations- und IT-Systemgrenzen hinweg.

    Ersetzen Sie dokumentenbasierte Prozesse durch validierten, System-zu-System-Datenaustausch.
    Integrieren Sie das offene semantische Datenmodell in Ihre Plattformen und Toolchains, um manuellen Aufwand zu reduzieren und zuverlässige Compliance- und Nachhaltigkeitsberichte zu gewährleisten.`,
    ctaQuickstart:
      "Schnellstart: Schema erkunden, Beispieldateien validieren und interoperablen Materialdatenaustausch testen — direkt im Browser.",
    ctaLede:
      "Entwickelt und gepflegt von der VDA 231-301 Projektgruppe. Wenden Sie den Standard an, validieren Sie Ihre Daten und tragen Sie zum offenen Ökosystem bei.",
    ctaRoles: {
      manufacturer:
        "Definieren Sie eine standardisierte, maschinenlesbare Referenz für Material- und Prüfdaten und verbessern Sie Datenqualität, Vergleichbarkeit und Prüfbarkeit entlang der Lieferkette.",
      supplier:
        "Übermitteln Sie Material- und Prüfdaten einmal und verwenden Sie sie über mehrere Kunden hinweg — weniger manueller Aufwand, weniger Koordinationsschleifen.",
      tool: "Entwickeln Sie interoperable Lösungen auf Basis eines offenen, VDA-gestützten semantischen Datenmodells mit JSON-Schema-Repräsentationen ohne proprietäre Schnittstellen.",
    },

    heroTitleBlack: "Entdecken Sie den",
    heroTitleGreen: "offenen digitalen Materialdatenfluss",

    audiencesEyebrow: "Wer profitiert",
    audiencesTitle: "Ein Standard, der sich an jedem Glied der Wertschöpfungskette auszahlt.",
    audienceMfrTitle: "Hersteller",
    audienceMfrLede:
      "Definieren Sie einmal, welche Materialdaten Sie benötigen — in einem Format, das jeder Lieferant liefern kann.",
    audienceMfrGain1: "Weniger Koordinationsaufwand",
    audienceMfrGain2: "Vergleichbare, prüffähige Daten",
    audienceMfrGain3: "Schnellere Compliance-Freigabe",
    audienceSupplierTitle: "Lieferant",
    audienceSupplierLede:
      "Übermitteln Sie Material- und Prüfdaten einmal und verwenden Sie sie bei allen Kunden wieder.",
    audienceSupplierGain1: "Ein Format, viele Kunden",
    audienceSupplierGain2: "Weniger manuelle Nacherfassung",
    audienceSupplierGain3: "Maschinell validierte Ergebnisse",
    audienceLabTitle: "Prüflabor",
    audienceLabLede:
      "Liefern Sie strukturierte, validierte Prüfergebnisse, die direkt in Kundensysteme integriert werden.",
    audienceLabGain1: "Strukturierte Ergebnisse",
    audienceLabGain2: "Direkte Systemintegration",
    audienceLabGain3: "Null Übertragungsfehler",
    audienceComplianceTitle: "Compliance & Qualität",
    audienceComplianceLede:
      "Verlassen Sie sich auf konsistente, formal validierte Daten für Audits und Nachhaltigkeitsberichte.",
    audienceComplianceGain1: "Nachvollziehbare Datenherkunft",
    audienceComplianceGain2: "Auditkonforme Aufzeichnungen",
    audienceComplianceGain3: "Regulatorische Sicherheit",

    stepsEyebrow: "Erste Schritte",
    stepsTitle: "Den Standard anwenden. Systeme verbinden.",
    stepsLede:
      "Drei pragmatische Schritte von der Empfehlung zum live, validierten Datenaustausch.",
    step1Head: "Empfehlung lesen",
    step1Body:
      "Laden Sie das offizielle VDA 231-301 Dokument herunter und verstehen Sie das Datenmodell.",
    step1Link: "VDA Webshop →",
    step2Head: "Schemas erkunden",
    step2Body:
      "Durchsuchen Sie alle Subschema-Repositories und wählen Sie die für Ihre Domain relevanten aus.",
    step2Link: "Schema-Übersicht →",
    step3Head: "Daten validieren",
    step3Body:
      "Nutzen Sie den integrierten Validator, um Ihre JSON-Payloads gegen die Schemas zu prüfen.",
    step3Link: "Validator öffnen →",
    step4Head: "Systeme verbinden",
    step4Body:
      "Integrieren Sie das offene semantische Datenmodell in Ihre Plattformen und Toolchains.",
    step4Link: "Dokumentation →",

    newsEyebrow: "Aktuell",
    newsTitle: "News & Releases",
    newsViewAll: "Alle News anzeigen",
  },
  docs: {
    pageTitle: "Dokumentation",
    pageDescription:
      "Überblick über den VDA 231-301-Standard, seine Struktur und den Umgang damit.",
  },
  validator: {
    pageTitle: "JSON-Validator",
    pageDescription:
      "Validieren Sie eine JSON-Datei gegen das VDA 231-301 Generic Schema oder ein Subschema — direkt im Browser.",
    schemaLabel: "Schema",
    tabPaste: "JSON einfügen",
    tabUpload: "Datei hochladen",
    examplesLabel: "Beispiel laden",
    examplesPlaceholder: "Beispiel auswählen…",
    validateButton: "Validieren",
    resultValid: "Gültig — das Dokument entspricht dem gewählten Schema.",
    resultInvalid: "Validierung fehlgeschlagen — {count} Fehler gefunden.",
    uploadPrompt: "JSON-Datei auswählen",
    uploadHint: "Es werden nur .json-Dateien akzeptiert.",
    editorPlaceholder: "JSON hier einfügen…",
  },
  news: {
    pageTitle: "News",
    pageDescription: "Aktuelles, Releases und Ankündigungen zum VDA 231-301-Standard.",
    pageHeaderLede: "Releases, Arbeitsgruppenfortschritte, Werkzeuge und Praxisberichte.",
    empty: "Noch keine Artikel vorhanden. Schauen Sie bald wieder vorbei.",
    readMore: "Mehr lesen",
  },
  catalog: {
    pageTitle: "Schemakatalog",
    pageEyebrow: "Offene Projektressourcen",
    pageDescription:
      "Alle Schema-Repositories für den VDA 231-301 Standard. Jedes Repository deckt einen bestimmten funktionalen oder regulatorischen Bereich ab.",
    nav: "Schemakatalog",
  },
} as const;

export type UiKeys = typeof ui;
