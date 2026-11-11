// Images live in /public/media/packd (optimized WebP).
const mockups = { url: "/media/packd/packd-mockups.webp" };
const competitive = { url: "/media/packd/packd-competitive-details.webp" };
const survey = { url: "/media/packd/packd-survey-details.webp" };
const flowHome = { url: "/media/packd/packd-flow-home-discover.webp" };
const flowTrip = { url: "/media/packd/packd-flow-trip-messaging.webp" };
const lofiHome = { url: "/media/packd/packd-lofi-home.webp" };
const lofiFinances = { url: "/media/packd/packd-lofi-finances.webp" };
const branding = { url: "/media/packd/packd-branding.webp" };
const homeMessaging = { url: "/media/packd/packd-home-messaging.webp" };
const tripPlanning = { url: "/media/packd/packd-trip-planning.webp" };
const financeDiscover = { url: "/media/packd/packd-finance-discover.webp" };

/** `notes`: Christina's own write-up of her part, shown in a panel under the image. */
export type CaseImage = { src: string; alt: string; caption: string; section: string; ratio?: string; notes?: string[] };

export const PACKD_DEMO = {
  src: "/media/packd-demo.mp4",
  poster: "/media/packd-demo-poster.webp",
  caption: "Prototype walkthrough of the PackD home screen",
  width: 418,
  height: 872,
  radius: "20% / 9.7%",
};

export const PACKD_IMAGES: CaseImage[] = [
  { src: mockups.url, alt: "PackD activity, group messaging and home screens shown on three phones", caption: "Activity, messaging and home screens", section: "Overview", ratio: "1038 / 362" },
  { src: competitive.url, alt: "PackD competitive analysis comparing Notion AI, TripIt, Google Travel and Roadtrippers", caption: "Competitive analysis", section: "Research" },
  { src: survey.url, alt: "User testing survey results with participant quotes and expected travel planning features", caption: "User testing survey results", section: "Research" },
  { src: flowHome.url, alt: "User flow maps for PackD home and discover pages", caption: "Home and discover user flows", section: "User flows" },
  { src: flowTrip.url, alt: "Additional PackD user flow maps for trip planning and messaging", caption: "User flow maps — continued", section: "User flows" },
  { src: lofiHome.url, alt: "Low-fidelity PackD home page and continuing trip itinerary wireframes", caption: "Home and trip itinerary pages", section: "Low-fidelity design",
    notes: ["Above is my ideas for the low fidelity mockups of my screens was that I wanted to have the homepage include easy to see features that can easily impact a user's day - such as what the weather would be like in their desired city. As well as including an easy method to remember what exact dates were their planned trip (as someone who tends to forget what day of the week it is), this reduces the need for the user to swipe out of PackD and check their calendar on when they are finishing the trip."] },
  { src: lofiFinances.url, alt: "Low-fidelity PackD finance and discover page wireframes", caption: "Finance and discover pages", section: "Low-fidelity design" },
  { src: branding.url, alt: "PackD brand palette, fonts and text contrast assessment", caption: "Branding", section: "Visual identity" },
  { src: homeMessaging.url, alt: "High-fidelity PackD home and messaging pages with smart search features", caption: "Home, messaging and smart search", section: "High-fidelity & prototype",
    notes: [
      "Above were the fleshed out screens/features that I designed:",
      "The home screen offered a carousel of all the current trips that are being planned with a search feature to take the user anywhere they want on the app + with destination suggestions. The smart AI feature allows users to ask the PackD AI anything they want, such as restaurant recommendations, best flights, weather in different cities, etc.",
      "The messaging screen allows for favorited chats to be pinned to the very top of the screen - with blue dots signaling that there is an unread message whereas a red dot indicates an urgent unread message.",
    ] },
  { src: tripPlanning.url, alt: "High-fidelity PackD trip planning screens with itinerary and calendar views", caption: "Trip planning screens", section: "High-fidelity & prototype" },
  { src: financeDiscover.url, alt: "High-fidelity PackD finance and discover screens", caption: "Finance and discover screens", section: "High-fidelity & prototype" },
];