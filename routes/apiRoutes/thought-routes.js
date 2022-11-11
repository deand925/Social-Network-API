const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    newThought,
    deleteThought,
    updateThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    

router
    .route('/:thoughtId')
    .get(getOneThought)
    .delete(deleteThought)
    .put(updateThought)
    

router
    .route('/:thoughtId/reaction')
    .post(addReaction)

router
    .route('/user/:userId')
    .post(newThought)
    
router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;