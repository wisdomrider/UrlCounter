const express = require('express');
const app = express();
const WebSocket = require('ws')
 
const wss = new WebSocket("ws://connect.websocket.in/YOUR_CHANNEL_ID?room_id=YOUR_ROOM_ID")
 
var count=0;
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
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

app.listen(3000||process.env.PORT, () => console.log(`Example app listening on port 3000!`))
