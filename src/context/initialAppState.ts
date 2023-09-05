import { AppState, SelectedLanguage, AppFlipType } from '../types/appType';
import { TextsType } from '../types/languageTypes'
import { engTestimonial1, engTestimonial2, engTestimonial3 } from '../data/testimonialsData';

const initAppFlippedState: AppFlipType = "notFlipped"

const initTexts: TextsType = {
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
    }
}

// Initial App State
export const initialAppState: AppState = {
    language: SelectedLanguage.English,
    texts: initTexts,
    appFlipped: initAppFlippedState
};