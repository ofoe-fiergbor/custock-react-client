import React from 'react'

const NewSupplier = ({migrate}) => {
    return (
        <div>
            <h1 onClick={()=> migrate(-4)}>NewSupplier</h1>
        </div>
    )
}

export default NewSupplier
