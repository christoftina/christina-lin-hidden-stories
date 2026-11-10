import preferences from "@/assets/instacart-preferences.jpg.asset.json";
import budget from "@/assets/instacart-budget.jpg.asset.json";
import type { CaseImage } from "@/lib/packd-images";

export const INSTACART_IMAGES: CaseImage[] = [
  { src: preferences.url, alt: "Before and after Instacart dietary preferences designs, from a selection bubble to a compact dietary and cuisine filter", caption: "Dietary preferences and cuisine filters", section: "Key changes", ratio: "1600 / 736" },
  { src: budget.url, alt: "Before and after Instacart meal selection screens with the budget widget moved from the top to a compact bottom placement", caption: "Budget widget visibility and thumb reachability", section: "Key changes", ratio: "1552 / 672" },
];