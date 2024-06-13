<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="getImg" class="img-fluid rounded-start" :alt="item.title">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">title: {{ item.title }}</h5>
                    <p class="card-text" v-html="item.content.substring(0, 50) + '...'"></p>
                    
                    <span class="badge rounded-pill text-bg-warning me-3">{{ item.technology?.name }}</span>
                    <RouterLink :to="{ name: 'solo-project', params: { 'slug': item.slug } }" class="btn btn-success">
                        Leggi articolo</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    props: ['item'],
    data() {
        return {
            store
        }
    },
    computed: {
        getImg() {
            return this.item.image ? this.store.imgBasePath + this.item.image : '/img/place-holder.jpg';
        }
    }
}
</script>

<style lang="scss" scoped></style>