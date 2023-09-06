import { TextsType } from "../types/languageTypes"
import { engTestimonial1, engTestimonial2, engTestimonial3 } from "./testimonialsData"
import { espTestimonial1, espTestimonial2, espTestimonial3 } from "./testimonialsData"

export const engTexts: TextsType = {
    navbarMenu: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        testimonials: "Testimonials",
        contact: "Contact"
    },
    landing: {
        welcome: "Welcome to my project portfolio! Below, you'll find a curated selection of projects that highlight my skills, experience, and passion for solving real-world problems with technology. Each project is briefly described and includes links to code repositories and live demos. Feel free to explore and see how I approach different challenges.",
        contactBtn: "Let's talk"
    },
    mySkills: {
        titlePart1: "sk",
        titlePart2: "ills",
        heading: "I have developed a proficiency in web development, particularly in React-based full-stack applications. My experience includes creating interactive and efficient web solutions, demonstrating my versatility in both front-end and server-side technologies.",
        skill1Title: "FullStack Development",
        skill1Desc: "I possess a strong grasp of both front-end and back-end web technologies. On the front-end, I am proficient in HTML, CSS, and JavaScript, with experience in modern libraries and frameworks like React and Nex.js. On the back-end, I excel in technologies such as Node.js, Express.js, or similar server-side languages and frameworks. My ability to work across the entire web development stack enables me to build complete and functional web applications.",
        skill2Title: "Database Management",
        skill2Desc: "I have solid skills in database management, including both SQL and NoSQL databases. I can design efficient database structures, optimize queries, and ensure data security. My expertise in handling data allows applications to store, retrieve, and manipulate information effectively, contributing to the overall performance and reliability of web projects.",
        skill3Title: "Version Control and Collaboration",
        skill3Desc: "Collaboration and teamwork are crucial aspects of my work. I am well-versed in version control systems like Git and platforms like GitHub, which enable seamless collaboration with team members. These tools help me track changes, resolve conflicts, and maintain code quality. My proficiency in version control fosters effective communication and efficient project workflows, making me a valuable contributor to collaborative development efforts.",
    },
    testimonials: {
        titlePart1: "TEST",
        titlePart2: "IMONIALS",
        heading: "Colleague Testimonials: What Those Who've Worked with Me Have to Say. Explore the feedback and insights shared by individuals who've collaborated with me. Their testimonials reflect our teamwork and the impact of our contributions.",
        testimonialArr: [engTestimonial1, engTestimonial2, engTestimonial3]
    },
    contact: {
        titlePart1: "LET'S",
        titlePart2: "BEGIN",
        formPlaceholderName: "Your name",
        formPlaceholderEmail: "Your email",
        formPlaceholderMsg: "Message to send",
        semdMsgBtn: "Send message"
    },
    footer: {
        madeWithText: "Made with",
        inText: "in",
        cityText: "Barcelona"
    }
}

export const espTexts: TextsType = {
    navbarMenu: {
        home: "Inicio",
        skills: "Habilidades",
        projects: "Proyectos",
        testimonials: "Testimonios",
        contact: "Contacto"
    },
    landing: {
        welcome: "¡Bienvenido a mi portafolio de proyectos! A continuación, encontrarás una selección cuidadosamente escogida de proyectos que resaltan mis habilidades, experiencia y pasión por resolver problemas del mundo real con tecnología. Cada proyecto se describe brevemente e incluye enlaces a repositorios de código y demostraciones en vivo. Siéntete libre de explorar y ver cómo abordo diferentes desafíos.",
        contactBtn: "Hablemos"
    },
    mySkills: {
        titlePart1: "habil",
        titlePart2: "idades",
        heading: "He desarrollado habilidades sólidas en desarrollo web, especialmente en aplicaciones full-stack basadas en React. Mi experiencia incluye la creación de soluciones web interactivas y eficientes, lo que demuestra mi versatilidad en tecnologías tanto de front-end como de servidor.",
        skill1Title: "Desarrollo FullStack",
        skill1Desc: "Poseo un sólido dominio de las tecnologías web tanto en el front-end como en el back-end. En el front-end, tengo habilidades en HTML, CSS y JavaScript, con experiencia en librerías y frameworks modernos como React y Next.js. En el back-end, sobresalgo en tecnologías como Node.js, Express.js o lenguajes y frameworks de servidor similares. Mi capacidad para trabajar en todo el stack de desarrollo web me permite construir aplicaciones web completas y funcionales.",
        skill2Title: "Gestion Bases de Datos",
        skill2Desc: "Tengo sólidas habilidades en la gestión de bases de datos, incluyendo bases de datos SQL y NoSQL. Puedo diseñar estructuras de bases de datos eficientes, optimizar consultas y garantizar la seguridad de los datos. Mi experiencia en el manejo de datos permite que las aplicaciones almacenen, recuperen y manipulen información de manera efectiva, contribuyendo al rendimiento y la confiabilidad general de proyectos web.",
        skill3Title: "Control de Versiones y Colaboración",
        skill3Desc: "La colaboración y el trabajo en equipo son aspectos cruciales de mi trabajo. Estoy familiarizado con sistemas de control de versiones como Git y plataformas como GitHub, que permiten una colaboración sin problemas con otros miembros del equipo. Estas herramientas me ayudan a hacer seguimiento de cambios, resolver conflictos y mantener la calidad del código. Mi competencia en el control de versiones fomenta la comunicación efectiva y flujos de trabajo eficientes en proyectos de desarrollo colaborativo, convirtiéndome en un valioso colaborador en desarrollos en equipo.",
    },
    testimonials: {
        titlePart1: "TEST",
        titlePart2: "IMONIOS",
        heading: "Testimonios de Colegas: Lo Que Dicen Aquellos que Han Trabajado Conmigo. Explora los comentarios e ideas compartidos por personas que han colaborado conmigo. Sus testimonios reflejan nuestro trabajo en equipo y el impacto de nuestras contribuciones.",
        testimonialArr: [espTestimonial1, espTestimonial2, espTestimonial3]
    },
    contact: {
        titlePart1: "COM",
        titlePart2: "ENCEMOS",
        formPlaceholderName: "Tu nombre",
        formPlaceholderEmail: "Tu email",
        formPlaceholderMsg: "Mensaje a enviar",
        semdMsgBtn: "Enviar mensaje"
    },
    footer: {
        madeWithText: "Hecho con",
        inText: "en",
        cityText: "Barcelona"
    }
}