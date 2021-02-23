const PresidentController = require('../controllers/president.controller');

module.exports = app => {
    app.post("/api/president/new", PresidentController.createPresident);
    app.get("/api/presidents", PresidentController.findAllPresidents);
    app.get("/api/president/:id", PresidentController.findPresident);
    app.put("/api/president/edit/:id", PresidentController.updatePresident);
    app.delete("/api/president/:id", PresidentController.deletePresident);
}