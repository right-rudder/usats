import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";

const fingerprintingTSA = {
  data: {
    title: "Onsite fingerprinting for all your TSA needs",
    subtitle: "Including Flight Training Security Program (formerly AFSP)",
    paragraph: "USATS offers onsite TSA fingerprinting for FTSP (formerly AFSP) applicants, including flight school students and aviation professionals. Follow the NATACS registration steps, then schedule your appointment with our team for fast, compliant fingerprint processing in Titusville, FL.",
    paragraphs:
      "Start the process at https://secure.natacs.aero/ftsp/registration/index.asp, then reach out to us at fingerprinting@usatsolutions.com to set up your appointment time.",

    header: {
      stars: true,
      imagePath: "/src/assets/fingerprinting.webp",
      imageAlt: "image alt",
      headerH1: `${COMPANY_NICKNAME} <br> TSA Fingerprinting Service`,
      paragraph: ``,
      buttons: [
        {
          name: "Learn more",
          link: "#services",
          primary: true,
        },
      ],
    },
  },

  fingerPrintingSteps: {
    title: "Flight School Fingerprinting",
    imagePath: "/src/assets/fingerprintingTSAchatgpt.png",
    imageAlt: "",
    subtitle:
      "Flight school candidates -- The following steps are required PRIOR to scheduling your fingerprint appointment:",
    heather2: "Flight School Fingerprinting",
    description: [
      "Onsite fingerprinting for all your TSA needs, including Flight Training Security Program (formerly AFSP)! <br>",
      `Start the process at <a href="https://secure.natacs.aero/ftsp/registration/index.asp" target="_blank" class="text-accent-700"> <strong> NATA - FTSP</strong></a>, then reach out to us at <a href="mailto:fingerprinting@usatsolutions.com" class="text-accent-700"><strong>fingerprinting@usatsolutions.com</strong></a> to set up your appointment time.`,
    ],
    loginLink: "https://secure.natacs.aero/ftsp/registration/index.asp ",
    email: "fingerprinting@usatsolutions.com",
    list: [
      `<div class="flex flex-col px-4"><strong>You must pay for the fingerprint in advance and print the following documents to bring with you to your appointment:</strong> <ul class="list-disc"> <li>Payment Confirmation Receipt (from the NATACS site)</li><li>Fingerprinting Instructions Email (sent by FTSP after payment</li><li>Passport (or acceptable government-issued photo ID)</li><li>FTSP Confirmation Page or Training Request Status Page</li></ul> </div>`,
      `It's important to check your email after registration, because NATACS/FTSP often sends specific instructions and downloadable documents.`,
      "Once you have paid for and printed the above mentioned documents, you may email the Fingerprinting Office at fingerprinting@usatsolutions.com",
      `<div class="flex flex-col px-4"><strong>In your appointment request email, please provide the following information: </strong> <ul class="list-disc"> <li>Full Name</li><li>Date of Birth</li><li>Training Request ID (from FTSP)</li><li>Contact Phone Number</li><li>Preferred Appointment Date and Time</li> <li>Location Preference (USATS) </li> </ul> </div>`,
      `<strong>Important: The ID must be unexpired and match the name used during your FTSP registration.</strong>`,
      "You will receive an email response with the date and time of your appointment. Please note: AFSP Fingerprint appointment are based on availability.",
      `<div class="flex flex-col px-4"><strong>Please arrive on time for your appointment and provide the above mentioned printed documents along with the following forms of ID: </strong> <ul class="list-disc"> <li>Passport (U.S or Foreign)</li><li>U.S. Driver’s License or State ID</li><li>Federal, State, or Local Government ID with photo</li><li>Permanent Resident Card (Green Card)</li> <li>U.S. Military ID</li></ul> </div>`,
      "PLEASE NOTE: Failure to arrive to your appointment on time, failure to provide the required printed documents, and/or present the required identifications will result in your appointment being rescheduled for the next available fingerprinting day.",
      "Your appointment may take 15-30 minutes to be completed.",
    ],
    buttons: [
      {
        name: "Directions",
        link: "https://www.google.com/maps/place/US+Aviation+Jet+Center/@28.5108366,-80.7935879,17z/data=!3m1!4b1!4m6!3m5!1s0x88e0ad45bfc65527:0x83a84771beabce22!8m2!3d28.5108366!4d-80.7935879!16s%2Fg%2F11fp5g3c02?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
        primary: true,
      },
    ],
  },

  underHeader: {
    title: "FINGER- PRINTING TODAY AT USATS",
    paragraphs: [
      "Here at USATS we make sure you have all you need to make it.",
    ],
    image: {
      imagePath: "/src/assets/ALTO_NG.webp",
      imageAlt: "AirPlane Panel",
    },
    buttons: [],
  },
};

export default fingerprintingTSA;
