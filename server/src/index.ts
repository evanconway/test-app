import express from 'express';
import path from 'path';
import { config } from 'dotenv';
import appRouter from './app';

config();

const staticFileDir = '../../client/dist';

const app = express();

app.use('/app', appRouter);

app.use(express.static(path.join(__dirname, staticFileDir)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, staticFileDir, 'index.html'));
});

let port = 3000;
const envPort = process.env['PORT'];
if (envPort === undefined) {
    console.error('"PORT" is not defined in .env.');
} else try {
    port = Number.parseInt(envPort);
} catch (err) {
    console.error('PORT in .env is not an integer.');
}

app.listen(port, () => {
    console.log(`app running at  http://localhost:${port}`);
});
