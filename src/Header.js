import React, { useState, useEffect } from "react"

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <header>
            <div className="illustration-container">
                {windowWidth < 1024 ? (
                    <img src={require('./images/illustration-sign-up-mobile.svg').default} alt="illustration" />
                ) : (
                    <img src={require('./images/illustration-sign-up-desktop.svg').default} alt="Large Image" />
                )}
            </div>
        </header>
    )
}

export default Header
