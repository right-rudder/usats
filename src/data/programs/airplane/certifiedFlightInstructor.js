import { COMPANY_NAME } from "../../../consts";
import { cfiFw as programPrices} from "../../../flightTrainingProgramsPrices";

import { 
  DIRECTFLY_ALTONG_BLUE_USATS_RAMP_WEBP,
  CESSNA_AND_ALTO,
} from "../../../constsImages";


const certifiedFlightInstructor = {
  data: {
    slug: "certified-flight-instructor",
    pageTitle: `Certified Flight Instructor | ${COMPANY_NAME}`,
    pageDescription:
      "Become a Certified Flight Instructor (CFI) under Part 61. This course prepares you to train the next generation of pilots through expert instruction and practical teaching experience.",
    pageKeywords: "",

    // Top Header
    header: {
      badges: ["Part 61", "CFI"],
      imagePath: DIRECTFLY_ALTONG_BLUE_USATS_RAMP_WEBP.imagePath,
      imageAlt: DIRECTFLY_ALTONG_BLUE_USATS_RAMP_WEBP.imageAlt,
      headerH1: `Certified <br>FLIGHT INSTRUCTOR</span>`,
      paragraph: `Turn your flight experience into a teaching career with our Certified Flight Instructor (CFI) course. Learn how to train and inspire the next generation of pilots in a Part 61 setting.`,
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
      upperHeading: "Teach. Lead. Inspire.",
      heading: "Certified Flight Instructor (CFI)",
      subHeading: "FAA Part 61 Certified",

      title: "Overview",
      description: `
        The Certified Flight Instructor (CFI) Pilot Course is designed for experienced pilots who wish to share their knowledge and passion for aviation. 
        This intensive course emphasizes both theoretical understanding and practical application of instructional techniques. 
        You’ll learn to plan and deliver flight lessons, evaluate student progress, and promote aviation safety and professionalism.
      `,

      keyPoints: [
        "FAA Part 61 Certified",
        "Train to become a professional flight instructor",
        "Instructional techniques for both flight and ground training",
        "Gain experience while earning income as a CFI",
        "Focus on communication, safety, and mentorship",
      ],

      // What's Included
      included: {
        heading: "What’s Included in Your Training Package?",
        items: [
          "25 Hours Dual Instruction",
          "10 Hours Ground Instruction",
          "10 Hours Tutored Instruction",
          "7.5 Hours Pre/Post Briefing",
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
        heading: "Why Become a CFI?",
        items: [
          "Begin your professional flying career while building hours",
          "Inspire and mentor new pilots",
          "Gain instructional experience recognized by airlines",
          "Open the door to additional ratings like CFII and MEI",
          "Earn while you fly and develop leadership in aviation",
        ],
      },

      prices: programPrices,

      cta: {
        imagePath: CESSNA_AND_ALTO.imagePath,
        imageAlt: CESSNA_AND_ALTO.imageAlt,
        title: "Start Instructing the Future of Aviation",
        description:
          "Take the next step in your aviation journey and help others begin theirs. Our CFI program equips you to teach, lead, and thrive as a professional flight instructor.",
        button: {
          name: "Apply Now",
          link: "/enroll-now",
        },
      },

      // FAQs
      faqs: [
        {
          question: "Who is this course for?",
          answer:
            "This course is ideal for experienced pilots who want to become certified flight instructors under FAA Part 61 regulations.",
        },
        {
          question: "Is this a Part 61 or Part 141 program?",
          answer:
            "This is a <strong>Part 61 certified program</strong>, offering flexible scheduling and tailored instruction for experienced pilots.",
        },
        {
          question: "What can I do with a CFI certificate?",
          answer:
            "With a CFI certificate, you can teach students how to fly, gain paid flight hours, and build experience that is highly valued by airlines.",
        },
        {
          question: "Will I learn how to teach both ground and flight lessons?",
          answer:
            "Yes. The course includes instruction on teaching both in the classroom and in the cockpit, covering practical and theoretical knowledge.",
        },
        {
          question: "What are the prerequisites for this course?",
          answer:
            "You must hold a Commercial Pilot License (CPL) and meet the aeronautical experience requirements to enroll in the CFI course.",
        },
      ],
    },
  },
};

export default certifiedFlightInstructor;
