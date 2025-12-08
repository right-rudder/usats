import { COMPANY_NAME } from "../../../consts";
import { pplFw as programPrices} from "../../../flightTrainingProgramsPrices";

const privatePilotLicense = {
  data: {
    slug: "private-pilot-license",
    pageTitle: `Private Pilot License | ${COMPANY_NAME}`,
    pageDescription:
      "Begin your journey into aviation with our Part 141 Private Pilot License (PPL) program. Perfect for recreational pilots and those starting an aviation career, our 2-month course includes expert instruction and hands-on flight time in a Cessna 172.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["Part 141", "PPL"],
      imagePath: "/src/assets/placeholder-USATS-titusville-aviation-academy-florida.webp",
      imageAlt: "Cessna 172 training aircraft at the Titusville airport",
      headerH1: `Private Pilot <br>LICENSE</span>`,
      paragraph: `Designed for recreational flying or as a first step toward a professional aviation career, this 2-month course will prepare you to become a certified Private Pilot with hands-on training in a Cessna 172.`,
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
      upperHeading: "Start Your Aviation Journey With a",
      heading: "Private Pilot License (PPL)",
      subHeading: "FAA Part 141 Certified",

      title: "Overview",
      description: `
        Our Private Pilot License (PPL) program is perfect for aspiring aviators who want to fly for recreation or begin a professional career. 
        Training is conducted in a Cessna 172, one of the most trusted aircraft in aviation training. 
        The course spans approximately 2 months and follows a structured FAA Part 141 curriculum.
      `,

      keyPoints: [
        "Complete in approximately 2 months",
        "FAA Part 141 Approved",
        "Training conducted in Cessna 172 aircraft",
        "Ideal for recreational pilots and beginners",
        "Structured, instructor-led ground and flight training",
        "Located in sunny Titusville, Florida",
      ],

      // What's Included
      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "30 Hours Dual Flight Instruction",
          "5 Hours Solo Flight",
          "37 Hours Ground Training",
          "16 Hours Tutored Instruction",
          "9.5 Hours Pre/Post Briefing",
          "*All hours subject to student performance",
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
        heading: "Why Train with Us in Florida?",
        items: [
          "Year-Round Flying Weather: Train faster with fewer weather delays",
          "Expert Instructors: Learn from experienced and certified professionals",
          "Efficient Program Design: Structured curriculum aligned with FAA Part 141 standards",
          "Hands-On Training: Fly a reliable and safe Cessna 172",
          "Located in Titusville, Florida: A hub for aviation training with scenic views",
          "Personalized Support: Small class sizes and individual attention",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder-USATS-titusville-aviation-academy-florida.webp",
        imageAlt: "",
        title: "Take Off with Confidence",
        description:
          "Whether you're pursuing flying as a passion or a career, our Private Pilot License program sets a strong foundation for your future in aviation.",
        button: {
          name: "Apply Now",
          link: "/enroll-now",
        },
      },

      prices: programPrices,

      // FAQs
      faqs: [
        {
          question: "Who should take the Private Pilot License program?",
          answer:
            "This program is ideal for aspiring aviators who want to fly for personal enjoyment or begin the journey toward becoming a professional pilot.",
        },
        {
          question: "How long does the program take?",
          answer:
            "The PPL course typically takes about <strong>2 months</strong> to complete, depending on student availability and weather conditions.",
        },
        {
          question: "What aircraft will I train in?",
          answer:
            "All flight training is conducted in a <strong>Cessna 172</strong>, a reliable and widely-used aircraft for beginner pilots.",
        },
        {
          question: "What certifications will I earn?",
          answer:
            "You’ll earn your <strong>FAA Private Pilot License</strong> under Part 141 upon successful completion of the course.",
        },
        {
          question: "Is the program Part 141 approved?",
          answer:
            "Yes, our Private Pilot program is conducted under <strong>FAA Part 141</strong> regulations, ensuring a structured and approved training process.",
        },
      ],
    },
  },
};

export default privatePilotLicense;
