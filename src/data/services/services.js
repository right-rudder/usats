import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import {
  ALTO_NG_PANEL as imgMaintenance,
  PROGRAMMER_FOCUSED_ON_CODE as imgCATS,
  FINGERPRINTING as imgFingerprinting,
  ALTO_NG as imgAltoNG,
  ALTO_5A as imgAirTours,
  ALTONG_MAINTENANCE as imgTaa,
  DARK_BLUE_HELI_MAINTENANCE,
} from "../../constsImages";

const servicesIndex = {
  data: {
    // SEO Header Stuff
    pageTitle: "Aviation Services | USATS Titusville FL",
    pageDescription:
      "Complete aviation services at USATS including aircraft maintenance, CATS testing center, TSA fingerprinting, and air tours. All your aviation needs under one roof in Titusville, FL.",
    pageKeywords:
      "aviation services Florida, aircraft maintenance Titusville, CATS testing center, FAA test center Florida, TSA fingerprinting aviation, Air Tours Florida, airplane maintenance services, FAA knowledge test location, Space Coast air tours, pilot testing center, aircraft repair station, Alto aircraft sales, aviation fingerprint services, scenic flights Titusville, FAA written test facility",

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
    // {
    //   title: "Alto Planes",
    //   imagePath: imgAltoNG.imagePath,
    //   imageAlt: imgAltoNG.imageAlt,
    //   description: `North American Dealer and Service Center for DirectFly Alto NG`,
    //   link: "/services/alto-planes",
    // },
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
      title: "Air Tours",
      imagePath: imgAirTours.imagePath,
      imageAlt: imgAirTours.imageAlt,
      description: `Embark on an unforgettable adventure with our captivating air tours over Florida's renowned Space Coast. Discover the thrill of soaring through the skies while taking in breathtaking vistas of this iconic space exploration hub.`,
      link: "https://airtoursusats.com",
    },
  ],
};

export default servicesIndex;
