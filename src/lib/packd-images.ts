import mockups from "@/assets/packd_mockups.png.asset.json";
import competitive from "@/assets/packd_competitive_details.png.asset.json";
import survey from "@/assets/packd_survey_details.png.asset.json";
import flowHome from "@/assets/packd_flow_home_discover.png.asset.json";
import flowTrip from "@/assets/packd_flow_trip_messaging.png.asset.json";
import lofiHome from "@/assets/packd_lofi_home.png.asset.json";
import lofiFinances from "@/assets/packd_lofi_finances.png.asset.json";
import branding from "@/assets/packd_branding.png.asset.json";
import homeMessaging from "@/assets/packd_home_messaging.png.asset.json";
import tripPlanning from "@/assets/packd_trip_planning.png.asset.json";
import financeDiscover from "@/assets/packd_finance_discover.png.asset.json";

export type CaseImage = { src: string; alt: string; caption: string; section: string; ratio?: string };

export const PACKD_IMAGES: CaseImage[] = [
  { src: mockups.url, alt: "PackD activity, group messaging and home screens shown on three phones", caption: "Activity, messaging and home screens", section: "Overview", ratio: "1038 / 362" },
  { src: competitive.url, alt: "PackD competitive analysis comparing Notion AI, TripIt, Google Travel and Roadtrippers", caption: "Competitive analysis", section: "Research" },
  { src: survey.url, alt: "User testing survey results with participant quotes and expected travel planning features", caption: "User testing survey results", section: "Research" },
  { src: flowHome.url, alt: "User flow maps for PackD home and discover pages", caption: "Home and discover user flows", section: "User flows" },
  { src: flowTrip.url, alt: "Additional PackD user flow maps for trip planning and messaging", caption: "User flow maps — continued", section: "User flows" },
  { src: lofiHome.url, alt: "Low-fidelity PackD home page and continuing trip itinerary wireframes", caption: "Home and trip itinerary pages", section: "Low-fidelity design" },
  { src: lofiFinances.url, alt: "Low-fidelity PackD finance and discover page wireframes", caption: "Finance and discover pages", section: "Low-fidelity design" },
  { src: branding.url, alt: "PackD brand palette, fonts and text contrast assessment", caption: "Branding", section: "Visual identity" },
  { src: homeMessaging.url, alt: "High-fidelity PackD home and messaging pages with smart search features", caption: "Home, messaging and smart search", section: "High-fidelity & prototype" },
  { src: tripPlanning.url, alt: "High-fidelity PackD trip planning screens with itinerary and calendar views", caption: "Trip planning screens", section: "High-fidelity & prototype" },
  { src: financeDiscover.url, alt: "High-fidelity PackD finance and discover screens", caption: "Finance and discover screens", section: "High-fidelity & prototype" },
];