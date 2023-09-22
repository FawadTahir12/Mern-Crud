const userRoutes = require('express').Router();
const  user  = require('../controller.js/user')

userRoutes.post('/add',user.addUser);
userRoutes.get('/getUser/:id', user.getUser);
userRoutes.patch('/editUser/:id', user.updateUser);
userRoutes.delete('/deleteUser/:id', user.deleteUser);
userRoutes.get('/get-all-users', user.getAllUsers);


module.exports = userRoutes;