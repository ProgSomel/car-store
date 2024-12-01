import { Router } from "express";
import { carController } from "./car.controller";

const carRouter = Router();
carRouter.post('/', carController.createCar);
carRouter.get('/', carController.getAllCars);
carRouter.get('/:carId', carController.getACar);
carRouter.put('/:carId', carController.updateACar);

export default carRouter;