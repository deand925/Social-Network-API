const { Thought } = require('../models');

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
    } catch (error) {
        res.status(500).json({ error });  
    }
};

const newThought = async (req, res) => {
    try {
        const addThought = await Thought.create(
            req.body,
            {
                $addToSet: {
                    thoughts: req.params.thoughtId
                }
            }
        )
        res.send('Thought added')
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

module.exports = { getAllThoughts, getOneThought, newThought, deleteThought }