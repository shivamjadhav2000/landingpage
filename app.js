const express=require('express')
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views','views')



app.get('/',function(req,res){

res.render("index")
})
app.listen(3000)
