require('dotenv').config();

const express = require('express');
const middleware = require('./middleware/development');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(middleware.logData);
app.use(userRoutes);

app.listen(process.env.API_URL, () => {
    console.log(`Server is gestart op ${process.env.API_URL}`);
});