"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_controller_1 = require("./car.controller");
const carRouter = (0, express_1.Router)();
carRouter.post('/', car_controller_1.carController.createCar);
carRouter.get('/', car_controller_1.carController.getAllCars);
carRouter.get('/:carId', car_controller_1.carController.getACar);
carRouter.put('/:carId', car_controller_1.carController.updateACar);
carRouter.delete('/:carId', car_controller_1.carController.deleteACar);
exports.default = carRouter;