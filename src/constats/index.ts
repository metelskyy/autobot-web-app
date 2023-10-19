export const TITLE = "Выберите критерии";

export const CITIES_OPTIONS = [
  { value: "", label: "Вся Беларусь" },
  { value: "Минск", label: "Минск" },
  { value: "Брест", label: "Брест" },
  { value: "Гродно", label: "Гродно" },
  { value: "Гомель", label: "Гомель" },
  { value: "Могилев", label: "Могилев" },
  { value: "Витебск", label: "Витебск" },
];

export const BRANDS = {
  // A
  Abarth: "Abarth",
  Acura: "Acura",
  Aeolus: "Aeolus",
  "Alfa Romeo": "Alfa Romeo",
  Alpina: "Alpina",
  Audi: "Audi",
  Avatr: "Avatr",

  // B
  Baojun: "Baojun",
  Bentley: "Bentley",
  BMW: "BMW",
  Brilliance: "Brilliance",
  Buick: "Buick",
  BYD: "BYD",

  // C
  Cadillac: "Cadillac",
  Chana: "Chana",
  Changan: "Changan",
  Chery: "Chery",
  Chevrolet: "Chevrolet",
  Chrysler: "Chrysler",
  Citroen: "Citroen",
  Cupra: "Cupra",

  // D
  Dacia: "Dacia",
  Daewoo: "Daewoo",
  Daihatsu: "Daihatsu",
  Datsun: "Datsun",
  Derways: "Derways",
  Dodge: "Dodge",
  Dongfeng: "Dongfeng",
  "Dongfeng Honda": "Dongfeng Honda",

  // E
  EXEED: "EXEED",

  // F
  FAW: "FAW",
  FSO: "FSO",
  Ferrari: "Ferrari",
  Fiat: "Fiat",
  Ford: "Ford",

  // G
  GAC: "GAC",
  GMC: "GMC",
  Geely: "Geely",
  Genesis: "Genesis",
  "Great Wall": "Great Wall",

  // H
  Hafei: "Hafei",
  Haval: "Haval",
  HiPhi: "HiPhi",
  Honda: "Honda",
  Hongqi: "Hongqi",
  Hozon: "Hozon",
  Hummer: "Hummer",
  Hycan: "Hycan",
  Hyundai: "Hyundai",

  // I
  Infiniti: "Infiniti",
  "Iran Khodro": "Iran Khodro",
  Isuzu: "Isuzu",

  // J
  JAC: "JAC",
  Jaguar: "Jaguar",
  Jeep: "Jeep",
  Jetour: "Jetour",
  Jinbei: "Jinbei",

  // K
  Kia: "Kia",

  // L
  "Lada (ВАЗ)": "Lada (ВАЗ)",
  Lamborghini: "Lamborghini",
  Lancia: "Lancia",
  "Land Rover": "Land Rover",
  Leapmotor: "Leapmotor",
  Lexus: "Lexus",
  LiXiang: "LiXiang",
  Lifan: "Lifan",
  Lincoln: "Lincoln",

  // M
  MG: "MG",
  MINI: "MINI",
  Maserati: "Maserati",
  Mazda: "Mazda",
  "Mercedes-Benz": "Mercedes-Benz",
  Mercury: "Mercury",
  Mitsubishi: "Mitsubishi",

  // N
  Nio: "Nio",
  Nissan: "Nissan",

  // O
  Opel: "Opel",

  // P
  Peugeot: "Peugeot",
  Plymouth: "Plymouth",
  Polestar: "Polestar",
  Pontiac: "Pontiac",
  Porsche: "Porsche",
  Proton: "Proton",

  // R
  RAM: "RAM",
  Ravon: "Ravon",
  Renault: "Renault",
  "Renault Samsung": "Renault Samsung",
  Roewe: "Roewe",
  Rover: "Rover",

  // S
  SEAT: "SEAT",
  SRM: "SRM",
  Saab: "Saab",
  Saturn: "Saturn",
  Scion: "Scion",
  Skoda: "Skoda",
  Skywell: "Skywell",
  Smart: "Smart",
  SsangYong: "SsangYong",
  Subaru: "Subaru",
  Suzuki: "Suzuki",

  // T
  Tata: "Tata",
  Tesla: "Tesla",
  Toyota: "Toyota",
  Trabant: "Trabant",

  // V
  VGV: "VGV",
  Volkswagen: "Volkswagen",
  Volvo: "Volvo",
  Vortex: "Vortex",
  Voyah: "Voyah",

  // W
  Wartburg: "Wartburg",
  Weltmeister: "Weltmeister",

  // X
  Xpeng: "Xpeng",

  // Z
  ZX: "ZX",
  Zeekr: "Zeekr",
  Zotye: "Zotye",

  // А-Я
  Богдан: "Богдан",
  ГАЗ: "ГАЗ",
  ЗАЗ: "ЗАЗ",
  ИЖ: "ИЖ",
  ЛуАЗ: "ЛуАЗ",
  Москвич: "Москвич",
  РАФ: "РАФ",
  ТагАЗ: "ТагАЗ",
  УАЗ: "УАЗ",
  Эксклюзив: "Эксклюзив",
};

export const BRANDS_OPTIONS = Object.values(BRANDS).map((item) => ({
  label: item,
  value: item,
}));
