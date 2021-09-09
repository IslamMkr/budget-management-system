
import React = require("react")
import Partners from "./Partners"
import AddPartner from "./AddPartner"
import addIcon from "./../images/add_white.svg"
import editIcon from "./../images/edit_white.svg"
import * as database from './../database'
import * as NumberUtils from './../utils/numbers'
import { useEffect, useState } from "react"

const SettingsBoard = () => {
    const [addPartnerVisibility, setAddPartnerVisibility] = useState(false)
    const [updateBudgetVisibility, setUpdateBudgetVisibility] = useState(false)

    const [partners, setPartners] = useState([])
    const [budget, setBudget] = useState(0)
    const [newBudget, setNewDudget] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const handleAddPartner = () => {
        setAddPartnerVisibility(true)
    }

    const fetchData = () => {
        database.getAllPartners().then(data => setPartners(data))
        database.getTresorBudget().then(data => {setBudget(data[0].tresor_budget)})
    }

    const handleUpdateBudgetRequest = () => {
        setUpdateBudgetVisibility(false)

        // Update database
        database.updateTresorBudget(Number(newBudget))      

        // Update UI
        setBudget(Number(newBudget))  
    }

    return (
        <div className="board">
            <h2>Général</h2>

            <div id="setting-budget">
                <p>Budget</p>

                {
                    !updateBudgetVisibility 
                    
                    &&

                    <>
                        <p>{NumberUtils.formatNumberToCurrency(budget)}</p>
                        
                        <button className="btn-edit" id="btn">
                            <img src={editIcon} onClick={() => setUpdateBudgetVisibility(true)} />
                        </button>
                    </>
                }
                
                {
                    updateBudgetVisibility 
                    
                    && 

                    <div className='delete-popup'>
                        <div className="form-control-add-agent">
                            <input type="number" 
                                placeholder="Nouveau budget" 
                                value={newBudget} 
                                onChange={(e) => setNewDudget(e.target.value)} />
                        </div>

                        <div id='update-popup'>
                            <button className="btn" 
                                id="update-confirmation-button"
                                onClick={handleUpdateBudgetRequest}>Enregistrer</button>
                            <button className='btn'
                                id="delete-annulation-button"
                                onClick={() => setUpdateBudgetVisibility(false)}>Annuler</button>
                        </div>
                    </div>
                }

            </div>

            <div className="page-title">
                <h2>Liste des partenaires</h2>
                <button className="btn-img-default" 
                    id="btn"
                    onClick={handleAddPartner}>
                    <img src={addIcon} />
                </button>
            </div>

            {
                addPartnerVisibility && <AddPartner isVisible={(visibility: boolean) => setAddPartnerVisibility(visibility)} notifyPartnersDataChanged={fetchData} />
            }

            <Partners partners={partners} notifyDataChanged={fetchData} />
        </div>
    )
}

export default SettingsBoard