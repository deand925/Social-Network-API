const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    newThought,
    deleteThought,
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    

router
    .route('/:thoughtId')
    .get(getOneThought)
    .delete(deleteThought)
    .post(newThought)


module.exports = router;