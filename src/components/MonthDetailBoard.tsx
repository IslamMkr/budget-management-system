import AgentsDetails from "./AgentsDetails"
import printIcon from "./../images/print_white.svg"
import React = require("react")
import * as database from './../database'
import * as DateUtils from './../utils/date'
const { useState, useEffect } = require("react")

const MonthDetailBoard = () => {
    const [partners, setPartners] = useState([])
    const [month, setMonth] = useState('january')

    const [payments, setPayments] = useState([])

    useEffect(() => {
        database.getAllPartners().then(partners => setPartners(partners))
        setMonth(DateUtils.getMonthInLetters(DateUtils.currentMonth))

        const monthNumber = DateUtils.currentMonth
        const year = DateUtils.currentYear
        
        database.getAgentsPayments(monthNumber, year).then(payments => setPayments(payments))
    }, [])

    const handleMonthSelection = (e) => {
        setMonth(e.target.value)

        const monthNumber = DateUtils.getMonthInNumber(e.target.value)
        const year = DateUtils.currentYear

        database.getAgentsPayments(monthNumber, year).then(payments => setPayments(payments))
    }

    const printClicked = () => {
        //ipcRenderer.send("ping", "Hello finally")
    }

    return (
        <div className="board">
            <div className="page-title">
                <h2>Détails du mois</h2>
                <div className="side-menu">
                    <select id="month-select" value={month} onChange={(e) => handleMonthSelection(e)} >
                        <option value="january">Janvier</option>
                        <option value="february">Février</option>
                        <option value="march">Mars</option>
                        <option value="april">Avril</option>
                        <option value="may">Mai</option>
                        <option value="june">Juin</option>
                        <option value="july">Juillet</option>
                        <option value="august">Août</option>
                        <option value="september">Septembre</option>
                        <option value="october">Octobre</option>
                        <option value="november">Novembre</option>
                        <option value="december">Décembre</option>
                    </select>
                    <button className="btn-img-default" id="btn"
                        onClick={() => printClicked()}>
                        <img src={printIcon} />
                    </button>
                </div>
            </div>

            <div className="scrollable-table">
                <div className="table" id="month-table">
                    <ul id="table-compte-nom">
                        <li id="compte-num">N° Compte</li>
                        <li id="nom">Nom et Prénom</li>
                    </ul>
                    <ul id="table-standard-details">
                        {
                            partners.map (
                                partner => (
                                    <li key={partner.pid}>{partner.nom}</li>
                                )
                            )
                        }
                    </ul>
                    <ul id="table-total">
                        <li>Total</li>
                    </ul>
                </div>
                
                <AgentsDetails payments={payments} />
            </div>
        </div>
    )
}

export default MonthDetailBoard
