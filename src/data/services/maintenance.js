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
    imagePath: "/src/assets/maintenanceHeli3.png",
    imageAlt: "US Aviation Training Solutions mechanic performing maintenance on a helicopter",
    headerH1: `REPAIR TODAY <br> WITH ${COMPANY_NICKNAME}`,
    paragraph: `${COMPANY_NICKNAME} strives to meet our customers’ needs through the capabilities of our Certified Repair Station. With our strong attention to detail, we maintain high standards of safety and quality excellence. Our team of highly skilled mechanics are eager to provide both scheduled and unscheduled maintenance to meet your needs.`,
    buttons: [
      {
        name: "Contact Us",
        link: "/contact-us",
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
        title: "145 Maintenance Capabilities",
        link: "#145-maintenance-capabilities",
        descriptions: ["USATS repair station is certified to maintain various airframes and engines using approved tools, training, and procedures per regulations and their RSM."],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Authorized Robinson Service Center",
        link: "#robinson-service-center",
        descriptions: ["USATS is an authorized Robinson Helicopter service center for R22 and R44 models, performing maintenance per RCH guidelines as recommended for all owners."],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Part 43 Maintenance",
        link: "#part-43-maintenance",
        descriptions: ["USATS offers limited Part 43 maintenance for aircraft not on its Repair Station list, with work signed off by individual A&P mechanics, primarily servicing small GA aircraft and reciprocating helicopters on a case-by-case basis."],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },

    ],
    oldBullets: [
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

  repairStationCapabilities: {
    title: "USATS Maintenance Capabilities",
    heather2: "145 Repair Station Capabilities",
    description: [
      "USATS repair station #HA4R295X has capabilities on a variety of airframes and engines. When these aircraft are serviced, all work is completed in accordance with the current regulations and our RSM (Repair station manual). Maintenance is signed off under our repair station number. Having these airframes/engines on our capabilities list shows we have the required training, tooling and manuals to perform the required maintenance."
    ],
    
    airframes: [
      {
        name: "Schweizer Helicopters",
        models: "269/300 Series",
        manufacturer: "Schwiezer",
        imagePath: "/src/assets/White_Schweizer_S300_Usats_Ramp_USATS.webp",
        imageAlt: "",
        description: "Labore reprehenderit laborum dolore ut aliqua proident laboris duis nisi quis aliquip aliquip nostrud.",
        bullets: [
          "Scheduled Inspections",
          "Un-Scheduled Maintenance",
          "Component maintenance excluding Schweizer restricted parts",
          "Refurbishment: complete tear down and re-build",
          "Large stock of new, serviceable and repairable Schweizer specific parts"
        ],
      },
      {
        name: "Robinson Helicopters",
        models: "R22 & R44 Series",
        manufacturer: "Robinson",
        imagePath: "/src/assets/White_blue_Robinson_R44_USATS_Ramp.webp",
        imageAlt: "",
        description: "Labore reprehenderit laborum dolore ut aliqua proident laboris duis nisi quis aliquip aliquip nostrud.", 
        bullets: [
          "Authorized Service Center for R22 & R44",
          "Scheduled, Inspection, Un-Scheduled Maintenance"
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
       description: "Labore reprehenderit laborum dolore ut aliqua proident laboris duis nisi quis aliquip aliquip nostrud.",
       bullets: [
          "Scheduled Inspections",
          "Un-Scheduled Maintenance"
        ]
      },
      {
       name: "Bell", 
       models: "206 Series",
       manufacturer: "Bell",
       imagePath: "/src/assets/maintenanceHeli2.png",
       imageAlt: "",
       description: "",
       bullets: []
      },
    ],

    partSales: {
      name: "Parts Sales", 
      subtitle: "Shop",
      imagePath: "/src/assets/ALTO_NG_Panel.jpg",
      imageAlt: "",
      description: "",
      bullets: [
        "Schweizer, Robinson and limited Cessna Parts",
        "Lycoming, standard hardware, Instruments",
        "Large stock of Bell 206 parts",
        "Consumables: Oil, grease, chemicals"
      ]
    },

    engines: {
      name: "Engines",
      description: "",
      engines: [
        {
          name: "Lycoming",
          models :
          [
            "HIO-360-G1A","O-36C1A", "O-360-J2A", "O-540-F1BS", "IO-360L2A", "IO-540-AE1A5", "HIO-360-D1A",
          ],
        },
        {
          name: "Rolls Royce",
          models :
          [
            "250-C20B","250-C30P",
          ]
        }
      ]
    },

    robinson_service_center: {
      name: "Robinson Authorized Service Center",
      description: "USATS is an authorized service center for Robinson Helicopters. Under our current agreement we can service R22 and R44 helicopters. Service will be completed in accordance with RCH recommended and required maintenance procedures. Robinson suggests all owners have their aircraft service completed at a Robinson authorized facility",
      models: "R22 & R44",
      benefits: [
        "Ability to buy parts from Robinson",
        "Ability to sell Robinson parts to customers",
        "Receive up to 25% discount on parts",
        "Listed as a Service Center on RHC website"
      ]
    },

    part_43_maintenance: {
      name: "Maintenance Part 43",
      description: "Maintenance performed and signed off under an individual's A&P license",
      paragraphs: [
        "We offer limited maintenance under part 43. This would include any aircraft that are not listed on our Repair Station. Maintenance is performed and signed off under an individual's A&P license. Essentially, the mechanic taking responsibility for the work they did instead of that liability being on the repair station.",
        "Currently, we service about half of the tango ramp tenants. Their aircraft include Piper PA-28, Vans RV-6 &amp; RV-12, Cessna 150, and Grumman Tiger . We are best equipped to handle airplanes similar in size to the Cessna 172 and reciprocating helicopters. Most of this maintenance is considered on a case-by-case basis.",
      ],

      current_serviced_aircraft: {
        name: "Current Serviced Aircraft",
        models:[
        "Piper PA-28",
        "Vans RV-6",
        "Vans RV-12",
        "Cessna 150",
        "Grumman Tiger",
        "Other case-by-case maintenance"
        ],
      },

      services: {
        name: "Services",
        description: "With our current tooling we can offer a variety of services. Typically, someone presents us with a discrepancy, and we suggest what service they would need based from that. These “services” are charged as labor hours. This is just a very general list; we can do more complex inspections and maintenance.",
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
        "For more complex and maintenance contact us",
      ],
    },
    },

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