import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_SHOP_LIST_API + '/api';


export const getItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error.message);
    throw error;
  }
};

export const createItem = async (item) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/items`, item);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error.message);
    throw error;
  }
};

export const updateItem = async (id, updatedItem) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/items/${id}`, updatedItem);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error.message);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error.message);
    throw error;
  }
};
