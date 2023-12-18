const express = require('express');
const app = express();

app.get('/users', (request, respons) => {
    console.log(request);
})

app.listen(3000, () => {
    console.log('Server is gestart!');
});