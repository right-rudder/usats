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
    title: "US Aviation Training Solutions Maintenance Capabilities",
    heather2: "145 Repair Station Capabilities",
    description: [
      "USATS repair station #HA4R295X has capabilities on a variety of airframes and engines. When these aircraft are serviced, all work is completed in accordance with the current regulations and our RSM (Repair station manual). Maintenance is signed off under our repair station number. Having these airframes/engines on our capabilities list shows we have the required training, tooling and manuals to perform the required maintenance."
    ],
    airframes:[
      {
        "manufacturer": "Schwiezer",
        "models": ["269/300 Series"]
      },
      {
        "manufacturer": "Robinson",
        "models": ["R22", "R44 Series"]
      },
      {
        "manufacturer": "Bell",
        "models": ["206 Series"]
      },
      {
        "manufacturer": "Cessna",
        "models": ["172 Series"]
      },
    ],
    
    capabilities: {
      "Schweizer Helicopters": [
        "Scheduled Inspections",
        "Un-Scheduled Maintenance",
        "Component maintenance excluding Schweizer restricted parts",
        "Refurbishment: complete tear down and re-build",
        "Large stock of new, serviceable and repairable Schweizer specific parts"
      ],
      "Robinson Helicopters": [
        "Authorized Service Center for R22 & R44",
        "Scheduled, Inspection, Un-Scheduled Maintenance"
      ],
      "Cessna": [
        "Scheduled Inspections",
        "Un-Scheduled Maintenance"
      ],
      "Parts Sales": [
        "Schweizer, Robinson and limited Cessna Parts",
        "Lycoming, standard hardware, Instruments",
        "Large stock of Bell 206 parts",
        "Consumables: Oil, grease, chemicals"
      ]
    },

    engines: [
      {
      "Lycoming" :
        [
          "HIO-360-G1A","O-36C1A", "O-360-J2A", "O-540-F1BS", "IO-360L2A", "IO-540-AE1A5", "HIO-360-D1A",
        ]
      },
      {
        "Rolls Royce" :
          [
            "250-C20B","250-C30P",
          ]
        }
    ],

    robinson_service_center: {
      "description": "USATS is an authorized service center for Robinson Helicopters. Under our current agreement we can service R22 and R44 helicopters. Service will be completed in accordance with RCH recommended and required maintenance procedures. Robinson suggests all owners have their aircraft service completed at a Robinson authorized facility",
      "models": ["R22", "R44"],
      "benefits": [
        "Ability to buy parts from Robinson",
        "Ability to sell Robinson parts to customers",
        "Receive up to 25% discount on parts",
        "Listed as a Service Center on RHC website"
      ]
    },

    part_43_maintenance: {
      "description": "Maintenance performed and signed off under an individual's A&P license",
      "fullDescription": [
        "We offer limited maintenance under part 43. This would include any aircraft that are not listed on our Repair Station. Maintenance is performed and signed off under an individual's A&P license. Essentially, the mechanic taking responsibility for the work they did instead of that liability being on the repair station.",
        "Currently, we service about half of the tango ramp tenants. Their aircraft include Piper PA-28, Vans RV-6 &amp; RV-12, Cessna 150, and Grumman Tiger . We are best equipped to handle airplanes similar in size to the Cessna 172 and reciprocating helicopters. Most of this maintenance is considered on a case-by-case basis.",
      ],
      "current_serviced_aircraft": [
        "Piper PA-28",
        "Vans RV-6",
        "Vans RV-12",
        "Cessna 150",
        "Grumman Tiger",
        "Other case-by-case maintenance"
      ],

      services: {
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