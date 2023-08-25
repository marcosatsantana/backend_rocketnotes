const { Router } = require('express');

const UsersController = require('../controllers/UsersController');
const UserAvatarController = require('../controllers/UserAvatarController');
const multer = require('multer');
const uploadCofig = require('../configs/upload');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const upload = multer(uploadCofig.MULTER);
const usersRoutes = Router();

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;