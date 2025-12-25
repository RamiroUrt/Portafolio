
import EmptyImg from './../img/project/Empty.webp';
import EntreAmigos from './../img/project/EntreAmigos.webp';
import Urbanblock from './../img/project/Urbanblock.webp';
import Coquette from './../img/project/Coquette.webp';
import BikeShop from './../img/project/BikeShop.webp';
import Educatina from './../img/project/Educatina.webp';
import Wingu from './../img/project/Wingu.webp';
import Scaloneta from './../img/project/Scaloneta.webp';
import VideoConverter from './../img/project/VideoConverter.webp';
import TresDeseos from './../img/project/TresDESEOS.webp';
import GrillHouse from './../img/project/GrillHouse.webp';
import Aloha from './../img/project/Aloha.webp';
import Chess from './../img/project/Chess.png';
import Scrapper from './../img/project/Scrapper.png';
import FullCheck from './../img/project/FullCheck.png';
import ImageConverter from './../img/project/ImageConverter.png';
import PDFConverter from './../img/project/PDFConverter.png';

//Importar TODAS las capturas agrupadas
const allCaptures = import.meta.glob('../img/project/Capture/*/*.{png,jpeg,jpg,webp}', { /**/
  eager: true,
  import: 'default',
});

// Agrupar por proyecto
const groupedCaptures = {};
Object.entries(allCaptures).forEach(([path, img]) => {
  const parts = path.split('/');
  const projectName = parts.at(-2); 
  if (!groupedCaptures[projectName]) groupedCaptures[projectName] = [];
  groupedCaptures[projectName].push(img);
});

//Función para obtener hasta 7 capturas
const getCaptures = (project) => {
  const caps = groupedCaptures[project] || [];
  return {
    capture: caps[0] || '',
    capture2: caps[1] || '',
    capture3: caps[2] || '',
    capture4: caps[3] || '',
    capture5: caps[4] || '',
    capture6: caps[5] || '',
    capture7: caps[6] || '',
    capture8: caps[7] || '',
  };
};


export const gliderItems = [
  {
    id: 0,
    title: "",
    description: "",
    alt: "",
    image: EmptyImg, 
  },
    {
    id: 14,
    title: "🚧Full Check - Proyecto en Construcción",
    description: "Este proyecto es una landing page desarrollada con Next.js, JavaScript y CSS, diseñada para taller mecanico. Su objetivo es proporcionar una interfaz moderna, intuitiva y completamente responsiva para que los clientes puedan conocer los servicios de la empresa y contactarse fácilmente.",
    alt: "Full Check",
    image: FullCheck,
    tech: ["Next.js", "Tailwind","JavaScript", "CSS", "Leaflet.js", "Json-Server", "Vercel SDK"],
    ...getCaptures("FullCheck"),
    demo: 'https://full-check.vercel.app/',
    github: 'https://github.com/RamiroUrt/Full_Check'
  },
  {
      id: 15,
    title: "ImageConverter",
    description: "Un convertidor de imágenes desarrollado en Python utilizando la librería Pillow (PIL) .Permite convertir una imagen individual o múltiples imágenes dentro de una carpeta a distintos formatos populares.",
    alt: "ImageConverter",
    image: ImageConverter,
    tech: ["Python", "Pillow"],
    ...getCaptures(""),
    demo: '',
    github: 'https://github.com/RamiroUrt/ImageConverter'
  },

  {
    id: 1,
    title: "Entre Amigos",
    description: "Este proyecto es una landing page desarrollada con React, JavaScript y CSS, diseñada para una empresa constructora. Su objetivo es proporcionar una interfaz moderna, intuitiva y completamente responsiva para que los clientes puedan conocer los servicios de la empresa y contactarse fácilmente.",
    alt: "Urbanblock",
    image: EntreAmigos,
    tech: ["MercadoPago Api","Express","Node.js","Three.Js","React", "Tailwind","JavaScript", "CSS"],
    ...getCaptures("EntreAmigos"),
    demo: 'https://entre-amigos-two.vercel.app',
    github: 'https://github.com/RamiroUrt/EntreAmigos'
  },
  {
    id: 16,
    title: "PDF Converter",
    description: "",
    alt: "PDFConverter",
    image: PDFConverter,
    tech: ["Python", "docx2pdf"],
    ...getCaptures(""),
    demo: '',
    github: 'https://github.com/RamiroUrt/Converter-PDF'
  },
  {
    id: 2,
    title: "Urbanblock",
    description: "Este proyecto es una landing page desarrollada con React, JavaScript y CSS, diseñada para una empresa constructora. Su objetivo es proporcionar una interfaz moderna, intuitiva y completamente responsiva para que los clientes puedan conocer los servicios de la empresa y contactarse fácilmente.",
    alt: "Urbanblock",
    image:Urbanblock,
    tech: ["Three.Js","React", "JavaScript", "CSS"],
    capture: './../img/project/Capture/Urbanblock/UrbanblockCapture.png',
    ...getCaptures("Urbanblock"),
    demo: 'https://urbanblock.vercel.app/',
    github: 'https://github.com/RamiroUrt/Urbanblock'
  },
  {
    id: 3,
    title: "Coquette",
    description: "Este proyecto es una galería digital para Coquette Studio, un estudio de moda especializado en alta costura y diseño de vestidos de gala. La página está diseñada para reflejar elegancia, minimalismo y modernidad, alineándose con la identidad visual del estudio.",
    alt: "Coquette",
    image: Coquette,
    tech: ["React", "JavaScript", "CSS", "Tailwind"],
    ...getCaptures("Coquette"),
    demo: 'https://coquette.vercel.app',
    github: 'https://github.com/RamiroUrt/Coquette'
  },
  {
    id: 4,
    title: "BikeShop",
    description: "Este proyecto es una landing page desarrollada para una bicicletería, enfocada en la venta, reparación y mantenimiento de bicicletas. El diseño busca transmitir dinamismo, modernidad y pasión por el ciclismo, asegurando una experiencia fluida para los clientes.",
    alt: "BikeShop",
    image: BikeShop,
    tech: ["React", "JavaScript", "CSS"],
    ...getCaptures("BikeShop"),
    demo: 'https://bike-shopgt.netlify.app',
    github: 'https://github.com/RamiroUrt/Bike-Shop'
  },
  {
    id: 5,
    title: "Educatina",
    description: "Este proyecto es una landing page diseñada para una academia en línea, enfocada en la venta y gestión de cursos educativos. Su objetivo es ofrecer una experiencia intuitiva, profesional y atractiva para los estudiantes, facilitando la navegación y la compra de cursos.",
    alt: "Educatina",
    image: Educatina,
    tech: ["React", "CSS", "HTML", "JavaScript", "Tailwind", "Material UI"],
    ...getCaptures("Educatina"),
    demo: 'https://educatina.vercel.app',
    github: 'https://github.com/RamiroUrt/Educatina'
  },
  {
    id: 6,
    title: "Scaloneta ₓ Guayerd",
    description: "Este proyecto fue mi primer trabajo en diseño web, donde desarrollé una aplicación interactiva sobre la Selección Argentina de Fútbol. La idea principal es mostrar un mapa interactivo que permite visualizar el lugar de nacimiento de los jugadores y una grilla con sus datos esenciales.<br>Credenciales:<br> estudiante@guayerd.com <br> 123456",
    alt: "Scaloneta",
    image: Scaloneta,
    tech: ["HTML", "CSS", "JavaScript",],
    ...getCaptures("Scaloneta"),
    demo: 'https://symphonious-trifle-c8a521.netlify.app',
    github: ''
  },
  {
    id: 7,
    title: "Wingu ₓ Guayerd",
    description: "Este proyecto es una web de donaciones diseñada para facilitar la contribución a causas solidarias. Permite a los usuarios encontrar lugares físicos para donar o realizar transferencias en línea. Además, cuenta con un sistema de login y una opción de selección de donación, donde los usuarios reciben un correo de agradecimiento tras completar su donación.",
    alt: "Wingu",
    image: Wingu,
    tech: ["HTML", "JavaScript", "CSS", "Salesforce", "Apex"],
    ...getCaptures("Wingu"),
    demo: 'https://frabjous-rolypoly-c02616.netlify.app',
    github: 'https://github.com/RamiroUrt/Win.fin/tree/main'
  },
  {
    id: 8,
    title: "VideoConverter",
    description: "Este proyecto es una aplicación de conversión de videos de YouTube a MP3 utilizando Python. Permite a los usuarios ingresar un enlace de YouTube y descargar el audio en formato MP3 de manera rápida y sencilla.",
    alt: "VideoConverter",
    image: VideoConverter,
    tech: ["HTML", "CSS", "JavaScript","Node.js", "Express.js",],
    ...getCaptures("VideoConverter"),
    demo: 'https://convertertomp3.onrender.com',
    github: 'https://github.com/RamiroUrt/ConverterToMp3'
  },
  {
    id: 9,
    title: "Aloha Aromas",
    description: "Aloha es una tienda en línea especializada en la venta de aromas, sahumerios, esencias y productos relacionados con el bienestar y la armonía. La plataforma permite a los clientes explorar el catálogo de productos, mientras que el administrador tiene acceso a funciones de gestión de inventario a través de un sistema de login.",
    alt: "Aloha",
    image: Aloha,
    tech: ["HTML", "JavaScript", "CSS"],
    ...getCaptures("Aloha"),
    demo: 'https://aloha-tienda.onrender.com',
    github: 'https://github.com/RamiroUrt/Aloha_tienda'
  },
  {
    id: 10,
    title: "3Deseos",
    description: "3Deseos es una plataforma web donde los usuarios pueden explorar, calificar y comentar sobre diseños 3D orientados a prótesis. Además, permite la descarga de modelos para impresión 3D, facilitando el acceso a soluciones personalizadas para quienes lo necesiten.",
    alt: "3Deseos",
    image: TresDeseos,
    tech: ["JavaScript", "CSS", "HTML", "Webpack", "Firebase"],
    ...getCaptures("3Deseos"),
    demo: 'https://pescar-3dseos.web.app',
    github: 'https://github.com/3Dseos/3dseos-pagina'
  },
  {
    id: 11,
    title: "Grill House",
    description: "Grill House, restaurante de comida a la parrilla, ofrece una experiencia gastronómica unica y auténtica. Nuestra landing page está diseñada para ofrecer a los visitantes una experiencia atractiva y profesional, destacando nuestros valores, servicios y proyectos realizados.",
    alt: "Grill House",
    image: GrillHouse,
    tech: ["React", "JavaScript", "CSS"],
    ...getCaptures("GrillHouse"),
    demo: 'https://grill-house-three.vercel.app',
    github: 'https://github.com/RamiroUrt/Grill-House'
  },
  {
    id: 12,
    title: "Chess Game",
    description: "Chess asdasdasdGame.",
    alt: "ChessGame",
    image: Chess,
    tech: ["Python", "JavaScript", "React.js","Typescript", "Node.js", "HTML", "CSS"],
    ...getCaptures("Chess"),
    demo: '',
    github: 'https://github.com/RamiroUrt/Chess-App'
  },
  {
    id: 13,
    title: "Scrapper",
    description: "sasdasd",
    alt: "Scrapper",
    image: Scrapper,
    tech: ["Python",],
    ...getCaptures("Scrapper"),
    demo: '',
    github: 'https://github.com/RamiroUrt/Web-Scraper/tree/main'
  }
];

export default gliderItems;
