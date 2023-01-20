import React from "react"
import Top from "./components/Top"
import Mid from "./components/Mid"
import Bottom from "./components/Bottom"

export default function App()
{
    return(
        <div className="container">
          <Top/>
          <Mid/>
          <Bottom/>
        </div>
    )
}