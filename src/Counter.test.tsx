import Counter from "./Counter";
import {act, fireEvent, render, waitFor} from "@testing-library/react";
import {useState} from "react";

describe('Counter', () => {
    function TestContainer(): JSX.Element {
        const [count, setState] = useState(1)

        function increaseCount() {
            setState(prevState => prevState + 1)
        }

        return <Counter count={count} incrementer={increaseCount}/>
    }

    it('should increment the count', async () => {
        const { getByText } = render(<TestContainer/>)

        expect(getByText('Current count: 1')).toBeInTheDocument()

        act(() => {
            fireEvent.click(getByText('Increment'))
        })

        await waitFor(() => {
            expect(getByText('Current count: 2')).toBeInTheDocument()
        })
    });
});
