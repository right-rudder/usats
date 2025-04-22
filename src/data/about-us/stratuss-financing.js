import { COMPANY_NAME } from "../../consts";

const stratusInfo = {
    data: {
      //SEO Header Stuff
      pageTitle: "Stratus Financial | Financing | Sun City Aviation Academy",
      pageDescription:
        "Stratus Financial is a financing option for students looking to become a pilot. Sun City Aviation Academy has partnered with Stratus Financial to provide students with the financial assistance they need to complete their pilot training.",
      pageKeywords:
        "stratus finance, financing, pilot financing, pilot training financing, pilot training loans, pilot loans, pilot training loans, pilot training financing options, pilot training financial assistance, pilot training financial aid, pilot training scholarships, pilot training grants, pilot training payment plans, pilot training financing companies, pilot training financing programs, pilot training financing bad credit, pilot training financing no credit check, pilot training financing for international students, pilot training financing for veterans, pilot training financing for disabled, pilot training",
  
      //top header
      header: {
        stars: true,
        imagePath: "/src/assets/placeholder.webp",
        imageAlt:
          "",
        headerH1: `Financing</br><span class="text-accent-800">Stratus Financial</span>`,
        paragraph:
          `At ${COMPANY_NAME}, we understand that investing in your aviation career is a big decision. That's why we’ve partnered with trusted financing providers like Stratus Financing, AOPA Financing, and We Fly – Financing the Sky to help make your goals more accessible. Whether you're starting from zero or advancing your certifications, these flexible loan options are designed to support your journey every step of the way.`,
        buttons: [
          {
            name: "Apply Now",
            link: "#",
            primary: false,
          },
          {
            name: "Download Booklet",
            link: "#",
            primary: false,
          },
        ],
      },
  
      bookCTA: {
        upperHeading: "Still looking for more information on pilot training?",
        headerH1: `Get Your <span class="text-accent-300">FREE</span><br> Pilot Training Guide!`,
        paragraph:
          "We have a free booklet which explains everything you need to know for your pilot certificate.",
        buttons: [
          {
            name: "Download Now",
            link: "/book-download",
            primary: true,
          },
        ],
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "Right Rudder Marketing team on the runway",
      },
  
      flyWithUsCTA: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "Right Rudder Marketing team on the runway",
        headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
        paragraph:
          "Doing a discovery flight is the best way to determine if being a pilot is right for you. Whether you're trying it out for fun or want to fly professionally, doing a discovery flight will allow you to see the Ft. Lauderdale and Hollywood from a new perspective.",
        buttons: [
          {
            name: "Schedule Today",
            link: "/discovery-flight",
            primary: true,
          },
        ],
      },
    },
  };
  export default stratusInfo;