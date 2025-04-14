import { COMPANY_NAME } from "../../../consts";

const cfiCourse = {
  data: {
    slug: "certified-flight-instructor",
    pageTitle: `Certified Flight Instructor | ${COMPANY_NAME}`,
    pageDescription:
      "Kickstart your aviation career by becoming a Certified Flight Instructor (CFI). Learn to teach, build hours, and grow your expertise with our tailored instructor course.",
    pageKeywords: "",

    // Top Header
    header: {
      stars: true,
      imagePath: "/src/assets/placeholder.webp",
      imageAlt: "Certified flight instructor guiding a student in helicopter controls",
      headerH1: `Certified Flight<br><span>Instructor (CFI)</span>`,
      paragraph: `The most common path to a commercial flying career starts with becoming a Certified Flight Instructor. Build flight time, refine your skills, and pass on your knowledge in a rewarding and challenging role. Our CFI program is designed to turn experienced pilots into excellent teachers and mentors.`,
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
      upperHeading: "Turn Experience Into Opportunity",
      heading: "Certified Flight Instructor (CFI)",
      subHeading: "FAA Part 61 Training",

      title: "Overview",
      description: `
        After completing your commercial training, earning your CFI is the most direct way to get hired and start building hours for your aviation career. But beyond being a stepping stone, teaching others to fly is one of the most fulfilling and skill-deepening experiences you can have as a pilot.
        
        Our CFI course focuses not only on technical knowledge and flight proficiency, but also on essential instructional skills like communication, error correction, CRM, ADM, and TEM. You’ll learn to teach from day one—and become the kind of instructor who inspires and equips the next generation of pilots.
      `,

      keyPoints: [
        "Gain your first flying job as an instructor",
        "Develop teaching and communication skills",
        "Learn to detect and correct student mistakes",
        "Practice CRM, ADM, and TEM in instructional settings",
        "Fly and teach in the S300CBi and R44 helicopters",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "60 Hours of Ground Instruction (FOI, PPL, CPL teaching content)",
          "25 Hours of Dual Flight Instruction (expected)",
          "Training focused on safe, effective flight instruction methods",
          "Instruction in Crew Resource Management (CRM), Aeronautical Decision Making (ADM), and Threat and Error Management (TEM)",
          "*Actual flight time based on individual performance",
        ],
      },

      additionalCosts: {
        heading: "What’s Not Included (Additional Student Costs)?",
        items: [
          "FAA Written Exams (FOI and CFI)",
          "Checkride with FAA Examiner",
          "iPad with EFB (ForeFlight Recommended)",
          "Medical Exam (Second Class or higher)",
          "Teaching materials, books, charts",
        ],
      },

      benefits: {
        heading: "Why Become a Certified Flight Instructor?",
        items: [
          "Most common first job for new commercial pilots",
          "Build flight time while earning income",
          "Deepen your own skills by teaching others",
          "Meet hour requirements for future job opportunities",
          "Gain experience in leadership and mentorship",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        title: "Ready to Launch Your Flying Career?",
        description:
          "Our Certified Flight Instructor course gives you the tools to succeed as a teacher, mentor, and professional pilot. Get started on the path to becoming a respected aviation leader.",
        button: {
          name: "Apply Now",
          link: "/enroll",
        },
      },

      price: "$19,611",

      faqs: [
        {
          question: "How long does the CFI course take?",
          answer:
            "The program typically takes around 2 months, depending on your performance and schedule.",
        },
        {
          question: "What are the prerequisites?",
          answer:
            "You must hold a Commercial or ATP Rotorcraft-Helicopter Certificate and be proficient in English (read, speak, write, understand).",
        },
        {
          question: "What aircraft will I train in?",
          answer:
            "You’ll train in the S300CBi and R44 helicopters for your instructional preparation.",
        },
        {
          question: "What will I learn to teach?",
          answer:
            "You’ll cover the Fundamentals of Instruction (FOI) as well as the full Private and Commercial Pilot curriculum, learning how to safely and effectively transfer knowledge and skills to students.",
        },
        {
          question: "Is becoming a CFI just for hour building?",
          answer:
            "While many pilots start here to build hours, teaching is one of the most challenging and rewarding parts of aviation. It sharpens your knowledge, confidence, and leadership—all essential for a successful career.",
        },
      ],
    },
  },
};

export default cfiCourse;
