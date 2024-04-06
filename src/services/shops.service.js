import { postReq, getReq } from "./api.config"

export const getShops = async (search, city) => await getReq(`shops/getShops?search=${search}&city=${city}`) 