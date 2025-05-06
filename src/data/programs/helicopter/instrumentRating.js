import { COMPANY_NAME } from "../../../consts";
import { irRw as programPrices} from "../../../flightTrainingProgramsPrices";

const instrumentRating = {
  data: {
    slug: "instrument-rating",
    pageTitle: `Instrument Rating (IR) | ${COMPANY_NAME}`,
    pageDescription:
      "Elevate your helicopter pilot skills with our Instrument Rating course. Enhance safety, boost your employability, and train in both traditional and modern glass cockpit environments.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["IR"],
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Helicopter pilot flying in IMC with advanced cockpit display",
      headerH1: `Instrument Rating<br><span>(IR)</span>`,
      paragraph: `An Instrument Rating is no longer optional for today’s helicopter pilots—it’s essential. Improve your safety, expand your employment opportunities, and build confidence flying in low-visibility conditions with real-world IFR training from our experienced team.`,
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
      upperHeading: "Train for Precision. Fly with Confidence.",
      heading: "Instrument Rating (IR)",
      subHeading: "FAA Part 61 & Part 141 Options",

      title: "Overview",
      description: `
        An Instrument Rating is a must-have for any serious helicopter pilot. Whether you're flying offshore, working EMS, or seeking your first job as a flight instructor, being instrument-rated gives you a significant advantage. Even for VFR-only pilots, this training dramatically enhances your safety by preparing you for poor weather and reducing decision-making risks.
        
        Our curriculum is crafted by instructors with real-world IFR experience—from the North Sea to West Africa. You'll train in both traditional 6-pack instrument helicopters and modern glass cockpit environments, ensuring broad competence and confidence.
      `,

      keyPoints: [
        "Essential for safety and professional advancement",
        "Required for many jobs and insurance policies",
        "Real-world IFR instruction from experienced pilots",
        "Available in both analog and glass cockpit aircraft",
        "Greatly improves flight decision-making and survivability",
      ],

      // What's Included
      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "68 Hours of Ground School",
          "31.5 Hours of Dual Instrument Flight Training",
          "3.5 Hours of Simulator Time",
          "Training in both traditional and glass cockpit aircraft",
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
          "Drastically improve flight safety and ADM",
          "Meet hiring requirements for most commercial jobs",
          "Qualify for IFR operations (EMS, offshore, VIP)",
          "Boost your marketability as a flight instructor",
          "Train with real-world IFR experts in modern aircraft",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        title: "Add Confidence and Capability to Every Flight",
        description:
          "Gain the precision, judgment, and skill to fly safely in IMC. Whether you're aiming for a professional career or simply want to fly smarter, this course will set you apart.",
        button: {
          name: "Apply Now",
          link: "/enroll-now",
        },
      },

      prices: programPrices,

      // FAQs
      faqs: [
        {
          question: "Who should take this course?",
          answer:
            "Pilots seeking to fly in instrument meteorological conditions (IMC), boost their employability, or improve safety—even if planning to fly primarily VFR.",
        },
        {
          question: "What are the prerequisites?",
          answer:
            "You must hold a Private Pilot Certificate (Rotorcraft-Helicopter) and be proficient in English (reading, speaking, writing, and understanding).",
        },
        {
          question: "What helicopters are used for training?",
          answer:
            "We use the S300CBi and R44 helicopters, offering both traditional and glass cockpit configurations.",
        },
        {
          question: "How long is the course?",
          answer:
            "Approximately 2.5 months, though this depends on student performance and availability.",
        },
        {
          question: "Do I need prior instrument experience?",
          answer:
            "No prior instrument flight experience is required, but we’ll bring you up to a high level of proficiency through structured training and simulation.",
        },
      ],
    },
  },
};

export default instrumentRating;
