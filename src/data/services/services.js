import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";

const servicesIndex = {
    data: {
        // SEO Header Stuff
        pageTitle: "Services | US Academy",
        pageDescription:
            "",
        pageKeywords:
            "",

        // Top Header
        header: {
            stars: true,
            imagePath: "/src/assets/placeholder.webp",
            imageAlt:
            "image alt",
            headerH1: `${COMPANY_NICKNAME} <br> SERVICES`,
            paragraph: ``,
            buttons: [
            {
                name: "Learn more",
                link: "#services",
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
        title: "Maintenance",
        imagePath: "/src/assets/ALTO_NG_Panel.jpg",
        imageAlt:
          "",
        description:
          `${COMPANY_NICKNAME} strives to meet our customers’ needs through the capabilities of our Certified Repair Station. With our strong attention to detail, we maintain high standards of safety and quality excellence. Our team of highly skilled mechanics are eager to provide both scheduled and unscheduled maintenance to meet your needs.`,
        link: "/services/maintenance",
      },
    ],
  };
  
  export default servicesIndex;