import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import {
  ALTO_NG_PANEL as imgMaintenance,
  PROGRAMMER_FOCUSED_ON_CODE as imgCATS,
  FINGERPRINTING as imgFingerprinting,
  ALTO_NG as imgAltoNG,
  ALTO_5A as imgAirTours,
  ALTONG_MAINTENANCE as imgTaa,
  DARK_BLUE_HELI_MAINTENANCE,
  USATS_BASE_COVER as imgForeignLicense,
  ALTO_2A as imgFlightReview,
  FLYING_WHITE_HELI2 as imgICAO,
} from "../../constsImages";

const servicesIndex = {
  data: {
    // SEO Header Stuff
    pageTitle: "Aviation Services | USATS Titusville FL",
    pageDescription:
      "Complete aviation services at USATS including aircraft maintenance, CATS testing center, TSA fingerprinting, air tours, FAA flight reviews, foreign license conversions, and ICAO services. All your aviation needs under one roof in Titusville, FL.",
    pageKeywords:
      "aviation services Florida, aircraft maintenance Titusville, CATS testing center, FAA test center Florida, TSA fingerprinting aviation, Air Tours Florida, airplane maintenance services, FAA knowledge test location, Space Coast air tours, pilot testing center, aircraft repair station, Alto aircraft sales, aviation fingerprint services, scenic flights Titusville, FAA written test facility, flight review, foreign license conversion, ICAO pilot training, FAA conversion, flight review Titusville",

    // Top Header
    header: {
      stars: true,
      imagePath: DARK_BLUE_HELI_MAINTENANCE.imagePath,
      imageAlt: DARK_BLUE_HELI_MAINTENANCE.imageAlt,
      headerH1: `${COMPANY_NICKNAME} <br> SERVICES`,
      paragraph: ``,
      buttons: [
        {
          name: "Learn more",
          link: "#grid-programs",
          primary: true,
        },
      ],
    },
  },

  upperHeading: "Explore",
  heading: "Our Services",
  description:
    "USATS offers top-tier airplane and helicopter flight training, aircraft maintenance, FAA testing, TSA fingerprinting, and scenic air tours. With expert instructors, modern facilities, and year-round flying weather, we prepare you for success in aviation. Train, test, fly, and maintain—all in one trusted place.",

  cards: [
    {
      title: "TAA Time Building",
      imagePath: imgTaa.imagePath,
      imageAlt: imgTaa.imageAlt,
      description: `Build FAA-compliant TAA flight hours with USATS in a modern 2024 Alto NG aircraft. Packages start at $50/hour, sharable with another pilot!`,
      link: "/services/taa-time-building",
    },
    {
      title: "Maintenance",
      imagePath: imgMaintenance.imagePath,
      imageAlt: imgMaintenance.imageAlt,
      description: `${COMPANY_NICKNAME} strives to meet our customers’ needs through the capabilities of our Certified Repair Station. With our strong attention to detail, we maintain high standards of safety and quality excellence. Our team of highly skilled mechanics are eager to provide both scheduled and unscheduled maintenance to meet your needs.`,
      link: "/services/maintenance",
    },
    {
      title: "CATS Testing Center",
      imagePath: imgCATS.imagePath,
      imageAlt: imgCATS.imageAlt,
      description: `Our center offers a professional environment with modern computer workstations and secure internet access. Our dedicated staff ensures a secure and distraction-free testing experience.`,
      link: "/services/cats-testing-center",
    },
    {
      title: "TSA Fingerprinting",
      imagePath: imgFingerprinting.imagePath,
      imageAlt: imgFingerprinting.imageAlt,
      description: `Onsite fingerprinting for all your TSA needs, including Flight Training Security Program (formerly AFSP)!`,
      link: "/services/tsa-fingerprinting",
    },
    {
      title: "Flight Reviews",
      imagePath: imgFlightReview.imagePath,
      imageAlt: imgFlightReview.imageAlt,
      description: `Stay current and confident with USATS flight reviews. Our FAA-certified instructors tailor each session to your aircraft and experience level, ensuring your skills meet regulatory and safety standards.`,
      link: "/services/flight-reviews",
    },
    {
      title: "Foreign License Conversions",
      imagePath: imgForeignLicense.imagePath,
      imageAlt: imgForeignLicense.imageAlt,
      description: `Convert your foreign or ICAO pilot license into an FAA certificate with USATS. We handle everything—from verification to checkride prep—so you can fly legally and confidently in the United States.`,
      link: "/services/foreign-license-conversions",
    },
    {
      title: "ICAO Services",
      imagePath: imgICAO.imagePath,
      imageAlt: imgICAO.imageAlt,
      description: `Train to international standards with our ICAO-compliant programs. USATS provides structured courses, certification guidance, and practical training for pilots aiming to operate across global aviation systems.`,
      link: "/services/icao-services",
    },
    {
      title: "Air Tours",
      imagePath: imgAirTours.imagePath,
      imageAlt: imgAirTours.imageAlt,
      description: `Embark on an unforgettable adventure with our captivating air tours over Florida's renowned Space Coast. Discover the thrill of soaring through the skies while taking in breathtaking vistas of this iconic space exploration hub.`,
      link: "https://airtoursusats.com",
    },
  ],
};

export default servicesIndex;
