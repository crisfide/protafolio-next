
// const crearMenuItem = (txt, ruta) => ({ txt, ruta });
interface itemMenu {
  txt:string
  ruta:string
}

export const itemsMenu : itemMenu[] = [
    {txt: "Home", ruta:"/"},
    {txt: "Proyectos", ruta:"/proyectos"},
    {txt: "Contacto", ruta:"/contacto"},
];

