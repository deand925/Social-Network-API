const { Thought, User } = require('../models');

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        console.log(thoughts);
        res.json(thoughts);
    } catch (error) {
        res.status(500).json({ error });
    }
};

const getOneThought = async (req, res) => {
    try {
        const singleThought = await Thought.findById(
            req.params.thoughtId,
        )
        res.json(singleThought);
    } catch (error) {
        res.status(500).json({ error });  
    }
};

// Returning 2 arrays
const newThought = async (req, res) => {
    try {
        const addThought = await Thought.create(
            req.body
        )
        const thoughtArray = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $addToSet: {
                    thoughts: addThought._id
                }
            }
        )
        res.send('Thought added')
    } catch (error) {
        res.status(500).json({ error });  
    }
}

const updateThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { ...req.body },
            { new: true }
        );
        res.json(updatedThought)
    } catch (error) {
        res.status(500).json({ error }); 
    }
}

const deleteThought = async (req, res) => {
    try {
        const deleteThoughts = await Thought.findByIdAndDelete(
           req.params.thoughtId 
        )
        res.send('Thought deleted')
    } catch (error) {
        res.status(500).json({ error }); 
    }
}


const addReaction = async (req, res) => {
    try {
        const newReactions = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {
                $addToSet: {
                    reactions: req.body
                }
            },
            { new: true }
        )
        res.json(newReactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });  
    }
}

const deleteReaction = async (req, res) => {
    try {
        const deletedReaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            {
                $pull: {
                    reactions: {reactionId: req.params.reactionId}
                }
            },
            { new: true},
        )
        res.send('Reaction Deleted')
    } catch (error) {
        res.status(500).json({ error }); 
    }
}

module.exports = { getAllThoughts, 
                    getOneThought, 
                    newThought, 
                    deleteThought, 
                    updateThought,
                    addReaction,
                    deleteReaction,
                }