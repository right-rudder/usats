import { COMPANY_NAME } from "../../../consts";

const atpL = {
  data: {
    slug: "airline-transport-pilot-license",
    pageTitle: `ATP-L | ${COMPANY_NAME}`,
    pageDescription:
      "Earn the highest level of helicopter certification: Airline Transport Pilot (ATP-L). Tailored refresher training and checkride prep for experienced commercial pilots.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["ATP-L"],
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Helicopter pilot preparing for ATP-L checkride",
      headerH1: `Airline Transport</br>Pilot`,
      paragraph: `The ATP-L is the highest certification you can achieve as a helicopter pilot. Required for acting as PIC in IFR two-crew operations, it’s primarily an advanced instrument checkride with elevated standards. We’ll help you refresh and sharpen your skills to pass with confidence.`,
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
      upperHeading: "Fly at the Highest Level",
      heading: "ATP-L Certification",
      subHeading: "Advanced Preparation for Experienced Pilots",

      title: "Overview",
      description: `
        The Airline Transport Pilot License for rotorcraft (ATP-L) is the pinnacle of helicopter certifications. While no formal training is mandated by the FAA, the reality is that most applicants benefit greatly from a refresher to meet the high standards of the checkride—especially if you’ll be flying a basic single-engine helicopter without stabilization or autopilot.

        Our flexible course is built around your experience and training background. Whether you're converting an ICAO license or operating in IFR regularly, we’ll tailor a plan to help you succeed on your first attempt.
      `,

      keyPoints: [
        "Highest FAA certification for rotorcraft pilots",
        "Required to act as PIC in IFR operations with 2-pilot aircraft",
        "Focused on precision instrument flying and advanced VFR maneuvers",
        "No mandatory training, but a personalized refresher is highly recommended",
        "Ideal for experienced commercial pilots pursuing career advancement",
      ],

      included: {
        heading:
          "Typical Training Profile (Based on Prior FAA Certificate Holders):",
        items: [
          "5 hours Ground Training",
          "3 hours Dual VFR Training",
          "5 hours Dual IFR Training",
          "Aircraft familiarization & maneuver prep",
          "Mock checkride if needed",
        ],
      },

      additionalCosts: {
        heading: "What’s Not Included (Additional Student Costs)?",
        items: [
          "FAA ATP Knowledge Exam (if required)",
          "FAA Checkride with Designated Examiner",
          "FAA Medical Certificate (Minimum Class 3)",
          "Flight gear (headset, kneeboard, etc.)",
        ],
      },

      benefits: {
        heading: "Why Train With Us?",
        items: [
          "Flexible program tailored to your experience",
          "Experienced instructors who’ve passed the ATP checkride",
          "Efficient brush-up to help limit your training hours",
          "Access to both S300CBi and R44 helicopters",
          "Support for foreign license conversions (FAA verification letter required)",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        title: "Ready for the Final Step in Your Certification?",
        description:
          "Let’s sharpen your skills and get you certified as an Airline Transport Pilot. Reach out for a custom training assessment and course plan.",
        button: {
          name: "Request Info",
          link: "/contact",
        },
      },

      faqs: [
        {
          question: "Is training required to obtain an ATP-L certificate?",
          answer:
            "Technically, no. The FAA does not require any specific training. However, most pilots benefit from a refresher to meet the high standards of the checkride—especially in basic aircraft without autopilot or stability systems.",
        },
        {
          question: "How long is the ATP-L course?",
          answer:
            "The course typically takes 1–2 weeks depending on your currency, background, and training needs.",
        },
        {
          question: "What are the prerequisites for this course?",
          answer:
            "You must hold an FAA or ICAO Commercial Certificate and Instrument rating (helicopter), an FAA Class 3 Medical, and meet ATP flight time minimums under FAR 61.161.",
        },
        {
          question: "What helicopters will I train in?",
          answer:
            "We use the S300CBi and R44 for training, based on your skill level and checkride strategy.",
        },
        {
          question: "Can you help with foreign license conversion?",
          answer:
            "Yes. If you hold an ICAO license, we can support your FAA license verification process and ATP-L preparation.",
        },
      ],
    },
  },
};

export default atpL;
