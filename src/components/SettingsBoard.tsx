
import React = require("react")
import Partners from "./Partners"
import AddPartner from "./AddPartner"
import addIcon from "./../images/add_white.svg"
import editIcon from "./../images/edit_white.svg"
const { useState, useEffect } = require("react")
import * as database from './../database'

const SettingsBoard = () => {
    const [isAddPartnerVisible, setAddPartnerVisibility] = useState(false)
    const [partners, setPartners] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const handleAddPartner = () => {
        setAddPartnerVisibility(true)
    }

    const fetchData = () => {
        database.getAllPartners().then(data => setPartners(data))
    }

    return (
        <div className="board">
            <h2>Général</h2>

            <div id="setting-budget">
                <p>Budget des oeuvres social</p>
                <p>1,650,870.00</p>

                <button className="btn-edit" id="btn">
                    <img src={editIcon} />
                </button>
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
                isAddPartnerVisible && <AddPartner isVisible={(visibility: boolean) => setAddPartnerVisibility(visibility)} notifyPartnersDataChanged={fetchData} />
            }

            <Partners partners={partners} notifyDataChanged={fetchData} />
        </div>
    )
}

export default SettingsBoard