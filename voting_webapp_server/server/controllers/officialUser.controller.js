const OfficialUser = require("../models/officialUser.model");

module.exports.createOfficialUser = (request, response) => {
    OfficialUser.create(request.body)
        .then(newOfficialUser => response.json(newOfficialUser))
        .catch(err => response.status(400).json(err))
};

module.exports.findAllOfficialUser = (request, response) => {
    OfficialUser.find()
        .then(allOfficialUser => response.json(allOfficialUser))
        .catch(err => response.json(err))
};

module.exports.findOfficialUser = (request, response) => {
    OfficialUser.find({_id: request.params.id})
        .then(foundOfficialUser => response.json(foundOfficialUser))
        .catch(err => response.json(err))
};

module.exports.updateOfficialUser = (request, response) => {
    OfficialUser.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedOfficialUser => response.json(updatedOfficialUser))
        .catch(err => response.json(err))
};

module.exports.deleteOfficialUser = (request, response) => {
    OfficialUser.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};

module.exports.findAllOfficialUserdistrict = (request, response) => {
    OfficialUser.find({district:request.params.district})
        .then(allOfficialUser => response.json(allOfficialUser))
        .catch(err => response.json(err))
};
module.exports.findAllOfficialUsergender = (request, response) => {
    OfficialUser.find({gender:request.params.gender})
        .then(allOfficialUser => response.json(allOfficialUser))
        .catch(err => response.json(err))
};
module.exports.findAllOfficialUserdistrict_gender = (request, response) => {
    OfficialUser.find({district:request.params.district, gender:request.params.gender})
        .then(allOfficialUser => response.json(allOfficialUser))
        .catch(err => response.json(err))
};
module.exports.findLegislativeVoteCandy = (request, response) => {
OfficialUser.find({'legislativeVote.candidate': request.params.candidate })
        .then(allOfficialUser => response.json(allOfficialUser))
        .catch(err => response.json(err))
};
module.exports.findLegislativeVoteParty = (request, response) => {
    OfficialUser.find({'legislativeVote.partyList': request.params.partyList })
            .then(allOfficialUser => response.json(allOfficialUser))
            .catch(err => response.json(err))
    };
module.exports.findpresidentialVoteCandy = (request, response) => {
    OfficialUser.find({'presidentialVote.partyList': request.params.partyList })
            .then(allOfficialUser => response.json(allOfficialUser))
            .catch(err => response.json(err))
    };
module.exports.findPresidentialVoteParty = (request, response) => {
    OfficialUser.find({'presidentialVote.partyList': request.params.partyList })
            .then(allOfficialUser => response.json(allOfficialUser))
            .catch(err => response.json(err))
    };
