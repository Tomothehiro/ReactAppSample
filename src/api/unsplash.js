import axios from 'axios';

// create instance of axios client with defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3dd6f0fef5eef71a5f1ee874027c3a5a07a4c545eedeef6c5e8e137f72520a29'
    }
})