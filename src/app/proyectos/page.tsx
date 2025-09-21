import { Metadata } from "next";
import ListaProyectos from "../componentes/main/proyectos/ListaProyectos"
import { proyectos } from "../dataProps/proyectos";

export const metadata: Metadata = {
  title: `Proyectos - Portafolio Christian Fidelio`,
}


export default function Proyectos() {
  return (
      <ListaProyectos proyectos={proyectos} />
    
  );
}
