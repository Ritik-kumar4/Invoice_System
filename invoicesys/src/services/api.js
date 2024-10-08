import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllInvoices = async () => {
    try {
        return await axios.get(`${API_URL}/invoice`);
    } catch (error) {
        // Check if error.response exists
        if (error.response) {
            console.log('Server Error:', error.response.data);
            return error.response.data; // Return the server error response
        } else if (error.request) {
            console.log('No response received:', error.request);
        } else {
            console.log('Error message:', error.message);
        }
        return { message: 'An error occurred, please try again later.' };
    }
};

export const saveInvoice = async (payload) => {
    try {
        return await axios.post(`${API_URL}/invoice`, payload);
    } catch (error) {
        if (error.response) {
            console.log('Server Error:', error.response.data);
            return error.response.data;
        } else if (error.request) {
            console.log('No response received:', error.request);
        } else {
            console.log('Error message:', error.message);
        }
        return { message: 'An error occurred, please try again later.' };
    }
};

export const deleteInvoice = async (id) => {
    try {
        return await axios.delete(`${API_URL}/invoice/${id}`);
    } catch (error) {
        if (error.response) {
            console.log('Server Error:', error.response.data);
            return error.response.data;
        } else if (error.request) {
            console.log('No response received:', error.request);
        } else {
            console.log('Error message:', error.message);
        }
        return { message: 'An error occurred, please try again later.' };
    }
};
