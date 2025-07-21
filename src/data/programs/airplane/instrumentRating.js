import { COMPANY_NAME } from "../../../consts";
import { irFw as programPrices} from "../../../flightTrainingProgramsPrices";

import { 
  ALTO_NG_PANEL,
  DIRECTFLY_ALTONG_PANEL_USATS,
} from "../../../constsImages";


const instrumentRating = {
  data: {
    slug: "instrument-rating",
    pageTitle: `Instrument Rating | ${COMPANY_NAME}`,
    pageDescription:
      "Advance your skills with our Part 141 Instrument Rating (IR) program. Gain proficiency in flying by reference to instruments alone, perfect for navigating challenging weather conditions and increasing flight safety.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["Part 141", "IR"],
      imagePath: DIRECTFLY_ALTONG_PANEL_USATS.imagePath,
      imageAlt: DIRECTFLY_ALTONG_PANEL_USATS.imageAlt,
      headerH1: `Instrument <br>RATING</span>`,
      paragraph: `Elevate your piloting skills with the Instrument Rating (IR) program. Learn to navigate and fly in reduced visibility using advanced instrument techniques in a structured Part 141 environment.`,
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
      upperHeading: "Fly Through the Clouds With Confidence",
      heading: "Instrument Rating (IR)",
      subHeading: "FAA Part 141 Certified",

      title: "Overview",
      description: `
        The Instrument Rating Course is designed for pilots seeking to expand their skills and fly under Instrument Flight Rules (IFR). 
        This specialized program teaches you how to safely operate an aircraft by reference to instruments alone, enabling flights in low visibility and complex airspace.
        Training includes advanced navigation, instrument procedures, and in-depth weather understanding.
      `,

      keyPoints: [
        "FAA Part 141 Certified",
        "Training focused on advanced instrument flying",
        "Essential for flying in low-visibility conditions",
        "Improves flight safety and professional readiness",
        "Ideal step after earning a Private Pilot License",
        "Training conducted in a Cessna 172",
      ],

      // What's Included
      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "44.6 Hours Dual Flight Instruction",
          "30 Hours Ground Instruction",
          "11 Hours Tutored Instruction",
          "12 Hours Pre/Post Briefing",
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
        heading: "Why Add an Instrument Rating?",
        items: [
          "Fly in more weather conditions with confidence and safety",
          "Gain access to more airspace and airports under IFR",
          "Improve situational awareness and navigational skills",
          "Required for most commercial and airline pilot careers",
          "Enhance your resume and career opportunities in aviation",
          "Train in sunny Florida with experienced instructors",
        ],
      },

      cta: {
        imagePath: ALTO_NG_PANEL.imagePath,
        imageAlt: ALTO_NG_PANEL.imageAlt,
        title: "Expand Your Flight Horizon",
        description:
          "Master the skills to fly in a wider range of conditions with our Instrument Rating program. Take your next step toward becoming a safer and more capable pilot.",
        button: {
          name: "Apply Now",
          link: "/enroll-now",
        },
      },

      prices: programPrices,

      // FAQs
      faqs: [
        {
          question: "Who should take the Instrument Rating program?",
          answer:
            "This course is ideal for licensed pilots looking to expand their capabilities and fly under Instrument Flight Rules (IFR), especially in low-visibility or complex weather conditions.",
        },
        {
          question: "What aircraft is used for training?",
          answer:
            "Flight instruction is conducted in a <strong>Cessna 172</strong> equipped for instrument flying.",
        },
        {
          question: "How long does the course take to complete?",
          answer:
            "Duration may vary depending on the student's schedule and performance, but training is designed to be efficient and comprehensive.",
        },
        {
          question: "Is the course Part 141 certified?",
          answer:
            "Yes, this program is <strong>FAA Part 141</strong> approved, ensuring a structured and streamlined training process.",
        },
        {
          question:
            "What will I be qualified for after completing this course?",
          answer:
            "You’ll be qualified to fly under Instrument Flight Rules (IFR), improving your flexibility, safety, and professionalism as a pilot.",
        },
      ],
    },
  },
};

export default instrumentRating;
