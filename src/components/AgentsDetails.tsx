import AgentDetail from "./AgentDetail"
import { useState } from "react"
import React = require("react")

const AgentsDetails = () => {
    const [agentsDetails, setAgentsDetails] = useState([
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam Mohand Oulhadj Da belkassem",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }, 
        {
            "id": "54ee5fd45ef6ze5f",
            "account": "5487/47",
            "name": "Mokrane Islam",
            "pretAchat": 45000,
            "pretOrdinaire": 58100,
            "avance": 5000
        }
    ])

    return (
        <>
            {
                agentsDetails.map (
                    agent => (
                        <AgentDetail key={agent.id} value={agent} />
                    )
                )
            }
        </>
    )
}

export default AgentsDetails
