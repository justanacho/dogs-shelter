import React from "react"
import logo from "../images/logo.jpg"

export default function Navbar()
{
    return (
        <nav>
            <img src={logo} className="nav--logo"/>
            <h1>Dog Shelter</h1>
        </nav>
    )
}