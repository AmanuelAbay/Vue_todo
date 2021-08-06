<template>
  <v-row justify="center">
    <v-dialog max-width="600" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn flat class="success" v-bind="attrs" v-on="on" >
          Add New Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Add a New Project</v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field :value="due" label="Due Date" prepend-icon="date_range" :bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-list>
                  <v-row justify="center">
                       <v-date-picker v-model="due" :rules="inputRules"></v-date-picker>
                  </v-row>
                </v-list>
              </v-menu> 

                <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
                
            </v-form>

        </v-card-text> 
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import db from '@/fb'
export default {
  emits:['snackbar'],
    data(){
        return {
          dialog:false,
          loading:false,
            title:'',       // the title of the project will be written here
            content:'',     // the content will be saved here
            due:null,       //the due date will be saved here
            inputRules:[
              v => v.length>=3 || 'the minimum character is 3'
            ]
        }
    },
    methods:{
        submit(){
          if(this.$refs.form.validate()){
            this.loading=true;
            const project = {
              title:this.title,
              content:this.content,
              due:this.due,
              person:'Amanuel',
              status:'ongoing'
            }

//          syschornous way of adding data to database
          db.collection('projects').add(project).then(()=>{
            this.loading=false;
            this.dialog=false;
            this.$emit('snackbar');// sending datas to the main component for snack bar
          
          });

          }
        }
    }
}
</script>