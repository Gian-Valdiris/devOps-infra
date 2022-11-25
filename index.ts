import express,{Request,Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.port;

app.use('/saludo',(req:Request,res:Response)=>{
  return res.send(` 
    <h1>
      Hola este es el punto inicial de mi app
    </h1>
  `)
})

app.listen(port,()=>{
  console.log('server corriendo')
})