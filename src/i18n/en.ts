export const ui = {
  nav: {
    home: "Home",
    docs: "Documentation",
    validator: "Validator",
    news: "News",
  },
  lang: {
    switch: "Deutsch",
    switchHref: "/de",
    current: "EN",
  },
  footer: {
    tagline: "An official recommendation of the VDA — Verband der Automobilindustrie.",
    colStandard: "Standard",
    colProject: "Project",
    colResources: "Resources",
    docs: "Documentation",
    validator: "Validator",
    github: "GitHub",
    news: "News",
    catalog: "Schema Catalog",
    vda: "VDA Website",
    workingGroup: "Working Group",
    officialDoc: "Official Document",
    vda300: "VDA 231-300",
    catenaX: "Catena-X",
    copyright: "© 2025 VDA 231-301 Project Group",
    license: "MIT License",
    imprint: "Imprint",
    privacy: "Privacy Policy",
  },
  home: {
    heroTitle: "VDA 231-301",
    heroSubtitle: "Material Information -  From documents to trusted material data",
    heroDescription:
      "Machine-readable digital material thread infrastructure for interoperable material requirements, test results, certificates, and compliance evidence across industrial supply chains.",
    ctaValidator: "Validate your data",
    ctaDocs: "Explore the documentation",
    whatTitle: "What is VDA 231-301?",
    whatLead:
      "VDA 231‑301 enables interoperable, machine‑readable exchange of material and test data across systems, companies and digital ecosystems.",
    whatBody: `VDA 231‑301 is an official VDA recommendation defining a standardized, machine‑readable data model for material and test information.
    It addresses a key challenge in digital supply chains: reliable, interoperable exchange of material‑related data across company and system boundaries.

    The data model is represented as open, versioned JSON Schemas so systems can validate, exchange, and process material information automatically.
    It builds on the standardized material definitions of VDA 231‑300 and extends them with a machine‑readable model for test and measurement results.

    Together, VDA 231‑300 and VDA 231‑301 form a consistent foundation for structured material data exchange.
    They complement digital ecosystems such as Catena‑X by enabling consistent data flow without proprietary formats, manual re‑entry or interpretation gaps.

    While originating from automotive requirements, the data model is generically applicable to any industry relying on structured exchange of material information.
    The recommendation is developed and maintained by the VDA 231‑301 Project Group through transparent, open collaboration.`,
    factsTitle: "At a glance",
    factsSchema: "Open, versioned JSON Schema representations for automated validation",
    factsSubschemas: "Modular subschema architecture for scalable integration",
    factsOpenSource: "Open standard — MIT License, no vendor lock-in",
    factsVDA: "Official VDA recommendation with industry backing",

    challengeEyebrow: "Today's reality",
    challengeTitle:
      "Material data exchange across the value chain remains manual, fragmented and error‑prone.",
    challengeManualHead: "Manual process",
    challengeManualItem1: "Test planning and documentation",
    challengeManualItem2: "Result consolidation and reporting",
    challengeManualItem3: "Repeated data entry across system",
    challengeCoordHead: "High coordination effort",
    challengeCoordItem1: "Manufacturers",
    challengeCoordItem2: "Suppliers",
    challengeCoordItem3: "Laboratories",
    challengeRiskHead: "Quality and Compliance risks",
    challengeRiskItem1: "Ambiguous interpretations",
    challengeRiskItem2: "Transcription and formatting errors",
    challengeRiskItem3: "Costly corrections and rework",
    challengeFooter:
      "The result: fragmented data, limited comparability and increasing regulatory and compliance risk.",

    solutionEyebrow: "The standardized answer",
    solutionTitle:
      "VDA 231-300 and VDA 231-301 - A standardized, machine‑readable foundation for interoperable material data.",
    solutionMatHead: "Consistent material definition",
    solutionMatItem1: "Standardized material and surface semantics (VDA 231-300)",
    solutionMatItem2: "Clear reference to 3D product data - JT / ISO 14306",
    solutionMatItem3: "Unambiguous basis for downstream test and compliance data",
    solutionResHead: "Interoperable test & measurement data",
    solutionResItem1: "Machine-readable test and measurement results (VDA 231-301)",
    solutionResItem2: "Standardized structure with formal validation rules",
    solutionResItem3: "Direct system-to-system exchange without re-typing",
    solutionResChip4: "System-ready",
    solutionShareHead: "Shared semantic understanding",
    solutionShareItem1: "Common interpretation of material and test data",
    solutionShareItem2: "Reduced coordination effort across companies",
    solutionShareItem3: "Reliable data exchange",
    solutionResChip1: "Manufacturers",
    solutionResChip2: "Suppliers",
    solutionResChip3: "Laboratories",
    solutionFooterLead: "Defines what is tested and how materials are described.",
    solutionFooterTail:
      "Defines how results are structured and exchanged – enabling seamless data flow without re-typing or interpretation gaps.",

    ctaEyebrow: "Get involved",
    ctaTitle:
      "Apply the standard.<br />Connect your systems.<br />Shape interoperable material data.",
    ctaPrimary: "Use and explore on GitHub",
    ctaSecondary: "Contact the VDA project group",
    ctaTertiary: "Read the official recommendation",
    ctaBody: `VDA 231‑301 provides a standardized, machine‑readable data model for material and test information, enabling interoperable data exchange across organizations and IT systems.

    Replace document‑based processes with validated, system‑to‑system data exchange.
    Integrate the open semantic data model into your platforms and toolchains to reduce manual effort, improve data quality and ensure reliable compliance and sustainability reporting at scale.

    VDA 231‑301 is developed as an open standard.
    Adoption, technical feedback and real‑world use cases directly shape its evolution.
    Join the community to contribute expertise, integrate the standard into your systems and drive long‑term interoperability across value chains.`,
    ctaQuickstart:
      "Quick start: explore the schema, validate example files and test interoperable material data — directly in your browser.",
    ctaLede:
      "Built and maintained by the VDA 231-301 Project Group. Apply the standard, validate your data, and contribute to the open ecosystem.",
    ctaRoles: {
      manufacturer:
        "Adopt a standardized, machine-readable reference for material and test data and improve data quality, comparability and auditability across the supply chain.",
      supplier:
        "Provide material and test data once, reuse it across customers and reduce manual effort, coordination loops and reporting overhead.",
      tool: "Build interoperable solutions on an open, VDA-backed semantic data model with JSON Schema representations and avoid proprietary interfaces or one-off integrations.",
    },

    heroTitleBlack: "Explore the",
    heroTitleGreen: "open digital material thread",

    audiencesEyebrow: "Who benefits",
    audiencesTitle: "A standard that pays back at every node of the value chain.",
    audienceMfrTitle: "Manufacturer",
    audienceMfrLede:
      "Define what material data you need — once, in a form every supplier can deliver.",
    audienceMfrGain1: "Reduced coordination overhead",
    audienceMfrGain2: "Comparable, auditable data",
    audienceMfrGain3: "Faster compliance sign-off",
    audienceSupplierTitle: "Supplier",
    audienceSupplierLede: "Submit material and test data once and reuse it across all customers.",
    audienceSupplierGain1: "One format, many customers",
    audienceSupplierGain2: "Less manual re-entry",
    audienceSupplierGain3: "Machine-validated results",
    audienceLabTitle: "Test Laboratory",
    audienceLabLede:
      "Deliver structured, validated test results that integrate directly into customer systems.",
    audienceLabGain1: "Structured report output",
    audienceLabGain2: "Direct system integration",
    audienceLabGain3: "Zero transcription errors",
    audienceComplianceTitle: "Compliance & Quality",
    audienceComplianceLede:
      "Rely on consistent, formally validated data for audits and sustainability reporting.",
    audienceComplianceGain1: "Traceable data provenance",
    audienceComplianceGain2: "Audit-ready records",
    audienceComplianceGain3: "Regulatory confidence",

    stepsEyebrow: "Get started",
    stepsTitle: "Apply the standard. Connect your systems.",
    stepsLede: "Three pragmatic steps from recommendation to live, validated data exchange.",
    step1Head: "Read the recommendation",
    step1Body: "Download the official VDA 231-301 document and understand the data model.",
    step1Link: "VDA Webshop →",
    step2Head: "Explore the schemas",
    step2Body: "Browse all subschema repositories and pick the ones relevant to your domain.",
    step2Link: "Schema overview →",
    step3Head: "Validate your data",
    step3Body: "Use the built-in validator to check your JSON payloads against the schemas.",
    step3Link: "Open validator →",
    step4Head: "Connect your systems",
    step4Body: "Integrate the open semantic data model into your platforms and toolchains.",
    step4Link: "Documentation →",

    newsEyebrow: "Latest",
    newsTitle: "News & releases",
    newsViewAll: "View all news",
  },
  docs: {
    pageTitle: "Documentation",
    pageDescription:
      "Overview of the VDA 231-301 standard, its structure, and how to work with it.",
  },
  validator: {
    pageTitle: "JSON Validator",
    pageDescription:
      "Validate a JSON file against the VDA 231-301 Generic Schema or a subschema in your browser.",
    schemaLabel: "Schema",
    tabPaste: "Paste JSON",
    tabUpload: "Upload file",
    examplesLabel: "Load an example",
    examplesPlaceholder: "Select an example…",
    validateButton: "Validate",
    resultValid: "Valid — the document conforms to the selected schema.",
    resultInvalid: "Validation failed — {count} error(s) found.",
    uploadPrompt: "Choose a JSON file",
    uploadHint: "Only .json files are accepted.",
    editorPlaceholder: "Paste your JSON here…",
  },
  news: {
    pageTitle: "News",
    pageDescription: "Updates, releases, and announcements for the VDA 231-301 standard.",
    pageHeaderLede: "Releases, working group milestones, tooling and real adoption stories.",
    empty: "No articles yet. Check back soon.",
    readMore: "Read more",
  },
  catalog: {
    pageTitle: "Schema Catalog",
    pageEyebrow: "Open Project Resources",
    pageDescription:
      "All schema repositories for the VDA 231-301 standard. Each repository covers a dedicated functional or regulatory domain.",
    nav: "Schema Catalog",
  },
} as const;

export type UiKeys = typeof ui;
