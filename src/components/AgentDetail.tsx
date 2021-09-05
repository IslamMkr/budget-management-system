import React = require("react")

const AgentDetail = ({ agent, payments }) => {
    return (
        <div className="table-item" id="month-table">
            <ul id="table-item-compte-nom">
                <li id="compte-num">{agent.compte + '/' + agent.cle}</li>
                <li id="nom">{agent.nom + ' ' + agent.prenom}</li>
            </ul>
            <ul id="table-item-standard-details">
                <li>{'10.000.00'}</li>
                <li>{'12.00'}</li>
                <li>{'12.00'}</li>
                {
                    // TODO : when there is no payments fix it 
                    payments.map (
                        pay => <li>{pay.montant}</li>
                    )
                }
            </ul>
            
            <ul id="table-item-total">
                <li>{'0.00'}</li>
            </ul>
        </div>
    )
}

export default AgentDetail