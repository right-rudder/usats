import {  ALTO_8A as imgHeader, 
          STAFF_PHOTO_BRIAN_CRADDOCK as staffBrian, 
          STAFF_PHOTO_HESSE_HELICOPTER_INSTRUCTOR as staffHessHeliInstructor, 
          STAFF_PHOTO_RAY_DEPTULA as staffRay, 
          STAFF_PHOTO_STEPHANE_REBEIX as staffStephane,
         } from "../../constsImages"

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
      "The leadership team at USATS brings decades of aviation expertise from military, commercial, and FAA training backgrounds. With 30+ years of shaping pilots from 120+ countries—and a fleet spanning Cessna 172s to UH-60 Black Hawks—we’re committed to delivering world-class flight education with precision, safety, and a focus on your success",
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

  teamGrid: {
    upperHeading: "Meet Our Team",
    heading: "The Airframe of US Aviation Training Solutions",
    description:
      "USATS instructors are FAA-certified professionals with decades of real-world experience, including military and commercial aviation. Trained in advanced safety systems like CRM and TEM, our team provides personalized flight instruction using modern aircraft and a proven curriculum refined over 30 years.",
    members: [
      {
        name: "Iikka Hesse",
        imagePath: staffHessHeliInstructor.imagePath,
        imageAlt: staffHessHeliInstructor.imageAlt,
        rank: "Helicopter Instructor",
      },
      {
        name: "Stephane Rebeix",
        imagePath: staffStephane.imagePath,
        imageAlt: staffStephane.imageAlt,
        rank: "Chief Flight Instructor",
      },
      {
        name: "Ray Deptula",
        imagePath: staffRay.imagePath,
        imageAlt: staffRay.imageAlt,
        rank: "Helicopter Instructor",
      },
    ],
  },
}

export default ourTeam