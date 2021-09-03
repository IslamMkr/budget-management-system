import React = require("react")
import PropTypes = require('prop-types')

const Agent = ({ agent }) => {
    return (
        <div className="table-item">
            <ul id="table-item-compte-cle">
                <li>{agent.compte}</li>
                <li>{agent.cle}</li>
            </ul>
            <ul id="table-item-other">
                <li>{agent.nom}</li>
                <li>{agent.prenom}</li>
                <li>{agent.poste}</li>
            </ul>
        </div>
    )
}

Agent.propTypes = {
    agent: PropTypes.object.isRequired
}

export default Agent