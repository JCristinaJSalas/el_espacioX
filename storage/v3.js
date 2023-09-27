// funcion que busca los despegues
export const getAllImgDespeges = async (urlDespeges) => {
    const respuestaDespeges = await (await fetch(urlDespeges)).json();
    let imagenes = respuestaDespeges.map((e) => {
      let { mission_patch: img, mission_patch_small: img_small } = e.links;
      return { img, img_small };
    });
    return { imagenes };
  };
// listado de Cohetes
export const listadoCohetes = async(urlCohetes) => {
  const respuestaCohetes = await (await fetch (urlCohetes)).json()
  let imagenes = respuestaCohetes.flickr_images
  console.log(imagenes)
}
  
// listado de núcleos de cohetes

export const listadoNucleos = async(urlNucleos) => {
  const respuestaNucleos = await (await fetch(urlNucleos)).json();
  console.log(respuestaNucleos)
  respuestaNucleos.map((i) => {
    let {details,core_serial } = i
    
    details === null ? console.log(core_serial,"no details") : console.log(core_serial," *-* detalles: " , details) 
  })
  
}

//listado de naves espaciales

export const listadoNavesEspaciales = async(urlNaves) => {
  
  const dataNave = await (await fetch(urlNaves)).json()
  dataNave.map((data) => {
    data.image === null ? console.log(data.ship_id,"No tiene imagen") : console.log(data.ship_id, "IMG:" ,data.image) 
  })
  
}
//Listado de Capsulas
export const listadoCapsulas = async (urlCapsulas) => {
  const dataNave = await (await fetch(urlCapsulas)).json()
  dataNave.map((capsula) => {
    console.log(`La capsula ${capsula.capsule_serial}: ${capsula.details}`)
  })
}