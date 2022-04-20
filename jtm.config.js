import axios from 'axios';
import { createApp } from 'ioa';

axios.defaults.baseURL = 'http://localhost:8600';

await createApp({ main: "./main", user: "./user" });