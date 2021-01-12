import React, {Dispatch, SetStateAction, useContext, useState} from "react";

export interface AppState {
    count: number
}

const initialState: AppState = {
    count: 0
}

export type AppStateAndDispatch = [AppState, Dispatch<SetStateAction<AppState>>]

export function useInitialAppState(): AppStateAndDispatch {
    const [state, setState] = useState<AppState>(initialState)
    return [state, setState]
}

export function useAppState(): AppStateAndDispatch {
    return useContext(AppStateContext)
}

export const AppStateContext = React.createContext<AppStateAndDispatch>([] as unknown as AppStateAndDispatch)

