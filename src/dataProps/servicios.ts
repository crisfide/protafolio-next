
interface servicio {  
  titulo:string,
  resumen:string,
  descripcion:string,
  
}

export const servicios : servicio[] = [
  {  
    titulo: "Desarrollo Web",
    resumen: `Creación de sitios web modernos que se adaptan a cualquier dispositivo.

Permiten que tu negocio tenga presencia en línea y llegue a más clientes.

Hosting y dominio incluidos.
    `,
    descripcion: "",
  },
  {  
    titulo: "Aplicaciones Empresariales",
    resumen: `Desarrollo de software para optimizar procesos internos.
    
Podés gestionar stock, turnos, facturación, clientes y más.
    `,
    descripcion: "",
  },
  {
    titulo: "Automatización e Inteligencia Artificial",
    resumen: `Implementación de soluciones de IA y automatización para mejorar la eficiencia y reducir tiempo gastado en tareas repetitivas.    
    `,
    descripcion: "",
  },
];
