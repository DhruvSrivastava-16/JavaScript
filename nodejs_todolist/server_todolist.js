const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

let tasks=[
    'sample task',
    'yo task'
]

app.get('/',(req,res)=>{
   // let tasklist = tasks.map(t => '<li>${t}</li>').join('\n')
   let tasklist =''
   for(let i=0;i<tasks.length;i++)
   {
       tasklist += '<li>' + tasks[i] + '</li>'
   } 
   let html = `<html>
                <body>
                    <form action="/" method="POST">
                        <input name="NewTask">
                            <button type = "Submit">ADD</button>
                    </form>
                    <ul> `
                    + tasklist +
                    `</ul>
                </body>
            </html>`
   res.send(html)
})


/*
app.get('/',(req,res)=>{
    res.send('new task added = ' + req.body.NewTask)
    tasks.push(req.query)
    console.log(req.query.NewTask)
    res.redirect('/')
})*/

app.post('/',(req,res)=>{
    tasks.push(req.body.NewTask)
    res.redirect('/')

})


app.listen(5555,() => {
    console.log(
        'Started'
    )
})