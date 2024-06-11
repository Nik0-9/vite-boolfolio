<template>
  <div>
    <h1 class="text-center">Project</h1>
    <div class="row">
        <div class="col-12 col-lg-6" v-for="project in projects" :key="project.id">
            <CardComponent :item="project" />
        </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import CardComponent from '../components/CardComponent.vue';

export default {
  name: 'ProjectList',
  components: {
    CardComponent
  },
  data() {
    return {
      store,
      projects: []
    }
  },
  methods: {
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

<style lang="sass" scoped>

</style>