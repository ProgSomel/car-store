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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carService = void 0;
const car_model_1 = __importDefault(require("./car.model"));
const createCar = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.create(car);
    return result;
});
const getAllCars = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let result = [];
    if (searchTerm) {
        result = yield car_model_1.default.find({
            $or: [
                { brand: { $regex: searchTerm, $options: 'i' } },
                { model: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ]
        });
        return result;
    }
    else {
        result = yield car_model_1.default.find();
        return result;
    }
});
const getACar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.findById(id);
    return result;
});
const updateACar = (id, car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.findByIdAndUpdate(id, car, { new: true });
    return result;
});
const deleteACar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.carService = {
    createCar,
    getAllCars,
    getACar,
    updateACar,
    deleteACar
};
