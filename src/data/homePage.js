import { COMPANY_NAME, COMPANY_NICKNAME } from "../consts";
import { HUFFSTETTER_PIC as contentCTAimg } from "../constsImages";

const homePage = {
  data: {
    header: {
      stars: true,
      imagePath: "/src/assets/Direct_Fly_Alto_NG.jpg",
      imageAlt: "Alto NG Air Plane",
      headerH1: `Become a pilot today`,
      paragraph:
        "Launch your professional pilot career with USATS in Titusville, FL. </br>Our Professional Pilot Programs will get you airline ready, serving student pilots in Titusville, Cocoa Beach, Merritt Island.</br>Become a pilot at USATS today!",
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-now",
          primary: false,
        },
      ],
    },

    underHeader: {
      title: "Your Journey Starts Here",
      paragraphs: [
        "For over 30 years, we’ve been a global leader in Part 141-approved aviation training, shaping pilots for helicopters and airplanes. Our graduates fly worldwide, prepared for airlines, charter operations, and specialized aviation careers.",
        "Master your craft in modern glass-cockpit airplanes, advanced helicopters, and an airline-style training environment. With structured programs and expert mentorship, we fast-track your career launch—equipping you with skills employers demand.",
        "Soar faster, fly smarter — your aviation career begins with us.",
      ],
      image: {
        imagePath: "/src/assets/ALTO_NG.webp",
        imageAlt: "AirPlane Panel",
      },
      buttons: [
        {
          text: "About Us",
          link: "/about-us",
        },
      ],
    },

    // ourAdvantages: {
    //   images: {
    //     panel: {
    //       imagePath: "/src/assets/ALTO_NG_Panel.jpg",
    //       imageAlt: "AirPlane Panel",
    //     },
    //     h60Repair: {
    //       imagePath: "/src/assets/USATS_145_Repair_Station_UH-60.webp",
    //       imageAlt: "Two mechanic reparing a UH-60 Helicopter",
    //     },
    //     base: {
    //       imagePath: "/src/assets/USATS_base_Cover.webp",
    //       imageAlt: "USATS base building",
    //     },
    //   },
    //   buttons: [
    //     {
    //       name: "First Button",
    //       link: "#",
    //       primary: true,
    //     },
    //     {
    //       name: "Second Button",
    //       link: "#",
    //       primary: false,
    //     },
    //   ],
    // },

    // yourCarrer: {
    //   images: {
    //     pilotSeat: {
    //       imagePath: "/src/assets/ALO_NG_INTERIOR.webp",
    //       imageAlt: "AirPlane Chair's",
    //     },
    //     planeFront: {
    //       imagePath: "/src/assets/Happy_Landings_ALO_NG.webp",
    //       imageAlt: "The front of an airplane",
    //     },
    //     dismantled: {
    //       imagePath: "/src/assets/ALTO_NG_KIT.jpg",
    //       imageAlt: "Dismantled airplane",
    //     },
    //   },
    //   buttons: [
    //     {
    //       name: "First Button",
    //       link: "#",
    //       primary: true,
    //     },
    //     {
    //       name: "Second Button",
    //       link: "#",
    //       primary: false,
    //     },
    //   ],
    // },

    whatWeOffer: {
      images: {
        h60: {
          imagePath: "/src/assets/UH-60_Black_Hawk_1.webp",
          imageAlt: "UH-60 Black Hawk Flying",
        },
        hdx1200: {
          imagePath: "/src/assets/ALTO_NG.webp",
          imageAlt: "Dynon hdx1200",
        },
        cesna172: {
          imagePath: "/src/assets/USATS_Plane_N3544W.webp",
          imageAlt: "One CESNA 172 parked in a ramp",
        },
        s300: {
          imagePath: "/src/assets/Schweizer_S300_Usats_Ramp.webp",
          imageAlt: "Two S300 helicopters parked in a ramp",
        },
      },
      buttons: [
        {
          name: "First Button",
          link: "#",
          primary: true,
        },
        {
          name: "Second Button",
          link: "#",
          primary: false,
        },
      ],
    },
    whyUs: {
      upperHeading: "Why USATS",
      heading: "Your Pilot Career Begins Here",
      descriptions: [
        "From guiding life-saving Search and Rescue missions along the Gulf of Mexico to navigating VIP charters above New York City’s skyline — our graduates excel worldwide. They pilot military operations over Colombia’s jungles, Peru’s peaks, and Africa’s deserts, or command helicopters and airplanes in recreational and commercial roles across every corner of the globe.",
        "At USATS, we don’t just train pilots — we launch careers that transcend borders and redefine possibilities. Join the ranks of aviators trusted in the world’s most demanding skies.",
        "Where will your wings take you?",
      ],
      bullets: [
        {
          title: "Quality of Instruction",
          descriptions: [
            "We are committed to providing the best possible training experience for our students. Our instructors are highly qualified and experienced, and they are dedicated to helping you achieve your aviation goals.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Personal Development",
          descriptions: [
            "We pride ourselves on our personal relationships with our students. We are dedicated to getting to know you and your goals, and they will work with you to develop a training plan that is tailored to your needs. We believe that this personal relationship is key to your success as a pilot.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Competitive Pricing",
          descriptions: [
            "Train affordably on our diverse fleet: Alto NG, Cessna 172, R44, and Schweizer S300—options for every budget.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Good weather",
          descriptions: [
            "Located on the sunny Space Coast, enjoy year-round flying with minimal weather delays.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Stress-Free Checkrides",
          descriptions: [
            "Secure exams effortlessly thanks to strong relationships with DPEs—ensuring timely scheduling and trusted evaluations.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Wheel-Maintained Fleet",
          descriptions: [
            "Fly with confidence—our FAA-certified team services all aircraft in-house for peak safety and performance.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Part 141 programs",
          descriptions: [
            "Train smarter with FAA-approved Part 141 programs—fewer required hours, a structured curriculum, and a resume that stands out to airlines and employers.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Start your journey today—soar sooner with training designed for success!",
          descriptions: [],
          icon: "",
        },
      ],
      imageLegend: "Become a Pilot with USATS",
      imagePath: "/src/assets/USATS_banner_Application.webp",
      imageAlt: "",
    },

    quizCTA: {
      upperHeading: "CAREER",
      heading: "Elevate Your Career in a High-Demand Aviation Market",
      descriptions: [
        "The aviation industry faces a critical shortage of pilots, with airlines and helicopter sectors racing to fill seats. Airline demand is skyrocketing—Boeing projects *600,000 new pilots needed by 2042*. Helicopter roles are equally urgent, with growth in EMS, energy, tourism, and firefighting. Whether you choose fixed-wing or rotorcraft, your skills will be in demand.", 
        `At ${COMPANY_NAME}, we fast-track your readiness. Part 141 training reduces required hours while meeting strict FAA standards, and our modern fleet (Cessna 172, R44, glass-cockpit aircraft) mirrors real-world operations. With strong DPE relationships ensuring smooth checkrides, you’ll graduate job-ready faster—and stand out to top employers.`,
        "The sky isn’t the limit — it’s your workplace. ",
      ],
      imageLegend: "Our satisfied student receiving a certificate",
      imagePath: contentCTAimg.imagePath,
      imageAlt: contentCTAimg.imageAlt,
    },

    blogfeed: {
      upperHeading: "",
      heading: "",
      description: "",
    },

    flyWithUsCTA: {
      imagePath: "",
      imageAlt: "",
      headerH1: ``,
      paragraph: "",
      buttons: [
        {
          name: "",
          link: "",
          primary: true,
        },
      ],
    },

    testimonials: {
      upperHeading: "",
      heading: "",
      headingText: ["", ""],
      buttonText: "",
      buttonLink: "",
      reviews: [
        {
          body: "",
          author: "",
        },
        {
          body: "",
          author: "",
        },
        {
          body: "",
          author: "",
        },
        {
          body: "",
          author: "",
        },
        {
          body: "",
          author: "",
        },
        {
          body: "",
          author: "",
        },
      ],
    },
    frequentQuestions: {
      title: "",
      description: "",
      questions: [
        {
          question: "Why choose USATS?",
          answer: "USATS is a globally recognized military aviation leader with 30+ years of training elite pilots, offering FAA + NATO-certified programs on combat-proven platforms like the UH-60 Black Hawk—all with 320+ annual flying days and a 38-acre tactical training complex.",
        },
        {
          question: "What I can Expect from USATS training?",
          answer: "Career-focused training: Master everything from private pilot basics to advanced instrument flying, with optional courses in leadership (CRM/TEM) honed from military programs. Enjoy small classes, 2:1 instructor ratios, and access to NASA-adjacent airspace for unparalleled training diversity.",
        },
        {
          question: "Is there any requirements to join?",
          answer: "No experience needed! Start with zero hours—just a passion to fly. Medical certification (Class 2+) and English proficiency required. Military veterans: leverage your background for accelerated pathways. International students: M1 visa eligibility, proof of funds, and academic transcripts. USATS assists with visa logistics, housing, and airport transfers!",
        },
      ],
      buttons: [
        {
          name: "Contact Us",
          link: "contact-us",
          primary: true,
        },
      ],
    },
  },
};

export default homePage;
