// funcion que busca los despegues
export const getAllImgDespeges = async (urlDespeges) => {
    const respuestaDespeges = await (await fetch(urlDespeges)).json();
    let imagenes = respuestaDespeges.map((e) => {
      let { mission_patch: img, mission_patch_small: img_small } = e.links;
      return { img, img_small };
    });
    return { imagenes };
  };
  
// listado de núcleos de cohetes

export const listadoNucleos = async(urlNucleos) => {
  const respuestaNucleos = await (await fetch(urlNucleos)).json();
  console.log(respuestaNucleos)
  respuestaNucleos.map((i) => {
    let {details} = i
    
    details === null ? "No tiene descripcion *-*-*-*-*-*-*-*-*-*" : console.log("hola" , details) 
  })
  
}