import express from "express";
const app = express();

function server(porta){
    app.use('/',
        express.static('public')
    )
    app.listen(porta,()=>{
        console.log('Server is runing at http://localhost:'+porta)
    })
}

server(8080)