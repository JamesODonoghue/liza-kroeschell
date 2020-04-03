import React from "react"
import "./styles.css"

export const Menu = ({
    open,
    onClick
}: {
    open: boolean
    onClick: () => void
}) => {
    return (
        <div className="menu">
            <button
                onClick={onClick}
                className={`hamburger hamburger--slider ${
                    open ? "is-active" : ""
                }`}
                type="button"
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <div className="menu__container"></div>
        </div>
    )
}
