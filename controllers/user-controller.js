const { User } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error });
    }
};


const getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findById(
            req.params.userId,
        )
        res.json(oneUser)
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
            { new: true }
        )
        res.send('User was deleted');
    } catch (error) {
        res.status(500).json({ error });
    }
}

const addFriend = async (req, res) => {
    try {
        const addedFriend = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $addToSet: {
                    friends: req.params.friendId
                }
            }
        )
        res.send('Friend added');
    } catch (error) {
        res.status(500).json({ error });
    }
}

const removeFriend = async (req, res) => {
    try {
        const removedFriend = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $pull: {
                    friends: req.params.friendId
                }
            }
        )
        res.send('Friend removed');
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser, addFriend, removeFriend }