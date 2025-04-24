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
        `By providing my email and phone number, I agree to receive email and text messages from ${COMPANY_NAME} and understand I can opt-out anytime.`,
  
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
  
      locations: [
        {
          title: `${COMPANY_NAME}`,
          address: `${ADDRESS}`,
          city: `${ADDRESS_CITY}`,
          state: ``,
          zip: `${ADDRESS_STATE}`,
          gMaps: "gmaps1",
          phone: "(321) 529-0795",
        },
        {
          title: "title2",
          address: "address2",
          city: "city2",
          state: "state2",
          zip: "zip2",
          gMaps: "gmaps2",
          phone: "phone2",
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