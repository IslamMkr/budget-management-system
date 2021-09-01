import React = require('react')

const MenuItem = ({ text, activeItem, clickHandler }) => {

    const handleClick = (e) => {
        e.preventDefault()

        clickHandler(text)
    }

    return (
        <div 
            id={text == activeItem ? "active" : ""} 
            className="menu-item" 
            onClick={(e) => handleClick(e)}>

            <img src="" />
            <label>{text}</label>
        </div>
    )
}

export default MenuItem