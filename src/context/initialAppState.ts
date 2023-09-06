import { AppState, SelectedLanguage, AppFlipType } from '../types/appType';
import { TextsType } from '../types/languageTypes'
import { engTestimonial1, engTestimonial2, engTestimonial3 } from '../data/testimonialsData';

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