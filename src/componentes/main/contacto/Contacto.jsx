import { redesSociales } from "@/dataProps/redesSociales"
import BtnCopiar from "../BtnCopiar"
import styles from './contacto.module.css'

const Contacto = () => {
  const linkLinkedin = redesSociales.find(r=>r.txt==="Linkedin").ruta
  const linkMail = redesSociales.find(r=>r.txt==="Mail").ruta
  const linkWhatsApp = redesSociales.find(r=>r.txt==="WhatsApp").ruta

  const mail = linkMail.replace("mailto:","")

  return (
    <main className={styles.contacto} >

      <div className={styles["contacto-contenedor"]}>

        <span className={`btn ${styles["btn-contacto"]} ${styles["btn-mail"]}`} >
          <i className="fa-solid fa-envelope"></i>
          <a href={linkMail} style={{flexGrow:"1"}} title={mail} target="_blank" rel="noopener noreferrer">
            Enviar Mail
          </a>
          <BtnCopiar texto={mail} />
        </span>

        <a href={linkLinkedin} className={`btn ${styles["btn-contacto"]} ${styles["btn-linkedin"]}`} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          Perfil de Linkedin
        </a>

        <a href={linkWhatsApp} className={`btn ${styles["btn-contacto"]} ${styles["btn-whatsapp"]}`} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
          Enviar WhatsApp
        </a>



      </div>


    </main>
  )
}

export default Contacto
