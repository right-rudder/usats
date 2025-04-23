import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";

const maintenanceServices = {
  pageTitle: `Why Choose USATS? | ${COMPANY_NAME}`,
  pageDescription:
    "",
  pageKeywords:
    "",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/maintanceHeli3.png",
    imageAlt: "US Aviation Training Solutions mechanic performing maintenance on a helicopter",
    headerH1: `REPAIR TODAY <br> WITH ${COMPANY_NICKNAME}`,
    paragraph: `${COMPANY_NICKNAME} strives to meet our customers’ needs through the capabilities of our Certified Repair Station. With our strong attention to detail, we maintain high standards of safety and quality excellence. Our team of highly skilled mechanics are eager to provide both scheduled and unscheduled maintenance to meet your needs.`,
    buttons: [
      {
        name: "Contact Us",
        link: "/#",
        primary: true,
      },
    ],
  },

  pageSummary: {
    title: "Authorized Robinson Service Center",
    paragraphs: [
        "As an Authorized Robinson Service Center USATS provides scheduled and unscheduled maintenance for Robinson R22 and R44 Aircraft.",
        "We also carry a stock of new Robinson parts to support operational needs and limit aircraft down time.",
    ],
    buttons: [
      {
        name: "Reach out to us",
        link: "#",
        primary: true,
      },
    ],
  },


  contentSplit: {
    upperHeading: "USATS",
    heading: `Maintenance Services ${COMPANY_NICKNAME}`,
    descriptions: [
      "",
    ],
    bulletsTitle: "Repair Station Capabilities",
    bullets: [
      {
        title: "Sikorsky UH-60 Black Hawk",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Robinson R22",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Robinson R44",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Schweizer 269/300 Series",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Bell Helicopter 206 Series",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Cessna 172 Series",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Diamond DA-42",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
    ],

    finalSection: {
      heading: "Get in Touch",
      descriptions: [
        `${COMPANY_NAME} can help you with Airplane and Helicopter Maintenance. And if you need any parts just give us a call.`,
      ],
    },
    finalButton: {
      name: "Ask us anything",
      link: "/enroll",
      primary: true,
    },
    imagePath: "/src/assets/maintenanceHeli4.png",
    imageAlt:
      "",
  },

  ctaMaintenance: {
    imagePath: "/src/assets/placeholder.webp",
    imageAlt: "",
    headerH1: `<span class="text-accent-700">Get in Touch</span>`,
    paragraph:
    `${COMPANY_NAME} can help you with Airplane and Helicopter Maintenance. And if you need any parts just give us a call.`,
    buttons: [
      {
        name: "Ask us anything",
        link: "/#",
        primary: true,
      },
    ],
  },
};

export default maintenanceServices;