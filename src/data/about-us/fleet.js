export const airplaneFleet = [
    {
      name: "Cessna 172",
      slug: "cessna172",
      rentalPrice: "1",
      usableFuel: "",
      model: "N3544W",
      equipment: [
        "G1000 Glass Cockpit",
        "TAA",
        "Autopilot",
        "ADS-B IN/OUT",
        "Lycoming IO-360-L2A 180 HP",
        "Dedicated Maintenance facility",
      ],
      imagePath: "/src/assets/USATS_Plane_N3544W.webp",
      imagesArray: [
        "/src/assets/placeholder.webp",
        "/src/assets/placeholder.webp",
        "/src/assets/placeholder.webp",
        "/src/assets/placeholder.webp",
      ],
      description: [
        "",
        ""
      ],
    },
    {
      name: "Alto NG",
      slug: "altong",
      rentalPrice: "2",
      usableFuel: "",
      model: "N3544W",
      equipment: [
        "Dynon hdx1200 dual displays",
        "TAA",
        "Autopilot",
        "Brand new",
        "Dedicated Maintenance facility",
        "Germin 175s",
      ],
      imagePath: "/src/assets/placeholder.webp",
      imagesArray: [
        "/src/assets/placeholder.webp",
        "/src/assets/placeholder.webp",
        "/src/assets/placeholder.webp",
        "/src/assets/placeholder.webp",
      ],
      description: [
        "",
        ""
      ],
    },
  ];

export const helicopterFleet = [
  {
    name: "Robinson R44 Fleet",
    slug: "robinsonr44fleet",
    rentalPrice: "1",
    usableFuel: "",
    model: "R44",
    equipment: [
      "Semi-Rigid",
      "IFR equipped",
      "G500H EFIS",
      "GPS WAAS 430",
    ],
    imagePath: "/src/assets/Robinson_R44_USATS_Ramp_ee7c0db4-345b-4afc-ad3d-dadee593e801.jpg",
    imagesArray: [
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
    ],
    description: [
      "The Best Multi-Mission Helicopter",
      ""
    ],
  },
  {
    name: "Schweizer S-300",
    slug: "schweizers300",
    rentalPrice: "2",
    usableFuel: "",
    model: "S-300",
    equipment: [
      "Fully Articulated",
      "IFR Equipped",
      "GI 275 Attitude Indicator & HSI",
      "GPS WAAS G430 & GTN 650",
    ],
    imagePath: "/src/assets/Robinson_R44_USATS_Ramp_ee7c0db4-345b-4afc-ad3d-dadee593e801.jpg",
    imagesArray: [
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
      "/src/assets/placeholder.webp",
    ],
    description: [
      "The Best Multi-Mission Helicopter",
      ""
    ],
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
    description: [
      "The Best Multi-Mission Helicopter",
      ""
    ],
  },
];

export const fleet = [...airplaneFleet, ...helicopterFleet, ...militaryFleet];

// 2 alto NG: dynon hdx1200 dual displays, garmin 175s (lower operating cost)