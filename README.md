# Student Support Service Portal

Student Support Service Portal is a React + Vite portfolio project designed to demonstrate the kind of work involved in ACT Government, ANU, or CIT digital content roles. It focuses on public-facing service information, accessible content structure, and practical user journeys rather than marketing-style presentation.

## Problem

Students often need help quickly but may not know which service team to contact, what information they need to provide, or whether they are eligible for support. In large institutions, service information can become fragmented, overly internal, or hard to scan. This project responds to that problem by presenting support information in a clearer, more task-focused portal structure.

## Users

- Current students who need help quickly and may not know which service to contact
- International students navigating local systems and support pathways
- Students experiencing financial hardship, housing instability, disability-related barriers, or wellbeing concerns
- Staff, carers, and advocates helping a student locate support information

## Goals

- Help users find the right support service without needing organisational knowledge
- Demonstrate clear information architecture for content-heavy service websites
- Show accessible, plain-English content design suitable for public-sector environments
- Present realistic service content, empty states, support forms, and search states
- Build a reusable front-end structure that could later connect to a CMS

## Information Architecture Decisions

- The homepage acts as a service entry point, not a promotional landing page. It introduces the portal, provides search, highlights common tasks, and groups support into clear categories.
- The services listing page supports scanning and refinement through keyword search and category filtering.
- Service detail pages use a repeatable content model: summary, eligibility, how to apply, required documents, contact details, related services, and helpful resources.
- Resources, FAQs, and contact are separated by user intent so people can browse content in the way that best suits their task.
- A dedicated search results page combines matched services and resources to support cross-portal discovery.
- Breadcrumbs support orientation and reinforce the site structure across inner pages.

## Accessibility Considerations

- Semantic HTML is used throughout, including landmarks, headings, lists, labels, buttons, and native form controls.
- Heading hierarchy has been kept deliberate so each page has a single `h1` and nested sections follow predictable `h2` and `h3` levels.
- Focus states are high-contrast and clearly visible across navigation, form controls, buttons, and links.
- Form validation includes inline messages, `aria-invalid`, linked error messaging, and a top-level error summary for keyboard and screen-reader users.
- The FAQ accordion uses real buttons with accessible expanded states rather than custom div-based controls.
- Colour contrast and spacing were tuned to favour readability and content scanning over visual decoration.
- Copy uses plain English and practical language to reduce cognitive load.

## Sitemap

- Home
- Services
- Service detail
- Resources
- FAQ
- Contact / Request support
- Search results
- 404 / Not found

## Content Strategy Decisions

- Content is written in plain English and prioritises student tasks over organisational language.
- Service summaries are concise and practical so users can decide quickly whether a service is relevant.
- Repeated page structures support consistency and make the content model easier to scale.
- Structured local data for services, resources, FAQs, and quick links reflects CMS-oriented thinking.

## Outcome

The final result is a calm, professional, content-led service portal that feels more like a real university or public-sector support website than a commercial landing page. It demonstrates practical strengths relevant to ACT Government and ANU web content roles: structured content design, accessible interface decisions, plain-English writing, reusable templates, and realistic service publishing patterns.

## Tech stack

- React
- Vite
- React Router
- Local structured data for services, FAQs, resources, and quick links

## GitHub Pages deployment

This project is set up to deploy to GitHub Pages from the `main` branch using GitHub Actions.

1. Push the latest project files to your GitHub repository.
2. In the repository, open `Settings` → `Pages`.
3. Under `Build and deployment`, choose `Source: GitHub Actions`.
4. Push to `main` again if needed, or open the `Actions` tab and run the deployment workflow.

The project uses `HashRouter` and a relative Vite base path so internal routes work on GitHub Pages without additional server configuration.

## Component structure

- `Header` and `Footer` for consistent site framing
- `Breadcrumbs` for location awareness on internal pages
- `SearchBar`, `FilterBar`, and reusable empty/status components for browse and search states
- `ServiceCard`, `ResourceListItem`, and `FAQAccordion` for modular content presentation
- Reusable form field layout and inline validation patterns on the contact page

## Future CMS-ready thinking

- Services, FAQs, resources, and quick links are stored as structured local data rather than hard-coded inside page templates.
- The data model can map cleanly to CMS content types such as service pages, FAQ entries, downloads, and navigation links.
- Reusable templates reduce duplication and support future publishing workflows where content authors update entries without changing layout code.

## Why this project fits ACT Government / ANU / CIT roles

- It shows service design thinking in a content-heavy environment.
- It focuses on usability, accessibility, and clarity rather than visual novelty.
- It reflects the kind of structured publishing and information architecture work common in public-sector and higher-education teams.
- It demonstrates how front-end implementation can support better content outcomes for real users.

## Pages included

1. Home
2. Services listing
3. Service detail
4. Resources
5. FAQ
6. Contact / Request Support
7. Search results
8. 404 / Not Found
