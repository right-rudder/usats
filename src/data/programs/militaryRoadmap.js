import { COMPANY_NAME } from "../../consts";

import { HELICOPTERS_FRAME } from "../../constsImages";

const militaryInstructorRoadmap = {
  upperHeading: "Battlefield Readiness Pathway",
  heading: "Tactical Flight Instructor Qualification",
  descriptions: [
    `Transform into a mission-ready military aviation instructor with ${COMPANY_NAME}'s combat-proven training pathway. From foundational CFI-H certification to NVG tactical mastery, this program prepares you to lead multi-role helicopter operations.`
  ],
  steps: [
    {
      title: "Certified Flight Instructor-Helicopter (CFI-H)",
      link: "#",
      paragraphs: [
        "Establish core instructional skills using the Schweizer S-300 and Robinson R-44. Master tactical autorotations, confined-area landings, and combat scenario briefings while earning FAA certification to train military pilots.",
        "Our CFI-H phase emphasizes battlefield CRM and TEM strategies, with 60+ hours of ground instruction on threat pattern recognition and debriefing combat simulations."
      ],
      imagePath: "/src/assets/USATS_145_Repair_Station_UH-60.webp",
      imageAlt: "Instructor candidate demonstrating confined-area approach in S-300"
    },
    {
      title: "Certified Flight Instructor-Instrument (CFII-H)",
      link: "#",
      paragraphs: [
        "Qualify to teach instrument operations in degraded visibility environments. Conduct training in GPS/ILS-equipped R-44s, focusing on adverse weather extraction scenarios and night VFR navigation.",
        "This phase includes 25hrs of instrument instruction replicating sandstorm recoveries, electronic warfare system failures, and ATC coordination under stress."
      ],
      imagePath: "/src/assets/militaryTraingingBH4.png",
      imageAlt: "CFII candidate practicing instrument approaches in R-44"
    },
    {
      title: "Night Vision Goggle (NVG) Tactical Certification",
      link: "#",
      paragraphs: [
        "Transition to UH-60 Black Hawks for advanced NVG operations. Conduct MEDEVAC hoist drills, external load delivery, and low-level infiltration under night vision conditions.",
        "15+ hours of NVG flight training includes threat detection exercises and joint operations with ground forces using our 38-acre tactical training complex."
      ],
      imagePath: "/src/assets/militaryTraingingBH9.png",
      imageAlt: "UH-60 conducting NVG external load operation at night"
    },
    {
      title: "Multi-Mission Qualification (UH-60 Black Hawk)",
      link: "#",
      paragraphs: [
        "Master the Black Hawk's combat roles: SAR, MEDEVAC, firefighting, and troop insertion. Train with mission-specific configurations including hoists, external tanks, and NVG-compatible avionics.",
        "Includes 20hrs of scenario-based training with live coordination from Joint Terminal Attack Controllers (JTACs) and combat medic teams."
      ],
      imagePath: "/src/assets/militaryTraingingBH.png",
      imageAlt: "UH-60 performing tactical insertion during daytime ops"
    },
    {
      title: "Deployable Instructor Certification",
      link: "#",
      paragraphs: [
        "Final phase certifies you to lead mobile training teams (MTT) using client-provided aircraft. Learn to adapt curricula for foreign airframes while maintaining FAA/ICAO standards.",
        "Includes train-the-trainer modules and 12 months of post-graduation mentorship for real-world mission debriefing."
      ],
      imagePath: HELICOPTERS_FRAME.imagePath,
      imageAlt: HELICOPTERS_FRAME.imageAlt
    }
  ],
  finalParagraph:
    "Ready to command respect in military aviation? Enroll in our Tactical Flight Instructor Program and gain NATO-recognized certifications to lead high-stakes missions.",
  finalButton: {
    name: "Request Deployment Package",
    link: "#",
    primary: true
  }
};

export default militaryInstructorRoadmap;