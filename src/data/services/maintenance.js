import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import {
  MILITARY_TRAINING_BH9 as imgCTA,
  DARK_BLUE_HELI_MAINTENANCE2 as imgHeader,
  DIRECTFLY_ALTONG_PANEL_2 as imgMaintenance,
  MAINTENANCE_LOGO_141,
} from "../../constsImages";

const maintenanceServices = {
  pageTitle: `Helicopter & Airplane Maintenance Services | ${COMPANY_NAME}`,
  pageDescription:
    "Explore expert aircraft maintenance services at USATS, an FAA-certified 145 Repair Station and Authorized Robinson Service Center. We offer scheduled and unscheduled maintenance for Robinson, Schweizer, Bell, Cessna, and more. Contact us for aircraft repairs, parts, and inspections.",
  pageKeywords:
    "USATS maintenance, aircraft maintenance, Robinson service center, FAA repair station, helicopter maintenance, airplane inspections, 145 maintenance, Part 43 maintenance, aviation repair Titusville, helicopter repair Florida, Cessna 172 maintenance, Schweizer repair, UH-60 maintenance, Bell 206 repairs",

  // Top Header
  header: {
    stars: true,
    logo: MAINTENANCE_LOGO_141.imagePath,
    logoAlt: MAINTENANCE_LOGO_141.imageAlt,
    imagePath: imgHeader.imagePath,
    imageAlt: imgHeader.imageAlt,
    headerH1: `REPAIR TODAY <br> WITH ${COMPANY_NICKNAME}`,
    paragraph: `${COMPANY_NICKNAME} strives to meet our customers’ needs through the capabilities of our Certified Repair Station. With our strong attention to detail, we maintain high standards of safety and quality excellence. Our team of highly skilled mechanics are eager to provide both scheduled and unscheduled maintenance to meet your needs.`,
    buttons: [
      {
        name: "Contact Us",
        link: "/maintenance-contact",
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
    heading: `Maintenance Services`,
    descriptions: [""],
    bulletsTitle: "Repair Station Capabilities",
    bullets: [
      {
        title: "145 Maintenance Capabilities",
        link: "#145-maintenance-capabilities",
        descriptions: [
          "USATS repair station is certified to maintain various airframes and engines using approved tools, training, and procedures per regulations and their RSM.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Authorized Robinson Service Center",
        link: "#robinson-service-center",
        descriptions: [
          "USATS is an authorized Robinson Helicopter service center for R22 and R44 models, performing maintenance per RCH guidelines as recommended for all owners.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Part 43 Maintenance",
        link: "#part-43-maintenance",
        descriptions: [
          "USATS offers limited Part 43 maintenance for aircraft not on its Repair Station list, with work signed off by individual A&P mechanics, primarily servicing small GA aircraft and reciprocating helicopters on a case-by-case basis.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
    ],
    oldBullets: [
      // {
      //   title: "Sikorsky UH-60 Black Hawk",
      //   descriptions: [""],
      //   icon: "M9 12.75 11.25 15 15 9.75...",
      // },
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
    imagePath: imgMaintenance.imagePath,
    imageAlt: imgMaintenance.imageAlt,
  },

  repairStationCapabilities: {
    title: "USATS Maintenance Capabilities",
    heather2: "145 Repair Station Capabilities",
    description: [
      "USATS repair station #HA4R295X has capabilities on a variety of airframes and engines. When these aircraft are serviced, all work is completed in accordance with the current regulations and our RSM (Repair station manual). Maintenance is signed off under our repair station number. Having these airframes/engines on our capabilities list shows we have the required training, tooling and manuals to perform the required maintenance.",
    ],

    airframes: [
      {
        name: "Schweizer Helicopters",
        models: "269/300 Series",
        manufacturer: "Schwiezer",
        imagePath: "/src/assets/White_Schweizer_S300_Usats_Ramp_USATS.webp",
        imageAlt: "",
        description: "",
        bullets: [
          "Airframe and engine maintenance and repair",
          "Component maintenance excluding Schweizer restricted parts",
          "Refurbishment: complete tear down and re-build",
          "Large stock of new, serviceable and repairable Schweizer specific parts",
        ],
      },
      {
        name: "Robinson Helicopters",
        models: "R22 & R44 Series",
        manufacturer: "Robinson",
        imagePath: "/src/assets/White_blue_Robinson_R44_USATS_Ramp.webp",
        imageAlt: "",
        description: "",
        bullets: [
          "Authorized Service Center for R22 & R44",
          "Airframe and engine maintenance and repair",
          "Component maintenance excluding Robinson restricted parts",
          "Refurbishment: complete tear down and re-build",
          "Large stock of new, serviceable and repairable Robinson specific parts",
        ],
        buttons: [
          {
            name: "Check Out More",
            link: "#robinson-authorized",
            primary: true,
          },
        ],
      },
      {
        name: "Cessna",
        models: "172 Series",
        manufacturer: "Cessna",
        imagePath: "/src/assets/cessna_172_USATS_Ramp.webp",
        imageAlt: "",
        description: "",
        bullets: [
          "Scheduled inspections",
          "Airframe and engine maintenance and repair",
        ],
      },
      {
        name: "Bell Helicopters",
        models: "206 Series",
        manufacturer: "Bell",
        imagePath: "/src/assets/maintenanceHeli2.png",
        imageAlt: "",
        description: "",
        bullets: [
          "Scheduled inspections",
          "Airframe and engine maintenance and repair",
          "Component maintenance excluding Bell restricted parts",
          "Large stock of new, serviceable and repairable Bell specific parts",
        ],
      },
    ],

    partSales: {
      name: "Parts Sales",
      subtitle: "Shop",
      imagePath: "/src/assets/ALTO_NG_Panel.jpg",
      imageAlt: "",
      description: "",
      bullets: [
        "Access to a wide range of parts beyond our own aircraft types, including components for popular rotorcraft and fixed-wing models",
        "Large selection of Consumables available",
      ],
    },

    engines: {
      name: "Engines",
      description: "",
      engines: [
        {
          name: "Lycoming",
          models: [
            "HIO-360-G1A",
            "O-36C1A",
            "O-360-J2A",
            "O-540-F1BS",
            "IO-360L2A",
            "IO-540-AE1A5",
            "HIO-360-D1A",
          ],
        },
        {
          name: "Rolls Royce",
          models: ["250-C20B", "250-C30P"],
        },
      ],
    },

    robinson_service_center: {
      name: "Robinson Authorized Service Center",
      description:
        "USATS is an authorized service center for Robinson Helicopters. Under our current agreement we can service R22 Beta and R44 Raven/Clipper 1 & 2 helicopters. Services are completed in accordance with RCH required maintenance procedures.",
      models: "R22 & R44",
      // benefits: [
      //   "Ability to buy parts from Robinson",
      //   "Ability to sell Robinson parts to customers",
      //   "Receive up to 25% discount on parts",
      //   "Listed as a Service Center on RHC website"
      // ]
    },

    part_43_maintenance: {
      name: "Maintenance Part 43",
      description:
        "Maintenance performed and signed off under an individual's A&P license",
      paragraphs: [
        "USATS offers limited inspection and maintenance services under Part 43, following the same standards and quality of our 145 Repair Station. This would include aircraft not listed on its Repair Station capabilities list. We are best equipped to handle airplanes similar in size to the Cessna 172 and single-engine helicopters on a case-by-case basis.",
      ],

      current_serviced_aircraft: {
        name: "Current Serviced Aircraft",
        models: [
          "Piper PA-28",
          "Vans RV-6",
          "Vans RV-12",
          "Cessna 150",
          "Grumman Tiger",
          "Other case-by-case maintenance",
        ],
      },

      services: {
        name: "Services",
        description:
          "We are best equipped to handle airplanes similar in size to the Cessna 172 and single-engine helicopters. Most of this maintenance is considered on a case-by-case basis, and charged as a labor hour rate.”",
        generalServices: [
          "Borescope Inspection",
          "Facilitate outside repairs",
          "Nitrogen Service",
          "Battery Capacitance Checks",
          "Tire Service/Change",
          "Aircraft Salt washes",
          "Corrosion treatment",
          "Standard Replacement",
          "Troubleshooting",
          "For detailed inspection and maintenance needs please contact us”",
        ],
      },
    },
  },

  ctaMaintenance: {
    imagePath: imgCTA.imagePath,
    imageAlt: imgCTA.imageAlt,
    headerH1: `<span class="text-accent-700">Get in Touch</span>`,
    paragraph: `${COMPANY_NAME} can help you with Airplane and Helicopter Maintenance. And if you need any parts just give us a call.`,
    buttons: [
      {
        name: "Ask us anything",
        link: "/maintenance-contact",
        primary: true,
      },
    ],
  },
};

export default maintenanceServices;
