import Counter from "./Counter";
import {act, fireEvent, render, waitFor} from "@testing-library/react";
import {AppStateContext, useInitialAppState} from "./useAppState";

describe('Counter', () => {
    function TestContainer(): JSX.Element {
        const [state, setState] = useInitialAppState()

        return <AppStateContext.Provider value={[state, setState]}>
            <Counter/>
        </AppStateContext.Provider>
    }

    it('should increment the count', async () => {
        const { getByText } = render(<TestContainer/>)

        expect(getByText('Current count: 0')).toBeInTheDocument()

        act(() => {
            fireEvent.click(getByText('Increment'))
        })

        await waitFor(() => {
            expect(getByText('Current count: 1')).toBeInTheDocument()
        })
    });
});
