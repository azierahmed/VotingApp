const officialuser =require("../controllers/officialuser.controller")

module.exports = function(app){
    app.post('/api/official/new', officialuser.createOfficialUser);
    app.delete('/api/official/:id',officialuser.deleteOfficialUser);
    app.put("/api/official/edit/:id", officialuser.updateOfficialUser);
    app.get('/api/official/:id', officialuser.findOfficialUser)
    app.get('/api/officials', officialuser.findAllOfficialUser);
    app.get('/api/official/gender/:gender', officialuser.findAllOfficialUsergender)
    app.get('/api/official/district/:name', officialuser.findAllOfficialUserdistrict)
    app.get('/api/official/dist_gen/:district/:gender', officialuser.findAllOfficialUserdistrict_gender)
    app.get('/api/official/leg/candidate/:candidate', officialuser.findLegislativeVoteCandy)
    app.get('/api/official/leg/partyList/:partyList', officialuser.findLegislativeVoteParty)
    app.get('/api/official/pres/candidate/:candidate', officialuser.findpresidentialVoteCandy)
    app.get('/api/official/pres/partyList/:partyList', officialuser.findPresidentialVoteParty)
    
}