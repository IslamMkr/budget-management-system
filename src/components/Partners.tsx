import Partner from "./Partner"
import { useState } from "react"
import React = require("react")

const Partners = ({ partners, notifyDataChanged }) => {
    return (
        <>
            {
                partners.map (
                    partner => (
                        <Partner key={partner.pid} partner={partner} notifyDataChanged={notifyDataChanged} />
                    )
                )
            }
        </>
    )
}

export default Partners