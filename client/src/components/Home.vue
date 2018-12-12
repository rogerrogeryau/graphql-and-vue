<template>
  <v-container>
    <h1>this is Home</h1>
    <!-- <v-btn color="accent ">button</v-btn> -->
    <!-- {{getPosts}} -->
    <ul v-for="post in getPosts" :key="post._id">
      <li>
        {{post.title}}, {{post.description}}, {{post.imageUrl}}
      </li>
    </ul>
  </v-container>
</template>

<script>
import {gql} from 'apollo-boost';


export default {
  name: 'home',
  components: {

  },
  // apollo: {
  //   getPosts:{
  //     query:gql`
  //       query{
  //         getPosts{
  //           title
  //           _id
  //           description
  //           imageUrl
  //         }
  //       }
  //     `
  //   }
  // }

  apollo:{
    getPosts:{
      query: gql`
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
              
      `
    }
  }
}
</script>
