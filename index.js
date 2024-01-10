const express = require('express');
const dotenv = require('dotenv');
const ErrorHandler = require('./middleware/errorHanler');
const Dbconnection = require('./configure/dbconnetion');

Dbconnection()
const app = express();


app.use(ErrorHandler)
app.use(express.json());
app.use('/api/contact/', require('./contactRouter'))
app.use('/api/user/', require('./userRouter'))

const port = process.env.PORT || 5000;

// mongoose.connect('mongodb+srv://admin:4ExX3GshP5tApq0q@cluster0.w3tjole.mongodb.net/MycontactBack?retryWrites=true&w=majority'
// ).then(()=> app.listen(port)).then(()=> console.log('Connect to Db and Server Running on port 5000'))
// .catch((err)=> console.log(err))

app.listen(port, ()=> {
    console.log(`server is running on ${port}`);
})


// KNEDWlMYNK3ZJT6o