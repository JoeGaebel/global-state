import React from 'react'
import {useAppState} from "./useAppState";

export default function Status() {
    const [{count}] = useAppState()

    const statusText = count >= 3 ? 'Great' : 'Poor'

    return <div>Status: {statusText}</div>
}
