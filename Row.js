import React from 'react'

function Row({titles,containers}) {
    return (
        <div>
            {/* Titles  */}
            <h1>{titles}</h1>
            {/* Cntainers */}
            <h2>{containers}</h2>
        </div>
    )
}

export default Row
