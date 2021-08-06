<template>
    <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
        <span>You successfully add the Project!!</span>
        <template v-slot:action="{attrs}">
        <v-btn flat  @click="snackbar=false" :bind="attrs">Close</v-btn>
        </template>
    </v-snackbar>
        <v-toolbar flat app>
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light" color="red">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
<!--drop down menu-->
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" flat color="grey lighten-4">
        <v-icon left>expand_more</v-icon>
        <span>menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-title>{{link.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

            <v-btn flat class="grey lighten-4">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.jpg" alt="avatar image"/>
                    </v-avatar>
                    <p class="white--text subheading mt-1">Amanuel Abay</p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <popup @snackbar="snackbarChanger"></popup>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
import Popup from './Popup'
export default {
    components:{
        Popup
    },
    data() {
        return {
            snackbar:false,
            drawer: false,
            links:[
                { icon:'dashboard',text:'Dashboard',route:'/'},
                { icon:'folder',text:'My Projects',route:'/projects'},
                { icon:'person',text:'Team',route:'/teams',}
            ]
        }
        
    },
    methods: {
            snackbarChanger(){
                this.snackbar=true;       
            }
        },
}
</script>