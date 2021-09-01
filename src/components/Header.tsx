import React = require('react')
const { default: Menu } = require("./Menu")
const { default: MenuItem } = require("./MenuItem")


const Header = ({ activeItem, onItemClick }) => {

    const handleMenuItemClick = (text) => {
        //console.log(text)
        onItemClick(text)
    }

    return (
        <div className="header">
            <img src="#" className="logo" />
            <Menu activeItem={activeItem} onItemClick={(text) => handleMenuItemClick(text)} />
            <MenuItem text="Déconnecter" active={false} />
        </div>
    )
}

export default Header