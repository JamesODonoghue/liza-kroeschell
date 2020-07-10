import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Menu } from '../Menu';
import './styles.css';

export const Navigation = () => {
    const [open, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    const handleButtonClick = () => {
        setIsOpen(!open);
    };

    return (
        <div
            style={{
                width: '100%',
                backgroundColor: 'var(--color-blue-dark)',
                padding: '0 2rem',
                boxSizing: 'border-box',
            }}
        >
            <header className="header">
                <div className="brand">
                    <h3>Liza Kroeschell</h3>
                </div>
                <div className={`navbar ${open ? 'open' : ''}`}>
                    <NavLink onClick={handleLinkClick} to={ROUTES.HOME}>
                        Home
                    </NavLink>
                    <NavLink onClick={handleLinkClick} to={ROUTES.MEDIA}>
                        Media
                    </NavLink>
                </div>
                <Menu onClick={handleButtonClick} open={open} />
            </header>
        </div>
    );
};
