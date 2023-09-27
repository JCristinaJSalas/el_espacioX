import { getAllImgDespeges,listadoCapsulas,listadoCohetes,listadoNavesEspaciales,listadoNucleos  } from "./storage/v3.js";

//url que guarda las url
const urlDespeges = "https://api.spacexdata.com/v3/launches"
const urlCohetes = "https://api.spacexdata.com/v3/rockets"
const urlNucleos = "https://api.spacexdata.com/v3/cores"
const urlNaves = "https://api.spacexdata.com/v3/ships"
const urlCapsulas = "https://api.spacexdata.com/v3/capsules"

//console.log(await getAllImgDespeges(urlDespeges))
//listadoNucleos (urlNucleos)
//listadoNavesEspaciales(urlNaves)
listadoChoetes(urlCohetes)
//listadoCapsulas(urlCapsulas)
