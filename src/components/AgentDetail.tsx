import React = require("react")

const AgentDetail = ({ key, value }) => {

    const calculateTotal = () => {
        return value.pretAchat + value.pretOrdinaire + value.avance
    }

    return (
        <div className="table-item" id="month-table">
            <ul id="table-item-compte-nom">
                <li id="compte-num">{value.account}</li>
                <li id="nom">{value.name}</li>
            </ul>
            <ul id="table-item-standard-details">
                <li>{value.pretAchat}</li>
                <li>{value.pretOrdinaire}</li>
                <li>{value.avance}</li>
                {
                    [154, 5894, 48875, 74585].map (
                        s => (
                            <li>{s}</li>
                        )
                    )
                }
            </ul>
            
            <ul id="table-item-total">
                <li>{calculateTotal()}</li>
            </ul>
        </div>
    )
}

export default AgentDetail