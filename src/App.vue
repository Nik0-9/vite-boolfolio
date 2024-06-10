<template>
  <h1 class="text-center">Project</h1>
  <ul>
     <li v-for="project in projects" :key="project.id">
      {{project.title}}
    </li> 
  </ul>
</template>

<script>
import {store} from './store';
import axios from 'axios';
  export default {
    name: 'App',
    data() {
      return {
        store,
        projects:[]
      }
    },
    methods:{
      getAllProjects() {
        axios.get(this.store.apiBaseUrl + '/projects').then((resp) => {
          console.log(resp.data);
          this.projects = resp.data.results.data;
        })
      }
    },
    mounted() {
      this.getAllProjects();
    }
  }
</script>

<style lang="scss" scoped>

</style>