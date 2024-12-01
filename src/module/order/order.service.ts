import Car from "../car/car.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async(order: IOrder): Promise<IOrder> => {
    const {car, quantity} = order;
    const carDetails = await Car.findById(car);
    if(!carDetails){
        throw new Error("Car not found");
    }
    if(carDetails.quantity < quantity){
        throw new Error("Insufficient stock");
    }
    const totalPrice = carDetails.price * quantity;
    const result = await Order.create({...order, totalPrice});
    carDetails.quantity -= quantity;
    carDetails.inStock = carDetails.quantity > 0;

    await carDetails.save();

    return result;
}

const revenuesFromOrders = async (): Promise<number> => {
    const result = await Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: {$sum : "$totalPrice"},
            }
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1,
            }
        }
    ])

    return result[0].totalRevenue || 0;
}

export const orderService = {
    createOrder,
    revenuesFromOrders
}