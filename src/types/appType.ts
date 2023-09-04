import { TextsType } from '../types/languageTypes'

// type AppNotFlipped = {
//     status: "notFlipped";
// };

// type AppFlipped = {
//     status: "flipped";
// };
export type AppState = {
    texts: TextsType;
    appFlipped: AppFlipType;
}

type AppNotFlipped = "notFlipped";
type AppFlipped = "flipped";

export type AppFlipType = AppNotFlipped | AppFlipped;


