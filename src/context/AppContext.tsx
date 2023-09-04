import { createContext, useReducer, useContext, ReactNode } from 'react';
import { TextsType } from '../types/languageTypes'

// Define the state shape
interface AppState {
    texts: TextsType;
}

const initTexts: TextsType = {
    landing: {
        welcome: "Welcome",
        contactBtn: "Let's talk",
    }
}

// Define action types
type Action = {
    type: 'setTexts',
    payload: TextsType
};

// Initial state
const initialState: AppState = {
    texts: initTexts,
};

// Create the context
const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Create the reducer function
function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'setTexts':
            return { texts: action.payload };
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

