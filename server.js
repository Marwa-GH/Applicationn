const express =require('express')
const connectDB = require('./config/connectDB')
const authRouter = require('./Routes/Auth')
const produitRouter = require("./Routes/ProduitRouter")
const userRouter =require('./Routes/User')
const orderRouter = require('./Routes/OrderRoutes')
const path =require('path')

const app = express()
connectDB()
//middleware
app.use(express.json())
//use Routes
app.use('/api/auths',authRouter);
app.use('/api/auths', produitRouter);
app.use('/api/user',userRouter);
app.use('/api/order', orderRouter)

//app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

  // All remaining requests return the React app, so it can handle routing.
 app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname+'/clients/build/index.html'));
  });

const PORT= process.env.PORT || 6000;

app.listen(PORT, (err)=>{
err?
console.log(err)
:
console.log(`Server  is running on port ${PORT}....`)
})
