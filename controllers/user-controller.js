const { User } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const  users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// go over with tutor
const getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findById(
            req.params.userId,
        )
    } catch (error) {
        res.status(500).json({ error });
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = await User.create({
            ...req.body
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error });
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            { ...req.body },
            { new: true }
        );
        res.json(updatedUser)
    } catch (error) {
        res.status(500).json({ error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(
            req.params.userId,
            { ...req.body },
            { new: true }  
        )
    } catch (error) {
        res.status(500).json({ error });
    }
}