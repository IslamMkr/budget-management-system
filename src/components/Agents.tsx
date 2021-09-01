import { useState } from "react"
import React = require("react")
import Agent from "./Agent"

const Agents = () => {
    const [agents, setAgents] = useState([
        {
            "id": "54ee5fd45ef6ze5f",
            "account": 2457,
            "key": 45,
            "f_name": "Mokrane", 
            "l_name": "Islam",
            "position": "Développeur Senior"
        }, 
        {
            "id": "54sdezee5fdfeze5f",
            "account": 2457,
            "key": 45,
            "f_name": "Mokrane", 
            "l_name": "Islam",
            "position": "Vendeur de marchandises"
        }, 
        {
            "id": "54ee5ffedfzefzéze5f",
            "account": 2457,
            "key": 45,
            "f_name": "Mokrane", 
            "l_name": "Islam",
            "position": "Développeur Web (MERN) FullStack"
        }
    ])

    return (
        <>
            {
                agents.map (
                    agent => (
                        <Agent key={agent.id} value={agent} />
                    )
                )
            }
        </>
    )
}

export default Agents