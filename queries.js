/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResentment = /* GraphQL */ `
  query GetResentment($id: ID!) {
    getResentment(id: $id) {
      id
      commentator
      photo {
        region
        bucket
        key
      }
      text_content
      createdDate
      article_id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listResentments = /* GraphQL */ `
  query ListResentments(
    $filter: ModelResentmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResentments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        commentator
        photo {
          region
          bucket
          key
        }
        text_content
        createdDate
        article_id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPoem = /* GraphQL */ `
  query GetPoem($id: ID!) {
    getPoem(id: $id) {
      id
      title
      text_content
      photo {
        region
        bucket
        key
      }
      category
      read_count
      createdDate
      owner
      resentments {
        items {
          id
          commentator
          text_content
          createdDate
          article_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      author
    }
  }
`;
export const listPoems = /* GraphQL */ `
  query ListPoems(
    $filter: ModelPoemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        text_content
        photo {
          region
          bucket
          key
        }
        category
        read_count
        createdDate
        owner
        resentments {
          nextToken
        }
        createdAt
        updatedAt
        author
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      user_email
      owner
      user_description
      user_photo {
        region
        bucket
        key
      }
      poems {
        items {
          id
          title
          text_content
          category
          read_count
          createdDate
          owner
          createdAt
          updatedAt
          author
        }
        nextToken
      }
      resentments {
        items {
          id
          commentator
          text_content
          createdDate
          article_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_email
        owner
        user_description
        user_photo {
          region
          bucket
          key
        }
        poems {
          nextToken
        }
        resentments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
