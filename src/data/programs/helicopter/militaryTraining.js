import { COMPANY_NAME } from "../../../consts";

const militaryTraining = {
  data: {
    slug: "military-flight-instructor",
    pageTitle: `Military Helicopter Flight Instructor Program | ${COMPANY_NAME}`,
    pageDescription: "Train to become a mission-ready military helicopter instructor with FAA CFI/CFII certifications. Specialize in NVG, SAR, Medevac, and tactical operations using UH-60 Black Hawks.",
    pageKeywords: "military flight instructor, UH-60 training, NVG certification, FAA CFI-H",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/military-instructor.webp",
      imageAlt: "Military instructor pilot training with NVGs in UH-60 Black Hawk",
      headerH1: `Military Flight<br><span>Instructor (CFI-H)</span>`,
      paragraph: `Develop into a tactical leader and instructor capable of training pilots for critical missions including Search & Rescue, Medevac, and External Load operations. Our FAA-certified program combines CFI/CFII qualifications with NVG proficiency and UH-60 mission specialization, preparing you to mentor the next generation of military aviators.`,
      buttons: [
        {
          name: "Enlist Now",
          link: "/military-enroll",
          primary: false,
        },
        {
          name: "Mission Briefing",
          link: "/contact",
          primary: false,
        },
      ],
    },

    // Program Details
    details: {
      upperHeading: "Forge Combat-Ready Instructors",
      heading: "Military CFI-H Program",
      subHeading: "FAA Part 141/61 Hybrid Training",

      title: "Strategic Overview",
      description: `
        This intensive program transforms experienced military pilots into certified instructors capable of training personnel in multi-mission helicopter operations. Beyond standard CFI/CFII certification, you'll master NVG operations and tactical training methodologies for the UH-60 Black Hawk platform. The curriculum emphasizes battlefield-relevant skills including Threat and Error Management (TEM), low-level navigation, and external load operations under night vision conditions.
      `,

      keyPoints: [
        "FAA CFI-H + CFII-H + NVG Certification",
        "UH-60 Black Hawk mission specialization (SAR, Medevac, External Load)",
        "320+ annual VFR training days guarantee progress",
        "Tactical training areas within 10NM of base",
        "2:1 student-instructor ratio for focused learning",
      ],

      included: {
        heading: "Operational Training Package",
        items: [
          "Phase 1: CFI-H Fundamentals (S-300CBi/R44)",
          "Phase 2: CFII-H Instrument Instruction (R44 w/WAAS-GPS)",
          "Phase 3: NVG Tactical Operations (UH-60/S-300)",
          "60 Hours Ground School: TEM, CRM, Battlefield ADM",
          "25 Hours Dual Flight Instruction (Minimum)",
          "Access to Frasca FTD S-300 Simulator",
          "Dedicated UH-60 Mission Training Modules",
          "*Flight hours adjusted for mission readiness",
        ],
      },

      additionalCosts: {
        heading: "Operational Expenses (Client Responsibility)",
        items: [
          "FAA Written/Practical Exams",
          "Class 2 Medical Certification",
          "NVG-Compatible Flight Gear",
          "Tactical Mission Planning Materials",
          "International Trainee Visas (M1)",
        ],
      },

      benefits: {
        heading: "Strategic Advantages",
        items: [
          "FAA certifications recognized by NATO allies",
          "Direct pathway to UH-60 instructor qualification",
          "38-acre tactical training complex access",
          "Proven track record: 200+ African pilots trained",
          "Dual-qualification in civil/military instruction",
        ],
      },

      cta: {
        imagePath: "/src/assets/UH-60_Black_Hawk_1.webp",
        imageAlt: "UH-60 Black Hawk conducting night medevac training",
        title: "Ready for Tactical Leadership?",
        description: "Equip yourself to train the next generation of combat aviators. Our program develops instructors who can prepare crews for high-stakes missions anywhere in the world.",
        button: {
          name: "Request Deployment Brief",
          link: "/military-contact",
        },
      },

      price: "",
      priceNote: "*Base package. UH-60 modules priced separately.",

      faqs: [
        {
          question: "What are the prerequisites?",
          answer: "Military rotary-wing license + 150hrs minimum. English proficiency (ICAO Level 4). Combat experience preferred.",
        },
        {
          question: "How long is the NVG certification?",
          answer: "15hrs minimum including 5hrs UH-60 night operations. Training uses AN/AVS-9 equivalent systems.",
        },
        {
          question: "Can we train on our own UH-60s?",
          answer: "Yes - contact for mobile training team options. USATS instructors are MEL-qualified.",
        },
        {
          question: "Is Medevac specific training included?",
          answer: "Yes - 10hrs dedicated to hoist/confined area MEDEVAC scenarios using UH-60 configuration.",
        },
        {
          question: "Post-certification support?",
          answer: "12-month mentorship program included. Optional train-the-trainer packages available.",
        },
      ],
    },
  },
};

export default militaryTraining;