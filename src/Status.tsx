import React from 'react'

export default function Status({count}: {count: number}) {
    const statusText = count >= 3 ? 'Great' : 'Poor'

    return <div>Status: {statusText}</div>
}
