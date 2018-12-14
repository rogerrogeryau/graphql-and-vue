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