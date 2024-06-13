<template>

  <HeaderComponent />
  <main class="container my-4">
    <router-view></router-view>
  </main>

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from './store';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getTypes() {
      axios.get(this.store.apiBaseUrl + '/types', {}).then((resp) => {
        //console.log(resp.data);
        this.store.types = resp.data.results;
      });
    }
},
  mounted() {
    this.getTypes();
  }
}
</script>

<style lang="scss" scoped></style>