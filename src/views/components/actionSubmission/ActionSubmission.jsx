import React from 'react'

const ActionSubmission = ({migrate}) => {
    return (
        <div>
            <h1  onClick={() => migrate(0)}>ActionSubmission</h1>
        </div>
    )
}

export default ActionSubmission
