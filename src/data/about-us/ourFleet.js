
import { COMPANY_NAME } from "../../consts";

const ourFleet = {
    data: {
      //SEO Header Stuff
      pageTitle: `Our Fleet | ${COMPANY_NAME}`,
      pageDescription:
        "",
      pageKeywords:
        "",
  
      //top header
      header: {
        stars: true,
        imagePath: "/src/assets/placeholder.webp",
        imageAlt:
          "",
        headerH1: `Our</br><span class="text-accent-300">Fleet</span>`,
        paragraph:
          "",
        buttons: [
          {
            name: "Enroll Now",
            link: "/enroll-now",
            primary: false,
          },
          {
            name: "Book a Discovery Flight",
            link: "/discovery-flight",
            primary: false,
          },
        ],
      },
  
      pageSummary: {
        title: `Fly With Confidence`,
        paragraphs: [],
      },
  
      // fleetGrid: {
      //   upperHeading: "Explore",
      //   heading: "Our Aircraft",
      //   description: `Our fleet of aircraft is designed to provide you with a diverse range of training options, from single-engine aircraft to multi-engine aircraft. Each aircraft is meticulously maintained to ensure your safety and comfort during your training. Explore our fleet below to learn more about each aircraft and its capabilities.`,
      //   aircraft: [
      //     {
      //       title: "Cessna 172",
      //       imagePath: "/src/assets/placeholder.webp",
      //       imageAlt: "Sun City Aviation Academy Cessna 172 parked at the airport",
      //       description:
      //         "Start your aviation adventure with our robust fleet of Cessna 172 aircraft. These reliable and versatile planes are perfectly suited for those taking their first steps into the world of flight. Our Cessna 172s provide an ideal learning environment for aspiring pilots.",
      //       link: "/our-fleet/cessna-172",
      //       linkText: "Details",
      //     },
      //     {
      //       title: "Beechcraft Duchess",
      //       imagePath:
      //         "/src/assets/placeholder.webp",
      //       imageAlt:
      //         "Sun City Aviation Academy Beechcraft Duchess parked at the airport",
      //       description:
      //         "As you step into the cockpit of our Beechcraft Duchess, you'll discover a world of possibilities that extends beyond single engine flight. The Duchess is a testament to our commitment to providing you with the highest quality training resources.",
      //       link: "/our-fleet/beechcraft-duchess",
      //       linkText: "Details",
      //     },
      //     {
      //       title: "Redbird Flight Simulator",
      //       imagePath:
      //         "/src/assets/placeholder.webp",
      //       imageAlt: "Sun City Aviation Academy Redbird Simulator",
      //       description:
      //         "Using a simulator allows you to practice maneuvers, refine techniques, and master emergency procedures. You can pause mid flight and replay different scenarios and conditions which help solidify your training and make you a better and safer pilot.",
      //       link: "/our-fleet/redbird-simulator",
      //       linkText: "Details",
      //     },
      //   ],
      // },
  
      bookCTA: {
        upperHeading: "Still looking for more information on pilot training?",
        headerH1: `Get Your <span class="text-accent-300">FREE</span><br> Pilot Training Guide!`,
        paragraph:
          "We have a free booklet which explains everything you need to know for your pilot certificate.",
        buttons: [
          {
            name: "Download Now",
            link: "/book-download",
            primary: true,
          },
        ],
        imagePath: "/src/assets/sun-city-book-mock-up.webp",
        imageAlt: "Right Rudder Marketing team on the runway",
      },
  
      quizCTA: {
        reverse: true,
        upperHeading: "Take Our Quiz",
        heading: "Do You Have What It Takes To Be A Pilot?",
        descriptions: [
          "Are you fascinated by the world of aviation? Have you dreamed of flying and exploring the skies? Do you often look upward at passing aircraft, wondering if you yourself could be in the cockpit?",
          "Begin your journey in aviation with our brief quiz. Our quiz is designed to look at your aviation related knowledge and aptitude, alongside your unique personality traits and interests, to provide insights into whether a future in aviation aligns with your aspirations.",
        ],
        imagePath: "/src/assets/sun-city-aviation-academy-be-pilot-square.jpg",
        imageAlt:
          "sun city aviation academy student flying a plane over the city of miami",
        quizModal: true,
      },
  
      flyWithUsCTA: {
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "",
        headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
        paragraph:
          "Doing a discovery flight is the best way to determine if being a pilot is right for you.",
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
  export default ourFleet;
  