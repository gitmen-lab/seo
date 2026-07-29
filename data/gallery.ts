export interface GalleryItem {
  id: string;
  title: string;
  serviceSlug: string;
  citySlug: string;
  image: string;
  alt: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "keller-kitchen-1",
    title: "White Shaker Kitchen Transformation",
    serviceSlug: "kitchen-remodeling",
    citySlug: "keller-tx",
    image: "/images/gallery/kitchen-1.svg",
    alt: "Remodeled kitchen with white shaker cabinets and quartz waterfall island in Keller, TX",
    description:
      "Full gut renovation with relocated island, quartz counters, and custom lighting in Keller's Hidden Lakes.",
  },
  {
    id: "fort-worth-bath-1",
    title: "Spa-Style Walk-In Shower",
    serviceSlug: "bathroom-remodeling",
    citySlug: "fort-worth-tx",
    image: "/images/gallery/bathroom-1.svg",
    alt: "Walk-in shower with frameless glass and large-format tile in Fort Worth, TX",
    description:
      "Tub-to-shower conversion with frameless glass, niche shelving, and large-format porcelain tile.",
  },
  {
    id: "denton-paint-1",
    title: "Historic Bungalow Repaint",
    serviceSlug: "interior-exterior-painting",
    citySlug: "denton-tx",
    image: "/images/gallery/painting-1.svg",
    alt: "Freshly painted historic bungalow exterior near the Denton square",
    description:
      "Careful prep and a heritage color palette brought this 1940s Denton bungalow back to life.",
  },
  {
    id: "flower-mound-floor-1",
    title: "Whole-Home LVP Installation",
    serviceSlug: "floor-installation",
    citySlug: "flower-mound-tx",
    image: "/images/gallery/flooring-1.svg",
    alt: "Wide-plank luxury vinyl flooring installed throughout an open-concept home in Flower Mound",
    description:
      "2,100 sq ft of waterproof wide-plank LVP with seamless transitions throughout the first floor.",
  },
  {
    id: "southlake-kitchen-1",
    title: "Luxury Kitchen with 10-Foot Island",
    serviceSlug: "kitchen-remodeling",
    citySlug: "southlake-tx",
    image: "/images/gallery/kitchen-2.svg",
    alt: "Luxury kitchen remodel with oversized island and custom cabinetry in Southlake, TX",
    description:
      "Custom cabinetry, a 10-foot quartzite island, and designer lighting for a Timarron estate home.",
  },
  {
    id: "watauga-drywall-1",
    title: "Invisible Ceiling Repair",
    serviceSlug: "drywall-repair",
    citySlug: "watauga-tx",
    image: "/images/gallery/drywall-1.svg",
    alt: "Repaired and retextured ceiling after water damage in Watauga, TX",
    description:
      "Water-damaged ceiling replaced and knockdown texture matched so precisely the repair disappears.",
  },
  {
    id: "arlington-demo-1",
    title: "Open-Concept Wall Removal",
    serviceSlug: "demolition",
    citySlug: "arlington-tx",
    image: "/images/gallery/demolition-1.svg",
    alt: "Open concept living space after load-bearing wall removal in Arlington, TX",
    description:
      "Load-bearing wall removed with an engineered beam, opening the kitchen to the living room.",
  },
  {
    id: "grapevine-bath-1",
    title: "Master Bath Retreat",
    serviceSlug: "bathroom-remodeling",
    citySlug: "grapevine-tx",
    image: "/images/gallery/bathroom-2.svg",
    alt: "Master bathroom with freestanding tub and heated floors in Grapevine, TX",
    description:
      "Builder-grade bath transformed with a freestanding tub, heated floors, and marble-look porcelain.",
  },
  {
    id: "colleyville-paint-1",
    title: "Cabinet Painting Refresh",
    serviceSlug: "interior-exterior-painting",
    citySlug: "colleyville-tx",
    image: "/images/gallery/painting-2.svg",
    alt: "Professionally painted kitchen cabinets in a Colleyville home",
    description:
      "Factory-smooth cabinet painting and full interior repaint that helped this home sell over asking.",
  },
];

export const getGalleryByService = (serviceSlug: string) =>
  galleryItems.filter((g) => g.serviceSlug === serviceSlug);

export const getGalleryByCity = (citySlug: string) =>
  galleryItems.filter((g) => g.citySlug === citySlug);
