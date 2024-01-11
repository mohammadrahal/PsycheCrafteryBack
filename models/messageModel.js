const mongoose = require('mongoose');
const {Schema, model}= mongoose()

const MESSAGE = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER', 
        required: true
      },

      recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'THERAPY',
        required: true
      },

      content: {
        type: String,
        required: true
      },
      
      timestamp: {
        type: Date,
        default: Date.now
      },
})

const message = model('message', MESSAGE)
module.exports= message