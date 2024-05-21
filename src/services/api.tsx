const SERVER_URL = 'http://192.168.2.194:3000';

const api = {

  async get(endpoint) {
    const url = `${SERVER_URL}${endpoint}`;
    console.log(url);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return await response.json();
  },

  async post(endpoint, data) {
    const url = `${SERVER_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  async put(endpoint, data) {
    const url = `${SERVER_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

};

export default api;
