const express = require( 'express' );
const { addQuestions, getQuestionsById } = require( '../controller/questions' );
const router = express.Router()

router.post("/",addQuestions);
router.get('/:id',getQuestionsById);

module.exports = router;
