import React = require("react")
import { ipcRenderer } from "electron"
import * as Constants from './../utils/constants'
import closeIcon from './../images/close_white.svg'
import PropTypes = require('prop-types')
import * as DateUtils from './../utils/date'
const { useState } = require("react")

const AddAgent = ({ isVisible }) => {
    const [compte, setCompte] = useState("")
    const [cle, setCle] = useState("")
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [poste, setPoste] = useState("")
    
    const [successMessageVisibility, setSuccessMessageVisibility] = useState(false)
    const [failureMessageVisibility, setFailureMessageVisibility] = useState(false)

    const addAgentCloseHandler = () => {
        isVisible(false)
    }

    const handleAddAgent = () => {
        setSuccessMessageVisibility(false)
        setFailureMessageVisibility(false)

        const agent = {
            compte: String(compte),
            cle: String(cle),
            nom: String(nom),
            prenom: String(prenom),
            poste: String(poste),
            timestamp: DateUtils.getCurrentTime()
        }

        ipcRenderer.send(Constants.DB_ADD_AGENT, agent)
    }

    ipcRenderer.on(Constants.DB_ADD_AGENT, (_, message) => {
        if (message == Constants.DB_OP_SUCCESS) {
            notifyUserAgentAddedSuccessfuly()
            clearInput()
        } else if (message == Constants.DB_OP_FAILURE) {
            notifyUserAddFailed()
        }
    })

    const notifyUserAddFailed = () => {
        setFailureMessageVisibility(true)
    }

    const clearInput = () => {
        setCompte("")
        setCle("")
        setNom("")
        setPrenom("")
        setPoste("")
    }

    const notifyUserAgentAddedSuccessfuly = async () => {
        setSuccessMessageVisibility(true)

        let seconds = 0
        let interval: NodeJS.Timeout

        const increment = () => {
            seconds += 1
            console.log(seconds)
            if (seconds == 3) {
                clearInterval(interval)
                setSuccessMessageVisibility(false)
            }
        }

        interval = setInterval(increment, 1000)
    }

    // TODO : get the addagent response 
    // see how its going 

    return (
        <div className="form-add-agent">
            <div className="add-agent-title">
                <h4>Ajouter un agent</h4>
                <button className="btn-close" 
                    id="btn" 
                    onClick={addAgentCloseHandler}>
                    <img src={closeIcon} />
                </button>
            </div>

            <div className="form-control-add-agent">
                <label>Informations du compte</label>
                <input type="number" 
                    min="1000"
                    max="9999"
                    placeholder="Numéro du compte" 
                    value={compte} 
                    onChange={(e) => { 
                        if (e.target.value.length <= 4)  {
                            setCompte(e.target.value)
                        } 
                    }}/>
                <input type="number" 
                    min="10"
                    max="99"
                    placeholder="Clé du compte" 
                    value={cle} 
                    onChange={(e) => {
                        if (e.target.value.length <= 2) {
                            setCle(e.target.value)
                        }
                    }} />
            </div>

            <div className="form-control-add-agent">
                <label>Informations personnelles</label>
                <input type="text" 
                    placeholder="Nom" 
                    value={nom} 
                    onChange={(e) => setNom(e.target.value)} />
                <input type="text" 
                    placeholder="Prénom" 
                    value={prenom} 
                    onChange={(e) => setPrenom(e.target.value)} />
            </div>

            <div className="form-control-add-agent" id="last">
                <label>Informations professionelles</label>
                <input type="text" 
                    placeholder="Poste occupé" 
                    value={poste} 
                    onChange={(e) => setPoste(e.target.value)} />
            </div>

            <div className='btn-result'>
                <button className="btn" 
                    id="add-agent-button"
                    onClick={handleAddAgent}>Ajouter</button>

                {
                    successMessageVisibility && <h5>Agent ajouté avec succès</h5>
                }
            </div>

            {
                failureMessageVisibility && <h5 id="error-msg">Agent non ajouté !<br/>Ce numéro de compte exist !!!</h5>
            }
        </div>
    )
}

AddAgent.protoTypes = {
    isVisible: PropTypes.bool.isRequired
}

export default AddAgent
