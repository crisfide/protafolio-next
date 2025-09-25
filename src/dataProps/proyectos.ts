// const crearProyecto = (
//   nombre,resumen,descripcion,tecnologias,linkWeb,linkGithub,linkYoutube,
// ) => ({
//   nombre,resumen,descripcion,tecnologias,linkWeb,linkGithub,linkYoutube,
// });

export interface proyecto {  
  nombre:string,
  resumen:string,
  descripcion:string,
  tecnologias:string[],
  linkWeb:string | undefined | null,
  linkGithub:string | undefined | null,
  linkYoutube:string | undefined | null,
}

export const proyectos : proyecto[] = [

  {
    nombre: "Electro_Desafio",
    resumen: "Desarrollo de una aplicación web responsiva para automatizar la gestión de trabajos eléctricos, pagos y sistema de referidos.",
    descripcion:
    `Sistema de Referidos para Electricistas

Proyecto web en Laravel + React (Inertia.js) | Hostinger – En línea desde mayo de 2025

Desarrollo de una aplicación web responsiva para automatizar la gestión de trabajos eléctricos, pagos y sistema de referidos.

Tecnologías principales:
  - Backend: Laravel 12 (PHP 8.2), Eloquent ORM, autenticación con Laravel Breeze, rutas protegidas con middleware.
  - Frontend: React + Inertia.js + Vite, diseño responsivo, Tailwind CSS, formularios dinámicos.
  - Base de datos: MySQL con relaciones entre entidades y optimización para escalabilidad futura.
  - Autenticación: Login con email, contraseña o Facebook Login (OAuth2).
  - Despliegue: Hosting en Hostinger, dominio propio, variables .env configuradas para producción.

Funcionalidades principales:
  - ABM (Alta/Baja/Modificación) de usuarios, clientes y demás entidades.
  - Gestión de usuarios con roles diferenciados (admin / colaborador), perfil editable.

  - Single Page Application moderna y optimizada.
  - Diseño adaptable (mobile/PC) y modo claro/oscuro.
  - Uso de React-Select y modales para facilitar la interacción.
  - Reutilización de componentes; validación del lado cliente y servidor.
  - Integración de gráficos con Chart.js para visualización de datos.


Tareas adicionales realizadas:
  - Pruebas funcionales realizadas en cada etapa para asegurar la integridad del sistema.
  - Documentación técnica y funcional del sistema.
  - Despliegue en servidor web con configuración de entorno de producción.

`,
    tecnologias: ["PHP", "Laravel", "React", "MySQL", "Tailwind CSS", "OAuth2", "Git"],
    linkWeb: "https://electrodesafio.com/",
    linkGithub: "https://github.com/crisfide/electroDesafioWeb",
    linkYoutube: null
  },

  {
    nombre: "Sistema_de_Gestión_Contable",
    resumen: "Pasantía como Desarrollador Full Stack .NET para Estudio contable, desarrollando un sistema de gestión y liquidación automática de impuestos.",
    descripcion:
    `Pasantía como Desarrollador Full Stack .NET para Estudio contable V. Domínguez 

Este proyecto es el proyecto final de la carrera de Tecnicatura en Programación, y fue desarrollado como pasantía o práctica profesional supervisada.

Diseño y desarrollo de un sistema interno de gestión contable, orientado a digitalizar y automatizar procesos operativos del estudio.

Stack y Tecnologías Utilizadas:
  - Backend: ASP.NET (C#), arquitectura MVC.
  - Frontend: HTML, CSS (Bootstrap y AdminLTE), JavaScript puro (validaciones y control dinámico).
  - Base de datos: SQL Server, diseño de modelo entidad-relación, consultas optimizadas, integración mediante Entity Framework Code First.
  - Control de versiones: Git, trabajo colaborativo mediante repositorio en GitHub.
  - Documentación: Redacción de manual técnico y documentación funcional para soporte y mantenimiento.

Tareas destacadas:
  - Desarrollo de módulos para gestión de empleados y automatización de reportes por cliente.
  - Optimización de estructuras de datos leídos desde hojas de cálculo de Excel.
  - Participación en validaciones funcionales junto a usuarios reales del estudio.
  - Desarrollo incremental con fases: relevamiento → prototipado → desarrollo → validación → entrega.
  - Despliegue en Azure a través de Docker y automatizado con Github Actions.

Alcance funcional:
  - Sustitución de procesos manuales por flujos digitales.
  - Cálculo de netos e impuestos a pagar según las diferentes alícuotas.
  - Generación de reportes en PDF y Excel para Impuesto a las Ganancias, IVA e Ingresos brutos.
  - Importación de datos desde planilla Excel estándar de AFIP.
  - Automatización de resúmenes mensuales/anuales.
  - Diseño de planillas personalizadas optimizadas para los procesos contables del cliente.

`,
    tecnologias: ["C#", ".NET", "Docker", "Bootstrap", "Git"],
    linkWeb: "https://estudioappcontable.somee.com",
    linkGithub: "https://github.com/CejasPablo/AppEstudioContable",
    linkYoutube: null,
  },

  {
    nombre: "Punto_de_Venta_y_Facturación",
    resumen: "Rediseño de interfaz Windows Forms y desarrollo de módulo de facturación automática con ARCA Web Services SOAP.",
    descripcion:
    `En esta oportunidad, participé en el rediseño de la interfaz de usuario de una aplicación de escritorio existente desarrollada en C# con Windows Forms, orientada a la gestión de inventarios y ventas para comercios minoristas.

Además, desarrollé un módulo de facturación automática que se integra con los servicios web SOAP de ARCA (ex AFIP), permitiendo la emisión de facturas y notas de crédito tipo A, B y C. 


Stack y Tecnologías Utilizadas:
  - OpenSSL.
  - SAP Crystal Reports.
  - Comunicación SOAP: Integración con ARCA Web Services para la emisión de comprobantes electrónicos.
  - Frontend: Windows Forms, .NET Framework.
  - Base de datos: SQLite.
  
Tareas destacadas:
  - Desarrollo de módulos de facturación automática para ventas.
  - Cálculo automático de impuestos y totales según el tipo de comprobante.
  - Uso de DataGridView con imágemes de productos y búsqueda dinámica.
  - Diseño de interfaz moderna, paleta de colores monocromática y controles personalizados.
  
Alcance funcional:
  - Generación y gestión de certificados digitales para la autenticación con ARCA.
  - Emisión automática de facturas y notas de crédito.
  - Gestión de clientes, productos y stock.
  - Reportes de ventas y stock con SAP Crystal Reports.
  - Backup automático de la base de datos.
  - Documentación: Redacción de instructivo de configuración y video tutorial para certificados digitales.

`,
    tecnologias: ["C#", ".NET", "XML", "SQLite"],
    linkWeb: null,
    linkGithub: "https://github.com/crisfide/Programa-de-Stock-",
    linkYoutube: null,
  },

  {
    nombre: "ArgyView",
    resumen: "ArgyView es una app móvil Android que muestra en tiempo real las cotizaciones del mercado bursátil argentino...",
    descripcion:
    `ArgyView es una aplicación móvil desarrollada en Kotlin para Android que permite visualizar en tiempo real las cotizaciones del mercado bursátil argentino. Ideal para inversores y entusiastas del mercado financiero. 

Funcionalidades:
  - Visualización de precios de distintos activos.
  - Actualización en tiempo real.
  - Filtros y búsqueda de acciones.
  - Gráficos históricos (próximamente).
  - Panel de favoritos personalizable.`,
    tecnologias: ["Kotlin", "Android"],
    linkWeb: null,
    linkGithub: "https://github.com/crisfide/ArgyView",
    linkYoutube: null
  },

  {
    nombre: "Sistema_de_Finanzas_Hogareñas_UNLZ",
    resumen: "CAJA es una aplicación diseñada para gestionar los gastos e ingresos del hogar, implementando el patrón MVC en PHP.",
    descripcion:
    `CAJA es un sistema colaborativo desarrollado en equipo para gestionar los gastos e ingresos del hogar, facilitando el control financiero personal. El proyecto fue implementado en un repositorio Git compartido con otros grupos, permitiendo una integración eficiente del código y una colaboración fluida entre equipos.

  Funcionalidades:
  - Registro y Login: Acceso seguro con email y contraseña. Registro con datos como nombre, DNI, email, celular y contraseña.
  - Envío de mail para recuperar la contraseña a través de la librería PHPMailer.
  - Panel de Administración:
  - Alta de cuentas.
  - Registro de ingresos y egresos.
  - Consulta de movimientos (completos, filtrados por fecha, tipo de movimiento y categoría).
  - Tabla y gráfico que muestran el porcentaje que representan cada tipo de gasto en los ingresos (se utiliza Chart.js).
  
Este sistema facilita la toma de decisiones financieras a través de un seguimiento detallado y visual de los movimientos económicos.`,
    tecnologias: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Git"],
    linkWeb: null,
    linkGithub: "https://github.com/juanPabloCesarini/appweb_caba_2c_2024",
    linkYoutube: null
  },

  {
    nombre: "Heladería_UNLZ",
    resumen: "Sistema web para la gestión de una heladería, implementando MVC e inyección de dependencias.",
    descripcion:
    `Este proyecto, desarrollado en C# con ASP.NET, consiste en un sistema web para la gestión de una heladería, incluyendo un CRUD de sabores de helado, una página para realizar pedidos, distinguiendo rol de usuario administrador y cliente. 

Se utiliza una base de datos compartida en Azure. 
    
Los usuarios deben ingresar con su cuenca de Google, con la cual se realiza la autenticación con aprovechando la tecnología OAuth 2.0.

Funcionalidades:
  - Gestión de productos.
  - Pedidos en línea.
  - Autenticación con Google.
  - Base de datos en Azure.
  - Interfaz con Bootstrap y JavaScript.`,
    tecnologias: ["C#", ".NET", "OAuth2", "Azure", "Bootstrap", "Git"],
    linkWeb: "https://www.heladeriaunlz.somee.com/",
    linkGithub: "https://github.com/crisfide/HeladeriaTP-UNLZ",
    linkYoutube: null
  },

  {
    nombre: "Carrito_de_compras_UNLZ",
    resumen: "Carrito de compras web desarrollado en Java con MVC para la UNLZ.",
    descripcion:
    `Proyecto grupal desarrollado en Java con servlets y JSP implementando patrones como MVC (modelo-vista-controlador), singleton, factory.

Funcionalidades:
  - Agregar productos al carrito.
  - Modificar y eliminar productos.
  - Calcular total de la compra.
  - Generación de factura PDF.

El trabajo fomentó la colaboración y la aplicación de conceptos clave, como la separación de responsabilidades, trabajo con repositorios y desarrollo web dinámico.


  
Tecnologías usadas: Backend en Java, Frontend en HTML/CSS/JS, servidor Apache Tomcat.`,
    tecnologias: ["Java", "Tomcat", "Bootstrap", "Git"],
    linkWeb: null,
    linkGithub: "https://github.com/crisfide/CarritoTP-UNLZ",
    linkYoutube: null
  },

];
