import { generateId } from "../Utils/GenerateId.js"

export default class Job {
    constructor({ company, jobTitle, hours, rate, description, id }) {
        // console.log("MODEL: constructor", 3)
        this.id = id
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description
    }

    get Template() {
        return /*html*/`
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.make} - ${this.bedrooms} Bed - ${this.bedrooms} Bath - ${this.year}</h4>
            <p class="card-text">${this.description}</p>
            <p class="card-text">${this.price}</p>
            <div class="text-right">
            <button type="button" class="btn btn-success" onclick="app.jobsController.bid('${this.id}', '${this.price += 500}')">Bid</button>
                <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
    }
}