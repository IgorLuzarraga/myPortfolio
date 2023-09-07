import { AppState, SelectedLanguage, AppFlipType } from '../types/appType';
import { TextsType } from '../types/languageTypes'
import { engTexts } from '../data/appTexts';

const initAppFlippedState: AppFlipType = "notFlipped"

const initTexts: TextsType = engTexts

// Initial App State
export const initialAppState: AppState = {
    language: SelectedLanguage.English,
    texts: initTexts,
    appFlipped: initAppFlippedState
};