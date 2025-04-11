import { COMPANY_NAME } from "../../../consts";

const professionalPilotProgram = {
  data: {
    slug: "professional-pilot-program",
    pageTitle: `Professional Pilot Program (PPP) | ${COMPANY_NAME}`,
    pageDescription:
      "Start your aviation career from zero with the Professional Pilot Program. Earn all essential helicopter pilot certificates, ratings, and 200 flight hours in 10 months.",
    pageKeywords: "",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Professional helicopter pilot flying training mission",
      headerH1: `Professional Pilot<br><span>Program (PPP)</span>`,
      paragraph: `This all-in-one training program is designed for students with no prior aviation experience. In just 10 months, you’ll earn all the certificates and ratings you need to start your career as a professional helicopter pilot.`,
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
      upperHeading: "Your Career Starts Here",
      heading: "Professional Pilot Program (PPP)",
      subHeading: "Zero to Pro in 10 Months",

      title: "Overview",
      description: `
        The Professional Pilot Program (PPP) is a comprehensive, structured training path designed for individuals with no previous aviation experience. You’ll progress through every stage of flight training—from your first flight to becoming a Certified Flight Instructor with an Instrument rating.

        This course includes all required FAA certificates and ratings, along with 200 hours of helicopter flight time. You’ll graduate fully qualified to begin a career as a commercial helicopter pilot and flight instructor, including meeting SFAR-73 requirements to instruct in the Robinson R44.
      `,

      keyPoints: [
        "Designed for students with no prior flight experience",
        "Earn six FAA certificates and ratings",
        "Graduate with 200 hours total helicopter flight time",
        "Meet SFAR-73 requirements to instruct in the R44",
        "Be job-ready as a professional flight instructor",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "Private Pilot Certificate (Helicopter)",
          "Instrument Rating (IR)",
          "Commercial Pilot Certificate (Helicopter)",
          "Certified Flight Instructor (CFI)",
          "Certified Flight Instructor Instrument (CFII)",
          "Sling Load Endorsement",
          "200 hours total helicopter flight time",
          "Ground instruction for all ratings",
          "Structured lesson plans & progress tracking",
        ],
      },

      additionalCosts: {
        heading: "What’s Not Included (Additional Student Costs)?",
        items: [
          "FAA Written Exams",
          "FAA Checkrides with Designated Examiners",
          "iPad with EFB (ForeFlight Recommended)",
          "Medical Exam (Second Class or higher)",
          "Flight gear (headset, kneeboard, etc.)",
        ],
      },

      benefits: {
        heading: "Why Choose the Professional Pilot Program?",
        items: [
          "Get all your training in one cohesive, time-efficient program",
          "Graduate with a competitive resume and real-world job readiness",
          "Reduce costs compared to taking courses separately",
          "Learn from experienced helicopter pilots and instructors",
          "Join a community of professionals dedicated to your success",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        title: "Train from Zero to Career-Ready Pilot",
        description:
          "Launch your aviation career with our structured PPP course. From first flight to your first job, we’ll guide you every step of the way.",
        button: {
          name: "Apply Now",
          link: "/enroll",
        },
      },

      faqs: [
        {
          question: "How long does the Professional Pilot Program take?",
          answer:
            "The program is designed to be completed in 10 months, assuming full-time training and consistent student performance.",
        },
        {
          question: "Is prior flight experience required?",
          answer:
            "No, this program is specifically designed for students with no prior flight experience.",
        },
        {
          question: "What certificates and ratings will I earn?",
          answer:
            "You will earn Private, Instrument, Commercial, CFI, CFII, and Sling Load certifications, along with 200 total hours of helicopter flight time.",
        },
        {
          question: "Will I be eligible to instruct in the R44?",
          answer:
            "Yes, you will meet the SFAR-73 flight hour and training requirements to instruct in the Robinson R44.",
        },
        {
          question: "What helicopters will I train in?",
          answer:
            "You will train primarily in the S300CBi and R44, including glass cockpit-equipped aircraft for IFR experience.",
        },
      ],
    },
  },
};

export default professionalPilotProgram;
