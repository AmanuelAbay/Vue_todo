<template>
    <div class="team">
        <h1 class="subheading grey--text">Team</h1>
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card flat class="text-xs-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                                <img :src="person.avatar"/>
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading black--text">{{person.name}}</div>
                            <div class="grey--text">{{person.role}}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn left flat color="grey lighten-4">
                                <v-icon left small>message</v-icon>
                                <span>message</span>
                            </v-btn>                        
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
  data(){
      return{
          team:[
              {name:'Bura', role:'Web Developer',avatar:'/avatar-1.jpg'},
              {name:'Amanuel', role:'Android App Developer',avatar:'/avatar-2.jpg'},
              {name:'Adoni', role:'CTO',avatar:'/avatar-3.jpg'},
              {name:'Alef', role:'CEO',avatar:'/avatar-4.jpg'},
              {name:'Alex', role:'Desktop App Developer',avatar:'/avatar-5.jpg'}
              
          ]
      }
  }
}
</script>