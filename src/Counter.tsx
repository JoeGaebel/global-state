import React from 'react'

export default function Counter({count, incrementer}: {count: number, incrementer: () => void}) {
    return <>
        <div>Current count: {count}</div>
        <button onClick={() => incrementer()}>Increment</button>
    </>
}
