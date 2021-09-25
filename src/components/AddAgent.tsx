import React = require("react")
import closeIcon from './../images/close_white.svg'
import PropTypes = require('prop-types')
import * as DateUtils from './../utils/date'
const { useState } = require("react")
import * as database from './../database'

/**
 * A component that manages the new adding of agents to the database
 * 
 * @param isVisible : component visibility
 * @param notifyDataChanged : listener for new records adding
 * @returns AddAgent view 
 */
const AddAgent = ({ isVisible, notifyDataChanged }) => {

    const [compte, setCompte] = useState("") // Account number text input state
    const [cle, setCle] = useState("") // Account key number text input state
    const [nom, setNom] = useState("") // Name text input state
    const [prenom, setPrenom] = useState("") // Surname text input state
    const [poste, setPoste] = useState("") // Job text input state
    
	// States to manage success & error messages 
    const [successMessageVisibility, setSuccessMessageVisibility] = useState(false)
    const [failureMessageVisibility, setFailureMessageVisibility] = useState(false)

	/**
	 * Hide the component
	 * Making the component invisible
	 */
    const addAgentCloseHandler = () => {
        isVisible(false)
    }

	/**
	 * Handling the add agent request from user
	 * Checking input validity & adding record to database
	 */
    const handleAddAgent = () => {
        setSuccessMessageVisibility(false)
        setFailureMessageVisibility(false)

		/**
		 * TODO: Check input text validity before adding it to database
		 */

        const agent = {
            compte: String(compte),
            cle: String(cle),
            nom: String(nom),
            prenom: String(prenom),
            poste: String(poste),
            timestamp: DateUtils.getCurrentTime()
        }
        
		// Making the database operation
		// Adding agent 
        database.addAgent(agent)
            .then(_ => {
                notifyUserAgentAddedSuccessfuly()
                clearInput()
            })
            .catch(err => {
				setFailureMessageVisibility(true)
            })
    }

	/**
	 * Clearing input text
	 */
    const clearInput = () => {
        setCompte("")
        setCle("")
        setNom("")
        setPrenom("")
        setPoste("")
    }

	/**
	 * Notifying the parent views that a new record is added & new data is available
	 */
    const notifyUserAgentAddedSuccessfuly = async () => {
        setSuccessMessageVisibility(true)

		// Notifying the parent view that data changed
		// New record available
        notifyDataChanged()

        let seconds = 0
        let interval: NodeJS.Timeout

        const increment = () => {
            seconds += 1
            //console.log(seconds)
            if (seconds == 3) {
                clearInterval(interval)
                setSuccessMessageVisibility(false)
            }
        }

        interval = setInterval(increment, 1000)
    }
    
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
                failureMessageVisibility && <h5 id="error-msg">Agent non ajouté !<br/>Ce numéro de compte existe déjà !</h5>
            }
        </div>
    )
}

AddAgent.protoTypes = {
    isVisible: PropTypes.bool.isRequired
}

export default AddAgent
