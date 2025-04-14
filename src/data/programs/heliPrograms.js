// transform this to get the info from data/programs/*.js and populate the cards
import { COMPANY_NAME } from "../../consts";

const programs = {
    upperHeading: "Discover",
    heading: "Our Helicopter Training Programs",
    description:
      `Whether you're starting your aviation journey, advancing your skills, or pursuing a career in aviation, ${COMPANY_NAME} offers tailored programs for all experience levels.`,
      cards: [
        {
          title: "Military Training",
          imagePath: "/src/assets/militaryTraingingBH6.png",
          imageAlt: "",
          description:
            "Prepare yourself for anything with our military training programs.",
          link: "/military-training",
        },
        {
          title: "Professional Pilot Program",
          badgets: ['PPP'],
          imagePath: "/src/assets/flyingWhiteHeli8.png",
          imageAlt: "",
          description:
            "Take the first step toward a helicopter career with this all-in-one program for students with no prior experience.",
          link: "/helicopter-training/professional-pilot-program",
        },
        {
          title: "Private Pilot License",
          badgets: ['PPL'],
          imagePath: "/src/assets/flyingBlackHeli5.png",
          imageAlt: "",
          description:
            "Begin your helicopter flying journey by earning your private pilot license and learning essential flight skills.",
          link: "/helicopter-training/private-pilot-license",
        },
        {
          title: "Instrument Rating",
          badgets: ['IR'],
          imagePath: "/src/assets/flyingWhiteHeli4.png",
          imageAlt: "",
          description:
            "Learn to safely navigate helicopters in low-visibility conditions using only instruments.",
          link: "/helicopter-training/instrument-rating",
        },
        {
          title: "Commercial Pilot License",
          badgets: ['CPL'],
          imagePath: "/src/assets/flyingWhiteHeli9.png",
          imageAlt: "",
          description:
            "Advance your helicopter career by obtaining the certification required to fly professionally.",
          link: "/helicopter-training/commercial-pilot-license",
        },
        {
          title: "Certified Flight Instructor",
          badgets: ['CFI'],
          imagePath: "/src/assets/flyingWhiteHeli7.png",
          imageAlt: "",
          description:
            "Become a helicopter flight instructor to build flight time while training new pilots.",
          link: "/helicopter-training/certified-flight-instructor",
        },
        {
          title: "Certified Flight Instructor Instrument",
          badgets: ['CFII'],
          imagePath: "/src/assets/maintanceHeli4.png",
          imageAlt: "",
          description:
            "Expand your teaching credentials by training pilots in instrument flight operations.",
          link: "/helicopter-training/certified-flight-instructor-instrument",
        },
        {
          title: "Airline Transport Pilot License",
          badgets: ['ATP-L'],
          imagePath: "/src/assets/militaryTraingingBH8.png",
          imageAlt: "",
          description:
            "Earn the highest helicopter certification available and qualify to pilot multi-crew IFR operations.",
          link: "/helicopter-training/airline-transport-pilot-license",
        },
      ],
  };
  
  export default programs;
  