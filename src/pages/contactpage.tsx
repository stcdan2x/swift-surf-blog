import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SightsList from "../components/SightsList"

const Contactpage = ({
  data: {
    allContentfulSwiftsights: { nodes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ea maxime, quasi delectus excepturi explicabo,
              consequatur sunt, ullam cumque officiis quibusdam sapiente.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
              incidunt. Inventore recusandae alias sit aliquid!
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Check it out!</h5>
          <SightsList nodes={nodes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulSwiftsights(filter: { featured: { eq: true } }) {
      nodes {
        id
        image {
          file {
            url
          }
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        title
        content {
          tags
          attractions
          activities
        }
      }
    }
  }
`

export default Contactpage
