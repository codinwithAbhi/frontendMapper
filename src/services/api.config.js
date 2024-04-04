import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:8081//mapper/api"
})


// instance.interceptors.request.use(
//     function (config){

//     }
// )



export const getReq = async (url, config) => {
    return await instance.get(url, config)
}
export const postReq = async (url, payload, config) => {
    return await instance.post(url, payload, config)
}
export const putReq = async (url, payload, config) => {
    return await instance.put(url, payload, config)
}
export const deleteReq = async (url, config) => {
    return await instance.delete(url, config)
}