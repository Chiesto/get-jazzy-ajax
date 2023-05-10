const express = require('express');

const app = express();
const PORT = 5000;
//set up my server with port 5000

const songListArray = require('./modules/song');
const artistListArray = require('./modules/artist');
const albums = require('./modules/albums');
// const artistListArray = [
//     {
//         name: 'Miles Davis',
//         born: 1926,
//         died: 1990,
//     },
//     {
//         name: 'Duke Ellington',
//         born: 1899,
//         died: 1974,
//     },
//     {
//         name: 'John Coltrane',
//         born: 1926,
//         died: 1987,
//     },
//     {
//         name: 'Louis Daniel Armstrong',
//         born: 1901,
//         died: 1971,
//     },
// ];

// const songListArray = [
//     {
//         title: 'Take Five',
//         artist: 'The Dave Brubeck Quartet',
//     },
//     {
//         title: 'So What',
//         artist: 'Miles Davis',
//     },
//     {
//         title: 'Sing Sing Sing',
//         artist: 'Benny Goodman',
//     },
//     {
//         title: 'Take the "A" Train',
//         artist: 'The Dave Brubeck Quartet',
//     },
// ];

app.use(express.static('server/public'));

//grabbing the base from my server/public folder

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});
//gets the request from the server and sends my response (artistListArray)

// TODO - Add GET for songs

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

app.get('/song', (req, res) => {
    console.log('got my song list');
    res.send(songListArray);
})

app.get('/albums', (req, res) => {
    console.log('got my albums list');
    res.send(albums);
})
//gets the request from the server and sends my response (songListArray)