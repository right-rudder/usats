import { COMPANY_NAME } from "../../../consts";

const commercialPilotLicense = {
  data: {
    slug: "commercial-pilot",
    pageTitle: `Commercial Pilot Certificate | ${COMPANY_NAME}`,
    pageDescription:
      "Turn your passion into a profession with our Commercial Pilot Certificate. Get personalized training to meet FAA requirements and prepare for a career in aviation.",
    pageKeywords: "",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Commercial helicopter pilot flying over scenic terrain",
      headerH1: `Commercial Pilot<br><span>Certificate</span>`,
      paragraph: `The Commercial Pilot Certificate is your next big step toward flying for a living. Whether you're looking to become an instructor, EMS pilot, or tour captain, this course will help turn your passion into a paying profession. Our personalized training adapts to your experience, helping you meet FAA requirements and career goals.`,
      buttons: [
        {
          name: "Apply Now",
          link: "/enroll",
          primary: false,
        },
        {
          name: "Request Info",
          link: "/contact",
          primary: false,
        },
      ],
    },

    // Program Details
    details: {
      upperHeading: "Take Your Skills to the Professional Level",
      heading: "Commercial Pilot Certificate",
      subHeading: "FAA Part 61 Training",

      title: "Overview",
      description: `
        Becoming a Commercial Helicopter Pilot allows you to be paid to fly—and opens doors to exciting careers in aviation, including flight instruction, tours, charter, EMS, utility work, and more. 
        
        Because every student comes in with different flight experience and background, our commercial pilot training is tailored to your unique situation. Contact us to receive a customized plan based on your current hours and proficiency. Our expert instructors will help you meet all FAA requirements and prepare you for the professional world.
      `,

      keyPoints: [
        "Personalized training based on your flight experience",
        "Minimum 150 hours total time required (per FAA)",
        "Learn commercial maneuvers and advanced flight techniques",
        "Build hours toward ATP or job-specific requirements",
        "Fly the S300CBi and R44 helicopters",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "20 Hours of Dual Flight Training (FAA Minimum)",
          "10 Hours of Solo Flight Time (FAA Minimum)",
          "Ground Training to cover Commercial Pilot knowledge areas",
          "Additional flight hours as needed to reach 150 total hours*",
          "*Hours vary based on your prior experience",
        ],
      },

      additionalCosts: {
        heading: "What’s Not Included (Additional Student Costs)?",
        items: [
          "FAA Written Exam Fees",
          "Checkride Fees (Designated Pilot Examiner)",
          "Aviation Headset",
          "iPad with EFB (ForeFlight Recommended)",
          "Medical Exam (FAA Second Class or higher)",
          "Charts and additional training materials",
        ],
      },

      benefits: {
        heading: "Why Get a Commercial Pilot Certificate?",
        items: [
          "Earn money doing what you love",
          "Qualify for jobs like instructor, tour, or utility pilot",
          "Meet insurance and job requirements for paid operations",
          "Gain professional-level flight knowledge and precision",
          "Position yourself for advanced training or ATP",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        title: "Ready to Turn Passion into Profession?",
        description:
          "Our commercial training program gives you the experience, credentials, and confidence to pursue a paid career in aviation. Let’s build your future in the sky—starting today.",
        button: {
          name: "Apply Now",
          link: "/enroll",
        },
      },

      faqs: [
        {
          question: "How long does the course take?",
          answer:
            "It depends on your current flight hours and schedule. Once we assess your experience, we can build a custom plan that fits your needs.",
        },
        {
          question: "What are the prerequisites?",
          answer:
            "You must hold a Private Pilot Certificate and be able to read, speak, write, and understand English proficiently.",
        },
        {
          question: "What aircraft will I train in?",
          answer:
            "We conduct commercial flight training in the S300CBi and the Robinson R44 helicopters.",
        },
        {
          question: "What if I don’t have enough total time?",
          answer:
            "We’ll work with you to schedule additional solo or dual time so you can meet the FAA’s 150-hour total time requirement for the Commercial Pilot Certificate.",
        },
        {
          question: "Can this help me become a flight instructor?",
          answer:
            "Yes! The Commercial Certificate is required before pursuing a CFI rating. It’s the next step toward instructing professionally and building hours for future roles.",
        },
      ],
    },
  },
};

export default commercialPilotLicense;
