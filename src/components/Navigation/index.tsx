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
        <header className="flex justify-between px-8 py-4 max-w-6xl mx-auto items-baseline">
            <h3 className="uppercase tracking-wider font-semibold text-indigo-800 text-xl">Liza Kroeschell</h3>
            <div className={`navbar ${open ? 'open' : ''}`}>
                <NavLink
                    className="ml-8 hover:text-indigo-700 transition duration-200 uppercase tracking-wider font-semibold text-gray-700"
                    onClick={handleLinkClick}
                    to={ROUTES.HOME}
                >
                    Home
                </NavLink>
                <NavLink
                    className="ml-8 hover:text-indigo-700 transition duration-200  uppercase tracking-wider font-semibold text-gray-700"
                    onClick={handleLinkClick}
                    to={ROUTES.MEDIA}
                >
                    Videos
                </NavLink>
                {/* <Menu className="ml-8" onClick={handleButtonClick} open={open} /> */}
            </div>
        </header>
    );
};
