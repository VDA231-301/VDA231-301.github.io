---
title: "From Component to Test Report: VDA 231-301 Using the Example of a Toggle Clamp"
date: 2026-10-29
summary: "The toggle clamp example shows how VDA 231-301 links CAD components, physical test objects and structured test results. Additional example test reports illustrate the connection with human-readable PDF/A documents."
draft: false
tag: release
---

How can CAD data, individual components, real test specimens and the associated test results be linked digitally? A new example based on a real CAD dataset illustrates this relationship. Using a complete assembly attributed with MAT and SUR attributes according to VDA 231-300, the entire information chain is shown end to end. At the same time, the example lays the foundation for linking the data with human-readable test reports in PDF/A format.

![Toggle clamp](../../../public/graphic/toggle-clamp-vda-231-301.png)

*Toggle clamp as an application example for linking component, material and test information with VDA 231-301.*

The example represents a toggle clamp together with its component structure. The assembly contains several subcomponents, which in turn have subcomponents of their own. It also includes several identical parts, such as the bearing pins, which differ only in their installation position. Material and properties are therefore described only once at the component, and the occurrences in the CAD data refer to this description. Nothing has to be maintained twice, and each position can still be assigned unambiguously. In addition, the assembly contains different material types such as metals and polymers. This makes it well suited to test whether VDA 231-301 can also represent complex real-world structures.

![Toggle clamp with substructure in the CAD structure tree](../../../public/graphic/toggle-clamp-substructure.png)
<br>
*Assembly structure of the toggle clamp: subassemblies, identical parts such as the bearing pins, and geometry nodes that are linked to the components in VDA 231-301.*

At its core, this example is not only about describing a material or a test result, but about the structured, interoperable exchange of material and test information based on VDA 231-301. Among other things, the model distinguishes between components and concrete physical instances.

> **CAD model → component → physical test object → test → structured result → human-readable test report**

## From CAD Component to Test Specimen

The toggle clamp example shows how several information levels are connected: the assembly structure is described digitally, and individual components are linked to their occurrences in the CAD data. In addition, concrete physical test objects and the associated tests can be represented.

For the metallic components, tensile and hardness tests serve as examples. The example shows how test object, test specimen, test execution and results can be related to each other within the structured data model. This allows material and test information to be exchanged in a structured, machine-readable way between different parties and IT systems.

## Additional Tests Make the Example More Tangible

The toggle clamp is supplemented with further example test information for polymers. This includes, for instance, results for the subcomponents Rubber Thrust Pad and Hand Grip. An odour test according to VDA 270 shows how material-specific tests for polymers can be represented as well. This test is not typical for a clamping tool from a technical point of view; it is used here for demonstration purposes only.

In addition, data from 3.1 inspection certificates according to EN 10204 and material parameters according to SEP 1240 are represented via the existing subschemas.

## The Next Step: Bringing Structured Data and PDF/A Together

A structured JSON dataset is well suited for machine processing. In day-to-day business exchange, however, test results are often also needed in a directly readable document form.

This is where the VDA 231-301 PDF package concept, currently available as a **Working Draft**, comes in. It describes a PDF/A-based transport container that can combine a human-readable report with a manifest, structured data and optional additional files.

The currently documented manifest contract has the status **Draft 0.1.0**. It is explicitly not yet a released specification.

The manifest defines how the contained files relate to each other. According to the current Working Draft, a package comprises:

- a human-readable report,
- a manifest,
- exactly one main JSON payload,
- optional additional subdocuments,
- optional binary attachments.

The example thus shows how technical data from different information domains can be related to each other without replacing the human-readable test report with pure machine data.

## Transparency on the Current Status

The toggle clamp example serves to demonstrate modelling and data exchange. The assembly structure and CAD data come from a real dataset. The technical and organisational details as well as the test results, however, are illustrative and do not describe an actually tested component.

The complete example including all JSON files is available in the [VDA 231-301 repository](https://github.com/VDA231-301/VDA231-301/tree/main/examples/clamp).
Feedback and comments are welcome as an [issue](https://github.com/VDA231-301/VDA231-301/issues).

The PDF/A package is currently classified as a **Working Draft**.
