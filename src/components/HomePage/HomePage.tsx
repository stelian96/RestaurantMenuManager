import React, { ReactElement } from 'react'
import "./HomePage.css"

interface Props {
    
}

export default function HomePage({}: Props): ReactElement {
    return (
        <div className="homeContainer">
            <p>123 Fake Street — Sofia — 087-654-3210</p>
            <div>
                <a href="/">Menu</a>
                <a href="/">Book Table</a>
            </div>
        </div>
    )
}
