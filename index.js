const express = require("express");
const Joi = require('joi');//used for validation
const app = express();
app.use(express.json());

const books = [
{titel: 'Four Agreements', id: 1},
{title: '48 Laws of Power', id: 2},
{title: 'Think and grow Rich', id: 3}
]

//READ Request Handlers
app.get("/", (req, res) => {
    res.send("Hi, I'm Bev. Working on a simple rest API task");
});

app.get('/api/books', (req, res)=> {
res.send(books);
});

app.get('/api/book/:id', (req, res) => {
const book = books.find(c => c.id == parseInt(req.params.id));

if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Oooops.. Cant find request');
res.send(book);
});

//Create Request Handler
app.post('/api/books', (req, res)=> {

const { error } = validateBook(req.body);
if (error){
res.status(400).send(error.details[0].message)
return;
}
const book = {
id: books.length + 1,
title: req.body.title
};
books.push(book);
res.send(book);
});

//Update Handler
app.put('/api/books/:id', (req, res) => {
const book = books.find(c=> c.id == parseInt(req.params.id));
if (!book) res.status(404).send('<h2 styl="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

const { error } = validateBook(req.body);
if (error){
res.status(400).send(error.details[0].message);
return;
}

book.title = req.body.title;
res.send(book);
});

//DELETE Request Handler
app.delete('/api/books/:id', (req, res) => {

const book = books.find( c=> c.id === parseInt(req.params.id));
if(!book) res.status(404).send(',h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

const index = books.indexOf(book);
books.splice(index,1);

res.send(book);
});

function validateBook(book) {
const schema = {
title: Joi.string().min(3).required()
};
return Joi.validate(book, schema);

}

//Port Environment Variable
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));