const express = require( 'express' );
const { addQuestions, getQuestionsById, getMarks } = require( '../controller/questions' );
const router = express.Router()

router.post("/",addQuestions);
router.get('/:id',getQuestionsById);
router.post("/marks",getMarks);

module.exports = router;
