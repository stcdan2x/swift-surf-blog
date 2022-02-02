import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import SightsList from "../components/SightsList";

const Aboutpage = ({
  data: {
    allContentfulSwiftsights: { nodes },
  },
}) => {
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
            <Link to="/contactpage" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="Person viewing landscape"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-sights">
          <h5>Featured Sights</h5>
          <SightsList nodes={nodes} />
        </section>
      </main>
    </Layout>
  );
};

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
`;

export default Aboutpage;
