const express = require('express')
const res = require('express/lib/response')
const { dirname } = require('path')
const app = express()
const port = process.env.PORT||3000;

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')



app.get('/', (req, res) => {
 // res.send('Pagina principal')
  console.log(__dirname)
  res.render('Inicio')
})

app.get('/educacion', (req, res) => {
    res.render('educacion',{
        titulo:"seccion educacion",
        descripcion:"aqui encontraras la descipsion "
    })
  })
  app.get('/laboral', (req, res) => {
    res.render('laboral',{
      
  })
  })
  app.get('/datos', (req, res) => {
    res.render('DatosPersonales')
    res.send('Datos basicos')
    
  })
  app.get('/habilidades', (req, res) => {
    res.render('Habilidades',{
     
  })
    
  })
  app.get('/Inicio', (req, res) => {
    res.render('Inicio',{
     
  })
    
  })
  
app.listen(port, () => {
  console.log(`accede al servidor haciendo click aqui  http://localhost:${port}`)
})

app.use((req,res,next) =>{
    res.status(404).sendFile(__dirname+'/public/404.html')
})