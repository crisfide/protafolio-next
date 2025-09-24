"use client"
import { useContext } from "react"
import { DarkContext } from "@/context/DarkContext"
import { obtenerIcono } from "@/helpers/obtenerIcono"
import Link from "next/link"
import { useThemeImg } from "@/hooks/useThemeImg"
import '../../iconos.css'
import styles from './listaProyectos.module.css'
import Image from "next/image"

const ListaProyectos = ({proyectos}) => {
  return (
    <main>
      <h2 className="center">Mis proyectos</h2>
      <section className={styles.cards}>
        {
          proyectos.map(proyecto => (
            <ProyectoCard {...proyecto} key={proyecto.nombre} />
          ))
        }      
      </section>
    </main>
  )
}

const ProyectoCard = ({nombre, resumen, tecnologias, linkWeb, linkGithub, linkYoutube}) => {
  const { darkMode } = useContext(DarkContext)
  const img = useThemeImg(nombre,darkMode)

  return (
    <Link href={`/proyectos/${nombre}`}>

      <article className={`${styles.card} ${styles.cols}`} aria-label={`Ver detalles del proyecto ${nombre.replaceAll("_"," ")}`}>
        <div className={`${styles.col} ${styles.img}`}>
        {img && (

          <Image src={img} alt={`Imagen de ${nombre}`} loading="lazy" width="200" height="200" sizes="(max-width: 800px) 100vw, 200px" />
        )}
        </div>
        <div className={styles.col}>
          <div>
            <h3>{nombre.replaceAll("_"," ")}</h3>
            <p>{resumen}</p>
          </div>

          <div>
            <ul>
              {
                tecnologias.map( tec => (
                  <li key={tec}>
                    <span className={styles.tec} title={tec}>
                      <i className={`devicon-${obtenerIcono(tec)}-plain colored`}></i>
                    </span>
                  </li>)
                )
              }            
            </ul>

            <ul>
              <li>
                <span href={linkGithub} target="_blank" title="Disponible en Github">
                  <i className="fa-brands fa-github"></i> Disponible en github
                </span>
              </li>
              {
                (linkWeb) ?
                <li>
                  <span href={linkWeb} target="_blank" title="Acceder al proyecto">
                    <i className="fa-solid fa-link"></i> Visitar sitio
                  </span>
                </li>
                :null
              }
              {
                (linkYoutube) ?
                <li>
                  <span href={linkYoutube} target="_blank" title="Video del proyecto">
                    <i className="fa-brands fa-youtube"></i> Video del proyecto
                  </span>
                </li>
                :null
              }

            </ul>

          </div>
        </div>
      </article>
    </Link>
  )          
}

export default ListaProyectos
