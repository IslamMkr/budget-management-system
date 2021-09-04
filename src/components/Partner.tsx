import editIcon from "./../images/edit_white.svg"
import deleteIcon from "./../images/delete_white.svg"
import React = require("react")
import { useState } from "react"
import * as database from './../database'

const Partner = ({ partner, notifyDataChanged }) => {
    const [deleteConfirmationVisibility, setDeleteConfirmationVisibility] = useState(false)
    const [updatePartnerVisibility, setUpdatePartnerVisibility] = useState(false)
    const [partnerName, setPartnerName] = useState('')
    const [errorStringIsEmpty, setErrorStringIsEmpty] = useState(false)

    const handleDeletePartnerRequest = (deletePartner) => {
        setDeleteConfirmationVisibility(false)

        if (deletePartner) {
            database.deletePartner(partner).then(notifyDataChanged())
        }
    }

    const handleUpdatePartnerRequest = () => {
        setErrorStringIsEmpty(false)

        if (partnerName.trim() != "") {
            setUpdatePartnerVisibility(false)
            database.updatePartner(partner, partnerName.trim()).then(notifyDataChanged())
        } else {
            setErrorStringIsEmpty(true)
        }
    }

    return (
        <div className="partner-item">
            <p>{partner.nom}</p>

            {
                (!deleteConfirmationVisibility && !updatePartnerVisibility)

                &&

                <div>
                    <button className="btn-edit" id="btn" onClick={() => setUpdatePartnerVisibility(true)}>
                        <img src={editIcon} />
                    </button>
                    <button className="btn-delete" id="btn" onClick={() => setDeleteConfirmationVisibility(true)}>
                        <img src={deleteIcon} />
                    </button>
                </div>
            }

            {
                deleteConfirmationVisibility && 
                
                <div className='delete-popup'>
                    <h5 id="error-msg">La suppression de ce partenaire supprimera toutes ses données.</h5>
                    <h5>Êtes-vous sur de vouloir continuer ?</h5>
                    <div>
                        <button className="btn" 
                            id="delete-confirmation-button"
                            onClick={() => handleDeletePartnerRequest(true)}>Oui, supprimer</button>
                        <button className='btn'
                            id="delete-annulation-button"
                            onClick={() => handleDeletePartnerRequest(false)}>Non</button>
                    </div>
                </div>
            }

            {
                updatePartnerVisibility && 

                <div className='delete-popup'>
                    <div className="form-control-add-agent">
                        <input type="text" 
                            placeholder="Nouveau nom du partenaire" 
                            value={partnerName} 
                            onChange={(e) => { setPartnerName(e.target.value)} } />
                    </div>

                    <div id='update-popup'>
                        <button className="btn" 
                            id="update-confirmation-button"
                            onClick={handleUpdatePartnerRequest}>Enregistrer</button>
                        <button className='btn'
                            id="delete-annulation-button"
                            onClick={() => {setUpdatePartnerVisibility(false); setErrorStringIsEmpty(false)}}>Annuler</button>
                    </div>
                    
                    {
                        errorStringIsEmpty && <h5 id="error-msg">Saisissez le nom du partenaire...</h5>
                    }
                </div>
            }
        </div>
    )
}

export default Partner