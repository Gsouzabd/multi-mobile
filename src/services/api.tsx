const SERVER_URL = 'http://192.168.1.139:8989/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Api = {
  tokenGeral: '997qHGzrDrshgCXMrwjhtKy27PooYJLrTE15Mkw7f569059b',

  async getToken() {
    const token = await AsyncStorage.getItem('token');
    return token ? token : this.tokenGeral;
  },

  async get(endpoint) {
    const token = await this.getToken();
    const url = `${SERVER_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    return await response.json();
  },

  async post(endpoint, data) {
    const token = await this.getToken();

    const url = `${SERVER_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
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
  },};

export default Api;