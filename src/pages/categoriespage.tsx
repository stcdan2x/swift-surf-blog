import { graphql, Link } from "gatsby";
import React from "react";
import slugify from "slugify";
import Layout from "../components/Layout";
import tagsProc from "../utils/tagUtils";

export const query = graphql`
  {
    allContentfulSwiftsights {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

const CategoriesPage = ({
  data: {
    allContentfulSwiftsights: { nodes },
  },
}) => {
  const catEnum = tagsProc(nodes);

  return (
    <Layout>
      <main className="page">
        <h1>Categories</h1>
        <section className="tags-page">
          {catEnum.map((tag, idx) => {
            const [text, count] = tag,
              slug = slugify(text, { lower: true });

            return (
              <Link to={`/categories/${slug}`} key={idx} className="tag">
                <h5>{text}</h5>
                <p>
                  {count} {count > 1 ? "destinations" : "destination"}
                </p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default CategoriesPage;
