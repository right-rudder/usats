// transform this to get the info from data/programs/*.js and populate the cards
import { COMPANY_NAME } from "../../consts";
import { 
  CESSNA_172_USATS_RAMP_WEBP as cessnaRamp,
  ALTO_NG_PANEL as altoNGPanel,
  DIRECTFLY_ALTONG_BLUE_USATS_RAMP_WEBP as altoNgRamp,
  ALTO_8A as altoNGDeparting,
  DIRECTFLY_ALTONG_PANEL_USATS as altongPanelUSATS,
  USATS_BANNER_APPLICATION as usatsBannerApplication,

} from "../../constsImages";

const programs = {
  upperHeading: "Explore",
  heading: "Our Airplane Training Programs",
  description: `Whether you're starting your aviation journey, advancing your skills, or pursuing a career in aviation, ${COMPANY_NAME} offers tailored programs for all experience levels.`,
  cards: [
    {
      title: "Private Pilot License",
      badges: ["Part 141", "PPL"],
      imagePath: cessnaRamp.imagePath,
      imageAlt: cessnaRamp.imageAlt,
      description:
        "Start your aviation journey by learning to fly for recreation or as the first step toward a flying career.",
      link: "/airplane-training/private-pilot-license",
    },
    {
      title: "Instrument Rating",
      badges: ["Part 141", "IR"],
      imagePath: altoNGPanel.imagePath,
      imageAlt: altoNGPanel.imageAlt,
      description:
        "Enhance your skills by learning to fly solely using instruments, preparing you for complex weather conditions.",
      link: "/airplane-training/instrument-rating",
    },
    {
      title: "Commercial Pilot License",
      badges: ["Part 141", "CPL"],
      imagePath: altoNGDeparting.imagePath,
      imageAlt: altoNGDeparting.imageAlt,
      description:
        "Advance your career with professional training that prepares you to fly commercially and meet industry standards.",
      link: "/airplane-training/commercial-pilot-license",
    },
    {
      title: "Certified Flight Instructor",
      badges: ["Part 61", "CFI"],
      imagePath: altoNgRamp.imagePath,
      imageAlt: altoNgRamp.imageAlt,
      description:
        "Become a flight instructor and start teaching others to fly while gaining valuable experience and flight hours.",
      link: "/airplane-training/certified-flight-instructor",
    },
    {
      title: "Certified Flight Instructor Instrument",
      badges: ["Part 61", "CFII"],
      imagePath: altongPanelUSATS.imagePath,
      imageAlt: altongPanelUSATS.imageAlt,
      description:
        "Specialize in instrument flight instruction and train students to navigate and fly safely in low-visibility conditions.",
      link: "/airplane-training/certified-flight-instructor-instrument",
    },
    {
      title: "Professional Pilot Program",
      badges: ["Part 141/61", "PPL", "IR", "CPL", "CFI", "CFII"],
      imagePath: usatsBannerApplication.imagePath,
      imageAlt: usatsBannerApplication.imageAlt,
      description:
        "Take the first step toward becoming a pilot with our comprehensive Professional Pilot Course.",
      link: "/airplane-training/professional-pilot-program",
    },
  ],
};

export default programs;
