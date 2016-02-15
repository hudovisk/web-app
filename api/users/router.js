var router = require('express').Router();
var userController = require('./user-controller');

//Users API

/**
 * @api {get} /users/me Get the logged user
 * @apiName getMe
 * @apiGroup users
 *
 * @apiSuccess {Object} . Current logged user.
 *
 * @apiSuccessExample Success-Response:
 * 
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "56bec35288c2a8692ac3f144",
 *        "name": "Hudo",
 *        "email": "hudo",
 *        "__v": 0
 *      }
 */
router.get('/users/me', userController.getMe);

/**
 * @api {get} /users List all users
 * @apiName getUsers
 * @apiGroup users
 *
 * @apiSuccess {Object[]} . All users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "_id": "56beb5c09a2b85152930d9f5",
 *              "name": "test",
 *              "email": "aa",
 *              "__v": 0
 *          },
 *          {
 *              "_id": "56bec35288c2a8692ac3f144",
 *              "name": "Hudo",
 *              "email": "hudo",
 *              "__v": 0
 *          },
 *          ...
 *      ]
 */
router.get('/users', userController.getUsers);



module.exports = router;