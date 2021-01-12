import { api } from "./AxiosService.js";

class HouseService {
    constructor() {

    }

    async getHouses() {
        let res = await api.get("houses")
        console.log(res)
    }

    async createHouse(data) {
        let res = await api.post("houses", data)
        console.log(res)
    }

    async deletehouse(id) {
        let res = await api.delete("houses/" + id)
        console.log(res)
    }
}

export const houseService = new HouseService()