const officialuser =require("../controllers/officialuser.controller")

module.exports = function(app){
    app.post('/api/official/new', officialuser.createOfficialUser);
    app.delete('/api/official/:id',officialuser.deleteOfficialUser);
    app.put("/api/official/edit/:id", officialuser.updateOfficialUser);
    app.get('/api/official/:id', officialuser.findOfficialUser)
    app.get('/api/officials', officialuser.findAllOfficialUser);
    app.get('/api/official/:gender', officialuser.findAllOfficialUsergender)
    app.get('/api/official/:district', officialuser.findAllOfficialUserdistrict)
    app.get('/api/official/:district/:gender', officialuser.findAllOfficialUserdistrict_gender)
    app.get('/api/official/:candidate', officialuser.findAllOfficialUsercandidate)

}