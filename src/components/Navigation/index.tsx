import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/routes"
import { Menu } from "../Menu"

export const Navigation = () => {
    const [open, setIsOpen] = useState(false)
    const handleLinkClick = () => {
        setIsOpen(false)
    }
    const handleButtonClick = () => {
        setIsOpen(!open)
    }

    return (
        <header className="header">
            <div className={`navbar ${open ? "open" : ""}`}>
                <NavLink onClick={handleLinkClick} to={ROUTES.HOME}>
                    Home
                </NavLink>
                <NavLink onClick={handleLinkClick} to={ROUTES.MEDIA}>
                    Media
                </NavLink>
            </div>
            <Menu onClick={handleButtonClick} open={open} />
        </header>
    )
}
