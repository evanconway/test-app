import express from 'express';
import path from 'path';
import appRouter from './app';

const staticFileDir = '../../client/dist';

const app = express();

app.use('/app', appRouter);

app.use(express.static(path.join(__dirname, staticFileDir)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, staticFileDir, 'index.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`app running at  http://localhost:${port}`);
});
