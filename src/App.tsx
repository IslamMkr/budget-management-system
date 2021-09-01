import { useState } from "react"
import React = require("react")
import Content from "./components/Content"
import Header from "./components/Header"

const App = () => {
    const [content, setContent] = useState("Agents")

    const handleMenuItemClick = (text) => {
        setContent(text)
    }

    return (
        <div className="container">
            <Header activeItem={content} onItemClick={(text) => handleMenuItemClick(text)}/>
            <Content visibleContent={content} />
        </div>
    )
}

export default App
