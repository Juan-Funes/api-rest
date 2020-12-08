const express = require('express');
const cors = require('cors');
const app = express();

//setting 
app.set('port',process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
//routers

app.use('/api/users',require('./routers/user'))
app.use('/api/notes',require('./routers/notes'))





module.exports = app;
