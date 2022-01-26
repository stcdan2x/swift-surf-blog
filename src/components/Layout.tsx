import React from "react"

import "normalize.css"
import "../assets/scss/styles.scss"

import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
