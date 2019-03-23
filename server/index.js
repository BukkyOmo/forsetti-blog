import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const port = process.env.PORT || 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).json(
    { username: 'Forsetti' },
  );
});

app.listen(port, () => {
  console.log(`Dev app listening on port ${port}!`);
});

export default app;
