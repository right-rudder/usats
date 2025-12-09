import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import { USATS_BASE_COVER as imgHeader, ALTO_4A as imgCard1 } from "../../constsImages";

const testingCenterFAACats = {
data: {
    title: `FAA CATS Testing Center | ${COMPANY_NICKNAME}`,
    paragraph: "Our center offers a professional environment with modern computer workstations and secure internet access. Our dedicated staff ensures a secure and distraction-free testing experience.",
    tags: [""],

    header: {
      stars: true,
      imagePath: imgHeader.imagePath,
      imageAlt:imgHeader.imageAlt,
      headerH1: `${COMPANY_NICKNAME} <br> FAA Cats Testing Center`,
      paragraph: ``,
      buttons: [
      {
          name: "Learn more",
          link: "#cats-testing-center",
          primary: true,
      },
      ],
    },

    schedule: {
        title: "How to Schedule Your Test Here",
        heather2: "FAA CATS Testing Center",
        description: [
          "Our center offers a professional environment with modern computer workstations and secure internet access. Our dedicated staff ensures a secure and distraction-free testing experience."
        ],
        loginLink: "https://faa.psiexams.com/faa/login ",
        list: [
            `<a href="https://faa.psiexams.com/faa/login" target="_blank">Log-in in : <br> https://faa.psiexams.com/faa/login </a>`,
            "Select the exam you would like to take",
            "Enter our zipcode 32780",
            "Select the option",
        ],
        location: `US Aviation Jet Center (US Aviation Training Solutions) <br> 355 Golden Knights Blvd <br> Titusville, FL, 32780`, 
        buttons: [
            {
              name: "Directions",
              link: "https://www.google.com/maps/place/Space+Coast+Regional+Airport/@28.5114085,-80.8059907,14.85z/data=!4m14!1m7!3m6!1s0x88e0ad45bfc65527:0x83a84771beabce22!2sUS+Aviation+Jet+Center!8m2!3d28.5108366!4d-80.7935879!16s%2Fg%2F11fp5g3c02!3m5!1s0x88e0ad2310d73cfb:0x4bcd770a5e53125e!8m2!3d28.5133625!4d-80.7988013!16zL20vMDNmZnAy?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D",
              primary: true,
            },
          ],
    },

    underHeader: {
      title: "YOUR CATS TEST at USATS",
      paragraphs: ["Here at USATS we make sure you have all you need to make it.",],
      image: {
        imagePath: "/src/assets/alto_ng-USATS-titusville-professional-pilot-program.webp",
        imageAlt: "AirPlane Panel",
      },
      buttons: [],
    },
}
};

export default testingCenterFAACats;