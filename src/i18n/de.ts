export const ui = {
  nav: {
    home: 'Startseite',
    docs: 'Dokumentation',
    validator: 'Validator',
    news: 'Neuigkeiten',
  },
  lang: {
    switch: 'English',
    switchHref: '/',
    current: 'DE',
  },
  footer: {
    tagline: 'Eine offizielle Empfehlung des VDA — Verband der Automobilindustrie.',
    links: 'Links',
    github: 'GitHub-Repository',
    vda: 'VDA-Website',
    legal: 'MIT-Lizenz · VDA 231-301 Projektgruppe',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
  },
  home: {
    heroTitle: 'VDA 231-301',
    heroSubtitle: 'Werkstoffliche Bemusterung',
    heroDescription:
      'Ein standardisiertes, offenes JSON-Schema für den Austausch von Bemusterungsdaten in der Automobilindustrie.',
    ctaValidator: 'Zum Validator',
    ctaDocs: 'Zur Dokumentation',
    whatTitle: 'Was ist VDA 231-301?',
    whatBody: `VDA 231-301 definiert ein einheitliches Datenformat für die Übermittlung von Werkstoffprüf- und
      Bemusterungsergebnissen zwischen OEMs, Lieferanten und Prüflaboren. Auf Basis von JSON Schema ermöglicht
      der Standard einen maschinenlesbaren, validierten Datenaustausch ohne proprietäre Formate oder manuelle
      Nacherfassung. Der Standard wird von der VDA 231-301 Projektgruppe gepflegt und entwickelt sich durch
      offene Zusammenarbeit auf GitHub weiter.`,
    factsTitle: 'Auf einen Blick',
    factsSchema: 'JSON Schema Draft 2020-12',
    factsSubschemas: 'Modulare Subschema-Architektur',
    factsOpenSource: 'Open Source — MIT-Lizenz',
    factsVDA: 'Offizielle VDA-Empfehlung',

    // TODO: translate — landing page is currently EN-only; keys exist for type/runtime parity
    challengeEyebrow: 'Heutige Realität',
    challengeTitle:
      'Der Werkstoffdatenaustausch wird durch manuelle Arbeit, fragmentierte Partner und Qualitätsrisiken ausgebremst.',
    challengeManualHead: 'Manueller Prozess',
    challengeManualItem1: 'Prüfpläne',
    challengeManualItem2: 'Ergebniszusammenstellung',
    challengeManualItem3: 'Nacherfassung über mehrere Systeme',
    challengeCoordHead: 'Koordinationsaufwand',
    challengeCoordItem1: 'OEMs',
    challengeCoordItem2: 'Lieferanten',
    challengeCoordItem3: 'Prüflabore',
    challengeRiskHead: 'Qualitätsrisiken',
    challengeRiskItem1: 'Interpretationslücken',
    challengeRiskItem2: 'Übertragungsfehler',
    challengeRiskItem3: 'Kostspielige Nacharbeit',
    challengeFooter: 'Das Ergebnis: keine standardisierten, maschinenlesbaren Daten.',

    solutionEyebrow: 'Die standardisierte Antwort',
    solutionTitle: 'VDA 231-300 und VDA 231-301 — das fehlende Bindeglied.',
    solutionMatHead: 'Werkstoffdefinition',
    solutionMatItem1: 'VDA 231-300',
    solutionMatItem2: '3D-Datensatz',
    solutionMatItem3: 'JT / ISO 14306',
    solutionResHead: 'Digitale Prüfergebnisse',
    solutionResItem1: 'VDA 231-301',
    solutionResItem2: 'Offenes JSON-Schema',
    solutionResItem3: 'Mess- und Prüfdaten',
    solutionResChip1: 'Maschinenlesbar',
    solutionResChip2: 'Validierbar',
    solutionResChip3: 'Offen',
    solutionShareHead: 'Gemeinsames Verständnis',
    solutionShareItem1: 'OEMs',
    solutionShareItem2: 'Lieferanten',
    solutionShareItem3: 'Prüflabore',
    solutionFooterLead: 'definiert, was geprüft wird.',
    solutionFooterTail:
      'definiert, wie Ergebnisse beschrieben werden — Daten fließen ohne Nacherfassung und Interpretationslücken.',

    ctaEyebrow: 'Mitwirken',
    ctaTitle: 'Gestalten Sie den Standard mit.',
    ctaPrimary: 'Auf GitHub erkunden',
    ctaSecondary: 'Kontakt zur VDA-Projektgruppe',
    ctaTertiary: 'Spezifikation lesen',
  },
  docs: {
    pageTitle: 'Dokumentation',
    pageDescription: 'Überblick über den VDA 231-301-Standard, seine Struktur und den Umgang damit.',
  },
  validator: {
    pageTitle: 'JSON-Validator',
    pageDescription: 'Validieren Sie eine JSON-Datei gegen das VDA 231-301 Generic Schema oder ein Subschema — direkt im Browser.',
    schemaLabel: 'Schema',
    tabPaste: 'JSON einfügen',
    tabUpload: 'Datei hochladen',
    examplesLabel: 'Beispiel laden',
    examplesPlaceholder: 'Beispiel auswählen…',
    validateButton: 'Validieren',
    resultValid: 'Gültig — das Dokument entspricht dem gewählten Schema.',
    resultInvalid: 'Validierung fehlgeschlagen — {count} Fehler gefunden.',
    uploadPrompt: 'JSON-Datei auswählen',
    uploadHint: 'Es werden nur .json-Dateien akzeptiert.',
    editorPlaceholder: 'JSON hier einfügen…',
  },
  news: {
    pageTitle: 'Neuigkeiten',
    pageDescription: 'Aktuelles, Releases und Ankündigungen zum VDA 231-301-Standard.',
    empty: 'Noch keine Artikel vorhanden. Schauen Sie bald wieder vorbei.',
    readMore: 'Mehr lesen',
  },
} as const;

export type UiKeys = typeof ui;
