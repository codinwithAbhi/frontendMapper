import axios from "axios";

const baseUrl = "http://localhost:8081/mapper/api"; // Include 'http://' at the beginning

export const getReq = async (url) => {
    try {
        const response = await axios.get(`${baseUrl}/${url}`); // Use template literal to construct full URL
        return response;
    } catch (error) {
        // Handle error
        throw error;
    }
};

export const postReq = async (url, payload) => {
    try {
        const response = await axios.post(`${baseUrl}/${url}`, payload); // Use template literal to construct full URL
        return response.data;
    } catch (error) {
        // Handle error
        throw error;
    }
};

export const putReq = async (url, payload) => {
    try {
        const response = await axios.put(`${baseUrl}/${url}`, payload); // Use template literal to construct full URL
        return response;
    } catch (error) {
        // Handle error
        throw error;
    }
};

export const deleteReq = async (url, config) => {
    try {
        const response = await axios.delete(`${baseUrl}/${url}`, config); // Use template literal to construct full URL
        return response;
    } catch (error) {
        // Handle error
        throw error;
    }
};
