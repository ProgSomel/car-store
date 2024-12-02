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
exports.orderService = void 0;
const car_model_1 = __importDefault(require("../car/car.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { car, quantity } = order;
    const carDetails = yield car_model_1.default.findById(car);
    if (!carDetails) {
        throw new Error("Car not found");
    }
    if (carDetails.quantity < quantity) {
        throw new Error("Insufficient stock");
    }
    const totalPrice = carDetails.price * quantity;
    const result = yield order_model_1.default.create(Object.assign(Object.assign({}, order), { totalPrice }));
    carDetails.quantity -= quantity;
    carDetails.inStock = carDetails.quantity > 0;
    yield carDetails.save();
    return result;
});
const revenuesFromOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" },
            }
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1,
            }
        }
    ]);
    return result[0].totalRevenue || 0;
});
exports.orderService = {
    createOrder,
    revenuesFromOrders
};
