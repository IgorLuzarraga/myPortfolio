import { AppState, SelectedLanguage, AppFlipType } from '../types/appType';
import { TextsType } from '../types/languageTypes'
import { engTestimonial1, engTestimonial2, engTestimonial3 } from '../data/testimonialsData';
import { engProject1, engProject2, engProject3, engProject4, engProject5, engProject6 } from "../data/projectsData"

const initAppFlippedState: AppFlipType = "notFlipped"

const initTexts: TextsType = {
    navbarMenu: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        testimonials: "Testimonials",
        contact: "Contact"
    },
    landing: {
        welcome: "Welcome",
        contactBtn: "Let's talk",
    },
    mySkills: {
        titlePart1: "SK",
        titlePart2: "ILLS",
        heading: "These are my web skills",
        skill1Title: "Experiencia",
        skill1Desc: "string",
        skill2Title: "string",
        skill2Desc: "string",
        skill3Title: "string",
        skill3Desc: "string",
    },
    projects: {
        titlePart1: "PRO",
        titlePart2: "JECTS",
        heading: "Below, you'll find a curated selection of projects that highlight my skills, experience, and passion for solving real-world problems with technology. Each project is briefly described and includes links to code repositories and live demos. Feel free to explore and see how I approach different challenges.",
        projectsArr: [engProject1, engProject2, engProject3, engProject4, engProject5, engProject6]
    },
    testimonials: {
        titlePart1: "TEST",
        titlePart2: "IMONIALS",
        heading: "These are people's testimonials",
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

// Initial App State
export const initialAppState: AppState = {
    language: SelectedLanguage.English,
    texts: initTexts,
    appFlipped: initAppFlippedState
};