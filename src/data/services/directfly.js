import { COMPANY_NAME, COMPANY_NICKNAME } from "../../consts";

const directFly = {

   data:{ 
        header: {    
        title: "DirectFly - Alto NG",
        subtitle: "North American Dealer and Service Center for DirectFly Alto NG",
        headerH1: `${COMPANY_NICKNAME} <br> DirectFly - Alto NG`,
        paragraph: `North American Dealer and Service Center for DirectFly Alto NG`,
        imagePath: "/src/assets/placeholder.webp",
        imageAlt: "image alt",
        buttons: [
            {
              name: "Contact-us",
              link: "",
              primary: true,
            },
          ],
        },
    },

    lightPlaneExhibit: {
        title: "SUN'N FUN",
        subtitle: "Visit us At",
        paragraph: "Come visit us at booth LP-062 in the Light Plane Exhibit at Sun 'n Fun! Don't miss the chance to check out the DirectFly Alto NG firsthand, See you there!",
        buttons: [
            {
              name: "Contact-us",
              link: "",
              primary: true,
            },
          ],
    },

    subscribeForm: {
        title: "Subscribe for Exclusive Updates",
        paragraph: "Get notified about the latest promotions and exclusive deals. Subscribers only."
    },

    altoNGPitch: {
        title: "Experience the Future With DirectFly",
        subtitle: "The Future is Here",
        imagePath:"/src/assets/Happy_Landings_ALO_NG.webp",
        imageAlt:"",
        paragraphs: [
            "Elevate your flying experience with the DirectFly Alto NG, the pinnacle of modern aviation innovation. Designed for discerning pilots seeking performance, comfort, and cutting-edge technology, the Alto NG delivers unparalleled excellence in every flight.",
            "Its sleek aerodynamic design, coupled with a robust yet fuel-efficient engine, ensures smooth and efficient travel through the skies. Step into the spacious and ergonomically designed cockpit, where intuitive controls and advanced avionics systems put you in command with confidence. With its impressive range, versatile capabilities, and unmatched reliability, the DirectFly Alto NG redefines what it means to take flight. Experience the future of aviation today.",
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

    discoveryFlightCTA: {
        title: "Want to see how high it can fly?",
        paragraph: "Book a Discovery Flight",
        buttons: [
            {
              name: "Book now",
              link: "/discovery-flight",
              primary: true,
            },
          ],
    },

};

export default directFly;