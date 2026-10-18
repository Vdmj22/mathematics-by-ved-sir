# Resource page wireframe

This is the first page-level design specification for the Mathematics by Ved Sir resource library.

## Desktop
- **Header:** approved PNG logo at left; Class 11, Class 12, Applied Maths, Question Bank, PYQs, Articles; Courses CTA.
- **Breadcrumb row:** Home / Class / Subject / Chapter / Resource type.
- **Resource heading:** H1, a concise learning outcome, and restrained metadata chips.
- **Main column:** question/content area with comfortable line length; equations and diagrams; solution reveal or separate solution link where useful.
- **Side panel:** chapter contents, available downloads, and the next recommended study action.
- **Related resources:** notes, question bank, PYQs, test and worked solutions, but only where those resources exist.
- **Footer:** consistent brand, class navigation, contact and course link.

## Mobile
- Single-column content, no horizontal overflow.
- Search and class navigation remain easy to reach.
- Metadata wraps cleanly; downloads use full-width tap targets.
- Side panel becomes an in-flow section after the main content.
- Equations scroll only within their own equation container if necessary.
- Primary action remains visually clear without covering content.

## Resource card
Every card should show:
- resource type (PYQ / Question Bank / Worked Solution / Notes / Test / Article)
- class and chapter
- specific title
- a short, useful description
- a clear action label such as “Open questions”, “Read solution” or “Download PDF”

Do not display empty download buttons, placeholder review scores, fake resource counts, or “official” labels without verification.

## Page states
- **Published:** complete metadata and verified working content.
- **Draft:** visible only to the authoring/build process, not public navigation or sitemap.
- **Unavailable file:** build should fail rather than silently publish a dead download.
- **Correction needed:** provide a clear contact route and update the review date after a substantive correction.
