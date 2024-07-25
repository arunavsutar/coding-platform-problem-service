const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title can not be Empty."]
    },
    description: {
        type: String,
        required: [true, "Description can not be Empty."]
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: [true, "Difficulty can not be Empty."],//Not necessary as default is mentioned.
        default: 'easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: [true, "Input can not be Empty."]
            },
            output: {
                type: String,
                required: [true, "Output can not be Empty."]
            }
        }
    ],
    codeStubs: [
        {
            language: {
                type: String,
                enum: ['JAVA', 'CPP', 'PYTHON'],
                required: true
            },
            startSnippet: {
                type: String,
            },
            userSnippet: {
                type: String
            },
            endSnippet: {
                type: String,
            }
        }
    ],
    editorial: {
        type: String,
        //required: [true,"Editorial can not be Empty."]
    }
});


const Problem = mongoose.model('problem', problemSchema);


module.exports = Problem;