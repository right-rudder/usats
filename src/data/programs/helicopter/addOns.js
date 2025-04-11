import { COMPANY_NAME } from "@/lib/constants";

const addOns = {
  privatePilotAddon: {
    title: "Private Pilot Add-On (Part 141)",
    short: "Private Add-On",
    description: `This course is ideal for FAA airplane certificate holders looking to add a rotorcraft helicopter rating. Save time and money with our FAA Part 141-approved training.`,
    bullets: [
      "Hold at least an FAA Private airplane certificate",
      "Hold at least a class 3 FAA medical",
    ],
    training: [
      "Ground school: 24 hrs",
      "Dual: 22 hrs",
      "Solo: None",
    ],
    duration: "2 months",
    aircraft: ["S300CBi", "R44"],
    note: "*Hours subject to student performance",
  },
  instrumentRatingAddon: {
    title: "Instrument Rating Add-On (Part 141)",
    short: "Instrument Add-On",
    description: `Enhance your qualifications by adding a helicopter instrument rating to your FAA airplane certificate. This FAA Part 141-approved course includes simulator training.`,
    bullets: [
      "Hold at least an FAA Private airplane certificate with an Instrument Rating",
      "Hold a Rotorcraft Helicopter rating",
      "Hold at least a class 3 FAA medical",
    ],
    training: [
      "Ground School: 20 hrs",
      "Dual: 12 hrs",
      "Simulator: 5 hrs",
    ],
    duration: "1 month",
    aircraft: ["S300CBi", "R44"],
    note: "*Hours subject to student performance",
  },
  commercialPilotAddon: {
    title: "Commercial Pilot Add-On (Part 141)",
    short: "Commercial Add-On",
    description: `Upgrade your career path by adding a rotorcraft commercial rating. FAA-approved and optimized for holders of a commercial airplane certificate.`,
    bullets: [
      "Hold at least an FAA Commercial airplane certificate",
      "Hold at least a class 2 FAA medical",
    ],
    training: [
      "Ground School: 30 hrs",
      "Dual: 32.1 hrs",
      "Simulator: 2 hrs",
      "Solo: None",
    ],
    duration: "2 months",
    aircraft: ["S300CBi", "R44"],
    note: "*Hours subject to student performance",
  },
};

export default addOns;
