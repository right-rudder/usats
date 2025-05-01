import { COMPANY_NAME } from "../../../consts";

const commercialPilotLicense = {
  data: {
    slug: "commercial-pilot-license",
    pageTitle: `Commercial Pilot License | ${COMPANY_NAME}`,
    pageDescription:
      "Launch your aviation career with our Part 141 Commercial Pilot License (CPL) program. Develop advanced flight skills and earn the qualifications needed to fly professionally.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["Part 141", "CPL"],
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Commercial pilot training in a modern aircraft cockpit",
      headerH1: `Commercial <br>PILOT LICENSE</span>`,
      paragraph: `Step into the world of professional aviation with the Commercial Pilot License (CPL) program. Build your aeronautical experience and take your skills to a career-ready level in a Part 141 certified environment.`,
      buttons: [
        {
          name: "Apply Now",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Request Info",
          link: "/contact-us",
          primary: false,
        },
      ],
    },

    // Program Details
    details: {
      upperHeading: "Turn Your Passion Into a Profession",
      heading: "Commercial Pilot License (CPL)",
      subHeading: "FAA Part 141 Certified",

      title: "Overview",
      description: `
        The Commercial Pilot Course is an intensive training program for those seeking a career in commercial aviation. 
        This program combines comprehensive ground instruction and hands-on flight training to build the skills, confidence, and knowledge required for professional flying.
        You'll gain expertise in regulations, aircraft systems, advanced maneuvers, safety procedures, and crew coordination.
      `,

      keyPoints: [
        "FAA Part 141 Certified",
        "Designed for professional aviation career paths",
        "Training in real-world flight scenarios",
        "Focus on safety, navigation, and complex maneuvers",
        "Instruction in a Cessna 172",
        "Qualifies you to be compensated for flying",
      ],

      // What's Included
      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "55 Hours Dual Flight Instruction",
          "65 Hours Solo Flight",
          "36 Hours Ground Instruction",
          "6 Hours Tutored Instruction",
          "18.5 Hours Pre/Post Briefing",
        ],
      },

      // Additional Costs
      additionalCosts: {
        heading: "What’s Not Included (Additional Student Costs)?",
        items: [
          "Aviation Headset (Recommended: Bose, Lightspeed, David Clark)",
          "iPad with GPS (Cellular model preferred for ForeFlight compatibility)",
          "ForeFlight Subscription (for flight planning & navigation)",
          "FAA Medical Exam (Class 2 or Class 1 required)",
          "Training materials and FAA written/oral test fees",
        ],
      },

      // Benefits
      benefits: {
        heading: "Why Become a Commercial Pilot?",
        items: [
          "Qualify for paid flying opportunities",
          "Build flight hours toward airline careers",
          "Master advanced aircraft operations and procedures",
          "Access jobs like charter pilot, flight instructor, cargo pilot, and more",
          "Train with experienced instructors in high-demand aviation environments",
          "Be ready for further ratings like CFI, CFII, and ATP",
        ],
      },

      price: "$25,508 (Alto-NG) <br> $31,508 (C-172S)",

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        title: "Make Flying Your Full-Time Career",
        description:
          "Start your professional journey in aviation with our Commercial Pilot License course. Learn from the best, fly confidently, and open doors to the skies.",
        button: {
          name: "Apply Now",
          link: "/enroll-now",
        },
      },

      // FAQs
      faqs: [
        {
          question: "Who is this course for?",
          answer:
            "This course is for licensed pilots who want to earn the qualifications required to fly for compensation or hire. It's the next major step for a career in aviation.",
        },
        {
          question: "What aircraft will I train in?",
          answer:
            "Training is conducted in a <strong>Cessna 172</strong>, an industry-standard training aircraft suitable for commercial maneuvers and scenarios.",
        },
        {
          question: "How long does the course take to complete?",
          answer:
            "Duration varies based on student performance and scheduling, but the program is designed to be completed efficiently under Part 141 guidelines.",
        },
        {
          question: "Is this a Part 141 certified course?",
          answer:
            "Yes, the Commercial Pilot License course is fully <strong>FAA Part 141 certified</strong>.",
        },
        {
          question: "What can I do after getting my Commercial Pilot License?",
          answer:
            "You can work as a commercial pilot in various roles such as aerial surveying, banner towing, pipeline patrol, cargo transport, and as a flight instructor (with additional certification).",
        },
      ],
    },
  },
};

export default commercialPilotLicense;
