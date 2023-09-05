import { createContext, useReducer, useContext, ReactNode } from 'react';
import { AppFlipType, AppState, SelectedLanguage } from '../types/appType';
import { TextsType } from '../types/languageTypes'
import { initialAppState } from './initialAppState';

// Define action types
type Action =
    | { type: 'setLanguage', payload: SelectedLanguage }
    | { type: 'setTexts', payload: TextsType }
    | { type: 'setFlipApp', payload: AppFlipType };

// Create the context
const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Create the reducer function
function reducer(state: AppState, action: Action): AppState {
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

// Create a custom hook for accessing the context
export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
}

type Props = {
    children: ReactNode
}

// Create a context provider
export const AppContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reducer, initialAppState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

