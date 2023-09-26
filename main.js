import { getAllImgDespeges,listadoNucleos  } from "./storage/v3.js";

//url que guarda las url
const urlDespeges = "https://api.spacexdata.com/v3/launches"
const urlNucleos = "https://api.spacexdata.com/v3/cores"

//console.log(await getAllImgDespeges(urlDespeges))
console.log(await listadoNucleos (urlNucleos))
