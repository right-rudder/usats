import { COMPANY_NAME } from "../../../consts";
import { pplRw as programPrices} from "../../../flightTrainingProgramsPrices";

const privatePilotLicense = {
  data: {
    slug: "private-pilot-license",
    pageTitle: `Private Pilot License (PPL) | ${COMPANY_NAME}`,
    pageDescription:
      "Earn your Private Pilot License (PPL) and gain the freedom to explore by helicopter. This foundational course provides essential aeronautical knowledge, decision-making skills, and hands-on flight training to help you become a safe and competent pilot.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["PPL"],
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Private pilot flying a helicopter in mountainous terrain",
      headerH1: `Private Pilot<br>License`,
      paragraph:
        "Whether you're flying for recreation or planning a professional career in aviation, the Private Pilot License course builds strong fundamentals in aeronautical decision-making, flight safety, and aircraft performance from day one.",
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
      upperHeading: "Your Helicopter Adventure Begins Here",
      heading: "Private Pilot License (PPL)",
      subHeading: "FAA Part 61 & Part 141 Certified",

      title: "Overview",
      description: `
        The Private Pilot License (PPL) course is your gateway to the world of helicopter aviation. Whether you're flying for personal enjoyment or planning to pursue aviation professionally, this course equips you with essential flight skills, aeronautical knowledge, and safety awareness.

        You'll develop proficiency in aircraft performance, navigation, and Aeronautical Decision Making (ADM) — taught from your very first lesson. For those transitioning from fixed-wing aircraft, our FAA-approved Part 141 add-on courses streamline the process, saving you both time and money.
      `,

      keyPoints: [
        "FAA Part 61 & Part 141 options",
        "Strong focus on Aeronautical Decision Making (ADM)",
        "Tailored for recreational or career-track pilots",
        "Add-on course available for airplane certificate holders",
        "Build solid fundamentals for advanced ratings",
      ],

      // What's Included
      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "Ground instruction covering essential aeronautical knowledge",
          "40 Hours of flight time (minimum required by FAA)",
        ],
      },

      // Additional Costs
      additionalCosts: {
        heading: "What’s Not Included (Additional Student Costs)?",
        items: [
          "Flight Gears (Headset,kneeboard,etc...)",
          "Teaching material, book, POH/RFM",
          "Ipad with EFB (Foreflight recommended)",
          "FAA Medical Exam (Class 3 or higher required)",
          "FAA written test & checkride fees",
        ],
      },

      // Benefits
      benefits: {
        heading: "Why Earn a Private Pilot License?",
        items: [
          "Fly recreationally or begin a career in aviation",
          "Enjoy the freedom of off-airport operations",
          "Strengthen your safety and decision-making skills",
          "Establish a solid foundation for further training",
          "Explore remote locations with helicopter versatility",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "Helicopter landing in a scenic remote location",
        title: "Start Your Helicopter Journey Today",
        description:
          "The PPL course prepares you for safe and confident helicopter operations, both for fun and future flight opportunities.",
        button: {
          name: "Apply Now",
          link: "/enroll-now",
        },
      },

      prices: programPrices,

      // FAQs
      faqs: [
        {
          question: "How long does it take to get a Private Pilot License?",
          answer:
            "The course typically takes 3 to 4 months to complete, depending on your schedule and training frequency.",
        },
        {
          question: "What are the age and language requirements?",
          answer:
            "You must be at least 17 years old and be able to read, speak, write, and understand English.",
        },
        {
          question: "What aircraft will I train in?",
          answer: "Training is conducted in the S300CBi and R44 helicopters.",
        },
        {
          question: "Can airplane pilots take an add-on course?",
          answer:
            "Yes! We offer Part 141 add-on courses for airplane certificate holders, making your transition to helicopters quicker and more cost-effective.",
        },
        {
          question: "What makes this course suitable for future pros?",
          answer:
            "We prioritize building strong ADM skills from the start, ensuring you're prepared for the responsibilities and decision-making required in advanced training.",
        },
      ],
    },
  },
};

export default privatePilotLicense;
