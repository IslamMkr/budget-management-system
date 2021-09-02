import React = require("react")
import { ipcRenderer } from "electron"
import * as Constants from './../utils/constants'
import closeIcon from './../images/close_white.svg'

const AddAgent = ({ isVisible }) => {

    const addAgentCloseHandler = () => {
        isVisible(false)   
    }

    const handleAddAgent = () => {
        // TODO: get input + send it to main process
    }

    // TODO : get the addagent response 
    // see how its going 

    return (
        <div className="form-add-agent">
            <div className="add-agent-title">
                <h4>Ajouter un agent</h4>
                <button className="btn-close" id="btn" onClick={addAgentCloseHandler}>
                    <img src={closeIcon} />
                </button>
            </div>

            <div className="form-control-add-agent">
                <label>Informations du compte</label>
                <input type="text" placeholder="Numéro du compte" />
                <input type="text" placeholder="Clé du compte" />
            </div>

            <div className="form-control-add-agent">
                <label>Informations personnelles</label>
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Prénom" />
            </div>

            <div className="form-control-add-agent" id="last">
                <label>Informations professionelles</label>
                <input type="text" placeholder="Poste occupé" />
            </div>

            <button className="btn" 
                id="add-agent-button"
                onClick={handleAddAgent}>Ajouter</button>
        </div>
    )
}

export default AddAgent
