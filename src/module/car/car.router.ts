import { Router } from "express";
import { carController } from "./car.controller";

const carRouter = Router();
carRouter.post('/', carController.createCar);
carRouter.get('/', carController.getAllCars);

export default carRouter;