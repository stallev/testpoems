/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResentment = /* GraphQL */ `
  mutation CreateResentment(
    $input: CreateResentmentInput!
    $condition: ModelResentmentConditionInput
  ) {
    createResentment(input: $input, condition: $condition) {
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
export const updateResentment = /* GraphQL */ `
  mutation UpdateResentment(
    $input: UpdateResentmentInput!
    $condition: ModelResentmentConditionInput
  ) {
    updateResentment(input: $input, condition: $condition) {
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
export const deleteResentment = /* GraphQL */ `
  mutation DeleteResentment(
    $input: DeleteResentmentInput!
    $condition: ModelResentmentConditionInput
  ) {
    deleteResentment(input: $input, condition: $condition) {
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
export const createPoem = /* GraphQL */ `
  mutation CreatePoem(
    $input: CreatePoemInput!
    $condition: ModelPoemConditionInput
  ) {
    createPoem(input: $input, condition: $condition) {
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
export const updatePoem = /* GraphQL */ `
  mutation UpdatePoem(
    $input: UpdatePoemInput!
    $condition: ModelPoemConditionInput
  ) {
    updatePoem(input: $input, condition: $condition) {
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
export const deletePoem = /* GraphQL */ `
  mutation DeletePoem(
    $input: DeletePoemInput!
    $condition: ModelPoemConditionInput
  ) {
    deletePoem(input: $input, condition: $condition) {
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
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
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
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
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
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
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
