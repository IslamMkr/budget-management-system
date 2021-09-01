import React = require("react")
import AgentsBoard from "./AgentsBoard"
import MonthDetailBoard from "./MonthDetailBoard"
import SearchBoard from "./SearchBoard"
import SettingsBoard from "./SettingsBoard"


const Content = ({ visibleContent }) => {
    return (
        <div className="content">
            {
                visibleContent == "Agents" ? <AgentsBoard />
                : (visibleContent == "Détails du mois" ? <MonthDetailBoard />
                : (visibleContent == "Rechercher" ? <SearchBoard />
                : (visibleContent == "Paramètres" ? <SettingsBoard />
                : "")))
            }
        </div>
    )
}

export default Content