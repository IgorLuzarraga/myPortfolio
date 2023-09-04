import { createContext, useReducer, useContext, ReactNode } from 'react';
import { TextsType } from '../types/languageTypes'
import { AppFlipType } from '../types/appType';
import { AppState } from '../types/appType';

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

// Define action types
type Action =
    | {
        type: 'setTexts',
        payload: TextsType
    }
    | { type: 'setFlipApp', payload: AppFlipType };

// Initial state
const initialState: AppState = {
    texts: initTexts,
    appFlipped: initAppFlippedState
};

// Create the context
const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Create the reducer function
function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
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
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

