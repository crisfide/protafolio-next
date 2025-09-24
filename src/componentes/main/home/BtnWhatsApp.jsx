import { redesSociales } from "@/dataProps/redesSociales"

const BtnWhatsApp = () => {
  const link = redesSociales.find(r=>r.txt==="WhatsApp").ruta

  return (
    <a className="btn-action" aria-label="Contactar por WhatsApp" href={link} target="_blank" rel="noopener noreferrer">
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  )
}

export default BtnWhatsApp
