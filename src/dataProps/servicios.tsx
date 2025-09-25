
interface servicio {  
  titulo:string,
  resumen:string|JSX.Element,
  icono:string
  
}

export const servicios : servicio[] = [
  {  
    titulo: "Desarrollo Web",
    resumen: <>
      <p>
        Creación de sitios web modernos que se adaptan a cualquier dispositivo.
      </p>
      <p>
        Permiten que tu negocio tenga presencia en línea y llegue a más clientes.
      </p>
      <p>
        Tienda online, blog o Landing Page.
      </p>
      <p>
        Hosting y dominio <strong>incluidos</strong>.
      </p>
    </>,
    icono: "fa-brands fa-react"
  },

  {  
    titulo: "Aplicaciones Empresariales",
    resumen: <>
      <p>
        Desarrollo de software para optimizar procesos internos.
      </p>
      <ul>
        <li>Stock</li>
        <li>Facturación</li>
        <li>Turnos online</li>
        <li>Gestión de clientes (CRM)</li>
      </ul>
    </>
    ,
    icono: "fa-solid fa-gear"
  },

  {
    titulo: "Automatización e Inteligencia Artificial",
    resumen: <>
      <p>
        Implementación de soluciones de IA.
      </p>
      <p>
        Automatización para mejorar la eficiencia y reducir tiempo gastado en tareas repetitivas.    
      </p>
      <p>
        Un chat que <strong>realmente</strong> ayude a tus clientes.
      </p> 
    </>
    ,
    icono: "fa-solid fa-robot"
  },
];
