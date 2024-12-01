import { model, Schema } from "mongoose";
import { ICar } from "./car.interface";

const carSchema = new Schema<ICar>({
    brand: {
        type: String,
        required: [true, "Brand is required"],
    },
    model: {
        type: String,
        required: [true, "Model is required"],
    },
    year: {
        type: Number,
        required: [true, "Year is required"],
        min: [1686, "Year must be no earlier than 1886"],
        max: [new Date().getFullYear() + 1, "Year must not be in the far future"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    category: {
        type: String,
        enum: {
            values: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
            message: "Please provide a valid car category",
        },
        required: [true, "Category is required"],
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity must be a non-negative number"],
    },
    inStock: {
        type: Boolean,
        required: [true, "InStock field is required"],
        default: false, 
    },
}, {
    timestamps: true, 
});

const Car = model<ICar>('Car', carSchema);
export default Car;
