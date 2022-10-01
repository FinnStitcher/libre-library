import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
}
`;

// the only place where SAVE_BOOK is called doesn't really need the data
export const SAVE_BOOK = gql`
mutation saveBook($bookData: BookData!) {
    saveBook(bookData: $bookData) {
        _id
        savedBooks {
            bookId
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            authors
            description
            image
            link
        }
    }
}
`;