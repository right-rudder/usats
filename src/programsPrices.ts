export interface FlightProgram {
  aircraft: string;
  part: number | string;
  dual: number;
  solo: number;
  sim: number;
  ground: number;
  tutored: number;
  prePost: number;
  checkride: number;
  totalHours: number;
  lengthMonths: number;
  price: string;
}

// PPL (RW)
export const pplRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 141,
    dual: 33.0,
    solo: 11.4,
    sim: 0.0,
    ground: 35.0,
    tutored: 10.3,
    prePost: 13.3,
    checkride: 1.5,
    totalHours: 79.4,
    lengthMonths: 3.5,
    price: "$23,714.00"
  },
  {
    aircraft: "S300CBi",
    part: 61,
    dual: 45.0,
    solo: 10.0,
    sim: 0.0,
    ground: 80.0,
    tutored: 10.0,
    prePost: 16.5,
    checkride: 1.5,
    totalHours: 135.0,
    lengthMonths: 3.5,
    price: "$31,847.50"
  },
  {
    aircraft: "R44",
    part: 141,
    dual: 33.0,
    solo: 11.4,
    sim: 0.0,
    ground: 35.0,
    tutored: 10.3,
    prePost: 13.3,
    checkride: 1.5,
    totalHours: 79.4,
    lengthMonths: 3.5,
    price: "$29,530.40"
  },
  {
    aircraft: "R44",
    part: 61,
    dual: 45.0,
    solo: 10.0,
    sim: 0.0,
    ground: 80.0,
    tutored: 10.0,
    prePost: 16.5,
    checkride: 1.5,
    totalHours: 135.0,
    lengthMonths: 3.5,
    price: "$39,052.50"
  }
];

// PPL (FW)
export const pplFw: FlightProgram[] = [
  {
    aircraft: "Cessna 172",
    part: 141,
    dual: 30.0,
    solo: 5.0,
    sim: 0,
    ground: 37,
    tutored: 16.0,
    prePost: 9.5,
    checkride: 1.5,
    totalHours: 72,
    lengthMonths: 2.0,
    price: "$13,013.00"
  },
  {
    aircraft: "Cessna 172",
    part: 61,
    dual: 40.0,
    solo: 10.0,
    sim: 0,
    ground: 35,
    tutored: 0,
    prePost: 9.5,
    checkride: 1.5,
    totalHours: 85,
    lengthMonths: 2,
    price: "$15,493.00"
  },
  {
    aircraft: "Alto NG",
    part: 61,
    dual: 40.0,
    solo: 10.0,
    sim: 0,
    ground: 35,
    tutored: 0,
    prePost: 9.5,
    checkride: 1.5,
    totalHours: 85,
    lengthMonths: 2,
    price: "$12,992.50"
  }
];

// IR (RW)
export const irRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 141,
    dual: 36.1,
    solo: 0.0,
    sim: 3.5,
    ground: 68.0,
    tutored: 10.0,
    prePost: 13.2,
    checkride: 1.5,
    totalHours: 107.6,
    lengthMonths: 2.5,
    price: "$23,768.00"
  },
  {
    aircraft: "S300CBi",
    part: 61,
    dual: 40,
    solo: 0.0,
    sim: 5,
    ground: 40.0,
    tutored: 10.0,
    prePost: 15,
    checkride: 1.5,
    totalHours: 110,
    lengthMonths: 2.5,
    price: "$24,330.00"
  },
  {
    aircraft: "R44",
    part: 141,
    dual: 36.1,
    solo: 0.0,
    sim: 3.5,
    ground: 68.0,
    tutored: 10.0,
    prePost: 13.2,
    checkride: 1.5,
    totalHours: 107.6,
    lengthMonths: 2.5,
    price: "$28,497.00"
  },
  {
    aircraft: "R44",
    part: 61,
    dual: 40,
    solo: 0.0,
    sim: 5,
    ground: 40.0,
    tutored: 10.0,
    prePost: 15,
    checkride: 1.5,
    totalHours: 110,
    lengthMonths: 2.5,
    price: "$29,970.00"
  }
];

// IR (FW)
export const irFw: FlightProgram[] = [
  {
    aircraft: "Cessna 172",
    part: 141,
    dual: 44.6,
    solo: 0.0,
    sim: 0,
    ground: 30.0,
    tutored: 11.0,
    prePost: 12.0,
    checkride: 1.5,
    totalHours: 74.6,
    lengthMonths: 2.0,
    price: "$15,264.00"
  },
  {
    aircraft: "Cessna 172",
    part: 61,
    dual: 50,
    solo: 0.0,
    sim: 0,
    ground: 30,
    tutored: 0,
    prePost: 12,
    checkride: 1.5,
    totalHours: 80,
    lengthMonths: 2.0,
    price: "$15,980.00"
  },
  {
    aircraft: "Alto NG",
    part: 61,
    dual: 50,
    solo: 0.0,
    sim: 0,
    ground: 30,
    tutored: 0,
    prePost: 12,
    checkride: 1.5,
    totalHours: 80,
    lengthMonths: 2.0,
    price: "$13,480.00"
  }
];

// CPL (RW)
export const cplRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 141,
    dual: 48.0,
    solo: 67.0,
    sim: 0.0,
    ground: 40.0,
    tutored: 12.0,
    prePost: 18.0,
    checkride: 1.5,
    totalHours: 155.0,
    lengthMonths: 2.5,
    price: "$53,436.00"
  },
  {
    aircraft: "S300CBi",
    part: 61,
    dual: 20,
    solo: 10,
    sim: 0.0,
    ground: 10,
    tutored: 10,
    prePost: 5.7,
    checkride: 1.5,
    totalHours: 55.7,
    lengthMonths: 1.5,
    price: "$14,970.50"
  },
  {
    aircraft: "R44",
    part: 141,
    dual: 48.0,
    solo: 67.0,
    sim: 0.0,
    ground: 40.0,
    tutored: 12.0,
    prePost: 18.0,
    checkride: 1.5,
    totalHours: 155.0,
    lengthMonths: 2.5,
    price: "$68,501.00"
  },
  {
    aircraft: "R44",
    part: 61,
    dual: 20,
    solo: 10,
    sim: 0.0,
    ground: 10,
    tutored: 10,
    prePost: 5.7,
    checkride: 1.5,
    totalHours: 55.7,
    lengthMonths: 1.5,
    price: "$18,900.50"
  }
];

// CPL (FW)
export const cplFw: FlightProgram[] = [
  {
    aircraft: "Cessna 172",
    part: 141,
    dual: 55.0,
    solo: 65.0,
    sim: 0.0,
    ground: 36.0,
    tutored: 6.0,
    prePost: 18.5,
    checkride: 2.0,
    totalHours: 156.0,
    lengthMonths: 5.5,
    price: "$31,508.00"
  },
  {
    aircraft: "Cessna 172",
    part: 61,
    dual: 65,
    solo: 85,
    sim: 0,
    ground: 36,
    tutored: 0,
    prePost: 18.5,
    checkride: 2.0,
    totalHours: 186,
    lengthMonths: 5.5,
    price: "$37,767.50"
  },
  {
    aircraft: "Alto NG",
    part: 61,
    dual: 65,
    solo: 85,
    sim: 0,
    ground: 36,
    tutored: 0,
    prePost: 18.5,
    checkride: 2.0,
    totalHours: 186,
    lengthMonths: 5.5,
    price: "$30,207.50"
  }
];

// CFI (RW)
export const cfiRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 141,
    dual: 20.0,
    solo: 0.0,
    sim: 0.0,
    ground: 20.0,
    tutored: 3.0,
    prePost: 12.5,
    checkride: 1.5,
    totalHours: 40.0,
    lengthMonths: 1.5,
    price: "$15,232.50"
  },
  {
    aircraft: "S300CBi",
    part: 61,
    dual: 25.0,
    solo: 0.0,
    sim: 0.0,
    ground: 60.0,
    tutored: 5.0,
    prePost: 12.5,
    checkride: 1.5,
    totalHours: 85.0,
    lengthMonths: 2.0,
    price: "$16,662.50"
  },
  {
    aircraft: "R44",
    part: 141,
    dual: 20.0,
    solo: 0.0,
    sim: 0.0,
    ground: 20.0,
    tutored: 3.0,
    prePost: 12.5,
    checkride: 1.5,
    totalHours: 40.0,
    lengthMonths: 1.5,
    price: "$19,132.50"
  },
  {
    aircraft: "R44",
    part: 61,
    dual: 25.0,
    solo: 0.0,
    sim: 0.0,
    ground: 40.0,
    tutored: 3.0,
    prePost: 10.0,
    checkride: 1.5,
    totalHours: 65.0,
    lengthMonths: 2.0,
    price: "$20,945.00"
  }
];

// CFI (FW)
export const cfiFw: FlightProgram[] = [
  {
    aircraft: "Cessna 172",
    part: 61,
    dual: 25.0,
    solo: 0.0,
    sim: 0.0,
    ground: 15,
    tutored: 10,
    prePost: 7.5,
    checkride: 1.5,
    totalHours: 40.0,
    lengthMonths: 2,
    price: "$8,738.00"
  },
  {
    aircraft: "Alto NG",
    part: 61,
    dual: 25.0,
    solo: 0.0,
    sim: 0.0,
    ground: 15.0,
    tutored: 10,
    prePost: 7.5,
    checkride: 1.5,
    totalHours: 40.0,
    lengthMonths: 2,
    price: "$7,488.00"
  }
];

// CFII (RW)
export const cfiiRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 141,
    dual: 10.0,
    solo: 0.0,
    sim: 3.0,
    ground: 24.0,
    tutored: 10.0,
    prePost: 4.3,
    checkride: 1.5,
    totalHours: 37.0,
    lengthMonths: 0.8,
    price: "$6,182.50"
  },
  {
    aircraft: "S300CBi",
    part: 61,
    dual: 10.0,
    solo: 0.0,
    sim: 3.0,
    ground: 24.0,
    tutored: 10.0,
    prePost: 4.3,
    checkride: 1.5,
    totalHours: 37.0,
    lengthMonths: 0.8,
    price: "$6,182.50"
  },
  {
    aircraft: "R44",
    part: 141,
    dual: 10.0,
    solo: 0.0,
    sim: 3.0,
    ground: 24.0,
    tutored: 10.0,
    prePost: 4.3,
    checkride: 1.5,
    totalHours: 37.0,
    lengthMonths: 0.8,
    price: "$6,968.50"
  },
  {
    aircraft: "R44",
    part: 61,
    dual: 10.0,
    solo: 0.0,
    sim: 3.0,
    ground: 24.0,
    tutored: 10,
    prePost: 4.3,
    checkride: 1.5,
    totalHours: 37.0,
    lengthMonths: 0.8,
    price: "$6,868.50"
  }
];

// CFII (FW)
export const cfiiFw: FlightProgram[] = [
  {
    aircraft: "Cessna 172",
    part: 61,
    dual: 15.0,
    solo: 0.0,
    sim: 0,
    ground: 10.0,
    tutored: 10,
    prePost: 5,
    checkride: 1.5,
    totalHours: 25,
    lengthMonths: 1.0,
    price: "$5,600.00"
  },
  {
    aircraft: "Alto NG",
    part: 61,
    dual: 15.0,
    solo: 0.0,
    sim: 0,
    ground: 10.0,
    tutored: 10,
    prePost: 5,
    checkride: 1.5,
    totalHours: 25,
    lengthMonths: 1.0,
    price: "$4,850.00"
  }
];

// ATP (RW)
export const atpRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 141,
    dual: 25,
    solo: 0.0,
    sim: 0.0,
    ground: 40,
    tutored: 4,
    prePost: 12.5,
    checkride: 2.5,
    totalHours: 65,
    lengthMonths: 1,
    price: "$15,297.50"
  },
  {
    aircraft: "S300CBi",
    part: 61,
    dual: 10,
    solo: 0.0,
    sim: 3.0,
    ground: 16,
    tutored: 2.5,
    prePost: 6,
    checkride: 2.5,
    totalHours: 26,
    lengthMonths: 0.8,
    price: "$7,145.50"
  },
  {
    aircraft: "R44",
    part: 141,
    dual: 25,
    solo: 0.0,
    sim: 0.0,
    ground: 40,
    tutored: 4,
    prePost: 12.5,
    checkride: 2.5,
    totalHours: 65,
    lengthMonths: 1,
    price: "$18,572.50"
  },
  {
    aircraft: "R44",
    part: 61,
    dual: 10,
    solo: 0.0,
    sim: 3.0,
    ground: 16,
    tutored: 2.5,
    prePost: 6,
    checkride: 2.5,
    totalHours: 26,
    lengthMonths: 0.8,
    price: "$8,455.50"
  }
];

// NVG (RW)
export const nvgRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: "Initial",
    dual: 6.0,
    solo: 0.0,
    sim: 0.0,
    ground: 12.0,
    tutored: 0,
    prePost: 0,
    checkride: 0,
    totalHours: 18.0,
    lengthMonths: 0.5,
    price: "$4,064.00"
  },
  {
    aircraft: "S300CBi",
    part: "Recurrent",
    dual: 3,
    solo: 0,
    sim: 0,
    ground: 6,
    tutored: 2,
    prePost: 2.3,
    checkride: 0,
    totalHours: 18.1,
    lengthMonths: 0.3,
    price: "$2,064.50"
  }
];

// Turbine (RW)
export const turbineRw: FlightProgram[] = [
  {
    aircraft: "R66",
    part: "-",
    dual: 5,
    solo: 0.0,
    sim: 0.0,
    ground: 5,
    tutored: 0,
    prePost: 0,
    checkride: 0,
    totalHours: 10,
    lengthMonths: 0.5,
    price: "$8,730.00"
  }
];

// Transition (RW)
export const transitionRw: FlightProgram[] = [
  {
    aircraft: "R44",
    part: "-",
    dual: 10,
    solo: 0.0,
    sim: 0.0,
    ground: 5,
    tutored: 2,
    prePost: 2.9,
    checkride: 0,
    totalHours: 15,
    lengthMonths: 0.5,
    price: "$6,603.50"
  }
];

// PPP (FW)
export const pppFw: FlightProgram[] = [
  {
    aircraft: "Cessna 172",
    part: "141+61",
    dual: 169.6,
    solo: 70,
    sim: 0,
    ground: 128,
    tutored: 53,
    prePost: 52.5,
    checkride: 8,
    totalHours: 367.6,
    lengthMonths: 12.5,
    price: "$74,123.00"
  },
  {
    aircraft: "Cessna 172",
    part: 61,
    dual: 195,
    solo: 95,
    sim: 0,
    ground: 126,
    tutored: 20,
    prePost: 52.5,
    checkride: 8,
    totalHours: 416,
    lengthMonths: 12.5,
    price: "$83,577.50"
  },
  {
    aircraft: "Alto NG",
    part: 61,
    dual: 195,
    solo: 95,
    sim: 0,
    ground: 126,
    tutored: 20,
    prePost: 52.5,
    checkride: 8,
    totalHours: 416,
    lengthMonths: 12.5,
    price: "$69,077.50"
  }
];

// CTP (FW)
export const ctpFw: FlightProgram[] = [
  {
    aircraft: "Cessna 172",
    part: 141,
    dual: 104.6,
    solo: 70,
    sim: 0,
    ground: 103,
    tutored: 0,
    prePost: 40,
    checkride: 5,
    totalHours: 277.6,
    lengthMonths: 10,
    price: "$59,784.50"
  },
  {
    aircraft: "Cessna 172",
    part: 61,
    dual: 155,
    solo: 95,
    sim: 0,
    ground: 101,
    tutored: 0,
    prePost: 40,
    checkride: 5,
    totalHours: 351,
    lengthMonths: 10,
    price: "$69,240.50"
  },
  {
    aircraft: "Alto NG",
    part: 61,
    dual: 155,
    solo: 95,
    sim: 0,
    ground: 101,
    tutored: 0,
    prePost: 40,
    checkride: 5,
    totalHours: 351,
    lengthMonths: 10,
    price: "$56,740.00"
  }
];

// PPP (RW)
export const pppRw: FlightProgram[] = [
  {
    aircraft: "S300CBi + R44",
    part: "141/61",
    dual: 142.1,
    solo: 49.9,
    sim: 6.5,
    ground: 247,
    tutored: 47,
    prePost: 55,
    checkride: 8,
    totalHours: 445.5,
    lengthMonths: 11,
    price: "$109,981.00"
  }
];

// CTP (RW)
export const ctpRw: FlightProgram[] = [
  {
    aircraft: "S300CBi + R44",
    part: "141/61",
    dual: 111.1,
    solo: 35.4,
    sim: 3.5,
    ground: 163,
    tutored: 32,
    prePost: 38.3,
    checkride: 5,
    totalHours: 313,
    lengthMonths: 8,
    price: "$88,081.00"
  },
  {
    aircraft: "S300Cbi",
    part: "141/61",
    dual: 111.1,
    solo: 35.4,
    sim: 3.5,
    ground: 163,
    tutored: 32,
    prePost: 38.3,
    checkride: 5,
    totalHours: 313,
    lengthMonths: 8,
    price: "$80,747.00"
  },
  {
    aircraft: "R44",
    part: "141/61",
    dual: 111.1,
    solo: 35.4,
    sim: 3.5,
    ground: 163,
    tutored: 32,
    prePost: 38.3,
    checkride: 5,
    totalHours: 313,
    lengthMonths: 8,
    price: "$101,233.00"
  }
];

// PPL+ (RW)
export const pplPlusRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 141,
    dual: 22,
    solo: 0,
    sim: 0,
    ground: 24,
    tutored: 5,
    prePost: 7.8,
    checkride: 1.5,
    totalHours: 46,
    lengthMonths: 1.5,
    price: "$12,622.00"
  },
  {
    aircraft: "R44",
    part: 141,
    dual: 22,
    solo: 0,
    sim: 0,
    ground: 24,
    tutored: 5,
    prePost: 7.8,
    checkride: 1.5,
    totalHours: 46,
    lengthMonths: 1.5,
    price: "$15,504.00"
  }
];

// IR+ (RW)
export const irPlusRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 141,
    dual: 10.5,
    solo: 0,
    sim: 5,
    ground: 20,
    tutored: 4,
    prePost: 5.4,
    checkride: 1.5,
    totalHours: 35.5,
    lengthMonths: 1,
    price: "$8,298.50"
  },
  {
    aircraft: "R44",
    part: 141,
    dual: 10.5,
    solo: 0,
    sim: 5,
    ground: 20,
    tutored: 4,
    prePost: 5.4,
    checkride: 1.5,
    totalHours: 35.5,
    lengthMonths: 1,
    price: "$9,674.00"
  }
];

// CPL+ (RW)
export const cplPlusRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 141,
    dual: 32.1,
    solo: 0,
    sim: 2,
    ground: 30,
    tutored: 3.5,
    prePost: 10.2,
    checkride: 1.5,
    totalHours: 64.1,
    lengthMonths: 1.5,
    price: "$18,369.00"
  },
  {
    aircraft: "R44",
    part: 141,
    dual: 32.1,
    solo: 0,
    sim: 2,
    ground: 30,
    tutored: 3.5,
    prePost: 10.2,
    checkride: 1.5,
    totalHours: 64.1,
    lengthMonths: 1.5,
    price: "$22,574.00"
  }
];

// CFI+ (RW)
export const cfiPlusRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 61,
    dual: 20,
    solo: 0,
    sim: 0,
    ground: 20,
    tutored: 3,
    prePost: 10,
    checkride: 1.5,
    totalHours: 40,
    lengthMonths: 1.5,
    price: "$11,445.00"
  },
  {
    aircraft: "R44",
    part: 61,
    dual: 20,
    solo: 0,
    sim: 0,
    ground: 20,
    tutored: 3,
    prePost: 10,
    checkride: 1.5,
    totalHours: 40,
    lengthMonths: 1.5,
    price: "$14,065.00"
  }
];

// CFII+ (RW)
export const cfiiPlusRw: FlightProgram[] = [
  {
    aircraft: "S300CBi",
    part: 61,
    dual: 6,
    solo: 0,
    sim: 3,
    ground: 24,
    tutored: 10,
    prePost: 4.3,
    checkride: 1.5,
    totalHours: 33,
    lengthMonths: 0.5,
    price: "$6,182.50"
  },
  {
    aircraft: "R44",
    part: 61,
    dual: 6,
    solo: 0,
    sim: 3,
    ground: 24,
    tutored: 10,
    prePost: 4.3,
    checkride: 1.5,
    totalHours: 33,
    lengthMonths: 0.5,
    price: "$6,968.50"
  }
];