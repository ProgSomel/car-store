import { Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = async (req: Request, res: Response)=> {
    try {
        const order = req.body;
        const result = await orderService.createOrder(order);
        res.send({
            message: "Order created successfully",
            status: true,
            data: result,
        })
    } catch (error) {
        res.status(400).send({
            message: (error as Error).message || "An error occurred",
            status: false,
        });
    }
}

export const orderController = {
    createOrder
}