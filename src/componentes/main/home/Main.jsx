import { proyectos } from "@/dataProps/proyectos"
import { tecnologias } from "../../../dataProps/tecnologias"
import { servicios } from "@/dataProps/servicios"
import { sobreMi } from "../../../dataProps/sobreMi"
import { Perfil } from "./Perfil"
import GridProyectos from "../proyectos/GridProyectos"
import Habilidades from "./Habilidades"
import Servicios from "./Servicios"

const Main = () => {
  return (
    <main>
      <Perfil sobreMi={sobreMi} />
      <Servicios servicios={servicios} />
      <Habilidades tecnologias={tecnologias} />
      <GridProyectos proyectos={proyectos} verMas={true} />
    </main>
  )
}

export default Main
