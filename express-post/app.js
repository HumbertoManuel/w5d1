const express = require('express');
const app = express();

// this line is needed to parse the request body
app.use(express.urlencoded({ extended: false }));

let accessCount = 0;
// middlewares
const count = () => {
    return (req, res, next) => {
        accessCount++
        console.log(accessCount);
        next();
    }
}

// registering a middleware globally -> for every route
// app.use(count());

// registering middleware (count) for this route
app.get('/', count(), (req, res) => {
    res.render('form');
})

app.post('/post-example', (req, res) => {
    // we use req.body to retrieve the values from the input fields 
    console.log('this is the username: ', req.body.user);
})

app.set('view engine', 'hbs');

app.listen(3000);