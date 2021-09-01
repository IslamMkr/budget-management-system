//import editIcon from "./../images/edit_white.svg"
//import deleteIcon from "./../images/delete_white.svg"
import React = require("react")

const Partner = ({ key, value }) => {
    return (
        <div className="partner-item">
            <p>{value.name}</p>
            <div>
                <button className="btn-edit" id="btn">
                    <img src="./../images/edit_white.svg" />
                </button>
                <button className="btn-delete" id="btn">
                    <img src="./../images/delete_white.svg" />
                </button>
            </div>
        </div>
    )
}

export default Partner