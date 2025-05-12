import { COMPANY_NAME } from "../../consts";

const stratusInfo = {
    data: {
      //SEO Header Stuff
      pageTitle: `Financing | ${COMPANY_NAME}`,
      pageDescription:
        `Stratus Financial is a financing option for students looking to become a pilot. ${COMPANY_NAME} has partnered with Stratus Financial to provide students with the financial assistance they need to complete their pilot training.`,
      pageKeywords:
        "",
  
      //top header
      header: {
        stars: true,
        imagePath: "/src/assets/placeholder.webp",
        imageAlt:
          "",
        headerH1: `<span class="text-accent-700">FINANCING</span>`,
        paragraph:
          `At USATS, we understand that investing in your aviation career is a big decision. That's why we’ve partnered with trusted financing providers like <a href="#stratus" class="text-accent-600">Stratus Financing</a>, <a href="#aopa" class="text-accent-600">AOPA Financing</a>, and <a href="#we-florida" class="text-accent-600">We Florida Financial</a> to help make your goals more accessible. Whether you're starting from zero or advancing your certifications, these flexible loan options are designed to support your journey every step of the way.`,
        buttons: [],
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