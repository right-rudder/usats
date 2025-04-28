import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";

const testingCenterFAACats = {
data: {
    title: `FAA CATS Testing Center | ${COMPANY_NICKNAME}`,
    paragraph: "Our center offers a professional environment with modern computer workstations and secure internet access. Our dedicated staff ensures a secure and distraction-free testing experience.",
    tags: [""],

    header: {
      stars: true,
      imagePath: "/src/assets/placeholder.webp",
      imageAlt:
      "image alt",
      headerH1: `${COMPANY_NICKNAME} <br> FAA Cats Testing Center`,
      paragraph: ``,
      buttons: [
      {
          name: "Learn more",
          link: "#services",
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
            `Log in in https://faa.psiexams.com/faa/login`,
            "Select the exam you would like to take",
            "Enter our zipcode 32780",
            "Select the option",
            `US Aviation Jet Center <br> 355 Golden Knights Blvd <br> Titusville, FL, 32780`
        ],
        buttons: [
            {
              name: "Directions",
              link: "https://www.google.com/maps/place/US+Aviation+Jet+Center/@28.5108366,-80.7935879,17z/data=!3m1!4b1!4m6!3m5!1s0x88e0ad45bfc65527:0x83a84771beabce22!8m2!3d28.5108366!4d-80.7935879!16s%2Fg%2F11fp5g3c02?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
              primary: true,
            },
          ],
    },

    headerSmall: {
      
      imagePath: "/src/assets/placeholder.webp",
      headerH1: "Discovery Flights</br>at USATS",
      imageAlt: "Speedway Flight Training instructors and staff in front of a Cessna at KHMP",
      paragraph:
          "Ready to take the controls? A discovery flight is the perfect first step. Fly with a certified instructor.",
      buttons: [
          {
          name: "Schedule a Flight",
          link: "#contact",
          primary: true,
          },
      ],
    },
}
};

export default testingCenterFAACats;