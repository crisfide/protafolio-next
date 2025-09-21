import { Metadata } from "next";
import Contacto from "@/componentes/main/contacto/Contacto"

export const metadata: Metadata = {
  title: `Contacto - Portafolio Christian Fidelio`,
}

export default function ContactoPage() {
  return (
      <Contacto />
    
  );
}
