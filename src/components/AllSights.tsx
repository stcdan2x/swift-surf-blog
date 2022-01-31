import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SightsList from "./SightsList";
import Tagslist from "./Tagslist";

const query = graphql`
  {
    allContentfulSwiftsights {
      nodes {
        id
        featured
        image {
          file {
            url
          }
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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

const AllSights = () => {
  const {
    allContentfulSwiftsights: { nodes },
  } = useStaticQuery(query);

  return (
    <section className="sights-container">
      <Tagslist nodes={nodes} />
      <SightsList nodes={nodes} />
    </section>
  );
};

export default AllSights;
