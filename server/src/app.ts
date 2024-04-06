import { Router } from 'express';
import { config } from 'dotenv';

config();

const appRouter = Router();

appRouter.get('/title', (req, res) => {
    res.send({ title: process.env['TITLE'] });
});

appRouter.get('/randomnumber', (req, res) => {
    res.send({ randomNumber: Math.floor(Math.random() * 100000) + 1 });
});

export default appRouter;
