import type { CaseImage } from "@/lib/packd-images";

// Served from /public/media (optimized WebP). Swap for Lovable asset pointers once uploaded in Lovable.
export const INSTACART_IMAGES: CaseImage[] = [
  { src: "/media/instacart-user-flows.webp", alt: "Two user flows: shopping with a budget and opening the meal planner, from input to checkout", caption: "User flows for shopping on a budget and the meal planner", section: "User flows", ratio: "1158 / 880" },
  { src: "/media/instacart-lofi-sketches.webp", alt: "Hand-drawn low-fidelity sketches of the budget entry, preferences, meals and checkout screens", caption: "Hand-drawn low-fidelity sketches", section: "Low-fidelity sketches", ratio: "1086 / 775" },
  { src: "/media/instacart-hifi-screens.webp", alt: "High-fidelity Instacart screens: home, budget entry, meal selection, filters, cart and payment", caption: "Home, budget, meals, filters, cart and payment", section: "High-fidelity screens", ratio: "836 / 852" },
  { src: "/media/instacart-hifi-orders-recipes.webp", alt: "High-fidelity order history, delivered order with recipe access, and recipe browsing screens", caption: "Orders, delivered order and recipes", section: "High-fidelity screens", ratio: "912 / 615" },
  { src: "/media/instacart-key-changes-preferences.webp", alt: "Before and after dietary preference designs: from a selection bubble, to a grid, to a compact dietary and cuisine filter", caption: "Dietary preferences and cuisine filters", section: "Key changes", ratio: "2400 / 1196" },
  { src: "/media/instacart-key-changes-budget.webp", alt: "Before and after meal selection screens with the budget widget moved from the top to a slim bottom placement", caption: "Budget widget visibility and thumb reachability", section: "Key changes", ratio: "1587 / 1102" },
];

export const INSTACART_DEMO = {
  src: "/media/instacart-demo.mp4",
  poster: "/media/instacart-demo-poster.webp",
  caption: "Prototype walkthrough: setting a budget, choosing meals and checking out",
  width: 454,
  height: 940,
  radius: "16.5% / 8%",
};
