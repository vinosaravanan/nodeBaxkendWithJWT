const mongoose = require('mongoose');

const Dbconnection = async () => {
  try {
   
    const conection = await mongoose.connect("mongodb+srv://vinod:KNEDWlMYNK3ZJT6o@cluster0contact.ydnforn.mongodb.net/Mycontact?retryWrites=true&w=majority");
    console.log('database connetion',
    conection.connection.host,
    conection.connection.name);
    
  } catch (error) {
    console.log(error);
    process.exit(1)
  }

}


module.exports = Dbconnection;
