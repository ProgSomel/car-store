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

const getAllCars =  async (req: Request, res: Response)=> {
    try {
        const searchTerm = req.query.searchTerm as string;
        const cars = await carService.getAllCars(searchTerm);
        res.send({
            message: 'Cars retrieved successfully',
            success: true,
            data: cars,
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
}

const getACar = async (req: Request, res: Response) => {
    try{
        const id = req.params.carId;
        const car = await carService.getACar(id);
        res.send({
            message: 'Car retrieved successfully',
            success: true,
            data: car,
        })
    }catch(error){
        const isDev = process.env.NODE_ENV === 'development';
        res.status(500).send({
            message: (error as Error).message || 'An error occurred.',
            success: false,
            error: (error as Error).name || 'UnknownError',
           ...(isDev && { stack: (error as Error).stack }),
        });
    }
}

const updateACar = async (req: Request, res: Response)=> {
    try{
        const id = req.params.carId;
        const car = req.body
        const result = await carService.updateACar(id, car);
        res.send({
            message: 'Car updated successfully',
            status: true,
            data: result,
        })
    }catch(error){
        const isDev = process.env.NODE_ENV === 'development';
        res.status(500).send({
            message: (error as Error).message || 'An error occurred.',
            success: false,
            error: (error as Error).name || 'UnknownError',
           ...(isDev && { stack: (error as Error).stack }),
        });
    }
}

export const carController = {
    createCar,
    getAllCars,
    getACar,
    updateACar
}