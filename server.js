// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
const WebSocket = require('ws')
 
const wss = new WebSocket("ws://connect.websocket.in/YOUR_CHANNEL_ID?room_id=YOUR_ROOM_ID")
 
var count=0;
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/reset",(req,res)=>{
  count=0;
  res.send("reset success")
  wss.send(JSON.stringify({count:count}))
})
app.get("/count",(req,res)=>{
  count+=1;  
  wss.send(JSON.stringify({count:count}))
  res.send("count added success")
        
})
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
