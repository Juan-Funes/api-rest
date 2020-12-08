const {Schema , model} = require('mongoose');


const userSchema = new Schema ({

userName : {
    type : String,
    required: true,
    trim: true, // acomoda los espacios " JUAN   FUNES" lo acomoda "JUAN FUNES"
    unique: true
},
correo :{
    type: String,
    required:true
}
 
},
{
timestamps: true

});

module.exports = model('User' , userSchema);