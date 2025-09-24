import { obtenerIcono } from "../../../helpers/obtenerIcono"
import styles from './habilidades.module.css'

const Habilidades = ({tecnologias}) => {
    // const tecs = [...new Set(proyectos.flatMap(p => p.tecnologias))]
    // console.log(tecs.join('", "'))
    // console.log(tecnologias)

    return (
        <section className={styles.habs} id="habilidades">
            <h2>Tecnologías y habilidades</h2>

            <SubListaHabs tecnologias={tecnologias.backend} titulo="Back-end" />
            <SubListaHabs tecnologias={tecnologias.frontend} titulo="Front-end" />
            <SubListaHabs tecnologias={tecnologias.mobile} titulo="Mobile" />
            <SubListaHabs tecnologias={tecnologias.otros} titulo="Otros" />
        </section>

    )
}

export default Habilidades

const SubListaHabs = ({tecnologias, titulo}) => {
    return (<>
        <h3>{titulo}</h3>
        <ul className={styles["tecnologias-lista"]}>
            {tecnologias.map((tec) => (
                <li key={tec} className={styles["tecnologia-item"]}>
                    <span className={styles.tec} title={tec}>
                        <i className={`devicon-${obtenerIcono(tec)}-plain colored`}></i>
                        <small>{tec}</small>
                    </span>
                </li>
            ))}
        </ul>
    </>)
}
