const express = require('express');
const { config } = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routers');
const middleware = require('./middlewares');

config();

const app = express();

app.get('/', (_req, res) => res.send('OK'));

app.use(bodyParser.json());

app.use('/user', routes.userRouter);
app.use('/login', routes.loginRouter);

app.use(middleware.handleError);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
