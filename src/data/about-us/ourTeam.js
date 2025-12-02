import {
  ALTO_8A as imgHeader,
  STAFF_PHOTO_BRIAN_CRADDOCK as staffBrian,
  STAFF_PHOTO_HESSE_HELICOPTER_INSTRUCTOR as staffHessHeliInstructor,
  STAFF_PHOTO_RAY_DEPTULA as staffRay,
  STAFF_PHOTO_STEPHANE_REBEIX as staffStephane,
  PLACEHOLDER_PERSON as staffPlaceHolder,
} from "../../constsImages";

const ourTeam = {
  header: {
    stars: true,
    imagePath: imgHeader.imagePath,
    imageAlt: imgHeader.imageAlt,
    headerH1: `The USATS Team`,
    paragraph:
      "At USATS, our instructors are more than just experienced pilots — they’re passionate mentors, dedicated guides, and aviation professionals committed to your success. Discover the team that makes USATS a trusted, community-focused flight training center.",
    buttons: [
      {
        name: "Meet our Team",
        link: "#staff-grid",
        primary: false,
      },
    ],
  },

  staffGrid: {
    upperHeading: "Meet Our Team",
    heading: "Our Leadership Team",
    description:
      "The leadership team at USATS brings decades of aviation expertise from military, commercial, and FAA training backgrounds. With 30+ years of shaping pilots from 120+ countries—and a fleet spanning Cessna 172s to helicopters. We’re committed to delivering world-class flight education with precision, safety, and a focus on your success",
    members: [
      {
        name: "Ray Deptula",
        imagePath: staffRay.imagePath,
        imageAlt: staffRay.imageAlt,
        bio: "Ray is a retired career naval officer and naval aviator with 3,200 flight hours and over 3,000 shipboard landings, flying mainly SH-60B Seahawk and UH-1N Huey helicopters. He was a flight instructor for SH-60Bs and managed the navy’s east coast shipboard landing instruction program. Ray also holds an FAA Airline Transport Pilot (ATP) Rotorcraft-Helicopter certification.",
        rank: "Business Development Manager & Managing Director",
      },
      {
        name: "Stephane Rebeix",
        imagePath: staffStephane.imagePath,
        imageAlt: staffStephane.imageAlt,
        bio: "Stephane Rebeix, USATS Chief Flight Instructor, is a master helicopter pilot with 9,000+ flight hours (4,200+ instructing) across offshore, military, and training operations. An FAA 141 VFR/IFR expert since 2018, he’s flown AS332L1/2, EC225, and S76C+/++ helicopters globally—from Nigeria’s oil fields to the North Sea. Holder of dual ATP (US/Europe), CFI/CFII, and business degrees, he merges technical precision with academic rigor to shape elite aviators.",
        rank: "Chief Flight Instructor",
      },
    ],
  },

  fixedWingTeam: {
    upperHeading: "Fixed Wing Team",
    heading: "The Fixed Wing Team of US Aviation Training Solutions",
    description:
      "USATS instructors are FAA-certified professionals with decades of real-world experience, including military and commercial aviation. Trained in advanced safety systems like CRM and TEM, our team provides personalized flight instruction using modern aircraft and a proven curriculum refined over 30 years.",
    members: [
      {
        name: "Urara T.",
        imagePath: "/src/assets/Takano Urara 3.jpg",
        imageAlt: "Urara T., Flight Instructor at USATS Titusville Florida",
        rank: "Chief FW Pilot, CFI, CFII",
      },
      {
        name: "Angela P.",
        imagePath: "/src/assets/staff-Angela-Ramirez-Perez.jpg",
        imageAlt: "Angela P., Flight Instructor at USATS Titusville Florida",
        rank: "FW, CFI, CFII, MEI",
      },
      {
        name: "Mike B.", // Mike Bleau
        imagePath: staffPlaceHolder.imagePath,
        imageAlt: staffPlaceHolder.imageAlt,
        rank: "FW, CFII, ATP, MEI",
      },
      {
        name: "Nicolas B.", // Nicolas Burleson
        imagePath: staffPlaceHolder.imagePath,
        imageAlt: staffPlaceHolder.imageAlt,
        rank: "FW, CFI, CFII",
      },
      {
        name: "Ethan C.",
        imagePath: "/src/assets/staff-photo_Ethan-Criss.webp",
        imageAlt: "Ethan C., Flight Instructor at USATS Titusville Florida",
        rank: "FW, CFI",
      },
      {
        name: "Oscar G.", // Oscar Gomez
        imagePath: staffPlaceHolder.imagePath,
        imageAlt: staffPlaceHolder.imageAlt,
        rank: "FW/RW — CFII (FW), MEI, ATP | (RW) CFII - ATP",
      },
      {
        name: "Alec J.", // Alec Joyner
        imagePath: staffPlaceHolder.imagePath,
        imageAlt: staffPlaceHolder.imageAlt,
        rank: "FW, CFII, MEI",
      },
      {
        name: "Callum W.",
        imagePath: "/src/assets/Staff-photo-Callum-Watson.webp",
        imageAlt: "Callum W., Flight Instructor at USATS Titusville Florida",
        rank: "FW, CFI, CFII",
      },
    ],
  },

  rotorWingTeam: {
    upperHeading: "Rotor Wing Team",
    heading: "The Rotor Wing Team of US Aviation Training Solutions",
    description:
      "Our rotor wing instructors bring a wealth of real-world helicopter experience, from commercial operations to advanced flight instruction. With a strong focus on safety and professional development, they ensure every student is well-prepared for real-world flying.",
    members: [
      {
        name: "Stephane R.",
        imagePath: staffStephane.imagePath,
        imageAlt: staffStephane.imageAlt,
        rank: "Chief Flight Instructor, RW, CFI, CFII, Dual ATP (US/Europe)",
      },
      {
        name: "Jason K.",
        imagePath: "/src/assets/Krum, Jason.jpg",
        imageAlt:
          "Jason K., Helicopter Flight Instructor at USATS Titusville Florida",
        rank: "RW, CFI Gold Seal, CFII, ATP, Instrument Ground Instructor, SFAR",
      },
      {
        name: "Katie D.",
        imagePath: "/src/assets/staff-photo-Katie-Dwyer.webp",
        imageAlt: "Katie D., Flight Instructor at USATS Titusville Florida",
        rank: "RW, CFI",
      },
      {
        name: "Nelson H.", // Nelson Hererra
        imagePath: staffPlaceHolder.imagePath,
        imageAlt: staffPlaceHolder.imageAlt,
        rank: "RW, CFI, CFII , ATP, Ground Instructor, SFAR, NVG Instructor",
      },
    ],
  },
};

export default ourTeam;
