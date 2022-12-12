const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const app = express();
const port = 3000;

const {logError,errorHandler,boomErrorHandler, ormErrorHandler} = require('./middlewares/error.handler');

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
  res.send('hi from server express');
});


//derivando toda la resolución de rutas a la ruta /routes/
routerApi(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log("Express active in port: "+port);
});
