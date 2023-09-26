import { getAllImgDespeges  } from "./storage/v3.js";

//url que guarda las url
const urlDespeges = "https://api.spacexdata.com/v3/launches"

console.log(await getAllImgDespeges(urlDespeges))
