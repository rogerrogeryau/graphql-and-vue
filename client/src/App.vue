<template>
  <v-app style="background: #E3E3EE">
    <!-- side navbar -->
    <v-navigation-drawer v-model="sideNav" fixed temporary app>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="drawerToggle"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor:pointer">
          <h1 pl-5>Hutchgo</h1>
        </router-link>
      </v-toolbar>

      <!-- invisible divider -->
      <v-divider></v-divider>

      <!-- side navbar links -->
      <v-list>
        <v-list-tile v-for="item in sideBarNavItems" :key="item.key" :to="item.link" ripple>
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
          Hutchgo
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
        <transition name="fade">
          
          <router-view></router-view>
        </transition>
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


<style scoped>
  .fade-enter-active,
  .fade-leave-active{
    transition-property: opacity;
    transition-duration: 0.25s;
  }

  .fade-enter{
    opacity: 0;
    /* transform: translateX(-25px); */
  }

  .fade-enter-to{
    opacity: 1;
    /* transform: translateX(0px); */
  }

  .fade-leave{
    opacity: 1;
    /* transform: translateX(px); */
  }
  .fade-leave-to{
    opacity: 0;
    /* transform: translateX(-25px); */
  }
  

</style>
