import React = require("react")
import * as NumberUtils from './../utils/numbers'

const AgentDetail = ({ agent, payments }) => {

    const calculateTotal = () => {
        const total = payments.reduce((acc, payment) => acc + payment.montant, 0)
        return NumberUtils.formatNumberToCurrency(total)
    }

    return (
        <div className="table-item" id="month-table">
            <ul id="table-item-compte-nom">
                <li id="compte-num">{agent.compte + '/' + agent.cle}</li>
                <li id="nom">{agent.nom + ' ' + agent.prenom}</li>
            </ul>
            <ul id="table-item-standard-details">
                {
                    // TODO : when there is no payments fix it 
                    payments.map (
                        pay => <li key={pay.pid}>{pay.montant == 0 ? '--' : NumberUtils.formatNumberToCurrency(pay.montant)}</li>
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