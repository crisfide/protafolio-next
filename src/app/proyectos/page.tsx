import ListaProyectos from "../componentes/main/proyectos/ListaProyectos"
import { proyectos } from "../dataProps/proyectos";

export default function Proyectos() {
  return (
      <ListaProyectos proyectos={proyectos} />
    
  );
}
