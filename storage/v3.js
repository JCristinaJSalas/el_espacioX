// funcion que busca los despegues
export const getAllImgDespeges = async (urlDespeges) => {
    const respuesta = await (await fetch(urlDespeges)).json();
    let imagenes = respuesta.map((e) => {
      let { mission_patch: img, mission_patch_small: img_small } = e.links;
      return { img, img_small };
    });
    return { imagenes };
  };
  