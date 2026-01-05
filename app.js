const express = require('express')
const socket = require('socket.io')
const http = require('http')
const { Chess } = require('chess.js')
const path = require('path')

const app = express()

const server = http.createServer(app)
const io = socket(server)

const chess = new Chess()
let players = {}
let currentPlayer = "W"


app.set(express.static(path.join(__dirname, "public")))

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "views" ,"index.html"))
})

io.on("connection", function(uniquesocket){
    console.log("Connected!")
})

server.listen(3030, function(){
    console.log("Listening on 3030")
})