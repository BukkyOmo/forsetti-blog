const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello forsetti!'));

app.listen(port, () => console.log(`Forsetti-blog listening on port ${port}!`));
