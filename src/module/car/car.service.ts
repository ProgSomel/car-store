import { ICar } from "./car.interface";
import Car from "./car.model";

const createCar = async (car: ICar): Promise<ICar> => {
    const result = await Car.create(car);
    return result;
}

const getAllCars = async (searchTerm?: string): Promise<ICar[]> => {
    let result = [];
    if(searchTerm){
        result = await Car.find({
            $or: [
                {brand: {$regex: searchTerm, $options: 'i'}},
                {model: {$regex: searchTerm, $options: 'i'}},
                {category: {$regex: searchTerm, $options: 'i'}},
            ]
        });
        return result;
    }else{
        result = await Car.find();
        return result;
    }
}

export const carService = {
    createCar,
    getAllCars
}