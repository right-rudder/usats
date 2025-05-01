import { ALTO_5A as imgHeader } from "../constsImages";

const coursesIndex = {
    data: {
      // SEO Header Stuff
      pageTitle: "Training Courses | US Academy ",
      pageDescription:
        "",
      pageKeywords:
        "",
  
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
  