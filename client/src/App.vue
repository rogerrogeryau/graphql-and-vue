<template>
  <v-app style="background: #E3E3EE">
    <!-- side navbar -->
    <v-navigation-drawer v-model="sideNav" fixed temporary app>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="drawerToggle"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor:pointer">
          <h1 pl-5>VueShare</h1>
        </router-link>
      </v-toolbar>

      <!-- invisible divider -->
      <v-divider></v-divider>

      <!-- side navbar links -->
      <v-list>
        <v-list-tile v-for="item in sideBarNavItems" :key="item.key" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    


    <!-- horizontal nav bar -->
    <v-toolbar fixed color="primary" dark class="">
      <!-- app title -->
      <v-toolbar-side-icon @click="drawerToggle"></v-toolbar-side-icon>

      <v-toolbar-title class="">
        <router-link to="/" tag="span" style="cursor:pointer">
          VueShare
        </router-link>
      </v-toolbar-title>


      <v-spacer class=""></v-spacer>
      
      <!-- search input -->
      <v-text-field
       flex 
       prepend-icon="search" 
       placeholder="Search posts" 
       color="accent"
       single-line
       hide-details
       class="hidden-xs-only"
       ></v-text-field>


      <v-space></v-space>

      <v-toolbars-items class="">
        <v-btn 
          flat 
          v-for="item in horizontalNavItems" 
          :key="item.title" 
          :to="item.link"
          class="hidden-sm-and-down"
        >
          <v-icon left>{{item.icon}}</v-icon>
          <div class="hidden-md-and-down">{{item.title}}</div>
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
    },
    sideBarNavItems(){
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


