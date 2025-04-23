
import { COMPANY_NAME } from "../../consts";

const financingOptions = {
    data: {
      //SEO Header Stuff
      pageTitle: `Flight School Loans | ${COMPANY_NAME}`,
      pageDescription:
        `At ${COMPANY_NAME}, we understand that investing in your aviation career is a big decision. That's why we’ve partnered with trusted financing providers like Stratus Financing, AOPA Financing, and We Fly – Financing the Sky to help make your goals more accessible. Whether you're starting from zero or advancing your certifications, these flexible loan options are designed to support your journey every step of the way.`,
      pageKeywords:
        "",
  
      //top header
      header: {
        stars: true,
        imagePath: "/src/assets/placeholder.webp",
        imageAlt:
          "",
        headerH1: `Flight School Loans`,
        paragraph:`At ${COMPANY_NAME}, we understand that investing in your aviation career is a big decision. That's why we’ve partnered with trusted financing providers like Stratus Financing, AOPA Financing, and We Fly – Financing the Sky to help make your goals more accessible. Whether you're starting from zero or advancing your certifications, these flexible loan options are designed to support your journey every step of the way.`,
        buttons: [

        ]
      },
  
      pageSummary: {
        title: `Fly With Confidence`,
        paragraphs: [
          "At Sun City Aviation Academy, we take pride in our exceptional fleet of aircraft and our simulator, designed to provide you with the highest quality flight training experience. Whether you're just beginning your aviation journey or advancing your skills, our versatile aircraft and training tools are here to support your goals.",
          "We offer a variety of aircraft for training, including the Cessna 172 and Beechcraft Duchess, as well as a Redbird Simulator and our Cessna 182 Skylane Seaplane. Our fleet is maintained to the highest standards, ensuring that you can train with confidence and peace of mind.",
        ],
      },
  
      financingPartners: {
        upperHeading: "Flight School Loans",
        partners: [
            {
                headerh2: `Stratus Financial`,
                paragraph:
                  "Stratus Financial is on a mission to help aspiring pilots like you achieve your flight dreams as swiftly as possible through our hassle-free funding. Turn your passion into a career; Get the financial help you need to pursue your aviation dreams. Work with a company that understands the aviation industry best.",
                buttons: [
                  {
                    name: "Application Link",
                    link: "https://apply.stratus.finance/usaviationtraining818394",
                    primary: false,
                  },
                ],
                imagePath: "/src/assets/placeholder.webp",
                imageAlt: "",
            },
            {
                headerh2: `AOPA Finance`,
                paragraph:
                  "AOPA's Flexible Aviation Loan removes the cost barrier so more students can start and complete their training. Maximum loan amount: $100,000, 7 year maximum to repay, payments begin as soon as funds are disbursed. Inquire online or by calling 1-800-627-5263",
                buttons: [
                  {
                    name: "Visit the website",
                    link: "https://finance.aopa.org/flight-training-finance",
                    primary: false,
                  },
                ],
                imagePath: "/src/assets/placeholder.webp",
                imageAlt: "",
            },
            {
                headerh2: `We Florida Financial`,
                paragraph: "We fly's Learn to Fly program makes achieving your aviation training goals easy and affordable. Pilot school loans provide a fixed-rate line of credit from $5,000 to $30,000. Inquire online or by calling 1-800-230-0200",
                buttons: [
                  {
                    name: "Visit the website",
                    link: "https://wefloridafinancial.com/flight-training",
                    primary: false,
                  },
                ],
                imagePath: "/src/assets/placeholder.webp",
                imageAlt: "",
            },
        ],
        
      },
  
  
      flyWithUsCTA: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        headerH1: `<span class="text-primary-600">Why don't you check the skies </br></span>With a Discovery Flight`,
        paragraph:
          "Doing a discovery flight is the best way to determine if being a pilot is right for you. Whether you're trying it out for fun or want to fly professionally, doing a discovery flight will allow you to see the Ft. Lauderdale and Hollywood from a new perspective.",
        buttons: [
          {
            name: "Schedule Today",
            link: "/discovery-flight",
            primary: false,
          },
        ],
      },
    },
  };
  export default financingOptions;
  