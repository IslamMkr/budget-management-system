import React = require("react")
import MonthPaymentsDetails from './MonthPaymentsDetails'
import * as database from './../database'
import * as DateUtils from './../utils/date'
import * as NumberUtils from './../utils/numbers'
import searchIcon from './../images/search_white.svg'
import { useState } from "react"

const SearchBoard = () => {
    const [compte, setCompte] = useState("")

    const [agent, setAgent] = useState(null)
    const [partners, setPartners] = useState([])

    const [debts, setDebts] = useState([])
    const [payments, setPayments] = useState([])

    const [resultVisibility, setResultVisibility] = useState(false)
    
    const [errorAgentDoNotExistVisibility, setErrorAgentDoNotExistVisibility] = useState(false)
    const [errorInputIncorectVisibility, setErrorInputIncorectVisibility] = useState(false)

    const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const handleSearch = () => {
        setErrorAgentDoNotExistVisibility(false)
        setErrorInputIncorectVisibility(false)
        setResultVisibility(false)

        if (compte.length == 4) {
            getAgent()
        } else {
            setErrorInputIncorectVisibility(true)
        }
    }

    const getAgent = () => {
        database.getAgentWithAccountNumber(Number(compte))
            .then(data => {
                if (data.length == 0) {
                    setErrorAgentDoNotExistVisibility(true)
                } else {
                    setAgent(data[0])
                    getAgentData(data[0])
                }
            })
    }

    const getAgentData = (agent) => {
        database.getAllPartners().then(partners => setPartners(partners))
        database.getAgentPaymentsByMonths(agent.aid, DateUtils.currentYear).then(data => {console.log(payments);setPayments(data)})
        database.getAgentDebts(agent.aid, DateUtils.currentYear).then(data => { setDebts(data) })
        
        setResultVisibility(true)
    }

    const calculateTotalDebts = () => {
        const totalDebts = debts.reduce((acc, debt) => acc + debt.montant_global, 0)
        return NumberUtils.formatNumberToCurrency(totalDebts)
    }

    return (
        <div className="board">
            <div className="page-title">
                <h2>Rechercher</h2>
            </div>

            <div className="search-from">
                <input type="number"
                    value={compte}
                    placeholder='Numéro du compte'
                    onChange={(e) => { 
                        if (e.target.value.length <= 4) { 
                            setCompte(e.target.value)
                        }
                    }} />

                <button className='btn-img-default' 
                    id='btn'
                    onClick={handleSearch}>
                    <img src={searchIcon} />
                </button>
            </div>

            {
                errorAgentDoNotExistVisibility && <h5 id="error-msg">Ce numéro du compte ne correspond a aucun agent !</h5>
            }

            {
                errorInputIncorectVisibility && <h5 id="error-msg">Un numéro de compte est composé de 4 chiffres !</h5>
            }

            <>
                {
                    resultVisibility 
                    
                    &&
                    
                    <div>
                        <div id='agent-name'>
                            <h4>{agent.compte + '/' + agent.cle}</h4>
                            <h4>{agent.nom + ' ' + agent.prenom}</h4>
                        </div>

                        <div className="scrollable-table">
                            <div className="table" id="month-table">
                                <ul id="table-compte-nom">
                                    <li id="nom"></li>
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

                            <div className="table-item" id="month-table">
                                <ul id="table-item-compte-nom">
                                    <li id="nom"><h4>Montant Global</h4></li>
                                </ul>
                                <ul id="table-item-standard-details">
                                    {
                                        debts.map (
                                            debt => (
                                                <li key={debt.pid}>{NumberUtils.formatNumberToCurrency(debt.montant_global)}</li>
                                            )
                                        )
                                    }
                                </ul>
                                
                                <ul id="table-item-total">
                                    <li>{calculateTotalDebts()}</li>
                                </ul>
                            </div>

                            {
                                monthNumbers.map (
                                    monthNumber => (
                                        payments.length > 0 ? <MonthPaymentsDetails key={monthNumber} monthPayments={payments.filter(payment => payment.mois == monthNumber)}/> : ''
                                    )
                                )
                            }

                        </div>
                    </div>
                }
            </>

        </div>
    )
}

export default SearchBoard
