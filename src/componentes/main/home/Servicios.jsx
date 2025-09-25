import Link from "next/link"
import { obtenerIcono } from "../../../helpers/obtenerIcono"
import styles from './servicios.module.css'

const Servicios = ({servicios}) => {

    return (
        <section className={styles.servicios} id="servicios">
            <h2>¿En qué te puedo ayudar?</h2>

            <div className={styles.contenedor}>
                {servicios.map(serv => <ServicioItem serv={serv} key={serv.titulo} />)}
            </div>
        </section>

    )
}

export default Servicios

const ServicioItem = ({serv}) => {
    return (<article className={styles.servicioItem}>
        <i className={serv.icono}></i>
        <h3>{serv.titulo}</h3>
        <p>
            {serv.resumen}
        </p>

        <Link href="/contacto" className="cta">Mas info →</Link>
    </article>)
}
