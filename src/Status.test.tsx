import {Dispatch, SetStateAction, useState} from "react";
import Status from "./Status";
import {act, render} from "@testing-library/react";
import {AppState, AppStateContext, useInitialAppState} from "./useAppState";
import Counter from "./Counter";

describe('Status', () => {
    let state: AppState
    let setState: Dispatch<SetStateAction<AppState>>

    function TestContainer(): JSX.Element {
        [state, setState] = useInitialAppState()

        return <AppStateContext.Provider value={[state, setState]}>
            <Status/>
        </AppStateContext.Provider>
    }

    function bumpTheCount() {
        act(() => {
            setState(prevState => ({
                ...prevState,
                count: prevState.count + 1
            }))
        })
    }

    it('shows Poor when the count is less than 3 and then Great otherwise', () => {
        const {getByText} = render(<TestContainer/>)

        expect(getByText('Status: Poor')).toBeInTheDocument()

        bumpTheCount()
        expect(getByText('Status: Poor')).toBeInTheDocument()

        bumpTheCount()
        expect(getByText('Status: Poor')).toBeInTheDocument()

        bumpTheCount()
        expect(getByText('Status: Great')).toBeInTheDocument()
    });
});
