import { Link } from "gatsby"
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
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
        </section>
      </main>
    </Layout>
  )
}

export default about
