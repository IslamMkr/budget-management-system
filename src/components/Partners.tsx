import Partner from "./Partner"
import { useState } from "react"
import React = require("react")

const Partners = () => {
    const [partners, setPartners] = useState([
        {
            "id": 45785,
            "name": "Brandt"
        },
        {
            "id": 758,
            "name": "Samsung" 
        }, 
        {
            "id": 658,
            "name": "Articles ménages"
        }, 
        {
            "id": 7859,
            "name": "Meubles"
        }
    ])

    return (
        <>
            {
                partners.map (
                    partner => (
                        <Partner key={partner.id} value={partner} />
                    )
                )
            }
        </>
    )
}

export default Partners