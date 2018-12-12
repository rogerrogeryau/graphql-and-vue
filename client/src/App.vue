<template>
  <v-app>
    <!-- side navbar -->
    <v-navigation-drawer v-model="sideNav" fixed temporary app>
      <v-toolbar>
        <v-list>
          
        </v-list>
      </v-toolbar>
      <v-btn @click="drawerToggle">toggle</v-btn>
    </v-navigation-drawer>
    


    <!-- horizontal nav bar -->
    <v-toolbar fixed color="primary" dark>
      <!-- app title -->
      <v-toolbar-side-icon @click="drawerToggle"></v-toolbar-side-icon>

      <v-toolbar-title class="hidden-sm-only">
        <router-link to="/" tag="span" style="cursor:pointer">
          VueShare
        </router-link>
      </v-toolbar-title>


      <v-spacer></v-spacer>
      
      <!-- search input -->
      <v-text-field
       flex 
       prepend-icon="search" 
       placeholder="Search posts" 
       color="accent"
       single-line
       hide-details
       ></v-text-field>


      <v-space></v-space>

      <v-toolbars-items class="">
        <v-btn 
          flat 
          v-for="item in horizontalNavItems" 
          :key="item.title" 
          :to="item.link"
        >
          <v-icon left>{{item.icon}}</v-icon>
          <div class="hidden-sm-only">{{item.title}}</div>
        </v-btn>
      </v-toolbars-items>


    </v-toolbar>
      

    <!-- app content -->
    <main>
      <v-container class="mt-5">
        <router-view/>
      </v-container>

    </main>

    
    
  </v-app>
</template>

<script>
export default {
  name:'App',
  computed:{
    horizontalNavItems(){
      return [
        {icon:'chat',title:'Posts',link:'/posts'},
        {icon:'lock_open',title:'Sign In',link:'/signin'},
        {icon:'create',title:'Sign Up',link:'/signup'},
      ]
    }
  },
  data(){
    return{
      sideNav:false
    }
    
  },
  methods:{
    drawerToggle(){
      this.sideNav = !this.sideNav
    }
  }

}
</script>


