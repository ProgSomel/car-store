import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>({
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: function (v: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: "Please provide a valid email address",
        },
    },
    car: {
        type: Schema.Types.ObjectId,
        ref: "Car",
        required: [true, "Car ID is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"],
    },
    totalPrice: {
        type: Number,
        required: [true, "Total price is required"],
        min: [0, "Total price must be a positive number"],
    },
}, {
    timestamps: true, 
});

const Order = model<IOrder>("Order", orderSchema);
export default Order;
