const express = require( 'express' );
const { addTopics, getTopics } = require( '../controller/topic' );
const router =express.Router()

router.post( '/',addTopics );
router.get( '/getQuiz',getTopics );

module.exports = router;