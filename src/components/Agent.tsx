import React = require("react");
import PropTypes = require('prop-types')

const Agent = ({ value }) => {
    return (
        <div className="table-item">
            <ul id="table-item-compte-cle">
                <li>{value.account}</li>
                <li>{value.key}</li>
            </ul>
            <ul id="table-item-other">
                <li>{value.f_name}</li>
                <li>{value.l_name}</li>
                <li>{value.position}</li>
            </ul>
        </div>
    )
}

Agent.propTypes = {
    value: PropTypes.object.isRequired
}

export default Agent