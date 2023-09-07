import { createContext, useContext } from 'react';
import { AppFlipType, AppState, SelectedLanguage } from '../types/appType';
import { TextsType } from '../types/languageTypes';


// Define action types
type Action =
    | { type: 'setLanguage', payload: SelectedLanguage }
    | { type: 'setTexts', payload: TextsType }
    | { type: 'setFlipApp', payload: AppFlipType };

// Create the reducer function
export function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'setLanguage':
            return { ...state, language: action.payload };
        case 'setTexts':
            return { ...state, texts: action.payload };
        case 'setFlipApp':
            return { ...state, appFlipped: action.payload };
        default:
            return state;
    }
}

// Create the context
export const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Create a custom hook for accessing the context
export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
}

