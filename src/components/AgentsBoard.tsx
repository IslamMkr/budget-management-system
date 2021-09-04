import React = require("react")
import { ipcRenderer } from "electron"
import * as Constants from './../utils/constants'
import AddAgent from "./AddAgent"
const { default: Agents } = require("./Agents")
const { useState, useEffect } = require("react")
import addIcon from "./../images/add_white.svg"
import * as database from './../database'
 
const AgentsBoard = () => {
    const [agents, setAgents] = useState([])

    const [isAddAgentVisible, setAddAgentVisibility] = useState(false)

    const addAgentHandler = (visibility: boolean) => {
        setAddAgentVisibility(visibility)
    }

    useEffect(() => {
        fetchData()

        // ipcRenderer.send(Constants.DB_GET_ALL_AGENTS)
    }, [])

    // ipcRenderer.on(Constants.DB_RESPONSE_GET_ALL_AGENTS, (_, agents) => {
    //     ipcRenderer.removeAllListeners(Constants.DB_RESPONSE_GET_ALL_AGENTS)
    //     ipcRenderer.removeAllListeners(Constants.DB_GET_ALL_AGENTS)
    //     console.log('----------------\n', agents)
    //     setAgents(agents)
    // })

    // const dataChanged = () => {
    //     ipcRenderer.on(Constants.DB_RESPONSE_GET_ALL_AGENTS, (_, agents) => {
    //         ipcRenderer.removeAllListeners(Constants.DB_RESPONSE_GET_ALL_AGENTS)
    //         ipcRenderer.removeAllListeners(Constants.DB_GET_ALL_AGENTS)
    //         console.log('----------------\n', agents)
    //         setAgents(agents)
    //     })
    // }

    const fetchData = () => {
        database.getAllAgents().then(data => setAgents(data))
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
                isAddAgentVisible && <AddAgent isVisible={(visibility: boolean) => addAgentHandler(visibility)} notifyDataChanged={fetchData}  />
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

            <Agents agents={agents}/>
        </div>
    )
}

export default AgentsBoard
