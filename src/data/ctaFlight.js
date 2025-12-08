import { COMPANY_NAME } from "../consts";

const CTAFlight = {
    imagePath: "/src/assets/ctadiscflights-USATS-florida-professional-pilot-program.png",
    imageAlt: "USATS student flying around the campus",
    headerH1: `Take the First Step</br>With a <span class="text-accent-700">Discovery Flight</span>`,
    paragraph:
      `Launch your aviation dreams at ${COMPANY_NAME}! Soar above Florida's Space Coast - home to rocket launches, pristine beaches, and endless skies - with a hands-on Discovery Flight guided by our certified instructors. Book now and take control of your journey to the clouds!`,
    buttons: [
      {
        name: "Book Now",
        link: "/discovery-flight",
        primary: true,
      },
    ],
  };
  
  export default CTAFlight;