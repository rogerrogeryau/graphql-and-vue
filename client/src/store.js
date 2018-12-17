import Vue from 'vue'
import Vuex from 'vuex'

// import {gql} from 'apollo-boost';
import { defaultClient as apolloClient} from './main.js'
import {GET_POSTS, SIGNIN_USER, SIGNUP_USER} from './queries'

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
    // signInUser:(state, payload)=>{
      
    // }
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
    signInUser:({commit}, payload)=>{
      apolloClient
        .mutate({
          mutation:SIGNIN_USER,
          variables:payload
        })
        .then(({data})=>{
          console.log(`Token is : ${data.signinUser.token}`);
          localStorage.setItem("token",data.signinUser.token)
        })
        .catch.err(err=>console.log);
    }
    
  }
})
