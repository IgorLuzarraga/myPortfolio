import { TestimonialsType } from "./testimonialsTypes";

export type TextsType = {
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
    }
}