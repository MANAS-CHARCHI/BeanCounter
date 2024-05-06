const router = require('express').Router()
const { addExpence, getExpences, deleteExpence } = require('../Controller/expence.controller')
const { addIncome, getIncomes, deleteIncome }=require('../Controller/income.controller')


router.post('/add-income', addIncome) //this method will going to comming from the controller
        .get('/get-incomes', getIncomes)
        .delete('/delete-Income/:id', deleteIncome )
        .post('/add-expence', addExpence)
        .get('/get-expence', getExpences)
        .delete('/delete-expence/:id', deleteExpence)

module.exports= router