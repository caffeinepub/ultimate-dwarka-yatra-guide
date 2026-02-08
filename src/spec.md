# Specification

## Summary
**Goal:** Remove the Sanskruti Novelty (संस्कृति नॉवेल्टी (पुरुषोत्तम भाई मच्छर)) recommendation card image from Day 3 and ensure the card renders text-only with no image area.

**Planned changes:**
- In `frontend/src/data/dwarkaGuide.ts`, delete the `image` property from the Day 3 recommendation-card object for "संस्कृति नॉवेल्टी (पुरुषोत्तम भाई मच्छर)".
- Update the Day 3 recommendation card rendering so that when no `image` is present, it does not render an `<img>` or any image container/space for that card.

**User-visible outcome:** In the Yatra Plan tab on Day 3, the Sanskruti Novelty recommendation card displays only title, subtitle, and description (and any existing badge), with no image or blank image space shown.
