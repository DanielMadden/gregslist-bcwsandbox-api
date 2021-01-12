import CarsController from "./Controllers/CarsController.js";
import { HouseController } from "./Controllers/HouseController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  //valuesController = new ValuesController();
  carsController = new CarsController()
  jobsController = new JobsController()
  houseController = new HouseController()
}

window["app"] = new App();
