export const ui = {
  nav: {
    home: "Startseite",
    docs: "Dokumentation",
    validator: "Validator",
    news: "Neuigkeiten",
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
    news: "Neuigkeiten",
    schemas: "Schemas",
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
      "Ein standardisiertes, offenes JSON-Schema für den Austausch von Bemusterungsdaten in der Automobilindustrie.",
    ctaValidator: "Zum Validator",
    ctaDocs: "Zur Dokumentation",
    whatTitle: "Was ist VDA 231-301?",
    whatLead:
      "VDA 231-301 ermöglicht den interoperablen, maschinenlesbaren Austausch von Werkstoffprüf- und Bemusterungsdaten über System-, Unternehmens- und digitale Ökosystemgrenzen hinweg.",
    whatBody: `VDA 231-301 definiert ein einheitliches Datenformat für die Übermittlung von Werkstoffprüf- und
      Bemusterungsergebnissen zwischen OEMs, Lieferanten und Prüflaboren. Auf Basis von JSON Schema ermöglicht
      der Standard einen maschinenlesbaren, validierten Datenaustausch ohne proprietäre Formate oder manuelle
      Nacherfassung. Der Standard wird von der VDA 231-301 Projektgruppe gepflegt und entwickelt sich durch
      offene Zusammenarbeit auf GitHub weiter.`,
    factsTitle: "Auf einen Blick",
    factsSchema: "JSON Schema Draft 2020-12",
    factsSubschemas: "Modulare Subschema-Architektur",
    factsOpenSource: "Open Source — MIT-Lizenz",
    factsVDA: "Offizielle VDA-Empfehlung",

    // TODO: translate — landing page is currently EN-only; keys exist for type/runtime parity
    challengeEyebrow: "Heutige Realität",
    challengeTitle:
      "Der Werkstoffdatenaustausch wird durch manuelle Arbeit, fragmentierte Partner und Qualitätsrisiken ausgebremst.",
    challengeManualHead: "Manueller Prozess",
    challengeManualItem1: "Prüfpläne",
    challengeManualItem2: "Ergebniszusammenstellung",
    challengeManualItem3: "Nacherfassung über mehrere Systeme",
    challengeCoordHead: "Koordinationsaufwand",
    challengeCoordItem1: "OEMs",
    challengeCoordItem2: "Lieferanten",
    challengeCoordItem3: "Prüflabore",
    challengeRiskHead: "Qualitätsrisiken",
    challengeRiskItem1: "Interpretationslücken",
    challengeRiskItem2: "Übertragungsfehler",
    challengeRiskItem3: "Kostspielige Nacharbeit",
    challengeFooter: "Das Ergebnis: keine standardisierten, maschinenlesbaren Daten.",

    solutionEyebrow: "Die standardisierte Antwort",
    solutionTitle: "VDA 231-300 und VDA 231-301 — das fehlende Bindeglied.",
    solutionMatHead: "Werkstoffdefinition",
    solutionMatItem1: "VDA 231-300",
    solutionMatItem2: "3D-Datensatz",
    solutionMatItem3: "JT / ISO 14306",
    solutionResHead: "Digitale Prüfergebnisse",
    solutionResItem1: "VDA 231-301",
    solutionResItem2: "Offenes JSON-Schema",
    solutionResItem3: "Mess- und Prüfdaten",
    solutionResChip1: "Maschinenlesbar",
    solutionResChip2: "Validierbar",
    solutionResChip3: "Offen",
    solutionShareHead: "Gemeinsames Verständnis",
    solutionShareItem1: "OEMs",
    solutionShareItem2: "Lieferanten",
    solutionShareItem3: "Prüflabore",
    solutionFooterLead: "definiert, was geprüft wird.",
    solutionFooterTail:
      "definiert, wie Ergebnisse beschrieben werden — Daten fließen ohne Nacherfassung und Interpretationslücken.",

    ctaEyebrow: "Mitwirken",
    ctaTitle: "Gestalten Sie den Standard mit.",
    ctaPrimary: "Auf GitHub erkunden",
    ctaSecondary: "Kontakt zur VDA-Projektgruppe",
    ctaTertiary: "Spezifikation lesen",
    ctaBody: `VDA 231‑301 definiert ein standardisiertes, maschinenlesbares Datenmodell für Material- und Prüfinformationen und ermöglicht interoperablen Datenaustausch über Organisations- und IT-Systemgrenzen hinweg.

    Ersetzen Sie dokumentenbasierte Prozesse durch validierten, System-zu-System-Datenaustausch.
    Integrieren Sie das offene JSON-Schema in Ihre Plattformen und Toolchains, um manuellen Aufwand zu reduzieren und zuverlässige Compliance- und Nachhaltigkeitsberichte zu gewährleisten.`,
    ctaQuickstart:
      "Schnellstart: Schema erkunden, Beispieldateien validieren und interoperablen Materialdatenaustausch testen — direkt im Browser.",
    ctaLede:
      "Entwickelt und gepflegt von der VDA 231-301 Projektgruppe. Wenden Sie den Standard an, validieren Sie Ihre Daten und tragen Sie zum offenen Ökosystem bei.",
    ctaRoles: {
      manufacturer:
        "Definieren Sie eine standardisierte, maschinenlesbare Referenz für Material- und Prüfdaten und verbessern Sie Datenqualität, Vergleichbarkeit und Prüfbarkeit entlang der Lieferkette.",
      supplier:
        "Übermitteln Sie Material- und Prüfdaten einmal und verwenden Sie sie über mehrere Kunden hinweg — weniger manueller Aufwand, weniger Koordinationsschleifen.",
      tool: "Entwickeln Sie interoperable Lösungen auf Basis eines offenen, VDA-gestützten JSON-Schemas ohne proprietäre Schnittstellen.",
    },

    heroTitleBlack: "Von Dokumenten zu",
    heroTitleGreen: "vertrauenswürdigen Materialdaten",

    audiencesEyebrow: "Wer profitiert",
    audiencesTitle: "Ein Standard, der sich an jedem Knoten der Wertschöpfungskette auszahlt.",
    audienceMfrTitle: "Hersteller",
    audienceMfrLede: "Definieren Sie einmal, welche Materialdaten Sie benötigen — in einem Format, das jeder Lieferant liefern kann.",
    audienceMfrGain1: "Weniger Koordinationsaufwand",
    audienceMfrGain2: "Vergleichbare, prüffähige Daten",
    audienceMfrGain3: "Schnellere Compliance-Freigabe",
    audienceSupplierTitle: "Lieferant",
    audienceSupplierLede: "Übermitteln Sie Material- und Prüfdaten einmal und verwenden Sie sie bei allen Kunden wieder.",
    audienceSupplierGain1: "Ein Format, viele Kunden",
    audienceSupplierGain2: "Weniger manuelle Nacherfassung",
    audienceSupplierGain3: "Maschinell validierte Ergebnisse",
    audienceLabTitle: "Prüflabor",
    audienceLabLede: "Liefern Sie strukturierte, validierte Prüfergebnisse, die direkt in Kundensysteme integriert werden.",
    audienceLabGain1: "Strukturierter Berichtsoutput",
    audienceLabGain2: "Direkte Systemintegration",
    audienceLabGain3: "Null Übertragungsfehler",
    audienceComplianceTitle: "Compliance & Qualität",
    audienceComplianceLede: "Verlassen Sie sich auf konsistente, formal validierte Daten für Audits und Nachhaltigkeitsberichte.",
    audienceComplianceGain1: "Nachvollziehbare Datenherkunft",
    audienceComplianceGain2: "Auditkonforme Aufzeichnungen",
    audienceComplianceGain3: "Regulatorische Sicherheit",

    stepsEyebrow: "Erste Schritte",
    stepsTitle: "Den Standard anwenden. Systeme verbinden.",
    stepsLede: "Vier pragmatische Schritte von der Empfehlung zum live, validierten Datenaustausch.",
    step1Head: "Empfehlung lesen",
    step1Body: "Laden Sie das offizielle VDA 231-301 Dokument herunter und verstehen Sie das Datenmodell.",
    step1Link: "VDA Webshop →",
    step2Head: "Schemas erkunden",
    step2Body: "Durchsuchen Sie alle Subschema-Repositories und wählen Sie die für Ihre Domain relevanten aus.",
    step2Link: "Schema-Übersicht →",
    step3Head: "Daten validieren",
    step3Body: "Nutzen Sie den integrierten Validator, um Ihre JSON-Payloads gegen die Schemas zu prüfen.",
    step3Link: "Validator öffnen →",
    step4Head: "Systeme verbinden",
    step4Body: "Integrieren Sie das offene JSON-Schema in Ihre Plattformen und Toolchains.",
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
    pageTitle: "Neuigkeiten",
    pageDescription: "Aktuelles, Releases und Ankündigungen zum VDA 231-301-Standard.",
    pageHeaderLede: "Releases, Arbeitsgruppenfortschritte, Werkzeuge und Praxisberichte.",
    empty: "Noch keine Artikel vorhanden. Schauen Sie bald wieder vorbei.",
    readMore: "Mehr lesen",
  },
  schemas: {
    pageTitle: "Schemas",
    pageEyebrow: "Offene Projektressourcen",
    pageDescription:
      "Alle Schema-Repositories für den VDA 231-301 Standard. Jedes Repository deckt einen bestimmten funktionalen oder regulatorischen Bereich ab.",
    nav: "Schemas",
  },
} as const;

export type UiKeys = typeof ui;
