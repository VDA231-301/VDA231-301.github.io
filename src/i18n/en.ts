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
      'Material data exchange across the value chain is fragmented and inefficient.',
    challengeManualHead: 'Manual process',
    challengeManualItem1: 'Test planning and documentation',
    challengeManualItem2: 'Result consolidation and reporting',
    challengeManualItem3: 'Repeated data entry across system',
    challengeCoordHead: 'High coordination effort',
    challengeCoordItem1: 'OEMs',
    challengeCoordItem2: 'Suppliers',
    challengeCoordItem3: 'Laboratories',
    challengeRiskHead: 'Quality and Compliance risks',
    challengeRiskItem1: 'Ambiguous interpretations',
    challengeRiskItem2: 'Transcription and formatting errors',
    challengeRiskItem3: 'Costly corrections and rework',
    challengeFooter: 'The result: fragmented data, limited comparability and increased regulatory risk.',

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
    solutionFooterLead: 'Defines what is tested and how materials are described.',
    solutionFooterTail:
      'Defines how results are structured and exchanged – enabling seamless data flow without re-typing or interpretation gaps.',

    ctaEyebrow: 'Get involved',
    ctaTitle: 'Apply the standard.<br />Integrate it.<br />Shape its future.',
    ctaPrimary: 'Use and explore on GitHub',
    ctaSecondary: 'Contact the VDA project group',
    ctaTertiary: 'Read the official recommendation',
    ctaBody: `VDA 231-301 is an open VDA recommendation developed by industry, for industry.
    It enables interoperable, machine-readable material data exchange across OEMs, suppliers and IT systems
    and provides a shared foundation for digital validation, compliance and sustainability reporting.

    
    Apply the recommendation to establish a reliable, standardized basis for material and test data exchange.
    Integrate the open JSON schema into IT systems and digital platforms to enable seamless system-to-system data flows.
    Contribute expertise, feedback and real-world use cases to actively shape the further evolution of the recommendation.`,
    ctaRoles: {
    oem:
    'Establish a scalable reference for digital material data exchange and improve data quality across suppliers.',
    supplier:
    'Provide material data once, reuse it across customers and reduce manual effort and coordination overhead.',
    tool:
    'Build interoperable solutions based on an open, VDA-backed JSON schema instead of proprietary interfaces.',
    },
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
