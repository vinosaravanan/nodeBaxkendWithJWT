const {constand} = require('../constand')

const ErrorHandler = (err,req, res, next)=> {
    const statuscode = res.statusCode ? res.statusCode : 500;
      switch (statuscode) {
        
        case constand.NOT_FOUNT:
          res.json({titleL:"Not Found",
          message:err.message,
          stackTrace:err.stack});
          break;

        case constand.VALIDATION_ERROR:
          res.json({titleL:"Validation Failed",
          message:err.message, 
          stackTrace:err.stack});
          break;

         case constand.UNAUTHRIZID:
          res.json({titleL:"unauthrizid",
          message:err.message, 
          stackTrace:err.stack});
          break;

         case constand.FORBIDDEN:
          res.json({titleL:"porbidden",
          message:err.message, 
          stackTrace:err.stack});
          break;

         case constand.SERVAR_ERROR:
          res.json({titleL:"server error",
          message:err.message, 
          stackTrace:err.stack});
          break;

        default:
           console.log('it is All good ');
          break;
      }

   
   
   
   
}

const timepass = (req, res, next) => {
    console.log('Time:', Date.now())
    next()
  }

  
module.exports = ErrorHandler

