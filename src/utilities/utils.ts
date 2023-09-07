import { SelectedPage, SelectedLanguage } from '../types/appType'
import { pipe } from 'fp-ts/lib/function'
import { catTexts, engTexts, espTexts } from '../data/appTexts'

export const fromSelectedPageToPageName = (selectedPage: SelectedPage) => {
    switch (selectedPage) {
        case SelectedPage.Projects:
            return 'Projects'
        case SelectedPage.Contact:
            return 'Contact'
        case SelectedPage.Home:
            return 'Home'
        case SelectedPage.Testimonials:
            return 'Testimonials'
        case SelectedPage.Skills:
            return 'Skills'
    }
}

const addSimbolPrefix = (input: string, simbol: string): string => `${simbol}${input}`

const addHashPrefix = (input: string): string => addSimbolPrefix(input, '#')

const toLowerCase = (input: string): string => input.toLowerCase();

export const fromSelectedPageToPageId = (selectedPage: SelectedPage) =>
    pipe(selectedPage, fromSelectedPageToPageName, toLowerCase)

export const fromSelectedPageToPageHref = (selectedPage: SelectedPage) =>
    pipe(selectedPage, fromSelectedPageToPageName, toLowerCase, addHashPrefix)

// ------------------------------------------

export const importAppTexts = (selectedLanguage: SelectedLanguage) => {
    let texts

    switch (selectedLanguage) {
        case SelectedLanguage.English:
            texts = engTexts
            break;
        case SelectedLanguage.Spanish:
            texts = espTexts
            break;
        case SelectedLanguage.Catalan:
            texts = catTexts
            break;
        default:
            texts = engTexts
    }

    return texts
}

// ------------------------------------------

export const getTextFirstLine = (text: string) =>
    text.split('.')[0] + '.'

export const getTextExceptFirstLine = (text: string) =>
    text.substring(text.indexOf('.') + 1)

// ------------------------------------------

