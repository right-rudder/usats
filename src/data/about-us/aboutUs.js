import { COMPANY_NAME } from "../../consts";

const aboutUs = {
  pageTitle: `Why Choose USATS? | ${COMPANY_NAME}`,
  pageDescription: "",
  pageKeywords: "",

  // Top Header
  header: {
    stars: true,
    imagePath: "/src/assets/maintenanceHeli2.png",
    imageAlt:
      "US Aviation Training Solutions student pilot celebrating her first solo flight",
    headerH1: `Why Choose<br>USATS?`,
    paragraph: `At US Aviation Training Solutions, our mission is to deliver high-quality flight training in a supportive and professional environment. From your first flight to your commercial career, we’re here to guide your journey with integrity, safety, and passion.`,
    buttons: [
      {
        name: "Contact Us",
        link: "/contact-us",
        primary: true,
      },
      {
        name: "Join the Team",
        link: "/about-us/careers",
        primary: true,
      },
    ],
  },

  pageSummary: {
    title: "Why Choose USATS?",
    paragraphs: [
      "Earn FAA certifications faster with <strong>320+ annual flying days</strong> and a proven curriculum refined over 30 years—taught by instructors who’ve trained pilots from 120+ countries.",
      "Fly modern aircraft (Cessna 172, Alto-NG) from our <strong>38-acre Florida campus</strong>, with military-grade safety standards and 2:1 instructor ratios for personalized progress.",
    ],
    buttons: [
      {
        name: "Learn More",
        link: "#info",
        primary: true,
      },
    ],
  },

  whatWeOffer: {
    title: `On a mission to train the best pilots in the world`,
    paragraph:
      "Through our nearly 30-year history, we have helped thousands of students graduated. In every corner of the globe, and every niche of the industry, you can find USATS graduates.",
    bullets: [
      {
        title: "Rich History & Alumni",
        description: [
          "Travel anywhere in the world and you're likely to find a USATS graduate operating safely there. We've trained thousands of aviators from more than 120 countries.",
          "From flying Search and Rescue missions in the coastal regions of the Gulf of Mexico and the North Sea, providing VIP or recreational transport over the glacial fields of Alaska and the skyline of New York City, to flying military missions over the jungles of Colombia or Peru or the deserts of Africa, we have graduates flying in every corner of the globe.",
        ],
      },
      {
        title: "The Early Years",
        description: [
          "The USATS story began in 1987, the year Helicopter Adventures Inc. (HAI) was founded by Mr. Patrick Corr in Concord, CA.",
          "By 2000, the company had grown substantially and was relocated to Space Coast, FL (Titusville). In Titusville 2007, HAI became a wholly-owned subsidiary of Bristow Group Inc. in 2007 and was rebranded as Bristow Academy.",
        ],
      },
      {
        title: "​Setting The Standard For Quality",
        description: [
          "Since 2001, our helicopter academy has further expanding the quality of helicopter pilot training. This was a time of development for our key training programs, which were geared toward a new breed of career-oriented student pilots",
        ],
      },
      {
        title: "​A New Era",
        description: [
          "​In November 2017, Bristow Academy came under new ownership and changed its name to U.S. Aviation Training Solutions Inc. The name reflects our evolving mission to train, mentor, and support the careers of professional aviators and in 2018 saw the launch of USATS first airplane training program serving the airline industry specifically.",
        ],
      },
    ],
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
        imageAlt: "One Cessna 172 parked in a ramp",
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

  contentSplit: {
    upperHeading: "Get Started",
    heading: "Your Pilot Journey Starts at USATS",
    descriptions: [""],
    bulletsTitle: "Why Train at USATS?",
    bullets: [
      {
        title: "Experienced Instructors",
        descriptions: [
          "Learn from passionate, professional CFIs with real-world aviation backgrounds who are committed to your growth.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Modern Aircraft",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Structured Training Programs",
        descriptions: [
          "Follow clear, organized paths from Private Pilot through Commercial and CFI training with full checkride prep at each stage.",
        ],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "Best Training Location",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
      {
        title: "World Wide Community",
        descriptions: [""],
        icon: "M9 12.75 11.25 15 15 9.75...",
      },
    ],
    finalSection: {
      heading: "Ready for Takeoff?",
      descriptions: [
        "US Avation Training Solutions is more than a school—it’s a community of future aviators and professionals who share a passion for flight.",
        "Our programs are built to help you grow with confidence and clarity. Let’s get started on your aviation goals today.",
      ],
    },
    finalButton: {
      name: "Get Started",
      link: "/enroll",
      primary: true,
    },
    imagePath: "/src/assets/placeholder.webp",
    imageAlt: "",
  },
};

export default aboutUs;
