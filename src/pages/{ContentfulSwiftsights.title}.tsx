import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import slugify from "slugify";
import Layout from "../components/Layout";

type desc = {
  description: string;
};

const SightsPageTemplate = ({ data }) => {
  const {
      title,
      image,
      reqguide,
      featured,
      advlevel,
      content,
      description: { description },
    } = data.contentfulSwiftsights,
    { activities, attractions, details, tags } = content,
    imagePath = getImage(image);
  return (
    <Layout>
      <main className="page">
        <div className="sight-page">
          {/* hero */}
          <section className="sight-hero">
            <GatsbyImage
              className="about-img"
              image={imagePath}
              alt={`${title}`}
            />
            <article className="sight-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="sight-icons">
                <article>
                  <h5>Adventure Level</h5>
                  <p>{advlevel} min.</p>
                </article>
                <article>
                  <h5>Guide Required?</h5>
                  <p>{reqguide ? "Yes" : "No"}</p>
                </article>
                <article>
                  <h5>Featured</h5>
                  <p>{featured ? "Totally" : "No Way"} </p>
                </article>
              </div>
              {/* tags */}
              <p className="sight-tags">
                Tags :
                {tags.map((tag, idx) => {
                  const slug = slugify(tag, { lower: true });

                  return (
                    <Link to={`/tags/${slug}`} key={idx}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="sight-content">
            <article>
              <h4>Travel Details:</h4>
              {details.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>tour {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Attractions:</h4>
                {attractions.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>Available Activities</h4>
                {activities.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleSight($title: String) {
    contentfulSwiftsights(title: { eq: $title }) {
      title
      advlevel
      content {
        activities
        attractions
        details
        tags
      }
      reqguide
      featured
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      description {
        description
      }
    }
  }
`;

export default SightsPageTemplate;
