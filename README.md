# UrlCounter

Url : https://wisdomrider.github.io/UrlCounter

# What is it?

This is just a simple realtime hits counter  which update the counts via socket 

# How to use ?

    var ws=new WebSocket("wss://connect.websocket.in/YOUR_CHANNEL_ID?room_id=YOUR_ROOM_ID")
    ws.send(JSON.stringify({"count":10}))
    
  the counter will updated automatically to 10 
  
# How to check ?
First open : https://wisdomrider.github.io/UrlCounter 
then open your browser console (f12 for mozilla) and paste the above code and see !
