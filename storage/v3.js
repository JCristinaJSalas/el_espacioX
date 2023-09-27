// funcion que busca los despegues  LAUNCHES

export const getAllImgDespeges = async (urlDespeges) => {
  const respuestaDespeges = await (await fetch(urlDespeges)).json();
  let imagenes = respuestaDespeges.map((e) => {
    let { mission_patch: img, mission_patch_small: img_small } = e.links;
    return { img, img_small };
  });
  imagenes.map((e) => {
    console.log("DESPEGUES", "img2", e.img, "img2", e.img_small);
  });
};

// listado de Cohetes   imagenes

export const listadoCohetes = async (urlCohetes) => {
  const respuestaCohetes = await (await fetch(urlCohetes)).json();
  respuestaCohetes.map((e) => {
    let imagenes = e.flickr_images;
    imagenes.map((image) => {
      console.log("Imagenes de Cohetes", image);
    });
  });
};

// listado de núcleos de cohetes   core_serial  details

export const listadoNucleos = async (urlNucleos) => {
  const respuestaNucleos = await (await fetch(urlNucleos)).json();
  console.log(respuestaNucleos);
  respuestaNucleos.map((i) => {
    let { details, core_serial } = i;

    details === null
      ? console.log(core_serial, "--->  no details ")
      : console.log(core_serial, " *-* detalles: ", details);
  });
};

//listado de naves espaciales ship_id

export const listadoNavesEspaciales = async (urlNaves) => {
  const dataNave = await (await fetch(urlNaves)).json();
  dataNave.map((data) => {
    data.image === null
      ? console.log(data.ship_id, "No tiene imagen")
      : console.log(data.ship_id, "IMG:", data.image);
  });
};


//Listado de Capsulas        capsule_serial  details
export const listadoCapsulas = async (urlCapsulas) => {
  const dataNave = await (await fetch(urlCapsulas)).json();
  dataNave.map((capsula) => {
    console.log(`La capsula ${capsula.capsule_serial}: ${capsula.details}`);
  });
};
