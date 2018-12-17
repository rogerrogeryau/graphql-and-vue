<template>
    <v-container>
        <!-- <h1>Signin</h1> -->

        <!-- title -->
        <v-layout row wrap text-xs-center mt-5 pt-5>
            <v-flex xs12 sm6 offset-sm3>
                <h1>Welcome Back!</h1>
            </v-flex>
        </v-layout>   

        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <v-card color="secondary" dark>
                    <v-container>
                        <form @submit.prevent="handlesSignInUser" id="SigninForm">
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field v-model="username" prepend-icon="face" label="Username" type="text">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>


                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field v-model="password" prepend-icon="extension" label="Password" type="password">

                                    </v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row> 
                                <v-flex xs12 text-xs-center>
                                    <v-btn color="primary" type="submit" form="SigninForm">
                                        Sign-In
                                    </v-btn>
                                    <h5>Dont have an account?
                                        <router-link to="/signup">
                                            Sign-up
                                        </router-link>
                                    </h5>
                                </v-flex>
                            </v-layout>
                            
                        </form>
                    </v-container>
                </v-card>  
            </v-flex>
        </v-layout>


    </v-container>
</template>

<script>
export default {
    name:'Signin',
    data(){
        return{
            username:'',
            password:''

        }
    },
    methods:{
        handlesSignInUser(){
            this.$store.dispatch('signInUser',{
                username:this.username,
                password:this.password
            })
        }
    }
}
</script>
