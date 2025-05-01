import { COMPANY_NAME, ADDRESS, ADDRESS_STATE,ADDRESS_CITY, ADDRESS_ZIP  } from "../consts";

const contact = {
    data: {
      //SEO Header Stuff
      pageTitle: `Contact Us | ${COMPANY_NAME}`,
      pageDescription:
        "",
      pageKeywords:
        "",
  
      checkboxText:
      `I agree to the Privacy Policy and Terms of Service provided by the company.
      By providing my phone number, I agree to receive text messages from the business. I also agree that I may be contacted via messaging apps such as WhatsApp or Signal.
    `,
  
      gMaps: [
        {
          location: "",
          inverted: false,
          body: "",
          gMapUrl:
            "",
        },
        {
          location: "",
          inverted: true,
          body: "",
          gMapUrl:
            "",
        },
      ],
      
      email: "info@usatsolutions.com",

      locations: [
        {
          title: `${COMPANY_NAME}`,
          address: `${ADDRESS}`,
          city: `${ADDRESS_CITY}`,
          state: ``,
          zip: `${ADDRESS_STATE}`,
          gMaps: "gmaps1",
          phone: "(321) 529-0795",
          email: "info@usatsolutions.com",
        },
      ],

      //top header
      headerImagePath: "",
      headerH1: "",
      headerH2: "",
  
      //contentOne
      contentOneImage: "",
      contentOneImageAlt: "",
      contentOneImageCaption: "",
      contentOneH3: "",
      contentOneParagraphs: ["", ""],
      contentOneButtonText: "",
      contentOneButtonLink: "",
  
      //contentTwo
      contentTwoImage: "",
      contentTwoImageAlt: "",
      contentTwoImageCaption: "",
      contentTwoH3: "",
      contentTwoParagraphs: ["", ""],
      contentTwoButtonText: "",
      contentTwoButtonLink: "",
  
      //contentThree
      contentThreeImage: "",
      contentThreeImageAlt: "",
      contentThreeImageCaption: "",
      contentThreeH3: "",
      contentThreeParagraphs: ["", ""],
      contentThreeButtonText: "",
      contentThreeButtonLink: "",
  
      //Bottom CTAOne
      CTAOneH2: "",
      CTAOneH3: "",
      CTAOneButtonText: "",
      CTAOneButtonLink: "",
  
      //Bottom CTATwo
      CTATwoH2: "",
      CTATwoH3: "",
      CTATwoButtonText: "",
      CTATwoButtonLink: "",
    },
  };
  
  export default contact;