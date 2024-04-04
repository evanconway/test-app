import { Router } from 'express';

const appRouter = Router();

appRouter.get('/randomnumber', (req, res) => {
    res.send({ randomNumber: Math.floor(Math.random() * 100000) + 1 });
});

export default appRouter;
