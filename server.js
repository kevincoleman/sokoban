const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + "/public"));

// .io
app.get('/.well-known/acme-challenge/16230_cDOqONstdb8yYFS8d3DuCEhv_mX1QEOK96Rg0', (req, res) => {
  res.send("16230_cDOqONstdb8yYFS8d3DuCEhv_mX1QEOK96Rg0.uQabZzevn1kXPCNoZLX3kxkLGlepJR7T_i9c3ztZF20");
})

// .dev
app.get('/.well-known/acme-challenge/rjVojaIv43LBolnG4rWXOqJzYO-C2usYMwG-qGXLDhM', (req, res) => {
  res.send("rjVojaIv43LBolnG4rWXOqJzYO-C2usYMwG-qGXLDhM.uQabZzevn1kXPCNoZLX3kxkLGlepJR7T_i9c3ztZF20");
})

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public", 'index.html'));
});

app.listen(port);