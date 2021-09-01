import AgentsDetails from "./AgentsDetails"
//import printIcon from "./../images/print_white.svg"
import React = require("react")

const MonthDetailBoard = () => {

    const partners = [
        "Brandt", "Samsung", "Articles ménages", "Meubles"
    ]

    const printClicked = () => {
        //ipcRenderer.send("ping", "Hello finally")
    }

    return (
        <div className="board">
            <div className="page-title">
                <h2>Détails du mois</h2>
                <div className="side-menu">
                    <select id="month-select">
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
                        <img src="./../images/print_white.svg" />
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
                        <li>Prêt achat</li>
                        <li>Prêt ordinaire</li>
                        <li>Avances</li>
                        {
                            partners.map (
                                partner => (
                                    <li>{partner}</li>
                                )
                            )
                        }
                    </ul>
                    <ul id="table-total">
                        <li>Total</li>
                    </ul>
                </div>
                
                <AgentsDetails/>
            </div>
        </div>
    )
}

export default MonthDetailBoard
