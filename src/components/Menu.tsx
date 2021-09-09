import React = require('react')
const { default: MenuItem } = require("./MenuItem")

const Menu = ({ activeItem, onItemClick }) => {

    const handleClick = (text) => {
        //console.log(text)
        onItemClick(text)
    }

    return (
        <div className="menu">   
            <MenuItem text="Agents" activeItem={activeItem} clickHandler={(text) => handleClick(text)} />
            <MenuItem text="Détails du mois" activeItem={activeItem} clickHandler={(text) => handleClick(text)} />
            <MenuItem text="Transactions" activeItem={activeItem} clickHandler={(text) => handleClick(text)} />
            <MenuItem text="Agents soldés" activeItem={activeItem} clickHandler={(text) => handleClick(text)} />
            <MenuItem text="Rechercher" activeItem={activeItem} clickHandler={(text) => handleClick(text)} />
            <MenuItem text="Paramètres" activeItem={activeItem} clickHandler={(text) => handleClick(text)} />
        </div>
    )
}

export default Menu