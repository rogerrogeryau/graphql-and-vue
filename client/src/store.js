import Vue from 'vue'
import Vuex from 'vuex'

import {gql} from 'apollo-boost';
import { defaultClient as apolloClient} from './main.js'
import {GET_POSTS} from './queries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[],
    loading:true

  },
  getters:{
    posts:state => state.posts,
    loadingState:state => state.loading
  },
  mutations: {
    setPosts:(state, payload)=>{
      state.posts = payload;
    },
    setLoading:(state, payload)=>{
      state.loading = payload;
      // state.loading = false;
    },
  },
  actions: {
    getPosts: ({commit}) => {
      apolloClient
        .query({
          query:GET_POSTS
            // gql`
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
            // `
        }).then((data)=>{
          // get data from actions to state via mutations
          commit('setPosts',data.data.getPosts);
          commit('setLoading',data.loading);
          console.log(data)
        }).catch((err)=>console.log)
        
    },
    
  }
})
