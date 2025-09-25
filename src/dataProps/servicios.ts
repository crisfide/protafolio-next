
interface servicio {  
  titulo:string,
  resumen:string,
  icono:string
  
}

export const servicios : servicio[] = [
  {  
    titulo: "Desarrollo Web",
    resumen: `Creación de sitios web modernos que se adaptan a cualquier dispositivo.

Permiten que tu negocio tenga presencia en línea y llegue a más clientes.

Hosting y dominio incluidos.
    `,
    icono: "fa-brands fa-react"
  },

  {  
    titulo: "Aplicaciones Empresariales",
    resumen: `Desarrollo de software para optimizar procesos internos.
    
Podés gestionar stock, turnos, facturación, clientes y más.
    `,
    icono: "fa-solid fa-gear"
  },

  {
    titulo: "Automatización e Inteligencia Artificial",
    resumen: `Implementación de soluciones de IA.
    
Automatización para mejorar la eficiencia y reducir tiempo gastado en tareas repetitivas.    
    `,
    icono: "fa-solid fa-robot"
  },
];
