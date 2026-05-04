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
    heroSubtitle: 'Material Information -  From documents to trusted material data',
    heroDescription:
      'A standardized, machine-readable data model designed for digital ecosystems. An open JSON schema enabling interoperable exchange of material and test data across industrial supply chains',
    ctaValidator: 'Validate your data',
    ctaDocs: 'Explore the documentation',
    whatTitle: 'What is VDA 231-301?',
    whatBody: `VDA 231‑301 is an official VDA recommendation defining a standardized, machine‑readable data model for material and test information.
    It addresses one of the key challenges in digital supply chains: reliable, interoperable exchange of material‑related data across company and system boundaries. 
    Built on open JSON Schema, VDA 231‑301 enables validated, system‑to‑system data exchange between OEMs, suppliers and testing laboratories. 
    VDA 231‑301 builds on the standardized material definitions provided by VDA 231‑300 and extends them with a machine‑readable model for test and measurement results.
    Together, they form a consistent foundation for structured material data exchange and establish a common semantic foundation that complements digital ecosystems such as Catena‑X, allowing material data to flow consistently without proprietary formats, manual re‑entry or interpretation gaps.
    While originating from automotive requirements, the data model is generically applicable to any industry relying on structured exchange of material information.
    The recommendation is developed and maintained by the VDA 231‑301 Project Group and evolves through transparent, open collaboration on GitHub.`,
    factsTitle: 'At a glance',
    factsSchema: 'JSON Schema draft 2020-12',
    factsSubschemas: 'Modular subschema architecture',
    factsOpenSource: 'Open source — MIT License',
    factsVDA: 'Official VDA recommendation',

    challengeEyebrow: "Today's reality",
    challengeTitle:
      'Material data exchange is slowed down by no standardised, machine-readable data.',
    challengeManualHead: 'Manual process',
    challengeManualItem1: 'Test plans',
    challengeManualItem2: 'Result compilation',
    challengeManualItem3: 'Re-typing across systems',
    challengeCoordHead: 'Coordination effort',
    challengeCoordItem1: 'OEMs',
    challengeCoordItem2: 'Suppliers',
    challengeCoordItem3: 'Laboratories',
    challengeRiskHead: 'Quality risks',
    challengeRiskItem1: 'Interpretation gaps',
    challengeRiskItem2: 'Transcription errors',
    challengeRiskItem3: 'Costly rework',
    challengeFooter: 'The result: no standardised, machine-readable data.',

    solutionEyebrow: 'The standardised answer',
    solutionTitle: 'VDA 231-300 and VDA 231-301 - A standardized foundation for interoperable material data.',
    solutionMatHead: 'Consistend material definition',
    solutionMatItem1: 'Standardized material and surface semantics (VDA 231-300)',
    solutionMatItem2: 'Clear reference to 3D product data - JT / ISO 14306',
    solutionMatItem3: 'Unambiguous basis for downstream test and compliance data',
    solutionResHead: 'Interoperable test & measurement data',
    solutionResItem1: 'Machine-readable test and measurement results (VDA 231-301)',
    solutionResItem2: 'Standardized structure with formal validation rules',
    solutionResItem3: 'Direct system-to-system exchange without re-typing',
    solutionResChip1: 'Machine-readable',
    solutionResChip2: 'Validatable',
    solutionResChip3: 'Open',
    solutionResChip4: 'System-ready',
    solutionShareHead: 'Shared semantic understanding',
    solutionShareItem1: 'Common interpretation of material and test data',
    solutionShareItem2: 'Reduced coordination effort across companies',
    solutionShareItem3: 'Reliable data exchange',
    solutionResChip1: 'OEMs',
    solutionResChip2: 'Suppliers',
    solutionResChip3: 'Laboratories',
    solutionFooterLead: 'Defines what is tested.',
    solutionFooterTail:
      'Defines how results are described — enabling seamless data flow without re‑typing or interpretation gaps.',

    ctaEyebrow: 'Get involved',
    ctaTitle: 'Apply the standard.<br />Integrate it.<br />Shape its future.',
    ctaPrimary: 'Use and explore on GitHub',
    ctaSecondary: 'Contact the VDA project group',
    ctaTertiary: 'Read the official recommendation',
    ctaBody: `Apply the standard in your projects to exchange material data in a structured and reliable way.
    Integrate the schema into systems and digital platforms to enable interoperable, system‑to‑system data flows.
    Shape the future of the standard by contributing expertise, feedback and use cases.`,
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
