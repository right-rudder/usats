import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";
import { ALTO_5A as imgHeader } from "../../constsImages";

const localAttractions = {

    data: {
        title: "Discover Florida's Space Coast",
        subtitle: "",
        header: {    
          
          headerH1: `Discover Florida's Space Coast`,
          imagePath: imgHeader.imagePath,
          imageAlt: imgHeader.imageAlt,
          buttons: [],
        },
        

        underHeader: {
          title: `Space Coast`,
          paragraph: "",
          image: {
            imagePath: "/src/assets/placeholder.webp",
            imageAlt: "",
          },
          paragraphs: [
            "Check out all the attractions That Florida's Space Coast has to offer.",
            "Kennedy Space Center, Disney World, Orlando, Cocoa Beach, and Port Canaveral are just some of the experiences you would find here.",
          
          ],
          buttons: [],
        },
    },


    localAttractions: {
        title: "Discover Florida's Space Coast",
        subtitle: "",
        paragraph: "",
        attractions: [
            {
              name: "Kennedy Space Center",
              paragraph: "Kennedy Space Center, situated on Merritt Island, Florida, is NASA's primary launch site for human spaceflight. It offers visitors a unique opportunity to witness the awe-inspiring spectacle of a rocket launch. It's a short 15 minute drive to Kennedy Space Center. Alongside interactive exhibits and iconic attractions like the Rocket Garden and Space Shuttle Atlantis exhibit, the chance to experience a live rocket launch makes a visit to Kennedy Space Center an unforgettable adventure.",
              imagePath: "/src/assets/NASA_Rocket_Launch.webp",
              imageAlt: "",
              otherInfo: [
                {name: "Founded", value:"1963"}, 
                {name: "Distance", value:"15min"} 
              ],
              link: "https://www.kennedyspacecenter-tickets.com",
            },
            {
              name: "Disney World",
              paragraph: "Disney World Orlando, one of the most renowned theme parks and resorts in the world, is nestled in the heart of Orlando, Florida. This enchanting destination is celebrated for its immersive experiences, captivating attractions, and four iconic theme parks. Located approximately 45 minutes away by car, allowing aspiring aviators and aviation enthusiasts to indulge in the wonders of the park during their leisure time.",
              imagePath: "/src/assets/Disney_World.webp",
              imageAlt: "",
              otherInfo: [ 
                {name: "Distance", value:"45min"} 
              ],
              link: "https://disneyworld.disney.go.com/",
            },
            {
              name: "Orlando",
              paragraph: "With its sunny weather and a wide array of attractions, Orlando offers something for everyone. From world-class theme parks like Universal Orlando Resort to vibrant arts and cultural scenes, Orlando captivates visitors with its enchanting atmosphere. The city also boasts beautiful natural spaces, including gardens, lakes, and nature preserves, providing ample opportunities for outdoor activities. With its warm hospitality and a variety of accommodations, Orlando is a destination that guarantees an unforgettable experience for all. Located approximately 45 minutes from our location.",
              imagePath: "/src/assets/orlando.webp",
              imageAlt: "",
              otherInfo: [
                {name: "Distance", value:"25min"}  
              ],
              link: "https://www.orlando.gov/",
            },
            {
              name: "Cocoa Beach",
              paragraph: `Cocoa Beach is a stunning coastal city on Florida's east coast. Just a 25 minute drive from USATS. Known as the "Surfing Capital of the East Coast," it offers miles of golden beaches, perfect waves for surfers, and a vibrant beachside boardwalk. Visitors can enjoy water activities, explore nearby wildlife refuges, and immerse themselves in the area's rich space exploration history at the Kennedy Space Center. Cocoa Beach is a captivating destination that combines natural beauty, recreational opportunities, and a laid-back beach atmosphere.`,
              imagePath: "/src/assets/cocoa_beach_pier.webp",
              imageAlt: "",
              otherInfo: [ 
                {name: "Distance", value:"25min"} 
              ],
              link: "https://www.cityofcocoabeach.com",
            },
            {
              name: "Port Canaveral",
              paragraph: `Port Canaveral is a bustling and convenient port just 20 minutes away from USATS. It is one of the busiest cruise ports globally and offers a seamless embarkation process. With diverse cruise itineraries, ranging from short getaways to extended trips to the Caribbean and beyond, Port Canaveral is a gateway to adventure.`,
              imagePath: "/src/assets/Cruise_Ship.webp",
              imageAlt: "",
              otherInfo: [
                {name: "Distance", value:"20min"} 
              ],
              link: "https://www.portcanaveral.com",
            },
          ],
    },

    subscribeForm: {
        title: "Subscribe for Exclusive Updates",
        paragraph: "Get notified about the latest promotions and exclusive deals. Subscribers only."
    },

    altoNGPitch: {
        title: "Experience the Future With DirectFly",
        subtitle: "",
        paragraphs: [
            "Elevate your flying experience with the DirectFly Alto NG, the pinnacle of modern aviation innovation. Designed for discerning pilots seeking performance, comfort, and cutting-edge technology, the Alto NG delivers unparalleled excellence in every flight. Its sleek aerodynamic design, coupled with a robust yet fuel-efficient engine, ensures smooth and efficient travel through the skies. Step into the spacious and ergonomically designed cockpit, where intuitive controls and advanced avionics systems put you in command with confidence. With its impressive range, versatile capabilities, and unmatched reliability, the DirectFly Alto NG redefines what it means to take flight. Experience the future of aviation today.",
            "We are thrilled to partner with Direct Fly to bring the Alto NG to the North American market. This aircraft offers a unique combination of performance, comfort, and affordability that will appeal to a wide range of pilots. As the dealer and service center for the Alto NG, we are committed to providing our customers with the best possible experience and support.",
        ],
        bulletTitle: "Highlights of the Alto NG",
        list: [
            {
                title: "Efficiency in Flight",
                paragraph: "Its sleek design and fuel-efficient engine offer extended range and reduced operating costs..",
                
            },  
            {
                title: "Premium Cabin Comfort",
                paragraph: "Enjoy the spacious cabin designed for ultimate comfort throughout your journey.",
                
            }, 
            {
                title: "Tailored to Your Needs",
                paragraph: "Offers customizable options to fit your unique preferences and requirements.",
                
            },
            {
                title: "Cutting-Edge Avionics",
                paragraph: "Integrates advanced avionics for enhanced safety and navigation. available at the customers request ",
                
            },     
        
        ],
    },

    cta: {
      imagePath: "/src/assets/CTADiscFlights.png",
      imageAlt: "",
      headerH1: `Still have questions?`,
      paragraph: ``,
      buttons: [
        {
          name: "Contact us",
          link: "/contact-us",
          primary: true,
        },
      ],
    },

};

export default localAttractions;