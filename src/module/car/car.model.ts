import { Schema } from "mongoose";

const carSchema = new Schema({
    brand: {
        type: String,
        required: [true, "Brand is required"]
    },
    model: {
        type: String,
        required: [true, "Model is required"]
    },
    year: {
        type: Number,
        required: [true, "Year is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    category: {
        type: String,
        enum: {values: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"], message: 'Please provide valid car category'}
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    inStock: {
        type: Boolean,
    }


})