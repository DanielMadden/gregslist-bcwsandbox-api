import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js"

class JobsService {

    async getJobs() {
        let res = await api.get("jobs")
        ProxyState.jobs = res.data.map(job => new Job(job))
    }

    async createJob(newJob) {
        let job = await api.post("jobs", newJob)
        console.log(job);

        // ProxyState.cars = [...ProxyState.cars, new Car(car.data)]

        this.getJobs()
    }


    async deleteJob(id) {
        let res = await api.delete("jobs/" + id)
        console.log(res)

        ProxyState.cars = ProxyState.jobs.filter(job => job.id != id)

        // this.getCars()

    }

    // async bid(id, newPrice) {
    //     let carData = { price: newPrice }
    //     let res = await api.put("cars/" + id, carData)
    //     console.log(res);
    //     let oldCarIndex = ProxyState.cars.findIndex(c => c.id == id)

    //     let temp = ProxyState.cars
    //     temp.splice(oldCarIndex, 1, new Car(res.data))
    //     ProxyState.cars = temp

    //     // this.getCars()

    // }



    // async getOne(id) {
    //     //typically you would take in an id from your controller and pass that onto your api
    //     let res = await api.get("cars/" + id)
    //     console.log(res)
    // }
}

//GET
//URL/api/collection

//GETBYID
//URL/api/collection/someId

//PUT
//URL/api/collection/someId, whatWeAreEditing

//POST
//URL/api/collection , whatWeArePosting

//DELETE
//URL/api/collection/someId
//api.delete(id)



// Singleton Pattern
export const jobsService = new JobsService()