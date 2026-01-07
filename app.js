const express = require('express')
const socket = require('socket.io')
const http = require('http')
const { Chess } = require('chess.js')
const path = require('path')
const { title } = require('process')

const app = express()

const server = http.createServer(app)
const io = socket(server)

const chess = new Chess()
let players = {}
let currentPlayer = "W"

app.set("view engine", "ejs")
app.set(express.static(path.join(__dirname, "public")))

app.get("/", (req,res) =>{
    res.render("index", {title: "CheckMAte"})
})

io.on("connection", function(uniquesocket){
    console.log("Connected!")
})

server.listen(3030, function(){
    console.log("Listening on 3030")
})