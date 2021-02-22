const District = require("../models/district.model");

module.exports.createDistrict = (request, response) => {
    District.create(request.body)
        .then(newDistrict => response.json(newDistrict))
        .catch(err => response.status(400).json(err))
};
module.exports.findAllDistrict= (request, response) => {
    District.find()
        .then(allOfficialDistrict => response.json(allOfficialDistrict))
        .catch(err => response.json(err))
};
module.exports.updateDistrict= (request, response) => {
    District.findOneAndUpdate({ _id: request.params.id },request.body,{ new: true, runValidators: true })
        .then(allOfficialDistrict => response.json(allOfficialDistrict))
        .catch(err => response.json(err))
};
module.exports.deleteDistrict= (request, response) => {
    District.deleteOne({ _id: request.params.id })
        .then(allOfficialDistrict => response.json(allOfficialDistrict))
        .catch(err => response.json(err))
};
module.exports.findDistrictname= (request, response) => {
    District.find({ name: request.params.name })
        .then(allOfficialDistrict => response.json(allOfficialDistrict))
        .catch(err => response.json(err))
};
module.exports.findDistrictpopulation= (request, response) => {
    District.find({ population: {$gte:request.params.Popnumber }})
        .then(allOfficialUser => response.json(allOfficialUser))
        .catch(err => response.json(err))
};