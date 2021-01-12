import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"
import { jobsService } from "../Services/JobsService.js"

// function _drawJobs() {
//     let jobs = ProxyState.jobs
//     let template = ''
//     jobs.forEach(job => {
//         // NOTE Getters FAKE properties as methods
//         template += job.Template
//     })
//     document.getElementById('jobs').innerHTML = template
// }


export default class JobsController {
    constructor() {
        // ProxyState.on("jobs", _drawJobs)
        // _drawJobs()
        this.getJobs()
        // jobsService.createJob({
        //     company: "You should definitely take the job before the one before this one",
        //     jobTitle: "Really... do!",
        //     hours: 168,
        //     rate: 0,
        //     description: "I mean, who needs health insurance anyway? You're farming Rice!",
        // })
    }

    getJobs() {
        try {
            jobsService.getJobs()
        } catch (error) {
            console.error(error)
        }
    }

    jobTest() {
        jobsService.createJob({
            company: "Rice Fields INC",
            jobTitle: "Farm our rice fields for free!",
            hours: 168,
            rate: 0,
            description: "For legal purposes, we'll call this volunteer work...",
        })
    }

    // createJob() {
    //     window.event.preventDefault()
    //     let form = window.event.target
    //     let newJob = {
    //         company: form['company'].value,
    //         jobTitle: form['jobTitle'].value,
    //         hours: form['hours'].value,
    //         rate: form['rate'].value,
    //         description: form['description'].value,
    //     }
    //     try {
    //         jobsService.createJob(newJob)

    //     } catch (error) {
    //         console.error(error)
    //     }
    //     // @ts-ignore
    //     form.reset()
    //     // @ts-ignore
    //     $("#new-car-modal").modal('hide');
    // }


    deleteJob(id) {
        console.log(id);
        try {
            jobsService.deleteJob(id)
        } catch (error) {
            console.error(error)
        }
    }

    // bid(id, price) {
    //     try {
    //         console.log(id, price)
    //         carsService.bid(id, price)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // getOne() {
    //     let id = ProxyState.cars[0].id
    //     carsService.getOne(id)
    // }
}