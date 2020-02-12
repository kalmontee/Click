import React from 'react';
import header from './header.css'

function Header() {
    return (
        <header className="header">
            <div className="jumbotron">
                <h1 className="">Welcome to The Clicky Game!</h1>
                <p className="">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </header>
    )
}

export default Header;