import express from 'express';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'Welcome to the Home Page',
        people : ['John', 'Jane', 'Jacob']
    });
})

app.listen(8000 , () => console.log('Server started'));