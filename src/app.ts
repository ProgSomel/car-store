import express, { Request, Response } from 'express';
const app = express();

// middleWires 
app.use(express.json());

app.get('/', (req:Request, res:Response) => {
    res.send({
        status: true,
        message: 'Welcome to the Car Store Server'
    })
})

export default app;