import {reactive} from 'vue';

export const store = reactive({
    apiBaseUrl: 'https://127.0.0.1:8000/api',
    imgBasePath: 'https://127.0.0.1:8000/storage/',
});