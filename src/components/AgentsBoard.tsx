import React = require("react")
import { ipcRenderer } from "electron"
import * as Constants from './../utils/constants'
import AddAgent from "./AddAgent"
const { default: Agents } = require("./Agents")
const { useState } = require("react")
import addIcon from "./../images/add_white.svg"
 
const AgentsBoard = () => {

    const [isAddAgentVisible, setAddAgentVisibility] = useState(false)

    const addAgentHandler = (visibility) => {
        setAddAgentVisibility(visibility)
    }

    return (
        <div className="board">
            <div className="page-title">
                <h2>Liste des agents</h2>
                <button className="btn-img-default" id="btn"
                    onClick={() => addAgentHandler(true)}>
                    <img src={addIcon} />
                </button>
            </div>

            {
                isAddAgentVisible && <AddAgent isVisible={(visibility) => addAgentHandler(visibility)} />
            }
			
			<div className="table">
				<ul id="table-compte-cle">
					<li>Compte</li>
					<li>Clé</li>
				</ul>
				<ul id="table-other">
					<li>Nom</li>
					<li>Prénom</li>
					<li>Poste</li>
				</ul>
			</div>

            <Agents />
        </div>
    )
}

export default AgentsBoard
