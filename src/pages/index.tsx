import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import AllSights from "../components/AllSights"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/tanase.jpg"
            alt="man viewing mountain landscape"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Swift Surf</h1>
              <h4>
                Exhilarating | <span>Trek the World</span> | Breath-taking
              </h4>
            </div>
          </div>
        </header>
        <AllSights />
      </main>
    </Layout>
  )
}
