import { ALTO_4A as imgAirplaneCard, FLYING_WHITE_HELI9 as imgHelicopterCard } from "../constsImages";

const programsSwiper = {
    upperHeading: "Explore",
    heading: "Our Programs",
    description:
      "Your aviation dreams take center stage here. Whether pursuing a professional career, building flight hours, or seeking leisurely adventure, we have the perfect path for you.",
    cards: [
      {
        title: "Airplane Training Programs",
        imagePath: imgAirplaneCard.imagePath,
        imageAlt: imgAirplaneCard.imageAlt,
        description:
          "From zero experience to certified instructor, our comprehensive courses include FAA Private, Instrument, Commercial, CFI, and CFII licenses, with customized options for experienced students.",
        link: "/airplane-training",
      },
      {
        title: "Helicopter Training Programs",
        imagePath: imgHelicopterCard.imagePath,
        imageAlt: imgHelicopterCard.imageAlt,
        description:
          "Start from zero or build on your experience as you earn your FAA Private, Instrument, Commercial, CFI, CFII, and ATP-L helicopter licenses, with flexible training paths available.",
        link: "/helicopter-training",
      },
    ],
  };
  
  export default programsSwiper;