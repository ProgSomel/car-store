"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carController = void 0;
const car_service_1 = require("./car.service");
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = req.body;
        const result = yield car_service_1.carService.createCar(car);
        res.send({
            message: 'Car created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        const isDev = process.env.NODE_ENV === 'development';
        res.status(500).send(Object.assign({ message: error.message || 'An error occurred.', success: false, error: error.name || 'UnknownError' }, (isDev && { stack: error.stack })));
    }
});
const getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const cars = yield car_service_1.carService.getAllCars(searchTerm);
        res.send({
            message: 'Cars retrieved successfully',
            success: true,
            data: cars,
        });
    }
    catch (error) {
        const isDev = process.env.NODE_ENV === 'development';
        res.status(500).send(Object.assign({ message: error.message || 'An error occurred.', success: false, error: error.name || 'UnknownError' }, (isDev && { stack: error.stack })));
    }
});
const getACar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.carId;
        const car = yield car_service_1.carService.getACar(id);
        res.send({
            message: 'Car retrieved successfully',
            success: true,
            data: car,
        });
    }
    catch (error) {
        const isDev = process.env.NODE_ENV === 'development';
        res.status(500).send(Object.assign({ message: error.message || 'An error occurred.', success: false, error: error.name || 'UnknownError' }, (isDev && { stack: error.stack })));
    }
});
const updateACar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.carId;
        const car = req.body;
        const result = yield car_service_1.carService.updateACar(id, car);
        res.send({
            message: 'Car updated successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        const isDev = process.env.NODE_ENV === 'development';
        res.status(500).send(Object.assign({ message: error.message || 'An error occurred.', success: false, error: error.name || 'UnknownError' }, (isDev && { stack: error.stack })));
    }
});
const deleteACar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.carId;
        const result = yield car_service_1.carService.deleteACar(id);
        res.send({
            message: 'Car deleted successfully',
            status: true,
            data: {},
        });
    }
    catch (error) {
        const isDev = process.env.NODE_ENV === 'development';
        res.status(500).send(Object.assign({ message: error.message || 'An error occurred.', status: false, error: error.name || 'UnknownError' }, (isDev && { stack: error.stack })));
    }
});
exports.carController = {
    createCar,
    getAllCars,
    getACar,
    updateACar,
    deleteACar
};
