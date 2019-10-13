const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/bw-football-club'));

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/bw-football-club/index.html'));
});

app.listen(process.env.PORT || 8081);