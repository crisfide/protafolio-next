import { redesSociales } from "../../dataProps/redesSociales"
import RedesSoc from "./RedesSoc"
import './footer.css'
import '../iconos.css'
import ShareLink from "./ShareLink"

const Footer = () => {
  return (
    <footer id="contacto">
      <RedesSoc items={redesSociales} />

      <ShareLink />
      
    </footer>
  )
}

export default Footer
