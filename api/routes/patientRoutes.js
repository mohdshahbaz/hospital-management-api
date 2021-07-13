'use strict';


// create App function
module.exports = function(app) {
    let patientList = require('../controllers/patientController');


    // patientList Routes

    // get and post request for /patients endpoints
    app.route("/patients")
        .get(patientList.listAllPatients)
        .post(patientList.createNewPatient);

    // put and delete request for /patients endpoints
    app.route("/patient/:id")
        .put(patientList.updatePatient)
        .get(patientList.getSinglePatient)
        .delete(patientList.deletePatient);
};