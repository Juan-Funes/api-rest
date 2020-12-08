const  { Router } = require ('express');
const router = Router();
const { getUsers, createUser ,updateUsers,deleteUsers,getUser} = require('../controllers/userController');

router.route('/')
        .get(getUsers)
        .post(createUser)

router.route('/:id')
        .get(getUser)
        .put(updateUsers)
        .delete(deleteUsers)
        


module.exports = router;