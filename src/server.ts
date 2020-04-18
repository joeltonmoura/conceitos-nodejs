import express from 'express';
import router from './routes/index';
import cors  from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('Executando'));
