const path = require("path");
//const { default: slugify } = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryResult = await graphql(`
    query getTags {
      allContentfulSwiftsights {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  queryResult.data.allContentfulSwiftsights.nodes.forEach(node => {
    node.content.tags.forEach(item => {
      //const slug = slugify(item, { lower: true });
      createPage({
        path: `/${item}`,
        component: path.resolve("src/templates/tag-template.tsx"),
        context: {
          item: item,
        },
      });
    });
  });
};
