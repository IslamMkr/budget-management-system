import React = require("react")
import Agent from "./Agent"

const Agents = ({ agents }) => {

    return (
        <>
            {
                agents.map (
                    agent => (
                        <Agent key={agent.aid} agent={agent} />
                    )
                )
            }
        </>
    )
}

export default Agents