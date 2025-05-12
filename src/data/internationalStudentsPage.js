import { COMPANY_NAME, COMPANY_NICKNAME } from "../consts";
import { DAVID_WELLS_PPL_RW_GRADUATE_2 as contentCTAimg } from "../constsImages";
import { IMG_2891 as imgWhyUs } from "../constsImages";
import { ALTO_8A as imgHeader } from "../constsImages";

const internationalStudentsPage = {
  data: {
    header: {
      stars: true,
      imagePath: imgHeader.imagePath,
      imageAlt: imgHeader.imageAlt,
      headerH1: `INTERNATIONAL STUDENTS <br> at ${COMPANY_NICKNAME}`,
      paragraph:
        "Start Your Pilot Career in the U.S. with Our International-Friendly Flight School. FAA-certified. Trusted by students from 30+ countries.",
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-now",
          primary: false,
        },
      ],
    },

    underHeader: {
      title: "START HERE WITH US",
      paragraphs: [
        "Join hundreds of students from around the world who chose our FAA-certified flight school to start their aviation journey. We specialize in training international pilots with Part 141-approved programs tailored for global success.",
        "Our campus offers TSA fingerprinting, FAA CATS testing — everything you need in one place. Train in modern glass-cockpit aircraft with experienced instructors who understand the international pathway.",
        "From your first solo to your commercial license, we guide you step by step. Your future in aviation starts here — no borders, just blue skies.",
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


    whyUs: {
      upperHeading: "Why International Students Choose Us",
      heading: "Your Global Aviation Career Starts Here",
      descriptions: [
            "Students from over 60 countries have trusted us to launch their careers in the skies. Whether you're aiming to fly in your home country or build hours in the U.S., our Part 141-approved programs are designed to support international success.",
            "We handle more than flight training — we guide you through visa applications, TSA clearance, medical exams, and FAA testing. With on-campus CATS testing and fingerprinting, our support starts from day one.",
            "Take off with a clear path, a supportive team, and a fleet that prepares you for airline, charter, or private aviation roles across the globe.",
      ],
      bullets: [
        {
          title: "Complete International Support",
          descriptions: [
            "From M-1 visa guidance to TSA fingerprinting and exam scheduling, we’ve built our school around your success as an international student.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "FAA Testing & TSA Fingerprinting On-Site",
          descriptions: [
            "Take your FAA knowledge exams and complete fingerprinting without leaving campus. We make your process efficient and stress-free.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Structured Training for Global Readiness",
          descriptions: [
            "Train under FAA Part 141 programs with a curriculum trusted by airlines and regulators worldwide.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Diverse Fleet, Competitive Prices",
          descriptions: [
            "Fly Cessna 172s, R44s, Schweizer S300s, and more — all maintained in-house to FAA standards. Training plans to fit your budget.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Year-Round Flying Weather",
          descriptions: [
            "Located on Florida’s Space Coast, we offer nearly 300 flyable days a year — meaning faster progress and consistent training.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Smooth Checkride Scheduling",
          descriptions: [
            "Our relationships with local FAA examiners help you complete your checkrides on time, without long delays.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Personalized Mentorship",
          descriptions: [
            "You’re not just a number here. We get to know you and help you reach your aviation goals step by step.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Begin Your Aviation Journey Today",
          descriptions: [],
          icon: "",
        },
      ],
      imageLegend: "Become a Pilot with USATS",
      imagePath: imgWhyUs.imagePath,
      imageAlt: imgWhyUs.imageAlt,
    },

    quizCTA: {
        upperHeading: "CAREER",
        heading: "Launch Your Global Aviation Career in a High-Demand Market",
        descriptions: [
            "The aviation world is facing a global pilot shortage. Airlines and helicopter operators across continents are urgently hiring. Boeing forecasts a need for *600,000 new pilots by 2042*, and rotorcraft demand is rising in emergency response, energy, tourism, and firefighting sectors.",
            `At ${COMPANY_NAME}, we prepare international students for global success. Our FAA-approved Part 141 training accelerates your path to the cockpit with a structured program and fewer required hours. You'll train on modern aircraft—including the Cessna 172 and R44—equipped with glass cockpits to reflect real-world operations.`,
            "Thanks to our strong network of FAA examiners (DPEs), you’ll complete checkrides efficiently and graduate ready to stand out to top employers around the world.",
            "The sky isn’t the limit—it’s your new workplace.",
        ],
        imageLegend: "A proud USATS graduate receives their certificate",
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
        title: "Frequently Asked Questions",
        description: "Answers to common questions about training with USATS as an international student.",
        questions: [
          {
            question: "Why choose USATS?",
            answer:
              "USATS is a globally respected aviation academy with over 30 years of experience training elite pilots. Our programs are FAA- and NATO-certified, and our fleet includes combat-proven aircraft like the UH-60 Black Hawk. With over 320 flying days per year and a 38-acre tactical complex, we deliver world-class aviation training.",
          },
          {
            question: "What can I expect from USATS training?",
            answer:
              "You’ll receive career-oriented training from day one—whether you’re starting with private pilot lessons or advancing to instrument ratings. Our small class sizes, 2:1 instructor ratio, and access to NASA-adjacent airspace ensure a rich and diverse learning environment. Leadership modules (CRM/TEM) derived from military practices are also available.",
          },
          {
            question: "Are there any requirements to join?",
            answer:
              "You don’t need any flight experience to begin—just a strong desire to fly! A Class 2 (or higher) medical certificate and English proficiency are required. International students must also provide proof of funds, school transcripts, and meet M1 visa eligibility. USATS helps with visa support, housing arrangements, and airport pickup.",
          },
          {
            question: "What Is Allowed With An M1 Student Visa?",
            answer: `International students seeking a certificate/rating and training cannot train in the United States on a tourist visa and USATS strictly complies with the Department of Homeland Security and Transportation Safety Administration regulations. The M1 Student Visa allows an international student to participate in a full-time course of study at a SEVP-approved institution such as USATS, for the established duration of all our FAA-approved courses and up to 12-months duration, such as our full Professional Pilot Programs – helicopter and airplane – and all FAA courses offered by USATS. Please note, immigration and labor laws in the United States are very strictly enforced. In shopping for schools, be aware that students cannot train unless courses are FAA approved. USATS has many FAA approved courses including the full suite of Professional Pilot Program courses for helicopter and airplane!"`
          },
        ],
        buttons: [
          {
            name: "Contact Us",
            link: "contact-us",
            primary: true,
          },
        ],
      }
      
  },
};

export default internationalStudentsPage;
