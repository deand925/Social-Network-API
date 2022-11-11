const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=>{
            return new Types.ObjectId();
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
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
     virtuals: true,
     getters: true
    },
    id: false
 }
 );
 
 thoughtSchema.virtual('reactionCount').get(function() {
     return this.reactions.length;
 });

module.exports = model('Thought', thoughtSchema);