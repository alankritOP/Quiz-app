const jwt = require( 'jsonwebtoken' );
const mongoose = require( 'mongoose' );


const User = mongoose.model( 'User' );

const register = (req,res,next) => {
     
    const user=req.body;
    if(!user) {
         const error = new Error("User Details is not present");
         next(error);
         return ;
    }
    User
    .create(user)
    .then(newUser=>{
        res.status(201).json(newUser);
    })
    .catch( error=>{
        if(error==="ValidationError"){
            error.status = 400;
        }
        else{
            error.status = 500;
        }

        return next(error);
        
    });
    
}

const login = (req,res,next) =>{
    const u = req.body;
    if(!u){
        const error = new Error("Login details is missing");
        next(error);
        return;
    }
    if(!u.email || !u.password){
        const error = new Error("Login details is missing");
        next(error);
        return;
    }
    User
       .findOne({email:u.email})
       .then(user=>{
           if(!user){
               const error = new Error("No data matching");
               error.status = 404;
               return next(error);
           }

           user.checkPassword( u.password, ( err, isMatch ) => {
            if(err){
            const error = new Error("Login details is missing");
            next(error);
            return next(error);
               }
            
            if( !isMatch ) {
                const error = new Error( 'No matching credentials' );
                error.status = 404;
                return next( error );
            }
               
           const data = {
               name:user.name,
               email:user.email
           };
           jwt.sign(data,'alan',{ expiresIn: 24 * 60 * 60 },(error,token)=>{
               if(error){
                   error.status = 500;
                   return next(error);
               }
               res.status(200).json({
                   email:user.email,
                   token:token
               });
           });
       });
    })
       .catch(error=>{
           if(error.name === "ValidationError"){
               error.status = 400;
           }
           else{
               error.status = 500;
           }
           return next(error);
       })
}

module.exports = {
    register,
    login
};
    