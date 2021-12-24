import React from 'react'

const Action = ({migrate}) => {
    return (
        <div>
            <h1 onClick={() => migrate(1)}>action</h1>
            <h1>action</h1>
            <h1>action</h1>
        </div>
    )
}

export default Action
