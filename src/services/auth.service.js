import { postReq } from "./api.config"



export const login = async (payload) => {
    try {
        const response = await postReq(`/users/login`, payload);
        return response; 
    } catch (error) {
        throw error; 
    }
};

export const createUser  = async(payload)=>{
    try {
        const response = await postReq('/users/create',payload)
        return response
    } catch (error) {
        throw error; 
    }
}