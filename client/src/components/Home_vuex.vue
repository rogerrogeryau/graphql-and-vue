<template>
  <v-container>
    <h1 id="head_title">Hutchgo Home</h1>
    <!-- <v-btn color="accent ">button</v-btn> -->
    <!-- {{getPosts}} -->

    
    
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
    

    <!-- <div v-if="!postsGetters.length>0 && stateLoadingGetters">Loading...</div> -->
    <!-- carousel without the use of vuex -->
    <v-flex xs12 text-xs-center>
      <v-carousel v-if="!loadingState && !posts.length==0" v-bind="{'circle':true}" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
    
        </v-carousel-item>
        
      </v-carousel>


    <v-layout row>
      <v-dialog v-model="loadingState" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="70" :width="7" color="secondary">
                
            </v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>


    </v-flex>



  <!-- get returned data from vuex dispatched action data -->



    
  </v-container>
</template>

<script>
// import {gql} from 'apollo-boost';
import {mapGetters} from 'vuex';

export default {
  name: 'home',
  components: {

  },

  data(){
    return {
      // posts:[],
      err:[],
      // loadingState:false
      // loadingState:false
  
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
  methods:{
    // handleGetCarouselPosts(){
    //   this.$store.dispatch("getPosts");
    // }
  },
  computed:{
    // postsGetters(){
    //   return this.$store.getters.posts;
    // },
    // stateLoadingGetters(){
    //   return this.$store.getters.loadingState;
    //   // return true
    // }
    ...mapGetters(['posts', 'loadingState'])
    
  },
  created(){
    // this.handleGetCarouselPosts();
    this.$store.dispatch("getPosts");
    // this.store.dispatch("getLoading");
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
