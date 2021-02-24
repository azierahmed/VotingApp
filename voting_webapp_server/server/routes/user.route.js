const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.post("/api/user/new", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users", UserController.findAllUsers);
    app.get("/api/user/:id", UserController.findUser);
    app.get("/api/users/logged", UserController.findAllLoggedUser);
    app.put("/api/user/edit/:id", UserController.updateUser);
    app.delete("/api/user/:id", UserController.deleteUser);
    app.get("/api/logout", UserController.logout);
}