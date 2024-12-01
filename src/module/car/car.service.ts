import { ICar } from "./car.interface";
import Car from "./car.model";

const createCar = async (car: ICar): Promise<ICar> => {
    const result = await Car.create(car);
    return result;
}

export const carService = {
    createCar,
}