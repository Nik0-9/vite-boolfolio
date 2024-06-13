<template>
    <h1>Contact Us</h1>
    <div class="row">
        <div v-if="success">Messaggio inviato con successo</div>
        <form @submit.prevent="sendForm()" class="col-12 text-start">
            <div class="mb-3">
                <label for="name" id="name" class="form-label">Name</label>
                <input type="text" class="form-control border-0 border-bottom" placeholder="Name" :class="{ 'is-invalid': errors?.name }" v-model="name">
                <div v-for="(error,index) in errors?.name" :key="`message-error-${index}`" class="invalid-feedback">{{ error}} </div>
            </div>
            <div class="mb-3">
                <label for="email" id="email" class="form-label">Email</label>
                <input type="email" class="form-control border-0 border-bottom" placeholder="Email" :class="{ 'is-invalid': errors?.address }" v-model="email">
                <div v-for="(error,index) in errors?.address" :key="`message-error-${index}`" class="invalid-feedback">{{ error}} </div>
            </div>
            <div class="mb-3">
                <label for="message" id="message" class="form-label">Message</label>
                <textarea class="form-control border-0 border-bottom" :class="{ 'is-invalid': errors?.message }"v-model="message">
                </textarea>
                <div v-for="(error,index) in errors?.message" :key="`message-error-${index}`" class="invalid-feedback">{{ error}} </div>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Loading...' : 'Send'
                }}</button>
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
            message: '',
            errors: {},
            loading: false,
            success: false
        }
    },
    methods: {
        sendForm() {
            this.success = false;
            this.loading = true;
            this.errors = {};
            const data = {
                name: this.name,
                address: this.email,
                message: this.message
            }
            axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((resp) => {
                console.log(resp.data);
                this.success = true;
                this.name = '';
                this.email = '';
                this.message = '';
            }).catch((error) => {
                console.log(error.response.data);
                this.errors = error.response.data.errors;
            }).finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>

<style lang="scss" scoped></style>