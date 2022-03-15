const express = require('express');
const { config } = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./src/routers');
const middleware = require('./src/middlewares');

config();

const app = express();

app.get('/', (_req, res) => res.send('OK'));

app.use(bodyParser.json());

app.use('/user', routes.userRouter);
app.use('/login', routes.loginRouter);
app.use('/categories', routes.categoryRouter);
app.use('/post', routes.postRouter);

app.use(middleware.handleError);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
