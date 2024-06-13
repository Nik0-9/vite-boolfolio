<template>
    <h1>Contact Us</h1>
    <div class="row">
        <form @submit.prevent="sendForm()" class="col-12 text-start" >
            <div class="mb-3">
                <label for="name" id="name" class="form-label">Name</label>
                <input type="text" class="form-control border-0 border-bottom" placeholder="Name" v-model="name">
            </div>
            <div class="mb-3">
                <label for="email" id="email" class="form-label">Email</label>

                <input type="email" class="form-control border-0 border-bottom" placeholder="Email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="message" id="message" class="form-label">Message</label>

                <textarea  class="form-control border-0 border-bottom"  v-model="message">

                </textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'ContactComponent',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendForm() {
            const data ={
                name: this.name,
                address: this.email,
                message: this.message
            }
            axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((resp) => {
           console.log(resp.data);
        }).catch((error) => {

        }).finally(() => {});
        }
    }
}
</script>

<style lang="scss" scoped></style>