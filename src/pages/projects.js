import React from "react";
import { graphql } from "gatsby";

import Repository from "../components/repository";
import Layout from "../components/layout";
import Avatar from "../components/avatar";

const IndexPage = ({ data }) => {
  const {
    name,
    avatarUrl,
    repositories
  } = data.githubData.data.viewer;

  return (
    <Layout>
      <div style={{ maxWidth: `960px`, marginBottom: `1.45rem` }}>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            margin: `1.45rem 0`
          }}
        >
          <Avatar img={avatarUrl} />
          <div style={{ padding: 16 }}>
            <h2 style={{ border: `none` }}>{name}</h2>
          </div>
        </div>
        {repositories.nodes
          .map(repo => <Repository key={repo.name} repo={repo} />)
          .reverse()}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const gitHubQuery = graphql`
  query {
    githubData {
      data {
        viewer {
          name
          avatarUrl
          isHireable
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              repositoryTopics {
                nodes {
                    topic {
                        name
                    }
                }
              }
              languages {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;
