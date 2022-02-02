import { Link } from "gatsby"
import React, { useState } from "react"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3 className="nav-logo">SwiftSurf</h3>
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            O
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/sightspage"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            sights
          </Link>
          <Link
            to="/categoriespage"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            categories
          </Link>
          <Link
            to="/aboutpage"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contactpage"
              className="btn"
              onClick={() => setShow(false)}
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
