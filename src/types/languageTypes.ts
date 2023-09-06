import { TestimonialsType } from "./testimonialsTypes";

export type TextsType = {
    navbarMenu: {
        home: string,
        skills: string,
        projects: string,
        testimonials: string,
        contact: string
    },
    landing: {
        welcome: string;
        contactBtn: string;
    },
    mySkills: {
        titlePart1: string,
        titlePart2: string,
        heading: string,
        skill1Title: string,
        skill1Desc: string,
        skill2Title: string,
        skill2Desc: string,
        skill3Title: string,
        skill3Desc: string,
    },
    testimonials: {
        titlePart1: string,
        titlePart2: string,
        heading: string,
        testimonialArr: TestimonialsType,
    },
    contact: {
        titlePart1: string,
        titlePart2: string,
        formPlaceholderName: string,
        formPlaceholderEmail: string,
        formPlaceholderMsg: string,
        semdMsgBtn: string,
    },
    footer: {
        madeWithText: string,
        inText: string,
        cityText: string,
    }
}