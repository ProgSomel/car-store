import { Error } from "mongoose";
import { ICar } from "./car.interface";
import { carService } from "./car.service";

import { Request, Response } from 'express';

const createCar = async (req: Request<{}, {}, ICar>, res: Response) => {
    try {
        const car: ICar = req.body;
        const result = await carService.createCar(car);
        res.send({
            message: 'Car created successfully',
            success: true,
            data: result,
        });
    } catch (error) {
        const isDev = process.env.NODE_ENV === 'development';
        res.status(500).send({
            message: (error as Error).message || 'An error occurred.',
            success: false,
            error: (error as Error).name || 'UnknownError',
            ...(isDev && { stack: (error as Error).stack }),
        });
    }
};

export const carController = {
    createCar,
}