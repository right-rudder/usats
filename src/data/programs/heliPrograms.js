// transform this to get the info from data/programs/*.js and populate the cards
import { COMPANY_NAME } from "../../consts";

const programs = {
  upperHeading: "Discover",
  heading: "Our Helicopter Training Programs",
  description: `Whether you're starting your aviation journey, advancing your skills, or pursuing a career in aviation, ${COMPANY_NAME} offers tailored programs for all experience levels.`,
  cards: [
    {
      title: "Private Pilot License",
      badges: ["PPL"],
      imagePath: "/src/assets/flyingheli-USATS-titusville-flight-lessons-near-orlando.png",
      imageAlt: "",
      description:
        "Begin your helicopter flying journey by earning your private pilot license and learning essential flight skills.",
      link: "/helicopter-training/private-pilot-license",
    },
    {
      title: "Instrument Rating",
      badges: ["IR"],
      imagePath: "/src/assets/flyingwhiteheli4-USATS-titusville-commercial-pilot-program.png",
      imageAlt: "",
      description:
        "Learn to safely navigate helicopters in low-visibility conditions using only instruments.",
      link: "/helicopter-training/instrument-rating",
    },
    {
      title: "Commercial Pilot License",
      badges: ["CPL"],
      imagePath: "/src/assets/flyingwhiteheli9-USATS-titusville-instrument-rating-training.png",
      imageAlt: "",
      description:
        "Advance your helicopter career by obtaining the certification required to fly professionally.",
      link: "/helicopter-training/commercial-pilot-license",
    },
    {
      title: "Certified Flight Instructor",
      badges: ["CFI"],
      imagePath: "/src/assets/white_blue_robinson_r44_usats_ramp-USATS-titusville-commercial-pilot-program.webp",
      imageAlt: "",
      description:
        "Become a helicopter flight instructor to build flight time while training new pilots.",
      link: "/helicopter-training/certified-flight-instructor",
    },
    {
      title: "Certified Flight Instructor Instrument",
      badges: ["CFII"],
      imagePath: "/src/assets/directfly_altong_panel_usats-USATS-titusville-pilot-training-space-coast.jpg",
      imageAlt: "",
      description:
        "Expand your teaching credentials by training pilots in instrument flight operations.",
      link: "/helicopter-training/certified-flight-instructor-instrument",
    },
    {
      title: "Airline Transport Pilot License",
      badges: ["ATP-L"],
      imagePath: "/src/assets/maintenanceheli-USATS-titusville-aviation-academy-florida.png",
      imageAlt: "",
      description:
        "Earn the highest helicopter certification available and qualify to pilot multi-crew IFR operations.",
      link: "/helicopter-training/airline-transport-pilot-license",
    },
    {
      title: "Professional Pilot Program",
      badges: ["PPL", "IR", "CPL", "CFI", "CFII"],
      imagePath: "/src/assets/flyingwhiteheli8-USATS-titusville-private-pilot-license-fl.png",
      imageAlt: "",
      description:
        "Take the first step toward a helicopter career with this all-in-one program for students with no prior experience.",
      link: "/helicopter-training/professional-pilot-program",
    },
    // {
    //   title: "Military Training",
    //   badges: ["MILITARY"],
    //   imagePath: "/src/assets/militarytraingingbh6-USATS-florida-instrument-rating-training.png",
    //   imageAlt: "",
    //   description:
    //     "Prepare yourself for anything with our military training programs.",
    //   link: "/military-training",
    // },
  ],
};

export default programs;
