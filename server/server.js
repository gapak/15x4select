const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

var db = MongoClient.connect('mongodb://card-base:urmyatCuducNoc2@ds239029.mlab.com:39029/card-base', (err, client) => {
    if (err) return console.log(err);
    db = client.db('card-base'); // whatever your database name is
});

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.post('/add', function (req, res) {
    console.log(req.body);
    db.collection('15x4_deck_card').insert(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        return res.send('added '.result);
    });
});

app.get('/list', function (req, res) {
    db.collection('15x4_deck_card').find().toArray((err, result) => {
        if (err) return console.log(err);
        return res.send(result);
    });

});


app.get('/', function (req, res) {
    console.log('prixying');
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


app.listen(process.env.PORT || 8080);