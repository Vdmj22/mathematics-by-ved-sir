# Mathematics by Ved Sir — Resource Platform Design

## Goal
Turn the existing static site into a dependable, searchable mathematics resource library for Class 11 Mathematics, Class 12 Mathematics, Applied Mathematics, and original educational articles—without replacing the current website in one risky migration.

## Experience principles
- Brand: approved Mathematics by Ved Sir PNG logo; premium black, restrained gold, white typography.
- Student-first journey: **Learn → Practise → Check Solutions → Test → Analyse Mistakes → Improve**.
- Mobile-first, readable, fast, accessible, and clear about what each resource contains.
- Original layout and components; take inspiration from good education-site information architecture, not another site's visual identity.
- No invented review scores, resource counts, board endorsements, or claims.

## Information architecture
- `/class-11/` — Mathematics topics and resources
- `/class-12/` — Mathematics topics and resources
- `/applied-mathematics/` — Applied Mathematics topics and resources
- `/question-bank/` — browse question banks by class, subject and chapter
- `/pyqs/` — previous-year questions by class, subject, board and year
- `/solutions/` — original worked solutions and permitted/authorised references
- `/notes-formulae/` — revision notes and formula sheets
- `/free-tests/` — practice tests
- `/articles/` — concept explainers, common mistakes, study strategy and real-world mathematics

## Resource page layout
1. Breadcrumbs: Home → Class → Subject → Chapter → Resource type
2. H1 that states class, chapter, resource type and board/year when relevant
3. Short original introduction: who it is for and what it helps practise
4. Resource metadata: class, subject, chapter, resource type, board, year, last reviewed
5. Contents panel or question list
6. Solution access separated from the initial attempt where pedagogically appropriate
7. Download/print action only when an actual file exists
8. Related resources: notes, question bank, PYQs, test, solutions
9. Author/reviewer attribution and a clear correction/contact route

## Content publishing model
Each resource should have one source record with:
- stable id and human-readable title
- class and subject
- chapter slug
- resource type: `pyq`, `question-bank`, `worked-solution`, `notes`, `test`, or `article`
- board/curriculum and exam year where relevant
- concise original description
- publication state: draft or published
- canonical URL generated from one site configuration
- file links only when the files exist and are checked
- related resource IDs
- author and last-reviewed date

## Example URL pattern
- `/class-12/integration/pyqs/`
- `/class-12/integration/question-bank/`
- `/class-12/integration/solutions/`
- `/applied-mathematics/probability/question-bank/`
- `/articles/why-students-make-sign-errors-in-integration/`

Avoid creating near-duplicate pages for the same material. Each index page should add useful navigation or explanation.

## Visual system
- Background: near-black; cards/surfaces: charcoal; text: white and soft grey; gold is an accent for primary actions, key dividers and focus states.
- Keep body text comfortably readable; do not use gold for long paragraphs.
- Use one consistent site header, navigation, breadcrumbs and footer.
- Cards must communicate resource type and destination, not just decorative icons.
- Provide visible keyboard focus, skip-to-content, descriptive link text, and reduced-motion support.
- Equations must remain readable on narrow screens and printable pages.

## Publishing workflow
1. Add or edit a source file with required metadata.
2. Validate metadata, unique IDs/slugs, file existence, internal links and required SEO fields.
3. Generate the page from shared templates and shared brand components.
4. Generate canonical metadata, page title, description, breadcrumbs and applicable structured data.
5. Generate sitemap entries for published pages only.
6. Run build and link checks in GitHub Actions.
7. Deploy only if checks pass.
8. Review the live page on mobile and desktop after deployment.

## Copyright and academic integrity
- Prefer original explanations, worked methods and teacher-authored questions.
- Do not upload complete commercial textbook scans or reproduce proprietary solution manuals without permission.
- For previous-year questions, identify the board, year and source accurately; only publish material whose use is permitted. Link to official sources when reproducing the paper is not appropriate.
- Never label an unverified answer key as official.

## Rollout plan
### Phase 1 — Design pilot
Define a shared resource-page template and content schema; pilot with one chapter and a small number of verified, teacher-authored resources.

### Phase 2 — Safe publishing pipeline
Add a build step alongside the existing static pages. Preserve current URLs and deploy output until regression checks pass.

### Phase 3 — Expand
Add Class 11, Class 12, Applied Mathematics and articles using the same schema and templates.

### Phase 4 — Discoverability and measurement
Add useful filters/search, related resources, Search Console monitoring, and a monthly content-quality review. Rankings are not guaranteed; usefulness, crawlability and consistency are the controllable inputs.

## Acceptance criteria for the first pilot
- Existing pages and URLs continue to work.
- New resource page uses the approved logo and site-wide brand styles.
- No published draft or broken PDF link.
- Unique title, description and canonical URL.
- Breadcrumbs and related-resource links work.
- Mobile layout and print/PDF output remain readable.
- Build fails on invalid required metadata or missing local files.
