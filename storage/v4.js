//  listado de Launches

export const mostrarLaunchesV4 = async (urlV4) => {
  res = await(await fetch(urlV4)).json();
  console.log(res)
}