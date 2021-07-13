// import patient model
const Patient = require("../models/patientModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllPatients function - To list all patients
exports.listAllPatients = (req, res) => {
    Patient.find({}, (err, patient) => {
        if(err) {
            res.status(500).sent(err);
        }
        res.status(200).json(patient);
    });
};

// getSinglePatient function - To get single patient by id
exports.getSinglePatient = (req, res) => {
    Patient.findById({ _id: req.params.id }, (err, patient) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).json(patient);
    });
}

// createNewPatient function - To create new patient
exports.createNewPatient = (req, res) => {
    let newPatient = new Patient(req.body) 
    newPatient.save((err, patient) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(201).json(patient);
    });
};

// updatePatient function - To update patient status by id
exports.updatePatient = (req, res) => {
    Patient.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, patient) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).json(patient);
    });
};

// deletePatient function - To delete patient by id
exports.deletePatient = async (req, res) => {
    await Patient.deleteOne({ _id:req.params.id }, (err) => {
        if(err) {
            return res.status(404).send(err);
        }
        res.status(200).json({ message: "Patient successfully deleted"});
    });
};
