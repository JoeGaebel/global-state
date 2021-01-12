import React from 'react'
import {useAppState} from "./useAppState";

export default function Counter() {
    const [{count}, setState] = useAppState()

    function handleClick() {
        setState((prevState) => ({
            ...prevState,
            count: prevState.count + 1
        }))
    }

    return <>
        <div>Current count: {count}</div>
        <button onClick={handleClick}>Increment</button>
    </>
}
