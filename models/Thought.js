const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=>{
            return new Schema.Types.ObjectId();
        }
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            if (date) return date.toISOString().split("T") [0];
          },
    }
})

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
       // required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            if (date) return date.toISOString().split("T") [0];
          },
    },
    username: {
        type: String,
      //  required: true,
    },
    reactions: [reactionSchema],
})

module.exports = model('Thought', thoughtSchema);