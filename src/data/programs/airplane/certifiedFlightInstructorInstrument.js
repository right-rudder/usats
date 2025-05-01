import { COMPANY_NAME } from "../../../consts";

const certifiedFlightInstructorInstrument = {
  data: {
    slug: "certified-flight-instructor-instrument",
    pageTitle: `Certified Flight Instructor Instrument | ${COMPANY_NAME}`,
    pageDescription:
      "Become a Certified Flight Instructor Instrument (CFII) under Part 61. This advanced course prepares you to teach instrument flight techniques and guide students through precision instrument training.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["Part 61", "CFII"],
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "CFII Instructor teaching in-flight instrument techniques",
      headerH1: `Certified Flight Instructor<br><span>INSTRUMENT</span>`,
      paragraph: `Take your instructional skills to the next level by becoming a Certified Flight Instructor Instrument (CFII). This course prepares you to provide comprehensive instrument flight training and mentor aspiring instrument-rated pilots.`,
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
      upperHeading: "Master. Teach. Guide.",
      heading: "Certified Flight Instructor Instrument (CFII)",
      subHeading: "FAA Part 61 Certified",

      title: "Overview",
      description: `
        The CFII Pilot Course is a focused training program designed for certified flight instructors who want to specialize in teaching instrument flying.
        This course builds on your existing knowledge and emphasizes the development of precise instrument flying skills, advanced navigation, and instructional methods tailored to instrument flight scenarios.
        Graduates of this course are authorized to teach instrument rating students in both simulator and in-flight environments.
      `,

      keyPoints: [
        "FAA Part 61 Certified",
        "Specialize in instrument flight instruction",
        "Prepare pilots for IFR conditions and precision flying",
        "Hands-on instruction with real instrument approaches",
        "Develop expertise in teaching complex flight environments",
      ],

      // What's Included
      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "15 Hours Dual Instruction",
          "10 Hours Ground Instruction",
          "10 Hours Tutored Instruction",
          "5 Hours Pre/Post Briefing",
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
        heading: "Why Get a CFII Certificate?",
        items: [
          "Expand your instructional qualifications",
          "Teach advanced students in instrument flight",
          "Build flight hours in IFR environments",
          "Increase your employability as a flight instructor",
          "Lay the foundation for ATP-level flying and beyond",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        title: "Start Training the Next Generation of Instrument Pilots",
        description:
          "Help students safely navigate the skies in low visibility and complex weather. The CFII program trains you to lead them there with confidence.",
        button: {
          name: "Apply Now",
          link: "/enroll-now",
        },
      },

      price: "$4,850 (Alto-NG) <br> $5,600 (C-172S)",

      // FAQs
      faqs: [
        {
          question: "Who is this course for?",
          answer:
            "This course is designed for Certified Flight Instructors (CFIs) who wish to become authorized to provide instrument flight instruction.",
        },
        {
          question: "What makes the CFII different from the CFI?",
          answer:
            "The CFII focuses on instrument flight training, enabling you to teach IFR procedures, approaches, and instrument navigation.",
        },
        {
          question: "Do I need a separate checkride for the CFII?",
          answer:
            "Yes. You will complete a checkride that includes both an oral and flight examination to receive your CFII certification.",
        },
        {
          question: "Is this a Part 61 or Part 141 program?",
          answer:
            "This course is offered under <strong>FAA Part 61</strong>, providing flexibility in scheduling and training options.",
        },
        {
          question: "Can I teach IFR students after completing this course?",
          answer:
            "Yes. After receiving your CFII certificate, you will be qualified to train students seeking their Instrument Rating.",
        },
      ],
    },
  },
};

export default certifiedFlightInstructorInstrument;
