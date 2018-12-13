import Vue from 'vue'
import Vuex from 'vuex'

import {gql} from 'apollo-boost';
import { defaultClient as apolloClient} from './main.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[],
    loading:false

  },
  getters:{
    posts:state => state.posts
  },
  mutations: {
    setPosts:(state, payload)=>{
      state.posts = payload;
    },
    setLoading:(state, payload)=>{
      state.loading = payload;
    },
  },
  actions: {
    getPosts: ({commit}) => {
      apolloClient
        .query({
          query:gql`
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
        }).then((data)=>{
          // get data from actions to state via mutations
          commit('setPosts',data.data.getPosts);
          console.log(data)
        }).catch((err)=>console.log)
        
    },
    
  }
})
