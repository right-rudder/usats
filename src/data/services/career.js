import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import { DIRECTFLY_ALTONG_PANEL_USATS as imgHeader } from "../../constsImages";

const careers = {

    title: "Work with us!",
    subtitle: "Careers",

    paragraph: "",

    
    header: {
        stars: true,
        imagePath: imgHeader.imagePath,
        imageAlt: imgHeader.imageAlt,
        headerH1: `${COMPANY_NICKNAME} | Careers`,
        paragraph: `Come work with us!`,
        buttons: [
        {
            name: "Learn more",
            link: "#grid-programs",
            primary: true,
        },
        ],
      },

    openPositions: {
        title: "Open Positions",
        Maintenance: {
            title: "Maintenance",
            openPositions: [
                {
                    title: "Maintenance Technician",
                    link: "",
                }
            ],
        },
        buttons: [
            {
              name: "Directions",
              link: "https://www.google.com/maps/place/US+Aviation+Jet+Center/@28.5108366,-80.7935879,17z/data=!3m1!4b1!4m6!3m5!1s0x88e0ad45bfc65527:0x83a84771beabce22!8m2!3d28.5108366!4d-80.7935879!16s%2Fg%2F11fp5g3c02?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
              primary: true,
            },
          ],
    },

    howToApply: {
        title: "How to Apply",
        paragraphs: [
            "Send your resume to the email listed below and please make sure to include the job position you are applying for.",
            "For employment verification please email."
        ],
        
        buttons: [
            {
              name: "HR@usatsolutions.com",
              link: "https://www.google.com/maps/place/US+Aviation+Jet+Center/@28.5108366,-80.7935879,17z/data=!3m1!4b1!4m6!3m5!1s0x88e0ad45bfc65527:0x83a84771beabce22!8m2!3d28.5108366!4d-80.7935879!16s%2Fg%2F11fp5g3c02?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
              primary: true,
            },
        ],
    },

    underHeader: {
      title: "Start Your Journey Here",
      paragraphs: [
        "Check our latest opportunities and come make the sky brighter with USATS!",
        ""],
      image: {
        imagePath: "/src/assets/ALTO_NG.webp",
        imageAlt: "AirPlane Panel",
      },
      buttons: [],
    },

    gridPrograms: {
        upperHeading: "Open Positions",
        heading: "How to apply",
        description: "Send your resume to the email listed below and please make sure to include the job position you are applying for. For employment verification please email us.",
        email: "HR@usatsolutions.com",
        cards: [
          {
            title: "Maintenance Technician",
            imagePath: "/src/assets/maintenanceHeli4.png",
            imageAlt:
              "USATS Mechanic working on an Helicopter",
            description:
              "The incumbent in this position shall be an aircraft maintenance professional that shares our passion for safety and excellence in operations. ",
            link: "https://cdn.shopify.com/s/files/1/0783/7207/7845/files/Maintenance_Technician_-_FL_2.pdf?v=1695128138",
          },
        ],
      },
};

export default careers;