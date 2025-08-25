import {
  CESSNA_172_USATS_RAMP_WEBP as cessnaRamp,
  ALTO_7A as altoNG,
} from "../../constsImages";

export const airplaneFleet = [
  {
    name: "Cessna 172",
    slug: "cessna172",
    rentalPrice: "1",
    usableFuel: "",
    model: "Cessna",
    equipment: [
      "G1000 Glass Cockpit",
      "TAA",
      "Autopilot",
      "ADS-B IN/OUT",
      "Lycoming IO-360-L2A 180 HP",
      "Dedicated Maintenance facility",
    ],
    imagePath: cessnaRamp.imagePath,
    imageAlt: cessnaRamp.imageAlt,
    imagesArray: [
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
    ],
    description: ["", ""],
  },
  {
    name: "Alto NG",
    slug: "altong",
    rentalPrice: "2",
    usableFuel: "",
    model: "DirectFly",
    equipment: [
      "Dynon hdx1200 dual displays",
      "TAA",
      "Autopilot",
      "Brand new",
      "Dedicated Maintenance facility",
      "Germin 175s",
    ],
    imagePath: altoNG.imagePath,
    imageAlt: altoNG.imageAlt,
    imagesArray: [
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
    ],
    description: ["", ""],
  },
];

export const helicopterFleet = [
  {
    name: "Robinson R44",
    slug: "robinsonR44",
    rentalPrice: "1",
    usableFuel: "",
    model: "R44",
    equipment: ["Semi-Rigid", "IFR equipped", "G500H EFIS", "GPS WAAS 430"],
    imagePath: "/src/assets/White_blue_Robinson_R44_USATS_Ramp.webp",
    imagesArray: [
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
    ],
    description: ["The Best Multi-Mission Helicopter", ""],
  },
  {
    name: "Schweizer S-300",
    slug: "schweizers300",
    rentalPrice: "6",
    usableFuel: "",
    model: "S-300",
    equipment: [
      "Fully Articulated",
      "IFR Equipped",
      "GI 275 Attitude Indicator & HSI",
      "GPS WAAS G430 & GTN 650",
    ],
    imagePath: "/src/assets/White_Schweizer_S300_Usats_Ramp_USATS.webp",
    imagesArray: [
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
    ],
    description: ["The Best Multi-Mission Helicopter", ""],
  },
];

export const militaryFleet = [
  {
    name: "UH-60 Black Hawk",
    slug: "uh60blackhawk",
    rentalPrice: "1",
    usableFuel: "",
    model: "UH-60",
    equipment: [
      "Transport",
      "Search & Rescue",
      "External Load",
      "Medevac",
      "Fire Fighting",
      "Executive Transport Missions",
    ],
    imagePath: "/src/assets/UH-60_Black_Hawk_1.webp",
    imagesArray: [
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
    ],
    description: ["The Best Multi-Mission Helicopter", ""],
  },
];

export const fleet = [...airplaneFleet, ...helicopterFleet];

// 2 alto NG: dynon hdx1200 dual displays, garmin 175s (lower operating cost)
