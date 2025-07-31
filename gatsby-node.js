const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for team members and partners
  const result = await graphql(`
      query {
          allTeam: allMarkdownRemark(
              filter: { frontmatter: { section: { eq: "team" } } }
          ) {
              edges {
                  node {
                      id
                      frontmatter {
                          slug
                      }
                  }
              }
          }
          allPartners: allMarkdownRemark(
              filter: { frontmatter: { section: { eq: "partners" } } }
          ) {
              edges {
                  node {
                      id
                      frontmatter {
                          slug
                      }
                  }
              }
          }
      }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Template for team member profile pages
  const teamTemplate = path.resolve("src/templates/team-profile.js");

  // Create a page for each team member
  result.data.allTeam.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.slug}/`, // URL path for the profile
      component: teamTemplate, // Template to use
      context: {
        id: node.id, // Pass the ID to the template for querying
      },
    });
  });

  // ---

  // Template for partner profile pages
  const partnerTemplate = path.resolve("src/templates/partner-profile.js");

  // Create a page for each partner
  result.data.allPartners.edges.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.slug}/`,
      component: partnerTemplate,
      context: {
        id: node.id,
      },
    });
  });
};