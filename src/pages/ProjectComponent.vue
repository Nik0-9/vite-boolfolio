<template>
    <div v-if="project">
        <h1>{{ project.title }}</h1>
        <img :src="store.imgBasePath + project.image" :alt="project.title">
        <p>{{ project.content }}</p>
        <span> type: {{ project.type.name }}</span>        
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'ProjectComponent',
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        getProject() {
            //console.log(this.$route);
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((resp) => {
                //console.log(res.data.results);
                this.project = resp.data.results;
            }).catch((error) => {
                // console.log(error);
                // console.log(error.response.data);
                this.$router.push({ name: 'not-found' });
            }).finally();
        }
    },
    mounted() {
        this.getProject();
    },
    created() {
        this.$watch(() => this.$route.params, (toParams, previousParams) => {
            // react to route changes
            this.getProjects();
        })
    }
}
</script>

<style lang="scss" scoped></style>