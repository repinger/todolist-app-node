const knex = require('../../databases')
const { check, validationResult } = require('express-validator');

module.exports = {
    createTodoList: async (req, res) => {
        const { title, description, user_id } = req.body;
        await check('title').isString().notEmpty().run(req)
        await check('description').isString().notEmpty().run(req)
        const result = validationResult(req)
        if (!result.isEmpty()) return res.status(400).json({errors: result.array()})
        const todolist = await knex('todolists').insert({
            user_id,
            title,
            description
        })
        if (todolist.length == 0) return res.status(400).json({message: 'Failed Create Todo List'})
        return res.status(200).json({message: 'Success Create Todo List'})
    },
    getsTodoList: async (req, res) => {
        const todolist = await knex('todolists')
        if (todolist.length == 0) return res.status(404).json({message: 'Todo List is Empty'})
        return res.status(200).json({data: todolist})
    },
    getsTodoListByUser: async (req, res) => {
        const { user_id } = req.params
        const todolist = await knex('todolists').where('user_id', user_id)
        if (todolist.length == 0) return res.status(404).json({message: 'Todo List is Empty'})
        return res.status(200).json({data: todolist})
    },
    getTodoList: async (req, res) => {
        const { id } = req.params
        const todolist = await knex('todolists').where('id', id).first()
        if (!todolist) return res.status(404).json({message: 'Todo List Not Found'})
        return res.status(200).json({data: todolist})
    },
    updateTodoList: async (req, res) => {
        const { id } = req.params
        const { title, description } = req.body
        await check('title').isString().notEmpty().run(req)
        await check('description').isString().notEmpty().run(req)
        const result = validationResult(req)
        if (!result.isEmpty()) return res.status(400).json({errors: result.array()})
        const todolist = await knex('todolists').where('id', id).update({
            title,
            description
        })
        if (todolist.length == 0) return res.status(400).json({message: 'Failed Update Todo List'})
        return res.status(200).json({message: 'Success Update Todo List'})
    },
    deleteTodoList: async (req, res) => {
        const { id } = req.params
        const todolist = await knex('todolists').where('id', id).del()
        if (todolist.length == 0) return res.status(400).json({message: 'Failed Delete Todo List'})
        return res.status(200).json({message: 'Success Delete Todo List'})
    }
}