import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";

const fingerprintingTSA = {

    title: "Onsite fingerprinting for all your TSA needs",
    subtitle: "Including Flight Training Security Program (formerly AFSP)",

    paragraphs: "Start the process at https://secure.natacs.aero/ftsp/registration/index.asp, then reach out to us at fingerprinting@usatsolutions.com to set up your appointment time.",


    fingerPrintingSteps: {
        title: "Alien Flight School Fingerprinting",
        subtitle: "Flight school candidates -- The following steps are required PRIOR to scheduling your fingerprint appointment:",
        loginLink: "https://secure.natacs.aero/ftsp/registration/index.asp ",
        email: "fingerprinting@usatsolutions.com",
        list: [
            `You must pay for the fingerprint in advance and print the following documents to bring with you to your appointment: `,
            "Once you have paid for and printed the above mentioned documents, you may email the Fingerprinting Office at fingerprinting@usatsolutions.com",
            "In your appointment request email, please provide the following information:",
            "You will receive an email response with the date and time of your appointment. Please note: AFSP Fingerprint appointment are based on availability.",
            `Please arrive on time for your appointment and provide the above mentioned printed documents along with the following forms of ID:`,
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
    }


};

export default fingerprintingTSA;