"use client";
import { useContext, useState } from "react"
import { DarkContext } from "@/context/DarkContext"
import Link from "next/link"
import { obtenerIcono } from "@/helpers/obtenerIcono"
import { useThemeImg } from "@/hooks/useThemeImg"
import '../../iconos.css'
import styles from './gridProyectos.module.css'
import Image from "next/image";


const gridScroll = (e, izq = false) => {
  const px = izq ? -350 : 350
  const proyectos = document.getElementById("proyectos")
  proyectos.scroll(proyectos.scrollLeft + px, 0)
}


const GridProyectos = ({ proyectos, verMas = false }) => {
  const [btnIzqDisabled, setBtnIzqDisabled] = useState(true);
  const [btnDerDisabled, setBtnDerDisabled] = useState(false);

  const handleScroll = e => {
    const { scrollLeft, clientWidth, scrollWidth } = e.target

    setBtnIzqDisabled(scrollLeft === 0)
    setBtnDerDisabled(scrollLeft + clientWidth >= scrollWidth)
  }


  return (
    <>
      <h2 className="mt">Proyectos en los que he trabajado</h2>

      <section className="">
        <div className={styles['carrusel-container']}>

          <div className={styles.carrusel} id="proyectos" onScroll={handleScroll}>
            {
              proyectos.map(proyecto => (
                <ProyectoItem {...proyecto} key={proyecto.nombre} />)
              )
            }
          </div>

        </div>


        {verMas &&
          <div className={styles['ver-mas']}>
            <Link href="/proyectos" className="btn-action">
              Ver más proyectos
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        }
      </section>

    </>
  )
}

const ProyectoItem = ({ nombre, resumen, tecnologias, linkWeb, linkGithub, linkYoutube }) => {
  const { darkMode } = useContext(DarkContext)
  const img = useThemeImg(nombre, darkMode)

  return (
    <article className={styles.proyecto}>

      <h3>{nombre.replaceAll("_", " ")} </h3>

      <div className={styles["transparente-rel"]}>
        {img && (
          <Image src={img} alt={"imagen " + nombre} className={styles["img-proyecto"]} width={200} height={200} sizes="(max-width: 800px) 100vw, 200px" />
        )}


        <div className={styles.transparente}>
          <div>
            <div>
              <p><small>{resumen}</small></p>
              <Link href={`/proyectos/${nombre}`} className="btn-action">+ detalles</Link>
            </div>
          </div>

          <div>
            <ul>
              {
                tecnologias.map(tec => (
                  <li key={tec}>
                    <span className={styles.tec} title={tec}>
                      <i className={`devicon-${obtenerIcono(tec)}-plain colored`}></i>
                      <br />
                      <code><small>{tec}</small></code>
                    </span>
                  </li>)
                )
              }
            </ul>

            <ul>
              <li>
                <a href={linkGithub} target="_blank" title="Ver en Github">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              {
                (linkWeb) ?
                  <li>
                    <a href={linkWeb} target="_blank" title="Acceder al proyecto">
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </li>
                  : null
              }
              {
                (linkYoutube) ?
                  <li>
                    <a href={linkYoutube} target="_blank" title="Video del proyecto">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  : null
              }

            </ul>

          </div>
        </div>
      </div>


    </article>
  )
}


export default GridProyectos




