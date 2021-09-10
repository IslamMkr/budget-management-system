import { useEffect } from "react"
import React = require("react")
import * as DateUtils from './../utils/date'
import * as NumberUtils from './../utils/numbers'

const MonthPaymentsDetails = ({ monthPayments }) => {

    useEffect(() => {
        console.log(monthPayments)
    }, [])

    const calculateTotalMonthPayment = () => {
        const totalMonthPayment = monthPayments.reduce((acc, pay) => acc + pay.montant, 0)
        return NumberUtils.formatNumberToCurrency(totalMonthPayment)
    }

    return (
        <div className="table-item" id="month-table">
            <ul id="table-item-compte-nom">
                <li id="nom">{DateUtils.getMonthInLetters(monthPayments[0].mois)}</li>
            </ul>
            <ul id="table-item-standard-details">
                {
                    monthPayments.map (
                        monthPayment => (
                            <li key={monthPayment.pid}>{NumberUtils.formatNumberToCurrency(monthPayment.montant)}</li>
                        )
                    )
                }
            </ul>                              
            <ul id="table-item-total">
                <li>{calculateTotalMonthPayment()}</li>
            </ul>
        </div>
    )
}

export default MonthPaymentsDetails
