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
        headerH1: `${COMPANY_NICKNAME} <br> Careers`,
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
    "Check our latest opportunities and come make the sky brighter with USATS, whether you’re guiding the next generation of aviators in the cockpit, ensuring aircraft safety and reliability in the hangar, or supporting mission-critical operations behind the scenes, this is an invitation to join a team where hands-on skill, daily purpose, and tangible impact are part of every shift, and where your work helps shape real outcomes for students, instructors, and the safety of flight.",
    ""
  ],
  image: {
    imagePath: "/src/assets/alto_ng-USATS-titusville-professional-pilot-program.webp",
    imageAlt: "AirPlane Panel",
  },
  buttons: [],
},

underHeaderTwo: {
  title: "Build Your Future in Aviation",
  paragraphs: [
    "At USATS, every day begins with possibility — we’re a community built on passion, precision, and a shared commitment to excellence, offering a workplace where learning and growth are encouraged and your expertise is valued across the flight line, classroom, and maintenance bay.",
    "If you thrive in fast-paced environments and want to develop alongside industry professionals who genuinely care about your career, USATS provides the support, resources, and mentorship you need to grow.",
    "If you’re ready to contribute to an organization that prioritizes innovation, safety, and making aviation more accessible and inspiring, your journey starts here."
  ],
  image: {
    imagePath: "/src/assets/alto_ng-USATS-titusville-professional-pilot-program.webp",
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
            imagePath: "/src/assets/maintenanceheli4-USATS-titusville-aviation-academy-florida.png",
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