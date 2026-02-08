# Specification

## Summary
**Goal:** Build a responsive, multi-page informational website for “St Martin School” with a consistent classic academic theme and a working contact form backed by persistent storage.

**Planned changes:**
- Create a responsive site layout with top navigation (including mobile hamburger menu) and a footer with school name and quick links.
- Implement pages: Home, About, Academics, Admissions, News & Events, Contact (all English copy).
- Home: hero (headline, description, primary CTA), 3–4 highlight tiles, and a News/Events preview strip linking to the News & Events page.
- About: structured sections for overview, mission & values, leadership/staff teaser, and timeline/milestones placeholders.
- Academics: structured sections for grade levels/departments, curriculum overview, extracurriculars/clubs, and facilities/resources placeholders.
- Admissions: “How to apply” step list, requirements placeholders, optional tuition/fees placeholder, and an FAQ accordion (≥4 items).
- News & Events: static seeded list with dates/categories, filter toggle (All / News / Events), and an expandable/detail view for items.
- Contact: form (name, email, subject, message) with validation and success/error states; display placeholder contact info (address, phone, email, office hours).
- Backend (single Motoko actor): data model and methods to create contact submissions with createdAt, persist data across upgrades, and query recent submissions for verification/testing.
- Apply a consistent warm-neutral + deep-green visual theme (avoid blue/purple) across typography, spacing, buttons, and cards.
- Add and use generated static image assets (crest/logo + home hero illustration) within the header and homepage hero.

**User-visible outcome:** Visitors can navigate a polished St Martin School website on desktop/mobile, read structured information across key pages, browse/filter sample news and events, and submit the contact form with clear feedback on success or failure.
