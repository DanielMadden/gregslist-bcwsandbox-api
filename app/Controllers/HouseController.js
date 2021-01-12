import { houseService } from "../Services/HouseService.js"

export class HouseController {
    constructor() {

    }

    createHouse(data) {
        houseService.createHouse(data)
    }

    testHouse() {
        houseService.createHouse({
            bedrooms: 0,
            bathrooms: 0,
            imgUrl: "https://cdn.shopify.com/s/files/1/0818/5843/products/dirty-rice-web.jpg?v=1527204114",
            year: 2020,
            price: 1,
            levels: 1,
            description: "Home is where the rice is."
        })
        console.log("data sent")
    }
}