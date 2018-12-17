import {gql} from 'apollo-boost';

// Posts queries
export const GET_POSTS = gql`
    query{
        getPosts{
            title
            categories
            likes
            imageUrl
            description
            createdBy{
                email
            }
        }
    }
`;


// users queries



// Posts mutations

// User Mutations

export const SIGNUP_USER = gql`
    mutation($username:String!, $password:String!, $email:String!){
        signupUser(
            username:$username,
            password:$password,
            email:$email
        ){
            token
        }
    }
`;


export const SIGNIN_USER = gql`
    mutation($username:String!,$password:String!){
        signinUser(
            username:$username,
            password:$password,

        ){
            token
        }
    }
`;




                        