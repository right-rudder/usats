import { COMPANY_NAME, COMPANY_NICKNAME } from "../consts";
import { HUFFSTETTER_PIC } from "../constsImages";

const homePage = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Flight School Titusville FL | Airplane & Helicopter Training | USATS",
    pageDescription:
      "Top FAA-certified flight school in Titusville, FL. USATS offers airplane and helicopter pilot training, discovery flights, and international student programs. Start your aviation career today!",
    pageKeywords:
      "flight school Titusville, pilot training Florida, helicopter school FL, airplane training USATS, learn to fly Titusville, FAA pilot certification, USATS aviation, Brevard County flight school, Space Coast pilot training, Part 141 flight training, international student pilot program, aviation career Florida, discovery flights Titusville, Florida flight instruction",

    header: {
      stars: true,
      imagePath: "/src/assets/direct_fly_alto_ng-USATS-florida-instrument-rating-training.jpg",
      imageAlt:
        "Direct Fly Alto NG aircraft in flight over Florida's Space Coast - USATS training fleet",
      headerH1: `Become a pilot today`,
      paragraph:
        "Launch your professional pilot career with USATS in Titusville, FL. </br>Our Professional Pilot Programs will get you airline ready, serving student pilots in Titusville, Cocoa Beach and Merritt Island, Viera and beyond. </br>Whether you're local or an international student, USATS is your destination to become a professional pilot. Apply today!",
      buttons: [
        {
          name: "Start Your Pilot Training Journey",
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
        imagePath: "/src/assets/alto_ng-USATS-titusville-professional-pilot-program.webp",
        imageAlt:
          "ALTO NG training aircraft with glass cockpit avionics at USATS flight school in Titusville",
      },
      buttons: [
        {
          text: "Learn About Our Flight School History",
          link: "/about-us",
        },
        {
          text: "Discover the USATS Training Advantage",
          link: "#why-us",
        },
      ],
    },

    whatWeOffer: {
      images: {
        // h60: {
        //   imagePath: "/src/assets/uh-60_black_hawk_1-USATS-titusville-commercial-pilot-program.webp",
        //   imageAlt:
        //     "UH-60 Black Hawk helicopter at USATS military aviation training facility in Titusville FL",
        // },
        hdx1200: {
          imagePath: "/src/assets/alto_ng-USATS-titusville-professional-pilot-program.webp",
          imageAlt:
            "ALTO NG aircraft with Dynon HDX1200 glass cockpit avionics for modern flight training",
        },
        cesna172: {
          imagePath: "/src/assets/usats_plane_n3544w-USATS-florida-flight-lessons-near-orlando.webp",
          imageAlt:
            "Cessna 172 Skyhawk N3544W training aircraft at USATS flight school ramp in Titusville",
        },
        s300: {
          imagePath: "/src/assets/schweizer_s300_usats_ramp-USATS-florida-private-pilot-license-fl.webp",
          imageAlt:
            "Schweizer S300 training helicopters on USATS ramp at Space Coast Regional Airport in Florida",
        },
      },
      buttons: [
        {
          name: "Explore Our Aircraft Fleet",
          link: "/about-us#our-fleet",
          primary: true,
        },
        {
          name: "View Training Programs",
          link: "/airplane-training",
          primary: false,
        },
      ],
    },
    whyUs: {
      upperHeading: "Why USATS",
      heading: "Your Professional Pilot Career Begins Here",
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
          title:
            "Start your journey today—soar sooner with training designed for success!",
          descriptions: [],
          icon: "",
        },
      ],
      imageLegend: "Become a Pilot with USATS",
      imagePath: "/src/assets/usats_banner_application-USATS-titusville-flight-school-florida.webp",
      imageAlt:
        "USATS flight school application banner for prospective student pilots - start your aviation career",
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
      imagePath: HUFFSTETTER_PIC.imagePath,
      imageAlt: HUFFSTETTER_PIC.imageAlt,
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
      upperHeading: "THE USATS EXPERIENCE",
      heading: "What Our Students Are Saying About Our Flight School",
      paragraphs: [
        "I came for a flight review and some flights for a few days. Communication was straightforward and transparent. Relatively new c172 with g1000 was available for all the times I requested. Flight instructor Ethan was courteous and safe. Plane was well maintained and I felt that I was in safe hands",
      ],
      headingText: ["Student Success Stories", "Aviation Training Excellence"],
      buttonText: "Read More Testimonials",
      buttonLink: "/testimonials",
      mainReview: {
        body: "We would like to address our appreciation to all the Schools (personnel), generally, and to the instructors specifically for their complex works and dedication, which has helped us grow our skill and knowledge significantly and provided us with all the ability to become professional pilots in the future.",
        author: "ROYAL MALASIAN POLICE",
        imagePath: "/src/assets/placeholder-USATS-titusville-aviation-academy-florida.webp",
        imageAlt:
          "Royal Malaysian Police aviation unit pilots trained at USATS flight school in Titusville Florida",
        stars: 5,
      },

      reviews: [
        {
          body: "Absolutely amazing. Stephane went out of his way to ensure that I was fully prepared for the check ride and provided the best test prep experience possible. Betsy and Kathy were great with assisting me to ensure I got all the required documents in place before my arrival. I would highly recommend USATS to a friend or colleague, and I look forward to returning for more training in the near future.",
          author: "RUDI VALENTINE",
          imagePath: "",
          imageAlt: "",
          stars: 5,
        },
        {
          body: "The instructors were professional in all their activities. The instructors diligently discharged their duties. They assisted the struggling pilots and encouraged the sharp ones. The ultimate lesson they taught pilots were patience, planning and correct execution. The introduction of pilots to the glass cockpit has helped the Ghana Air Force pilots adjust to the glass cockpit of the aircraft they fly.",
          author: "GHANA AIR FORCE",
          imagePath: "",
          imageAlt: "",
          stars: 5,
        },
        {
          body: "Best Flight School I’ve ever been to. Amicable staff instructors are all high-time and incredibly knowledgeable. Scheduling is consistent, and the school’s location makes flights unlikely to be cancelled for weather. The maintenance team is also brilliant and always answers any questions instructors and students may have.",
          author: "JOB SAVAGE",
          imagePath: "",
          imageAlt: "",
          stars: 5,
        },
        {
          body: "My experience at the school was unique and rewarding. There are many schools available to obtain a pilot’s license, but only one gives you a holistic experience. From day one, I understood that my responsibility as a helicopter pilot goes above and beyond passing check rides. I would recommend this school to anyone serious about becoming a leader and a professional pilot.",
          author: "M GOMES",
          imagePath: "",
          imageAlt: "",
          stars: 5,
        },
        {
          body: "USATS provided everything, from the ground school lessons to the flight instruction, with very experienced instructors and modern facilities that you cannot find in any other schools. A school that would equip me with real professional skills would help me be a leader in the aviation industry.",
          author: "J HARAM",
          imagePath: "",
          imageAlt: "",
          stars: 5,
        },
        {
          body: "By far, the best helicopter training in Florida. The staff is not only patient but also extremely professional. The equipment is well maintained and a pleasure to fly. Factoring in how many flying days a year you have in Florida this is the place to come to get your ratings and qualifications at a affordable and expeditious manner.",
          author: "Tim Green",
          imagePath: "",
          imageAlt: "",
          stars: 5,
        },
      ],
    },
    frequentQuestions: {
      title: "Frequently Asked Questions About Flight Training",
      description:
        "Common questions about becoming a pilot at USATS flight school in Titusville, Florida",
      questions: [
        {
          question: "Why choose USATS for pilot training in Florida?",
          answer:
            "USATS is a globally recognized military aviation leader with 30+ years of training elite pilots, offering FAA + NATO-certified programs on combat-proven platforms with 320+ annual flying days and a 38-acre tactical training complex. Our Titusville location provides ideal flying conditions year-round on Florida's Space Coast.",
        },
        {
          question: "What can I expect from USATS flight training programs?",
          answer:
            "Career-focused training: Master everything from private pilot basics to advanced instrument flying, with optional courses in leadership (CRM/TEM) honed from military programs. Enjoy small classes, 2:1 instructor ratios, and access to NASA-adjacent airspace for unparalleled training diversity. Our Part 141 curriculum helps you progress faster with fewer required flight hours.",
        },
        {
          question: "What are the requirements to join USATS flight school?",
          answer:
            "No experience needed! Start with zero hours—just a passion to fly. Medical certification (Class 2+) and English proficiency are required. Military veterans: leverage your background for accelerated pathways. International students must be: M1 visa eligible and will need to provide proof of funds and academic transcripts. Our admissions team can guide you through every step of the enrollment process.",
        },
        {
          question: "Does USATS offer financing options for flight training?",
          answer:
            "Yes, we partner with several aviation financing specialists including AOPA Finance, Stratus Financial, and We-Fly to help you fund your flight training. Our flexible payment plans and financing options make aviation education more accessible.",
        },
        {
          question:
            "How long does it take to complete flight training at USATS?",
          answer:
            "Training duration varies by program and individual progress. Our Part 141 programs typically allow for faster completion with fewer required hours than Part 61 training. A Private Pilot License can be completed in as little as 2 months of dedicated training. Commercial and Instructor ratings generally require 3-6 months each. Our admissions counselors can provide a personalized timeline based on your goals.",
        },
      ],
      buttons: [
        {
          name: "Contact Our Flight School Admissions Team",
          link: "/contact-us",
          primary: true,
        },
        {
          name: "Schedule a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },
  },
};

export default homePage;
