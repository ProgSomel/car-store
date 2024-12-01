import { Router } from "express";
import { carController } from "./car.controller";

const carRouter = Router();
carRouter.post('/', carController.createCar);

export default carRouter;