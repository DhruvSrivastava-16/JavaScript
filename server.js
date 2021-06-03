const express = require('express')

//calling express is basically an instance of our server
//const server = express()
        //or
const app = express()


//soft webports/networks and is used to start a network. The server started on local host 4444 and second argument is a callback function.
app.listen(4444,() => {
    console.log('server started on http://localhost:4444')
}) 


//Middleware
app.get('/',(req,res)=>{
    res.send('Hey There!')
})
