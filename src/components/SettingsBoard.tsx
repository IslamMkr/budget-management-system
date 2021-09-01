import Partners from "./Partners"
import addIcon from "./../images/add_white.svg"
import editIcon from "./../images/edit_white.svg"
import React = require("react")

const SettingsBoard = () => {
    return (
        <div className="board">
            <h2>Général</h2>

            <div id="setting-budget">
                <p>Budget des oeuvres social</p>
                <p>1,650,870.00</p>

                <button className="btn-edit" id="btn">
                    <img src={editIcon} />
                </button>
            </div>

            <div className="page-title">
                <h2>Liste des partenaires</h2>
                <button className="btn-img-default" id="btn">
                    <img src={addIcon} />
                </button>
            </div>

            <Partners />
        </div>
    )
}

export default SettingsBoard