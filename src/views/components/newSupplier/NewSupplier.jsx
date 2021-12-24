import React from 'react'

const NewSupplier = ({migrate}) => {
    return (
        <div>
            <h1 onClick={()=> migrate(0)}>NewSupplier</h1>
        </div>
    )
}

export default NewSupplier
