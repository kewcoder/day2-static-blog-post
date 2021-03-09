import React from "react"
import { Link } from "gatsby"


function Tag() {
  return (
        <ul className="menu">
          <li>
            <Link to="/blog/?search=100DaysOfCode">
              #100DaysOfCode
            </Link>
          </li>
          <li>
            <Link to="/blog/?search=100DaysOfDesign">
              #100DaysOfDesign
            </Link>
          </li>
          <li>
            <Link to="/blog/?search=Figma">
              #Figma
            </Link>
          </li>
          <li>
            <Link to="/blog/?search=AdobeXD">
              #AdobeXD
            </Link>
          </li>
        </ul>
  )
}

export default Tag
