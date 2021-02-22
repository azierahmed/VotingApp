const districtcontroller =require("../controllers/district.controller")

module.exports = function(app){
    app.get('/api/districts', districtcontroller.findAllDistrict);
    app.post('/api/district/new', districtcontroller.createDistrict);
    app.delete('/api/district/:id',districtcontroller.deleteDistrict);
    app.put("/api/district/edit/:id", districtcontroller.updateDistrict);
    app.get('/api/district/:Popnumber', districtcontroller.findDistrictpopulation)
    app.get('/api/district/:name', districtcontroller.findDistrictname)
}