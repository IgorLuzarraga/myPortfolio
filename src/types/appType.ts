import { TextsType } from '../types/languageTypes'

// type AppNotFlipped = {
//     status: "notFlipped";
// };

// type AppFlipped = {
//     status: "flipped";
// };
export type AppState = {
    language: SelectedLanguage,
    texts: TextsType,
    appFlipped: AppFlipType,
}

type AppNotFlipped = "notFlipped";
type AppFlipped = "flipped";

export type AppFlipType = AppNotFlipped | AppFlipped;

export enum SelectedPage {
    Home = "home",
    Skills = "skills",
    Projects = "projects",
    Testimonials = "testimonials",
    Contact = "contact"
}

export enum SelectedLanguage {
    English = "english",
    Spanish = "spanish",
    Catalan = "catalan",
}


