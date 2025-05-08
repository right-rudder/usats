import { ALTO_4A as imgAirplaneCard, FLYING_WHITE_HELI9 as imgHelicopterCard } from "../constsImages";

const programsSwiper = {
    upperHeading: "Explore",
    heading: "Our Programs",
    description:
      "Your aviation dreams take center stage here. Whether pursuing a professional career, building flight hours, or seeking leisurely adventure, we have the perfect path for you.",
    cards: [
      {
        title: "Airplane Pilot Training Programs",
        imagePath: imgAirplaneCard.imagePath,
        imageAlt: imgAirplaneCard.imageAlt,
        description:
          "This program is designed for students with zero flying experience. You will obtain your FAA Private, Instrument, Commercial license, CFI, and CFII licenses.",
        link: "/airplane-training",
      },
      {
        title: "Helicopter Pilot Training Programs",
        imagePath: imgHelicopterCard.imagePath,
        imageAlt: imgHelicopterCard.imageAlt,
        description:
          "With an average of 320 flying days per year, we can make sure your training will be done on time. Our practice areas are located within 10 nautical miles from our airport, limiting the transit time for your off-airport training.",
        link: "/helicopter-training",
      },
    ],
  };
  
  export default programsSwiper;