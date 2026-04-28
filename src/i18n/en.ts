export const ui = {
  nav: {
    home: 'Home',
    docs: 'Documentation',
    validator: 'Validator',
    news: 'News',
  },
  lang: {
    switch: 'Deutsch',
    switchHref: '/de',
    current: 'EN',
  },
  footer: {
    tagline: 'An official recommendation of the VDA — Verband der Automobilindustrie.',
    links: 'Links',
    github: 'GitHub Repository',
    vda: 'VDA Website',
    legal: 'MIT License · VDA 231-301 Project Group',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
  },
  home: {
    heroTitle: 'VDA 231-301',
    heroSubtitle: 'Material Information',
    heroDescription:
      'A standardised, open JSON schema for exchanging material information data across the industrial supply chains.',
    ctaValidator: 'Try the Validator',
    ctaDocs: 'Read the Documentation',
    whatTitle: 'What is VDA 231-301?',
    whatBody: `VDA 231-301 defines a common data format for transmitting material information e.g. test results
      between automotive OEMs, suppliers, and testing laboratories. Built on JSON Schema, it enables
      machine-readable, validated data exchange without proprietary formats or manual re-entry.
      The standard is maintained by the VDA 231-301 Project Group and evolves through open collaboration
      on GitHub.`,
    factsTitle: 'At a glance',
    factsSchema: 'JSON Schema draft 2020-12',
    factsSubschemas: 'Modular subschema architecture',
    factsOpenSource: 'Open source — MIT License',
    factsVDA: 'Official VDA recommendation',
  },
  docs: {
    pageTitle: 'Documentation',
    pageDescription: 'Overview of the VDA 231-301 standard, its structure, and how to work with it.',
  },
  validator: {
    pageTitle: 'JSON Validator',
    pageDescription: 'Validate a JSON file against the VDA 231-301 Generic Schema or a subschema in your browser.',
    schemaLabel: 'Schema',
    tabPaste: 'Paste JSON',
    tabUpload: 'Upload file',
    examplesLabel: 'Load an example',
    examplesPlaceholder: 'Select an example…',
    validateButton: 'Validate',
    resultValid: 'Valid — the document conforms to the selected schema.',
    resultInvalid: 'Validation failed — {count} error(s) found.',
    uploadPrompt: 'Choose a JSON file',
    uploadHint: 'Only .json files are accepted.',
    editorPlaceholder: 'Paste your JSON here…',
  },
  news: {
    pageTitle: 'News',
    pageDescription: 'Updates, releases, and announcements for the VDA 231-301 standard.',
    empty: 'No articles yet. Check back soon.',
    readMore: 'Read more',
  },
} as const;

export type UiKeys = typeof ui;
