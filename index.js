const dotEnv = require('dotenv');
dotEnv.config();

const dbConnection = require('./services/dbConnection');
const PORT      = process.env.PORT || 3001;
const express   = require('express');
const app       = express();
const path      = require('path');
const todoRoute = require('./routes/todo');


/** Setup view engine... */
app.set('view engine', 'ejs' );
app.set('views' , path.join(__dirname, 'views'));


/** Serve static files... */
app.use(express.static(path.join(__dirname, 'public')));

/** Access incoming data in json format...  */
app.use(express.json());
app.use(express.urlencoded({extended:true}));


/** Db connection */

dbConnection();

/** All routes */
app.use(todoRoute);

app.listen(PORT, function() {
    console.log(`Server is running on port: ${PORT}`);
});