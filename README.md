# New Chicken Biriyani — Next.js + original Three.js experience

This project preserves the original uploaded `new-chicken-biriyani-real-3d(2).html` as the home-page experience instead of recreating its Three.js scene. The original HTML is included at `public/original-biriyani-experience.html` and loaded directly on `/`, preserving its existing canvas scene, lighting, 4,200 instanced rice grains, textured chicken geometry, steam, ember particles, pointer drag, scroll-driven camera movement, and original typography/layout.

The additional pages (`/story`, `/menu`, `/experience`, `/contact`) remain Next.js/React routes from the project.

## Run locally
1. Extract the ZIP.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

The homepage's original Three.js module imports Three.js 0.180 from jsDelivr, so internet access is required for that module to load. Menu/order and contact interactions remain demos until connected to a real backend/payment/order service.
