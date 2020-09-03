import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
// import { Menu } from '../Menu';
// import './styles.css';

export const Navigation = () => {
    const [open, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    // const handleButtonClick = () => {
    //     setIsOpen(!open);
    // };

    return (
        <header className="flex justify-between px-8 py-4 max-w-6xl mx-auto text-xl">
            <div className="brand">
                <h3>Liza Kroeschell</h3>
            </div>
            <div className={`navbar ${open ? 'open' : ''}`}>
                <NavLink
                    className="ml-8 hover:text-indigo-700 transition-all"
                    onClick={handleLinkClick}
                    to={ROUTES.HOME}
                >
                    Home
                </NavLink>
                <NavLink
                    className="ml-8 hover:text-indigo-700 transition-all"
                    onClick={handleLinkClick}
                    to={ROUTES.MEDIA}
                >
                    Video
                </NavLink>
                {/* <Menu className="ml-8" onClick={handleButtonClick} open={open} /> */}
            </div>
        </header>
    );
};
