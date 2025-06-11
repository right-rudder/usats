import { COMPANY_NAME } from "../../consts";
import { irFw as programPrices } from "../../flightTrainingProgramsPrices";

import { ALTONG_FLYING_OVER_COAST as imgHeader,
    ALTONG_MAINTENANCE as imgMaintenance,
    ALTONG_PANEL as imgPanel,
 } from "../../constsImages";

const taaTimeBuilding = {
  data: {
    pageTitle: "TAA Time Building in a 2024 Alto NG",
    pageDescription:
      "Build FAA-compliant TAA flight hours with USATS in a modern 2024 Alto NG aircraft. Packages start at $50/hour, sharable with another pilot!",
    pageKeywords:
      "TAA time building, Alto NG, flight training, technically advanced aircraft, USATS, commercial pilot requirements, FAA, PIC time, time building packages",

    // Top Header
    header: {
      badges: ["FAA Compliant", "Modern TAA Aircraft"],
      imagePath: imgHeader.imagePath,
      imageAlt: imgHeader.imageAlt,
      headerH1: "TAA Time Building in a 2024 Alto NG",
      paragraph:
        "Start logging your PIC time in a Technically Advanced Aircraft starting at just $50/hour. Packages are FAA-compliant and shareable!",
      buttons: [
        {
          name: "Learn More",
          link: "#programs",
          primary: true,
        },
        {
          name: "View Packages",
          link: "#pricing",
          primary: false,
        },
      ],
    },

    // Program Details
    details: {
      upperHeading: "Time Building Program",
      heading: "FAA-Compliant TAA Time Building",
      subHeading:
        "Log hours toward your Commercial Pilot Certificate in a state-of-the-art aircraft.",

      title: "About the Aircraft",
      description:
        "Our 2024 Alto NG is a fuel-efficient, fully equipped Technically Advanced Aircraft (TAA) featuring a moving map, IFR GPS, and autopilot – perfect for meeting FAA requirements for commercial flight time.",

      keyPoints: [
        "2024 Alto NG with full glass cockpit",
        "FAA-compliant TAA setup",
        "Packages starting at $50/hour",
        "Shareable hours between 2 pilots",
        "Ideal for Part 61 Commercial training",
        "Located in sunny Florida with year-round flying",
      ],

      // What's Included
      included: {
        heading: "What's Included",
        items: [
          "Aircraft rental (wet rate)",
          "Modern avionics and autopilot",
          "TAA loggable hours",
          "Pre- and post-flight briefings (optional)",
        ],
      },

      // Additional Costs
      additionalCosts: {
        heading: "Additional Costs",
        items: [
          "Checkout flight with a USATS instructor (if required)",
          "Optional instructor time",
          "Flight gear (if needed)",
          "Logbook (physical or digital)",
          "Insurance surcharge for solo flight (if applicable)",
        ],
      },

      // Benefits
      benefits: {
        heading: "Why Build TAA Time with USATS?",
        items: [
          "Train in a modern, safe, and well-maintained aircraft",
          "Affordable and flexible pricing",
          "Great location with ideal flying weather",
          "Supportive, experienced staff",
          "Easy scheduling and booking",
          "Trusted by hundreds of international and domestic pilots",
        ],
      },

      cta: {
        imagePath: imgMaintenance.imagePath,
        imageAlt: imgMaintenance.imageAlt,
        title: "Ready to Get Started?",
        description:
          "Contact us to schedule your checkout and begin logging your TAA hours toward your commercial license today!",
        button: {
          name: "Book Now",
          link: "/contact-us",
        },
      },

      prices: programPrices.taaTimeBuilding || "",

      // FAQs
      faqs: [
        {
          question: "What qualifies as a TAA?",
          answer:
            "A Technically Advanced Aircraft must have a moving map, IFR GPS navigator, and autopilot system. Our Alto NG meets all of these criteria.",
        },
        {
          question: "Can I share hours with another pilot?",
          answer:
            "Yes! Our time-building packages are shareable between two pilots, cutting your cost per hour in half.",
        },
        {
          question: "Is instruction included?",
          answer:
            "Instruction is optional and available for an additional fee. A checkout flight is required before solo operation.",
        },
        {
          question: "Is there a minimum qualification?",
          answer:
            "You must hold at least a Private Pilot Certificate and complete a checkout flight with one of our instructors.",
        },
        {
          question: "Where are you located?",
          answer:
            `${COMPANY_NAME} is based in sunny Florida, providing ideal flying conditions year-round.`,
        },
      ],
    },
  },
};

export default taaTimeBuilding;
