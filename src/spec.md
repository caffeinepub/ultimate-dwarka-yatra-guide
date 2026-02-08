# Specification

## Summary
**Goal:** Update the offline Yatra Plan itinerary content to add a Day 2 Beyt Dwarka Temple step, reorder Day 3 to the requested flow, and enhance Day 3 Shopping with a highlighted recommendation card that includes a placeholder image.

**Planned changes:**
- Update Day 2 itinerary data (in both 2-day and 3-day plans) to insert a new step immediately after “Cross Sudarshan Setu / सुदर्शन सेतु” with the exact place text “📍 बेट द्वारका मुख्य मंदिर दर्शन (Beyt Dwarka Temple Darshan)” and the exact closure note “ध्यान दें: मंदिर दोपहर 1:00 बजे से 3:00 बजे तक बंद रहता है।” including “(Timings: 9 AM - 1 PM & 3 PM - 6 PM)” in the same step note.
- Reorder Day 3 itinerary (3-day plan) to the exact sequence and text: Morning “📍 द्वारका मार्केट में खरीदारी (Dwarka Market Shopping)” → Afternoon “📍 पोरबंदर के लिए प्रस्थान (Travel to Porbandar - Kirti Mandir & Sudama Mandir)” → Evening “वापसी या विश्राम (Return/Relax)”, removing any conflicting older Day 3 items.
- Within the Day 3 Shopping timeline item content, render a visually distinct highlighted recommendation card with the exact four text fields:
  - Title: “📸 फोटो और 3D स्टूडियो (Recommended)”
  - Shop Name: “संस्कृति नॉवेल्टी (पुरुषोत्तम भाई मच्छर)”
  - Location: “द्वारकाधीश मंदिर से वॉकिंग डिस्टेंस (Walking Distance from Temple).”
  - Details: “द्वारकाधीश के सभी प्रकार के लाइटिंग फोटो और 3D फोटो के लिए सबसे अच्छी और किफायती (वाजिब दाम) जगह।”
- Add a placeholder image area inside that recommendation card using a generic placeholder URL sourced from local data/config so it can be swapped later without changing the layout.

**User-visible outcome:** In the Yatra Plan tab, Day 2 includes the new Beyt Dwarka Temple Darshan step with the specified timing note, Day 3 displays in the requested Shopping → Porbandar → Return/Relax order, and the Day 3 Shopping section shows a highlighted Sanskruti Novelty recommendation card with an image placeholder and the exact provided text.
