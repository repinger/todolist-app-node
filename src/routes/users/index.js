const express = require('express')
const {createUser, getsUser, getUser, getUserByID, updateUser, deleteUser} = require('../../resolvers/users')

const router = express.Router()

router.post('/', createUser)
router.get('/', getsUser)
router.get('/:uuid', getUser)
router.get('/id/:user_id', getUserByID)
router.put('/:uuid', updateUser)
router.delete('/:uuid', deleteUser)

module.exports = router
