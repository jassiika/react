Tailwind Hero Landing Page

This is my Task 22 submission for the MERN Stack course on TuteDude. The idea was to build the hero section of a workspace product called "Project" using only Tailwind CSS, mainly to get comfortable with the positioning utilities (relative, absolute, sticky, fixed).

What's in it
Sticky navbar with the logo on the left, links on the right and a "Get AI free" button. It stays on top while scrolling (sticky top-0 z-50).
Hero section with a light orange to white gradient, a centered headline, a short paragraph and two buttons: "Get AI free →" and "Request a demo".
Dashboard preview placed in the center of a relative parent using absolute.
Three floating cards around the dashboard: Tasks, Project Status and Team Activity. They use absolute, z-index and shadow.
Chat button fixed at the bottom-right corner (fixed bottom-6 right-6 z-50).
How to run it

No setup needed. Tailwind is loaded through the CDN, so just open index.html in your browser. You need internet for the CDN to load.

Things I'd change
The dashboard is an SVG placeholder right now. I'll replace it with a real image by swapping the <svg> for an <img> tag.
The team avatars are just colored circles. Real user photos would look better.
The floating cards use percentage offsets, so on very small screens they can overlap a bit. I'd tweak the positions for mobile.
Tech used
HTML
Tailwind CSS (CDN)
