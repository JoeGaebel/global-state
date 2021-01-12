import {Dispatch, SetStateAction, useState} from "react";
import Status from "./Status";
import {act, render} from "@testing-library/react";

describe('Status', () => {
    let setCount: Dispatch<SetStateAction<number>>
    let count: number

    function TestContainer(): JSX.Element {
        [count, setCount] = useState(0)

        return <Status count={count}/>
    }

    function bumpTheCount() {
        act(() => {
            setCount(prevState => prevState + 1)
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
