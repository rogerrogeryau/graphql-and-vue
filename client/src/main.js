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
const defaultClient = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})


const apolloProvider = new VueApollo({defaultClient});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
