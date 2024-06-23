const axios = require('axios');

async function get(url, config = {}) {
    const response = await axios.get(url, config);
    return response.data;
}

async function post(url, data, config = {}) {
    const response = await axios.post(url, data, config);
    return response.data;
}

async function put(url, data, config = {}) {
    const response = await axios.put(url, data, config);
    return response.data;
}

async function del(url, config = {}) {
    const response = await axios.delete(url, config);
    return response.data;
}

module.exports = {
    get,
    post,
    put,
    del
};