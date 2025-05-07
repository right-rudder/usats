import { COMPANY_NAME } from "../../../consts";
import { pppFw as programPrices} from "../../../flightTrainingProgramsPrices";

const professionalPilotProgram = {
  data: {
    slug: "professional-pilot-program",
    pageTitle: `Professional Pilot Program | ${COMPANY_NAME}`,
    pageDescription:
      "Become a professional pilot through our comprehensive FAA-approved program in sunny Central Florida. Gain your Private, Instrument, Commercial, CFI, and CFII licenses with expert instruction and modern training tools.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["Part 141/61", "PPL", "IR", "CPL", "CFI", "CFII"],
      imagePath: "/src/assets/placeholder.webp",
      imageAlt:
        "Students training under sunny Florida skies at US Aviation Training Solutions",
      headerH1: `Professional Pilot <br>PROGRAM</span>`,
      paragraph: `From zero experience to fully licensed professional pilot. Earn your FAA Private, Instrument, Commercial, CFI, and CFII licenses with US Aviation Training Solutions in Central Florida.`,
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
      upperHeading: "Your Career in Aviation Starts Here",
      heading: "Professional Pilot Program (PPP)",
      subHeading: "",

      title: "Overview",
      description: `
        Designed for students starting from zero flying experience, our Professional Pilot Program offers a structured and efficient path to your aviation career. With almost year-round sunny weather in Titusville, Florida, students benefit from optimal flying conditions and accelerated progress.
        <br/>
        You will earn:
        <br/>
        - Private Pilot License (FAA Part 141)
        <br/>
        - Instrument Rating (FAA Part 141)
        <br/>
        - Commercial License (FAA Part 141)
        <br/>
        - Certified Flight Instructor (FAA Part 61)
        <br/>
        - Certified Flight Instructor Instrument (FAA Part 61)
        <br/>

        Total Duration: ~12 months
      `,

      keyPoints: [
        "FAA Part 141/61 Approved Program",
        "Earn 5 licenses in 12 months with zero prior experience",
        "Training conducted in Titusville, Florida with ideal weather conditions",
        "Structured ground, dual, and solo flight instruction",
        "Includes simulator-based training and PDF materials",
        "Pathway to career-ready flight instructor certification",
      ],

      // What's Included
      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "239.6 Total Flight Hours",
          "169.6 Hours Dual Instruction",
          "70 Hours Solo Flight Time",
          "128 Hours Ground Instruction",
          "53 Hours of Tutored Instruction",
          "52.5 Hours Pre/Post Flight Briefing",
          "PDF Books & Documents (freely downloadable)",
          "Simulator App for home-based training",
          "FAA Written Test, Checkride, and Aircraft Rental Costs",
        ],
      },

      // Additional Costs
      additionalCosts: {
        heading: "What’s Not Included (Additional Student Costs)?",
        items: [
          "Flight Gears (Headset,kneeboard,etc...)",
          "Teaching material, book, POH/RFM",
          "Ipad with EFB (Foreflight recommended)",
          "FAA Medical Exam (Class 2 or higher required)",
          "FAA written test & checkride fees",
        ],
      },

      // Benefits
      benefits: {
        heading: "Why Train with US Aviation Training Solutions?",
        items: [
          " Complete FAA-Certified Curriculum for Professional Pilots",
          " Accelerated 12-Month Program in Ideal Weather Conditions",
          " Experienced Instructors and Supportive Learning Environment",
          " Technology-Driven Training (EFB, Simulator App, PDF Books)",
          " Multiple Aircraft Options: Alto NG or Cessna 172",
          " Transparent Pricing: FAA fees included, flexible packages available",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        title: "Launch Your Aviation Career in Just 12 Months",
        description:
          "Whether you're pursuing a career as a commercial pilot or flight instructor, our Professional Pilot Program gives you the training, credentials, and confidence to take off.",
        button: {
          name: "Apply Now",
          link: "/enroll",
        },
      },

      prices: programPrices,

      // FAQs
      faqs: [
        {
          question: "How much does the full program cost?",
          answer: `
            Fixed Wing Training Costs:
            <ul>
              <li><strong>Zero-to-CPL:</strong> $55,655 (Alto NG) or $62,660 (Cessna 172)</li>
              <li><strong>Zero-to-CPL + CFI/CFII:</strong> $72,043 (Alto NG) or $84,473 (Cessna 172)</li>
            </ul>
            Helicopter Training Costs:
            <ul>
              <li><strong>Zero-to-CPL:</strong> $97,469</li>
              <li><strong>Zero-to-CPL + CFI/CFII:</strong> $126,898</li>
            </ul>
            Prices include FAA written tests, checkrides, and aircraft rental. Logistics and foreign enrollment fees not included.
          `,
        },
        {
          question: "What equipment do I need to start?",
          answer: `
            Students must have:
            <ul>
              <li>Kneeboard: $41</li>
              <li>Tablet/iPad (with GPS): ~$590</li>
              <li>ForeFlight Subscription: $125</li>
            </ul>
            <br>
            Optional: Headset (~$250, can be purchased later).<br>
            All materials are digital—books and manuals are available as downloadable PDFs.
          `,
        },
        {
          question: "What is the schedule like?",
          answer:
            "The program is designed to be completed in approximately 12 months under full-time commitment. The consistent sunny weather in Central Florida allows for frequent flying and uninterrupted training.",
        },
        {
          question: "Can I enroll if I’m an international student?",
          answer:
            "Yes, international students are welcome! Please note that additional enrollment and logistical fees may apply. Contact us for a custom onboarding guide.",
        },
        {
          question: "What aircraft are used for training?",
          answer:
            "You can train in either the Alto NG or Cessna 172 for fixed-wing tracks. Helicopter training uses a separate fleet. Choose the aircraft that fits your budget and preference.",
        },
      ],
    },
  },
};

export default professionalPilotProgram;
