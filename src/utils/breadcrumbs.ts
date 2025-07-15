export interface BreadcrumbItem {
  name: string;
  url: string;
  isActive?: boolean;
}

export interface BreadcrumbConfig {
  [key: string]: {
    name: string;
    parent?: string;
    children?: { [key: string]: string };
  };
}

// Site navigation structure for breadcrumb generation
const SITE_STRUCTURE: BreadcrumbConfig = {
  // Main sections
  "/about-us": {
    name: "About Us",
  },
  "/about-us/our-team": {
    name: "Our Team",
    parent: "/about-us",
  },
  "/about-us/our-fleet": {
    name: "Our Fleet",
    parent: "/about-us",
  },
  "/about-us/careers": {
    name: "Careers",
    parent: "/about-us",
  },
  "/about-us/faq": {
    name: "FAQ",
    parent: "/about-us",
  },
  "/about-us/financing": {
    name: "Financing",
    parent: "/about-us",
  },
  "/about-us/local-attractions": {
    name: "Local Attractions",
    parent: "/about-us",
  },

  // Training sections
  "/flight-training": {
    name: "Flight Training",
  },
  "/airplane-training": {
    name: "Airplane Training",
    parent: "/flight-training",
  },
  "/helicopter-training": {
    name: "Helicopter Training",
    parent: "/flight-training",
  },
  "/military-training": {
    name: "Military Training",
    parent: "/flight-training",
  },
  "/international-student-training": {
    name: "International Students",
    parent: "/flight-training",
  },

  // Airplane training programs
  "/airplane-training/private-pilot-license": {
    name: "Private Pilot License",
    parent: "/airplane-training",
  },
  "/airplane-training/instrument-rating": {
    name: "Instrument Rating",
    parent: "/airplane-training",
  },
  "/airplane-training/commercial-pilot-license": {
    name: "Commercial Pilot License",
    parent: "/airplane-training",
  },
  "/airplane-training/certified-flight-instructor": {
    name: "Certified Flight Instructor",
    parent: "/airplane-training",
  },
  "/airplane-training/certified-flight-instructor-instrument": {
    name: "CFI Instrument",
    parent: "/airplane-training",
  },
  "/airplane-training/professional-pilot-program": {
    name: "Professional Pilot Program",
    parent: "/airplane-training",
  },

  // Helicopter training programs
  "/helicopter-training/private-pilot-license": {
    name: "Private Pilot License",
    parent: "/helicopter-training",
  },
  "/helicopter-training/instrument-rating": {
    name: "Instrument Rating",
    parent: "/helicopter-training",
  },
  "/helicopter-training/commercial-pilot-license": {
    name: "Commercial Pilot License",
    parent: "/helicopter-training",
  },
  "/helicopter-training/certified-flight-instructor": {
    name: "Certified Flight Instructor",
    parent: "/helicopter-training",
  },
  "/helicopter-training/certified-flight-instructor-instrument": {
    name: "CFI Instrument",
    parent: "/helicopter-training",
  },
  "/helicopter-training/airline-transport-pilot-license": {
    name: "Airline Transport Pilot",
    parent: "/helicopter-training",
  },
  "/helicopter-training/professional-pilot-program": {
    name: "Professional Pilot Program",
    parent: "/helicopter-training",
  },

  // Services
  "/services": {
    name: "Services",
  },
  "/services/maintenance": {
    name: "Aircraft Maintenance",
    parent: "/services",
  },
  "/services/alto-planes": {
    name: "Alto Aircraft",
    parent: "/services",
  },
  "/services/tsa-fingerprinting": {
    name: "TSA Fingerprinting",
    parent: "/services",
  },
  "/services/cats-testing-center": {
    name: "CATS Testing Center",
    parent: "/services",
  },
  "/services/taa-time-building": {
    name: "TAA Time Building",
    parent: "/services",
  },

  // Blog
  "/blog": {
    name: "Blog",
  },

  // Location pages
  "/pilot-training": {
    name: "Local Training",
  },

  // Other pages
  "/contact-us": {
    name: "Contact Us",
  },
  "/discovery-flight": {
    name: "Discovery Flight",
  },
  "/enroll-now": {
    name: "Enroll Now",
  },
  "/why-become-a-pilot": {
    name: "Why Become a Pilot",
  },
  "/privacy-policy": {
    name: "Privacy Policy",
  },
  "/terms-of-service": {
    name: "Terms of Service",
  },
};

// Location mappings for pilot training pages
const LOCATION_MAPPINGS: { [key: string]: string } = {
  "altamonte-springs-fl": "Altamonte Springs, FL",
  "apopka-fl": "Apopka, FL",
  "canaveral-groves-fl": "Canaveral Groves, FL",
  "cape-canaveral-fl": "Cape Canaveral, FL",
  "christmas-fl": "Christmas, FL",
  "chuluota-fl": "Chuluota, FL",
  "clermont-fl": "Clermont, FL",
  "cocoa-fl": "Cocoa, FL",
  "deltona-fl": "Deltona, FL",
  "edgewater-fl": "Edgewater, FL",
  "geneva-fl": "Geneva, FL",
  "maitland-fl": "Maitland, FL",
  "merritt-island-fl": "Merritt Island, FL",
  "mims-fl": "Mims, FL",
  "new-smyrna-beach-fl": "New Smyrna Beach, FL",
  "oak-hill-fl": "Oak Hill, FL",
  "ocoee-fl": "Ocoee, FL",
  "orlando-fl": "Orlando, FL",
  "oviedo-fl": "Oviedo, FL",
  "port-st.-john-fl": "Port St. John, FL",
  "rockledge-fl": "Rockledge, FL",
  "sanford-fl": "Sanford, FL",
  "sharpes-fl": "Sharpes, FL",
  "titusville-fl": "Titusville, FL",
  "windermere-fl": "Windermere, FL",
  "winter-garden-fl": "Winter Garden, FL",
  "winter-park-fl": "Winter Park, FL",
};

/**
 * Generates breadcrumb items based on the current URL path
 */
export function generateBreadcrumbs(
  pathname: string,
  customTitle?: string,
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [];

  // Handle root path
  if (pathname === "/" || pathname === "") {
    return [];
  }

  // Clean up pathname
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const pathSegments = cleanPath.split("/").filter((segment) => segment !== "");

  // Handle special cases
  if (pathname.includes("/pilot-training/")) {
    const locationSlug = pathSegments[pathSegments.length - 1];
    const locationName = LOCATION_MAPPINGS[locationSlug];

    if (locationName) {
      breadcrumbs.push({ name: "Local Training", url: "/pilot-training" });
      breadcrumbs.push({ name: locationName, url: pathname, isActive: true });
      return breadcrumbs;
    }
  }

  // Handle blog posts
  if (pathname.includes("/blog/") && pathSegments.length > 1) {
    breadcrumbs.push({ name: "Blog", url: "/blog" });
    if (customTitle) {
      breadcrumbs.push({ name: customTitle, url: pathname, isActive: true });
    } else {
      // Generate title from slug
      const slug = pathSegments[pathSegments.length - 1];
      const title = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      breadcrumbs.push({ name: title, url: pathname, isActive: true });
    }
    return breadcrumbs;
  }

  // Build breadcrumbs from site structure
  let currentPath = "";

  for (let i = 0; i < pathSegments.length; i++) {
    currentPath += "/" + pathSegments[i];
    const isLast = i === pathSegments.length - 1;

    const structureItem = SITE_STRUCTURE[currentPath];

    if (structureItem) {
      // Add parent breadcrumbs if they exist and aren't already included
      if (
        structureItem.parent &&
        !breadcrumbs.find((b) => b.url === structureItem.parent)
      ) {
        const parentBreadcrumbs = generateBreadcrumbs(structureItem.parent!);
        breadcrumbs.push(...parentBreadcrumbs);
      }

      breadcrumbs.push({
        name: customTitle && isLast ? customTitle : structureItem.name,
        url: currentPath,
        isActive: isLast,
      });
    } else if (isLast) {
      // For unknown paths, create a breadcrumb from the slug
      const fallbackTitle =
        customTitle ||
        pathSegments[i]
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

      breadcrumbs.push({
        name: fallbackTitle,
        url: currentPath,
        isActive: true,
      });
    }
  }

  return breadcrumbs;
}

/**
 * Formats a slug into a readable title
 */
export function formatSlugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Gets the page title for breadcrumbs from various sources
 */
export function getPageTitle(
  pathname: string,
  frontmatterTitle?: string,
  seoTitle?: string,
  fallbackTitle?: string,
): string {
  // Priority: frontmatter title > SEO title > fallback > generated from path
  if (frontmatterTitle) return frontmatterTitle;
  if (seoTitle) return seoTitle;
  if (fallbackTitle) return fallbackTitle;

  // Generate from path
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  return formatSlugToTitle(lastSegment || "Home");
}
