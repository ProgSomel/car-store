import express, { Request, Response } from 'express';
import carRouter from './module/car/car.router';
import orderRouter from './module/order/order.router';
const app = express();

// middleWires 
app.use(express.json());

// router 
app.use("/api/cars", carRouter);
app.use("/api/orders", orderRouter);

app.get('/', (req:Request, res:Response) => {
    res.send({
        status: true,
        message: 'Welcome to the Car Store Server'
    })
})

export default app;