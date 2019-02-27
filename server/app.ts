import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import channelRoutes from './routes/channelRoutes';

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/channelApi',channelRoutes);


app.listen(8080, function () {
    console.log('server running in port 8080');
});

