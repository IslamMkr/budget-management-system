import closeIcon from './../images/close_white.svg'
import React = require('react')
import { useState } from 'react'
import * as DateUtils from './../utils/date'
import * as database from './../database'

/**
 * A component that manages the new adding of partners to the database
 * 
 * @param isVisible : component visibility
 * @param notifyPartnerDataChanged : listener for new records adding
 * @returns AddPartner view 
 */
const AddPartner = ({ isVisible, notifyPartnersDataChanged }) => {
    const [partnerName, setPartnerName] = useState("") // Partner name text input state
    
    // States for success & error managment
    const [successMessageVisibility, setSuccessMessageVisibility] = useState(false)
    const [failureMessageVisibility, setFailureMessageVisibility] = useState(false)
    const [errorStringIsEmpty, setErrorStringIsEmpty] = useState(false)

    /**
     * Hiding the component
     * Making it invisible
     */
    const addPartnerCloseHandler = () => {
        isVisible(false)
    }

    /**
     * Handling the add partner request from user
     * Checking the input validity & making the database request
     */
    const handleAddPartner = () => {
        setSuccessMessageVisibility(false)
        setFailureMessageVisibility(false)
        setErrorStringIsEmpty(false)

        if (partnerName.trim() != "") {
            const partner = {
                nom: partnerName,
                timestamp: DateUtils.getCurrentTime()
            }

            // ipcRenderer.send(Constants.DB_ADD_PARTNER, partner)
            database.addPartner(partner)
                .then(_ => {
                    notifyUserPartnerAddedSuccessfuly()
                    setPartnerName("")
                    notifyPartnersDataChanged()
                })
                .catch(err => {
                    setFailureMessageVisibility(true)
                })
        } else {
            setErrorStringIsEmpty(true)
        }
    }

    // ipcRenderer.on(Constants.DB_RESPONSE_ADD_PARTNER, (_, message) => {
    //     if (message == Constants.DB_OP_SUCCESS) {
    //         notifyUserPartnerAddedSuccessfuly()
    //         setPartnerName("")
    //     } else if (message == Constants.DB_OP_FAILURE) {
    //         notifyUserPartnerAddFailed()
    //     }
    // })

    /**
	 * Notifying the parent views that a new record is added & new data is available
	 */
    const notifyUserPartnerAddedSuccessfuly = () => {
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

    return (
        <div className="form-add-agent">
            <div className="add-agent-title">
                <h4>Ajouter un partenaire</h4>
                <button className="btn-close" 
                    id="btn" 
                    onClick={addPartnerCloseHandler}>
                    <img src={closeIcon} />
                </button>
            </div>

            <div className="form-control-add-agent" id="first-last" >
                <input type="text" 
                    placeholder="Nom du partenaire" 
                    value={partnerName} 
                    onChange={(e) => { setPartnerName(e.target.value)} } />
            </div>

            <div className='btn-result'>
                <button className="btn" 
                    id="add-agent-button"
                    onClick={handleAddPartner}>Ajouter</button>

                {
                    successMessageVisibility && <h5>Partenaire ajouté avec succès</h5>
                }
            </div>

            {
                failureMessageVisibility && <h5 id="error-msg">Partenaire non ajouté !<br/>Partenaire avec le meme nom exist !!!</h5>
            }

            {
                errorStringIsEmpty && <h5 id="error-msg">Saisissez le nom du partenaire...</h5>
            }
        </div>
    )
}

export default AddPartner
