import type { CaseImage } from "@/lib/packd-images";

// Served from /public/media (optimized WebP). Swap for Lovable asset pointers once uploaded in Lovable.
const img = (file: string, alt: string, caption: string, section: string, ratio: string): CaseImage => ({ src: `/media/${file}`, alt, caption, section, ratio });

export const HONEYHIVE = {
  currentShelter: img("honeyhive-current-shelter.webp", "A crowded San Diego women's shelter with rows of bunk beds and lockers", "Inside a San Diego women's shelter today", "Current situation", "858 / 607"),
  competitiveBoard: img("honeyhive-competitive-board.webp", "Competitive analysis board comparing shelter sleeping spaces in San Diego, San Francisco, Canada and Japan's sleeping pods", "Shelters in San Diego compared with SF, Canada and Japan", "Competitive analysis", "1162 / 811"),
  researchBoard: img("honeyhive-research-board.webp", "Research board of sticky notes on San Diego shelters: services, pain points, problem statements and resources", "Research notes on San Diego shelters, pain points and resources", "Competitive analysis", "1472 / 806"),
  lofiSketch: img("honeyhive-lofi-sketch.webp", "Hand-drawn sketch of the pod floor plan, a pod with storage and outlets, and accessible ground-floor rooms", "Hand-drawn pod and floor plan sketch", "Low-fidelity sketch", "630 / 756"),
  informationArchitecture: img("honeyhive-information-architecture.webp", "Information architecture: entry, personal control, rest, storage, safety, and resource and support access", "From entry to resource access", "Information architecture", "1252 / 652"),
  moodboard: img("honeyhive-moodboard.webp", "Moodboard of capsule hotels and sleeping pods, with notes on trauma-informed design and accessibility", "Capsule and pod references with design notes", "Moodboard", "825 / 821"),
  modelPods: img("honeyhive-model-pods.webp", "3D model of stacked hexagonal sleeping pods above accessible ground-floor rooms", "Stacked hive pods over accessible ground-floor rooms", "Final 3D model", "1092 / 620"),
  modelAccessibleRoom: img("honeyhive-model-accessible-room.webp", "3D model of an accessible ground-floor room with a bed, storage and wheelchair space", "Accessible ground-floor room", "Final 3D model", "470 / 468"),
  modelPodInterior: img("honeyhive-model-pod-interior.webp", "3D model of a pod interior with a bed, shelves, hooks, outlets and under-bed storage", "Inside a hive pod", "Final 3D model", "682 / 628"),
};
