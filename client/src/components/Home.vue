<template>
  <v-container v-if="getPosts">
    <h1 id="head_title">Hutchgo Home</h1>
    <!-- <v-btn color="accent ">button</v-btn> -->
    <!-- {{getPosts}} -->

    <div v-if="$apollo.loading">Loading...</div>
    
    <!-- method 1 to loop through all post -->
    <!-- <ul v-else v-for="post in posts" :key="post._id">
      <li>
        {{post.title}}, {{post.description}}, {{post.imageUrl}}
      </li>

    </ul> -->


    <!-- smart query -->
    <!-- <ApolloQuery :query="getPostQuery">
      <template slot-scope="{ result:{loading, data, error, networkStatus} }">
        <div>networkStatus: {{networkStatus}}</div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error! {{error.message}}</div>
        <ul v-else v-for="post in data.getPosts" :key="post._id">
          <li>
            {{post.title}}, {{post.description}}, {{post.imageUrl}}
          </li>
        </ul>
      </template>
    </ApolloQuery> -->


    <v-flex xs12 text-xs-center>
      <v-carousel v-bind="{'circle':true}" interval="3000">
        <v-carousel-item v-for="post in getPosts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>


    <!-- {{err}} -->
  </v-container>
</template>

<script>
import {gql} from 'apollo-boost';


export default {
  name: 'home',
  components: {

  },

  data(){
    return {
      posts:[],
      err:[],

      // getPostQuery:gql`
      //   query{
      //     getPosts{
      //       title
      //       categories
      //       likes
      //       imageUrl
      //       description
      //       createdBy{
      //         email
      //       }
      //     }
      //   }
              
      // `,

    }
  },
  computed:{
    
    
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


<style scoped>

#carousel__title{
  position: absolute;
  background-color:rgba(0, 0, 0, 0.5);
  color:white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}

#head_title{
  /* padding: 0.5em; */
  /* margin: 5 auto; */
  margin-bottom: 30px;
  /* top: 150px; */
}

</style>
