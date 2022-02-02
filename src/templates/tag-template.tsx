import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import slugify from "slugify";
import Layout from "../components/Layout";
import SightsList, { nodeType } from "../components/SightsList";

const TagTemplate = ({ data, pageContext }) => {
  const { nodes } = data.allContentfulSwiftsights,
    { tagItem } = pageContext;

  return (
    <Layout>
      <main className="page">
        <h1>{tagItem} Category:</h1>
        <SightsList nodes={nodes} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSightsByTag($tagItem: String) {
    allContentfulSwiftsights(
      filter: { content: { tags: { eq: $tagItem } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        id
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        title
        content {
          attractions
        }
      }
    }
  }
`;

export default TagTemplate;
