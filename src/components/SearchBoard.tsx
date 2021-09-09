import React = require("react")
import { useState } from "react"
import searchIcon from './../images/search_white.svg'

const SearchBoard = () => {
    const [compte, setCompte] = useState("")
    const [resultVisibility, setResultVisibility] = useState(false)

    const handleSearch = () => {
        if (compte.length == 4) {
            // TODO: get user 
            // IF IT EXISTS : get his data (agent, debts, payments for every month for every partner)
            // IF IT NOT EXISTS : handle error agent do not exist
        } else {
            // TODO: handle error account number must be 4 digits
        }
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

        </div>
    )
}

export default SearchBoard
