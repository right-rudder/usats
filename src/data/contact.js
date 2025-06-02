import {
  COMPANY_NAME,
  ADDRESS,
  ADDRESS_STATE,
  ADDRESS_CITY,
  ADDRESS_ZIP,
} from "../consts";

const contact = {
  data: {
    //SEO Header Stuff
    pageTitle: `Contact Us | ${COMPANY_NAME}`,
    pageDescription:
      "Get in touch with US Aviation Training Solutions for inquiries about flight training, discovery flights, or international student programs in Titusville, FL. Contact our team to start your aviation career today!",
    pageKeywords:
      "contact USATS, flight school contact Florida, aviation school contact, Titusville flight school phone number, pilot training contact, helicopter training inquiry, aviation academy contact, flight training questions, USATS contact details, flight instruction contact",

    checkboxText: `I agree to the <a href="/privacy-policy" target="_blank" class="text-muted-200 hover:text-accent-700 font-semibold">Privacy Policy</a> and <a href="/terms-of-service" target="_blank" class="text-muted-200 hover:text-accent-700 font-semibold">Terms of Service</a> provided by the company.
      By providing my phone number, I agree to receive text messages from the business. I also agree that I may be contacted via messaging apps such as WhatsApp or Signal.
    `,

    gMaps: [
      {
        location: "",
        inverted: false,
        body: "",
        gMapUrl: "",
      },
      {
        location: "",
        inverted: true,
        body: "",
        gMapUrl: "",
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
