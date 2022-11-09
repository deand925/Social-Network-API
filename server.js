const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

mongoose.connect(`mongodb://localhost:27017/mongoTodos`)
.then(()=>{
    console.log('Connected to mongoDb');
})
.catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);


app.listen(PORT, ()=> console.log(`Server running on port ${PORT} http:localhost:${PORT}`));