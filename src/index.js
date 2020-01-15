const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = 3333;

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://omnistack:omnistack@development-le6dz.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(PORT);
console.log(`Application running on port ${PORT}`);
