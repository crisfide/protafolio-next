"use client"
import Link from "next/link"
import styles from './servicios.module.css'
import { useRef } from "react"
import useScrollAnim from "@/hooks/useScrollAnim"

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
    const ref = useRef(null);
    useScrollAnim(ref, { threshold: 0.2 }, false); // true = animar solo una vez

    return (<article className={`${styles.servicioItem} escondido`} ref={ref}>
        <i className={serv.icono}></i>
        <h3>{serv.titulo}</h3>
        {serv.resumen}

        <Link href="/contacto" className="cta">Mas info →</Link>
    </article>)
}
