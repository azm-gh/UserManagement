const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true})) //MW - information coming from forms
app.use(express.json())


app.set('view engine', 'ejs')
//MW
//app.use(logger)

//Request
/*app.get('/', logger,(req,res) => {
    console.log('Here')
    res.render('index', { text11: "World" })
   
})*/

//Router
const userRouter = require('./routes/users')

app.use('/users', userRouter)
//app.use('/posts', postUsers)

/*function logger(req, res, next) 
{
    console.log(req.originalUrl)
}
*/
app.listen(3002)