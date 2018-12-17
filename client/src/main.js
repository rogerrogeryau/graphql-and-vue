import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// import { createProvider } from './vue-apollo'

import VueApollo, { ApolloProvider } from 'vue-apollo';
import ApolloClient from 'apollo-boost';

Vue.use(VueApollo);
  
// setup apollo client
export const defaultClient = new ApolloClient({
  uri:'http://localhost:4000/graphql',

  // include auth token with requests made to backend
  fetchOptions:{
    credentials:'include'
  },
  request:operation =>{
    // check if no token in localStorage, add it
    if(!localStorage.token){
      localStorage.setItem('token','');
    }

    // operation adds the token to an authanization Headers, which is sent to backend
    operation.setContext({
      headers:{
        authorization:localStorage.getItem("token")
      }
    })
  },
  onError:({graphQLErrors, networkError}) =>{
    if(networkError){
      console.log('[networkError]', networkError)
    }

    if(graphQLErrors){
      for(let err of graphQLErrors){
        console.log(err);
      }

    }
  }

})



const apolloProvider = new VueApollo({defaultClient});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
