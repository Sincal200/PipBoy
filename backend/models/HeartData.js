const mongoose = require('mongoose');
const {Schema} = mongoose;

const HeartDataSchema = new Schema(
    {
        beatsPerMinute: {
            type: Number,
            required: true
        },
        beatAvg: {
            type: Number,
            required: true
        },
        user:{
            type: String
        }
    },
    {
        timestamps: true,
    }
);

const HeartData = mongoose.model('HeartData', HeartDataSchema);
module.exports = HeartData;