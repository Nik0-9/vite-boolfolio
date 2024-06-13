<template>
  <div>
    <div class="d-flex justify-content-between align-items-center py-3">
      <h1 class="text-center">Project</h1>
      <select name="types" id="types" class="form-select w-25" @change="setParams(1)" v-model="type">
        <option value="">All</option>
        <option :value="typee.id" v-for="typee in store.types" :key="typee.id" >{{ typee.name }}</option>
      </select>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6" v-for="project in projects" :key="project.id">
        <CardComponent :item="project" />
      </div>
    </div>

    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" :class="{ 'disabled': currentPage <= 1 }"
            @click="setParams(currentPage - 1)">Previous</a>
        </li>

        <li class="page-item" v-for="page in totalPage" :key="page">
          <a class="page-link" :class="{ 'active': currentPage == page }" @click.prevent="setParams(page)">{{
          page }}</a>
        </li>

        <li class="page-item">
          <a class="page-link" :class="{ 'disabled': currentPage >= totalPage }" 
            @click="setParams(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
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
      projects: [],
      type: '',
      currentPage: 0,
      totalPage: 0,
      params: null
    }
  },
  methods: {
    setParams(numpage) {
      
      this.currentPage = numpage;
      //console.log(this.type);
      this.params = {
        page: this.currentPage,
      }
      if (this.type) {
        this.params.type = this.type;
      }
      this.getAllProjects();
    },
    getAllProjects() {
      axios.get(this.store.apiBaseUrl + '/projects', { params: this.params } ).then((resp) => {
        console.log(resp.data);
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.totalPage = resp.data.results.last_page;
        this.params = null;
      })
    }
  },
  computed: {
        selectedType() {
            const type = this.store.types.find(type => type.id == this.type);
            return type ? type.name : '';
        }
    },
  mounted() {
    this.getAllProjects();
  }
}
</script>

<style lang="sass" scoped>

</style>