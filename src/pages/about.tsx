import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"

const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              deleniti?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              saepe quo soluta doloremque quos sapiente labore fugiat minus.
            </p>
            <p>
              Ullam recusandae quisquam consequuntur minus blanditiis distinctio
              assumenda veritatis optio magnam veniam fugit eveniet
              reprehenderit aliquid facere est, explicabo quibusdam dolore
              quidem!
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Person viewing landscape"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-sights">
          <h5>Lorem ipsum dolor sit amet.</h5>
        </section>
      </main>
    </Layout>
  )
}

export default about
