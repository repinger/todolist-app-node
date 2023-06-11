const knex = require('../../databases')
const { check, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createUser: async (req, res) => {
        const { nrp, name } = req.body;
        await check('nrp').isString().notEmpty().isLength({ min: 10, max: 10 }).run(req)
        await check('name').isString().notEmpty().run(req)
        const result = validationResult(req)
        if (!result.isEmpty()) return res.status(400).json({errors: result.array()})
        if (await knex('users').where('nrp', nrp).then(data => data.length) !== 0) return res.status(400).json({message: 'NRP Already Exist'})
        const user = await knex('users').insert({
            uuid: uuidv4(),
            nrp,
            name
        })
        if (user.length == 0) return res.status(400).json({message: 'Failed Create User'})
        return res.status(200).json({message: 'Success Create User'})
    },
    getsUser: async (req, res) => {
        const user = await knex('users')
        if (user.length == 0) return res.status(404).json({message: 'User is Empty'})
        return res.status(200).json({data: user})
    },
    getUser: async (req, res) => {
        const { uuid } = req.params
        const user = await knex('users').where('uuid', uuid).first()
        if (!user) return res.status(404).json({message: 'User Not Found'})
        return res.status(200).json({data: user})
    },
    updateUser: async (req, res) => {
        const { uuid } = req.params
        const { nrp, name } = req.body
        await check('nrp').isString().notEmpty().isLength({ min: 10, max: 10 }).run(req)
        await check('name').isString().notEmpty().run(req)
        const result = validationResult(req)
        if (!result.isEmpty()) return res.status(400).json({errors: result.array()})
        if (await knex('users').where('nrp', nrp).then(data => data.length) > 1) return res.status(400).json({message: 'NRP Already Exist'})
        const user = await knex('users').where('uuid', uuid).update({
            nrp,
            name
        })
        if (user.length == 0) return res.status(400).json({message: 'Failed Update User'})
        return res.status(200).json({message: 'Success Update User'})
    },
    deleteUser: async (req, res) => {
        const { uuid } = req.params
        const user = await knex('users').where('uuid', uuid).first()
        if (!user) return res.status(404).json({message: 'User Not Found'})
        const todolist_user = await knex('todolists').where('user_id', user.id).del()
        if (todolist_user.length == 0) return res.status(400).json({message: 'Failed Delete User'})
        const user_delete = await knex('users').where('uuid', uuid).del()
        if (user_delete.length == 0) return res.status(400).json({message: 'Failed Delete User'})
        return res.status(200).json({message: 'Success Delete User'})
    }
}