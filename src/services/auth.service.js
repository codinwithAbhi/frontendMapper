import { postReq } from "./api.config"



export const login = async (payload) => {
    await postReq(`/users/login`, payload);
}