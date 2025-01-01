import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-backend-url/api', // Update with your backend URL
});

export const getCompanies = async () => {
  try {
    const response = await api.get('/companies');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
