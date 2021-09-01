import editIcon from "./../images/edit_white.svg"
import deleteIcon from "./../images/delete_white.svg"
import React = require("react")

const Partner = ({ key, value }) => {
    return (
        <div className="partner-item">
            <p>{value.name}</p>
            <div>
                <button className="btn-edit" id="btn">
                    <img src={editIcon} />
                </button>
                <button className="btn-delete" id="btn">
                    <img src={deleteIcon} />
                </button>
            </div>
        </div>
    )
}

export default Partner