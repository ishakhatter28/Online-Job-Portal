const mongoose = require("mongoose");

const prefSchema = new mongoose.Schema({
    company : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    qualification : {
        type : String,
        required : true
    },
    mark : {
        type : String,
        required : true
    },
    university : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    }
});

const Preference = new mongoose.model("Preference" , prefSchema);

module.exports = Preference;