import { ALTO_5A as imgHeader } from "../constsImages";

const coursesIndex = {
  data: {
    // SEO Header Stuff
    pageTitle: "Airplane Flight Training Programs | USATS Titusville FL",
    pageDescription:
      "Complete airplane pilot training from private to commercial certificates at USATS. FAA-approved Part 141 programs with modern aircraft and experienced instructors on Florida's Space Coast.",
    pageKeywords:
      "airplane pilot training, fixed wing flight school Florida, Cessna training, airplane pilot license, commercial pilot training, private pilot certificate, instrument rating airplane, multi-engine rating, flight instructor certification, airplane flight training Titusville, Alto NG aircraft training, Part 141 flight school, airline career pathway, sport pilot license, PPL training Florida",

    // Top Header
    header: {
      stars: true,
      imagePath: imgHeader.imagePath,
      imageAlt: imgHeader.imageAlt,
      headerH1: `FLIGHT TRAINING<br>PROGRAMS</span>`,
      paragraph: ``,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: true,
        },
        {
          name: "Program Guide",
          link: "/flight-training#grid-programs",
          primary: false,
        },
      ],
    },
  },
};

export default coursesIndex;
