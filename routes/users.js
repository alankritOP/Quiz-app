const express = require( 'express' );
const {getUsers} = require( '../controller/users' );
const router = express.Router();

router.get( '/',getUsers );

module.exports = router;