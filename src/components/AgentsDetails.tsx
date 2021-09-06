import AgentDetail from "./AgentDetail"
import { useState, useEffect } from "react"
import * as database from './../database'
import React = require("react")

const AgentsDetails = ({ payments }) => {
    const [agents, setAgents] = useState([])

    useEffect(() => {
        database.getAllAgents().then(allAgents => setAgents(allAgents))
    }, [])

    return (
        <>
            {
                agents.map (
                    agent => (
                        <AgentDetail key={agent.aid} agent={agent} payments={payments.filter(payment => payment.aid == agent.aid)} />
                    )
                )
            }
        </>
    )
}

export default AgentsDetails
