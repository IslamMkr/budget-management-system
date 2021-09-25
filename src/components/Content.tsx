import React = require("react")
import AgentsBoard from "./AgentsBoard"
import MonthDetailBoard from "./MonthDetailBoard"
import SearchBoard from "./SearchBoard"
import SettingsBoard from "./SettingsBoard"
import TransactionsBoard from "./TransactionsBoard"
import PaidAgentsBoard from './PaidAgentsBoard'


const Content = ({ visibleContent }) => {

    const disconnect = () => {

    }

    return (
        <div className="content">
            {
                visibleContent == "Agents" ? <AgentsBoard />
                : ( visibleContent == "Détails du mois" ? <MonthDetailBoard />
                : ( visibleContent == "Rechercher" ? <SearchBoard />
                : ( visibleContent == "Paramètres" ? <SettingsBoard />
                : ( visibleContent == "Transactions" ? <TransactionsBoard /> 
                : ( visibleContent == "Agents soldés" ? <PaidAgentsBoard /> 
                : <div></div> )))))
            }
        </div>
    )
}

export default Content