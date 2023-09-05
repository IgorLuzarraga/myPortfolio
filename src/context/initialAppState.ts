import { AppState, SelectedLanguage, AppFlipType } from '../types/appType';
import { TextsType } from '../types/languageTypes'

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
    }
}

// Initial App State
export const initialAppState: AppState = {
    language: SelectedLanguage.English,
    texts: initTexts,
    appFlipped: initAppFlippedState
};