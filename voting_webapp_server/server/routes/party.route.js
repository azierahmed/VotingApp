const PartyController = require('../controllers/party.controller');

module.exports = app => {
    app.post("/api/party/new", PartyController.createParty);
    app.get("/api/parties", PartyController.findAllParties);
    app.get("/api/party/:id", PartyController.findParty);
    app.put("/api/party/edit/:id", PartyController.updateParty);
    app.delete("/api/party/:id", PartyController.deleteParty);
}