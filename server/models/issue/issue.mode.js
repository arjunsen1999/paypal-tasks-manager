const mongoose = require('mongoose');

const issueSchema = mongoose.Schema({
    sprintId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "sprint"
    },
    create_by : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "auth"
    },
    assign_to : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "auth"
    },
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
    },
    type : {
        type : String,
        required : true,
    },
    important : {
        type : Boolean,
        default : false
    },
    status : {
        type : String,
        default : "pending"
    }
}, {
    versionKey : false,
    timestamps : true
});

const issueModel = mongoose.model("issue", issueSchema);
module.exports = {
    issueModel
}
