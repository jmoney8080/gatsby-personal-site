module.exports = {
  title: `Personal Static Website`,
  description: `Personal Static Website`,
  author: `@jmoney8080`,
  siteUrl: `https://www.jmoney.dev`,
  githubApiToken: process.env.GITHUB_API_TOKEN,
  githubApiQuery: `query ($number_of_repos: Int!, $number_of_topics: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, isFork: false orderBy: { field: NAME, direction:DESC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          isFork
          isPrivate
          createdAt
          updatedAt
          resourcePath
          repositoryTopics(last: $number_of_topics) {
            nodes {
              topic {
                name
              }
            }
          }
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
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
  }`,
  githubApiVariables: {
    number_of_repos: 100,
    number_of_topics: 15
  },
}