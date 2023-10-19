import {
  ABARTH_MODELS,
  ACURA_MODELS,
  AEOLUS_MODELS,
  ALFA_ROMEO_MODELS,
  ALPINA_MODELS,
  AVATR_MODELS,
  AUDI_MODELS,
} from "./models/a";
import {
  BAOJUN_MODELS,
  BENTLEY_MODELS,
  BRILLIANCE_MODELS,
  BUICK_MODELS,
  BWM_MODELS,
  BYD_MODELS,
} from "./models/b";
import {
  CADILLAC_MODELS,
  CHANA_MODELS,
  CHANGAN_MODELS,
  CHERY_MODELS,
  CHEVROLET_MODELS,
  CHRYSLER_MODELS,
  CITROEN_MODELS,
  CUPRA_MODELS,
} from "./models/c";
import {
  DACIA_MODELS,
  DAEWOO_MODELS,
  DAIHATSU_MODELS,
  DATSUN_MODELS,
  DERWAYS_MODELS,
  DODGE_MODELS,
  DONGFENG_HONDA_MODELS,
  DONGFENG_MODELS,
} from "./models/d";
import { EXEED_MODELS } from "./models/e";
import {
  FAW_MODELS,
  FERRARI_MODELS,
  FIAT_MODELS,
  FORD_MODELS,
  FSO_MODELS,
} from "./models/f";
import {
  GAC_MODELS,
  GEELY_MODELS,
  GENESIS_MODELS,
  GMC_MODELS,
  GREAT_WALL_MODELS,
} from "./models/g";
import {
  HAFEI_MODELS,
  HAVAL_MODELS,
  HIPHI_MODELS,
  HONDA_MODELS,
  HONGQI_MODELS,
  HOZON_MODELS,
  HUMMER_MODELS,
  HYCAN_MODELS,
  HYUNDAI_MODELS,
} from "./models/h";
import { INFINITI_MODELS, IRAN_KHODRO_MODELS, ISUZU_MODELS } from "./models/i";
import {
  JAC_MODELS,
  JAGUAR_MODELS,
  JEEP_MODELS,
  JETOUR_MODELS,
  JINBEI_MODELS,
} from "./models/j";
import { KIA_MODELS } from "./models/k";
import {
  LADA_MODELS,
  LAMBORGHINI_MODELS,
  LANCIA_MODELS,
  LAND_ROVER_MODELS,
  LEAPMOTOR_MODELS,
  LEXUS_MODELS,
  LIFAN_MODELS,
  LINCOLN_MODELS,
  LIXIANG_MODELS,
} from "./models/l";
import {
  MASERATI_MODELS,
  MAZDA_MODELS,
  MERCEDES_BENZ_MODELS,
  MERCURY_MODELS,
  MG_MODELS,
  MINI_MODELS,
  MITSUBISHI_MODELS,
} from "./models/m";
import { NISSAN_MODELS } from "./models/n";
import { OPEL_MODELS } from "./models/o";
import {
  PEUGEOT_MODELS,
  PLYMOUTH_MODELS,
  POLESTAR_MODELS,
  PONTIAC_MODELS,
  PORSCHE_MODELS,
  PROTON_MODELS,
} from "./models/p";
import {
  RAM_MODELS,
  RAVON_MODELS,
  RENAULT_MODELS,
  RENAULT_SAMSUNG_MODELS,
  ROEWE_MODELS,
  ROVER_MODELS,
} from "./models/r";
import {
  SAAB_MODELS,
  SATURN_MODELS,
  SCION_MODELS,
  SEAT_MODELS,
  SKODA_MODELS,
  SKYWELL_MODELS,
  SMART_MODELS,
  SRM_MODELS,
  SSANGYONG_MODELS,
  SUBARU_MODELS,
  SUZUKI_MODELS,
} from "./models/s";
import {
  TATA_MODELS,
  TESLA_MODELS,
  TOYOTA_MODELS,
  TRABANT_MODELS,
} from "./models/t";
import {
  VGV_MODELS,
  VOLKSWAGEN_MODELS,
  VOLVO_MODELS,
  VORTEX_MODELS,
  VOYAH_MODELS,
} from "./models/v";
import { WARTBURG_MODELS, WELTMEISTER_MODELS } from "./models/w";
import { XPENG_MODELS } from "./models/x";
import { ZEEKR_MODELS, ZOTYE_MODELS, ZX_MODELS } from "./models/z";
import {
  BOGDAN_MODELS,
  EXCLUSIVE_MODELS,
  GAZ_MODELS,
  IJ_MODELS,
  LUAZ_MODELS,
  MOSKVICH_MODELS,
  RAF_MODELS,
  TAGAZ_MODELS,
  UAZ_MODELS,
  ZAZ_MODELS,
} from "./models/а-я";

const BRANDS = {
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

export const BRANDS_ARRAY = Object.values(BRANDS);

// ALL MODELS = require(AV.BY | AV.BY IS FOUNDERS OF NAMES

export const BRANDS_MODELS = {
  [BRANDS.Abarth]: ABARTH_MODELS,
  [BRANDS.Acura]: ACURA_MODELS,
  [BRANDS.Aeolus]: AEOLUS_MODELS,
  [BRANDS["Alfa Romeo"]]: ALFA_ROMEO_MODELS,
  [BRANDS.Alpina]: ALPINA_MODELS,
  [BRANDS.Audi]: AUDI_MODELS,
  [BRANDS.Avatr]: AVATR_MODELS,

  [BRANDS.Baojun]: BAOJUN_MODELS,
  [BRANDS.Bentley]: BENTLEY_MODELS,
  [BRANDS.BMW]: BWM_MODELS,
  [BRANDS.Brilliance]: BRILLIANCE_MODELS,
  [BRANDS.Buick]: BUICK_MODELS,
  [BRANDS.BYD]: BYD_MODELS,

  [BRANDS.Cadillac]: CADILLAC_MODELS,
  [BRANDS.Chana]: CHANA_MODELS,
  [BRANDS.Changan]: CHANGAN_MODELS,
  [BRANDS.Chery]: CHERY_MODELS,
  [BRANDS.Chevrolet]: CHEVROLET_MODELS,
  [BRANDS.Chrysler]: CHRYSLER_MODELS,
  [BRANDS.Citroen]: CITROEN_MODELS,
  [BRANDS.Cupra]: CUPRA_MODELS,

  [BRANDS.Dacia]: DACIA_MODELS,
  [BRANDS.Daewoo]: DAEWOO_MODELS,
  [BRANDS.Daihatsu]: DAIHATSU_MODELS,
  [BRANDS.Datsun]: DATSUN_MODELS,
  [BRANDS.Derways]: DERWAYS_MODELS,
  [BRANDS.Dodge]: DODGE_MODELS,
  [BRANDS.Dongfeng]: DONGFENG_MODELS,
  [BRANDS["Dongfeng Honda"]]: DONGFENG_HONDA_MODELS,

  [BRANDS.EXEED]: EXEED_MODELS,

  [BRANDS.FAW]: FAW_MODELS,
  [BRANDS.FSO]: FSO_MODELS,
  [BRANDS.Ferrari]: FERRARI_MODELS,
  [BRANDS.Fiat]: FIAT_MODELS,
  [BRANDS.Ford]: FORD_MODELS,

  [BRANDS.GAC]: GAC_MODELS,
  [BRANDS.GMC]: GMC_MODELS,
  [BRANDS.Geely]: GEELY_MODELS,
  [BRANDS.Genesis]: GENESIS_MODELS,
  [BRANDS["Great Wall"]]: GREAT_WALL_MODELS,

  [BRANDS.Hafei]: HAFEI_MODELS,
  [BRANDS.Haval]: HAVAL_MODELS,
  [BRANDS.HiPhi]: HIPHI_MODELS,
  [BRANDS.Honda]: HONDA_MODELS,
  [BRANDS.Hongqi]: HONGQI_MODELS,
  [BRANDS.Hozon]: HOZON_MODELS,
  [BRANDS.Hummer]: HUMMER_MODELS,
  [BRANDS.Hycan]: HYCAN_MODELS,
  [BRANDS.Hyundai]: HYUNDAI_MODELS,

  [BRANDS.Infiniti]: INFINITI_MODELS,
  [BRANDS["Iran Khodro"]]: IRAN_KHODRO_MODELS,
  [BRANDS.Isuzu]: ISUZU_MODELS,

  [BRANDS.JAC]: JAC_MODELS,
  [BRANDS.Jaguar]: JAGUAR_MODELS,
  [BRANDS.Jeep]: JEEP_MODELS,
  [BRANDS.Jetour]: JETOUR_MODELS,
  [BRANDS.Jinbei]: JINBEI_MODELS,

  [BRANDS.Kia]: KIA_MODELS,

  [BRANDS["Lada (ВАЗ)"]]: LADA_MODELS,
  [BRANDS.Lamborghini]: LAMBORGHINI_MODELS,
  [BRANDS.Lancia]: LANCIA_MODELS,
  [BRANDS["Land Rover"]]: LAND_ROVER_MODELS,
  [BRANDS.Leapmotor]: LEAPMOTOR_MODELS,
  [BRANDS.Lexus]: LEXUS_MODELS,
  [BRANDS.LiXiang]: LIXIANG_MODELS,
  [BRANDS.Lifan]: LIFAN_MODELS,
  [BRANDS.Lincoln]: LINCOLN_MODELS,

  [BRANDS.MG]: MG_MODELS,
  [BRANDS.MINI]: MINI_MODELS,
  [BRANDS.Maserati]: MASERATI_MODELS,
  [BRANDS.Mazda]: MAZDA_MODELS,
  [BRANDS["Mercedes-Benz"]]: MERCEDES_BENZ_MODELS,
  [BRANDS.Mercury]: MERCURY_MODELS,
  [BRANDS.Mitsubishi]: MITSUBISHI_MODELS,

  [BRANDS.Nio]: NISSAN_MODELS,
  [BRANDS.Nissan]: NISSAN_MODELS,

  [BRANDS.Opel]: OPEL_MODELS,

  [BRANDS.Peugeot]: PEUGEOT_MODELS,
  [BRANDS.Plymouth]: PLYMOUTH_MODELS,
  [BRANDS.Polestar]: POLESTAR_MODELS,
  [BRANDS.Pontiac]: PONTIAC_MODELS,
  [BRANDS.Porsche]: PORSCHE_MODELS,
  [BRANDS.Proton]: PROTON_MODELS,

  [BRANDS.RAM]: RAM_MODELS,
  [BRANDS.Ravon]: RAVON_MODELS,
  [BRANDS.Renault]: RENAULT_MODELS,
  [BRANDS["Renault Samsung"]]: RENAULT_SAMSUNG_MODELS,
  [BRANDS.Roewe]: ROEWE_MODELS,
  [BRANDS.Rover]: ROVER_MODELS,

  [BRANDS.SEAT]: SEAT_MODELS,
  [BRANDS.SRM]: SRM_MODELS,
  [BRANDS.Saab]: SAAB_MODELS,
  [BRANDS.Saturn]: SATURN_MODELS,
  [BRANDS.Scion]: SCION_MODELS,
  [BRANDS.Skoda]: SKODA_MODELS,
  [BRANDS.Skywell]: SKYWELL_MODELS,
  [BRANDS.Smart]: SMART_MODELS,
  [BRANDS.SsangYong]: SSANGYONG_MODELS,
  [BRANDS.Subaru]: SUBARU_MODELS,
  [BRANDS.Suzuki]: SUZUKI_MODELS,

  [BRANDS.Tata]: TATA_MODELS,
  [BRANDS.Tesla]: TESLA_MODELS,
  [BRANDS.Toyota]: TOYOTA_MODELS,
  [BRANDS.Trabant]: TRABANT_MODELS,

  [BRANDS.VGV]: VGV_MODELS,
  [BRANDS.Volkswagen]: VOLKSWAGEN_MODELS,
  [BRANDS.Volvo]: VOLVO_MODELS,
  [BRANDS.Vortex]: VORTEX_MODELS,
  [BRANDS.Voyah]: VOYAH_MODELS,

  [BRANDS.Wartburg]: WARTBURG_MODELS,
  [BRANDS.Weltmeister]: WELTMEISTER_MODELS,

  [BRANDS.Xpeng]: XPENG_MODELS,

  [BRANDS.ZX]: ZX_MODELS,
  [BRANDS.Zeekr]: ZEEKR_MODELS,
  [BRANDS.Zotye]: ZOTYE_MODELS,

  [BRANDS.Богдан]: BOGDAN_MODELS,
  [BRANDS.ГАЗ]: GAZ_MODELS,
  [BRANDS.ЗАЗ]: ZAZ_MODELS,
  [BRANDS.ИЖ]: IJ_MODELS,
  [BRANDS.ЛуАЗ]: LUAZ_MODELS,
  [BRANDS.Москвич]: MOSKVICH_MODELS,
  [BRANDS.РАФ]: RAF_MODELS,
  [BRANDS.ТагАЗ]: TAGAZ_MODELS,
  [BRANDS.УАЗ]: UAZ_MODELS,
  [BRANDS.Эксклюзив]: EXCLUSIVE_MODELS,
};

export const MODELS = Object.values(BRANDS_MODELS).flat(1);
