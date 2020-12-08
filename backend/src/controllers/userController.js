const userController = {};
const User = require ('../models/user');

userController.getUsers = async(req,res) => {
    const users = await User.find();
    console.log('Obteniendo Usuarios...')
    res.json(users);


};
userController.createUser= async(req,res) => {
    const {userName, correo} = req.body;
    const newUser = new User({
        userName,
        correo
    });
    await newUser.save();
    res.json({message:'Usuario Creado'})
};
userController.updateUsers= async (req,res) => {
const  {userName,correo} = req.body;
await User.findOneAndUpdate(req.params.id,{
userName,correo
});
console.log('se modifico');
    
};


userController.getUser = async (req,res) => {
const user = await User.findById(req.params.id);

    res.json(user)
};

userController.deleteUsers= async (req,res) => {
    const userDelete = await User.findByIdAndDelete(req.params.id);
    console.log('se elimino');
    res.json(userDelete);
 
};

module.exports = userController;