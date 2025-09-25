import { obtenerIcono } from "../../../helpers/obtenerIcono"
import styles from './servicios.module.css'

const Servicios = ({servicios}) => {

    return (
        <section className={styles.servicios} id="servicios">
            <h2>¿En qué te puedo ayudar?</h2>

            {servicios.map(serv => <ServicioItem serv={serv} key={serv.titulo} />)}
        </section>

    )
}

export default Servicios

const ServicioItem = ({serv}) => {
    return (<article className={styles.servicioItem}>
        <h3>{serv.titulo}</h3>
        <p>
            {serv.resumen}
        </p>
    </article>)
}
