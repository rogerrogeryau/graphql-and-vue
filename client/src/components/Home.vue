<template>
  <v-container>
    <h1>this is Home</h1>
    <!-- <v-btn color="accent ">button</v-btn> -->
    <!-- {{getPosts}} -->

    <div v-if="$apollo.loading">Loading...</div>
    <ul v-else v-for="post in posts" :key="post._id">
      <li>
        {{post.title}}, {{post.description}}, {{post.imageUrl}}
      </li>

    </ul>
    {{result}}
    <!-- {{err}} -->
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
  data(){
    return {
      posts: [],
      err:[]
    }
  },
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
              
      `,
      // result({...res}){
      //   this.result = res
      // }
      result({data, loading, networkStatus}){
        if (!loading) {
          this.posts = data.getPosts
        }
      },
      err({args}){
        // this.err = args
        console.log(`${err}`)
      }
    }
  }
}
</script>
