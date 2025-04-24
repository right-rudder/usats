import { COMPANY_NAME } from "../../../consts";

const cfiiCourse = {
  data: {
    slug: "certified-flight-instructor-instrument",
    pageTitle: `Certified Flight Instructor Instrument (CFII) | ${COMPANY_NAME}`,
    pageDescription:
      "Enhance your teaching credentials and expand your career opportunities with the CFII rating. Learn to instruct instrument students with focused helicopter-specific IFR training.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["CFII"],
      imagePath: "/src/assets/placeholder.webp",
      imageAlt:
        "Flight instructor training a student in helicopter IFR procedures",
      headerH1: `Certified Flight Instructor<br>Instrument`,
      paragraph: `Take the next step in your instructional career by adding an Instrument Instructor rating to your credentials. Our CFII course prepares you to teach instrument flying in helicopters, increasing your employability and deepening your technical skillset.`,
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
      upperHeading: "Become a Specialist in Instrument Flight Instruction",
      heading: "Certified Flight Instructor Instrument (CFII)",
      subHeading: "FAA Part 61 Training",

      title: "Overview",
      description: `
        The Certified Flight Instructor Instrument (CFII) course is designed for licensed instructors who want to expand their qualifications to teach instrument flying. This advanced rating allows you to instruct students working toward their instrument rating and makes you a more valuable asset to flight schools and employers.

        The training includes helicopter-specific instrument knowledge and focuses on instructional techniques and procedures needed to safely and effectively teach IFR operations in both traditional and glass cockpit environments.
      `,

      keyPoints: [
        "Teach instrument flying in helicopters",
        "Sharpen your own IFR proficiency and techniques",
        "Train in a structured, instructor-focused environment",
        "Increase your employability at flight schools and operators",
        "Learn advanced dual instruction methods in IFR scenarios",
      ],

      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "Helicopter-specific IFR instructional knowledge",
          "Estimated 15 hours of dual instruction",
          "*Actual flight hours based on individual performance and experience",
        ],
      },

      additionalCosts: {
        heading: "What’s Not Included (Additional Student Costs)?",
        items: [
          "FAA Written Exam (if required)",
          "Checkride with FAA Examiner",
          "iPad with EFB (ForeFlight Recommended)",
          "Medical Exam (Second Class or higher)",
          "Any additional training hours needed beyond estimate",
        ],
      },

      benefits: {
        heading: "Why Get Your CFII Rating?",
        items: [
          "Qualify to teach instrument students",
          "Become more competitive in the job market",
          "Broaden your instructional capabilities",
          "Build IFR experience and flight hours",
          "Advance your professional development",
        ],
      },

      cta: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        title: "Elevate Your Teaching and Career",
        description:
          "With your CFII rating, you’ll be able to help students master one of the most critical skills in aviation—instrument flight. Start your upgrade today.",
        button: {
          name: "Apply Now",
          link: "/enroll",
        },
      },

      price: "$9,818",

      faqs: [
        {
          question: "How long is the CFII course?",
          answer:
            "The CFII course is designed to be completed in approximately 1 month, depending on your experience and instructional currency.",
        },
        {
          question: "Do I need to be a CFI first?",
          answer:
            "Yes, you must hold a Certified Flight Instructor (CFI) Rotorcraft-Helicopter certificate to begin CFII training.",
        },
        {
          question: "How many hours are required?",
          answer:
            "While the actual dual instruction time will vary based on your experience, students can expect to fly approximately 15 hours.",
        },
        {
          question: "What kind of helicopters will I train in?",
          answer:
            "Training is conducted in the same aircraft as other courses: primarily the S300CBi and R44.",
        },
        {
          question: "Why should I pursue a CFII rating?",
          answer:
            "The CFII rating allows you to teach instrument students, making you more versatile and valuable as a flight instructor, while also helping you build additional hours and IFR expertise.",
        },
      ],
    },
  },
};

export default cfiiCourse;
