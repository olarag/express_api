const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
	res.send('Hello World')
})

app.listen(port, () => {
	console.log(`Example app listening on ${port}`)
})

app.get('/v1/explorers', (req,res) => {
	console.log(`Àpi Explorers GET ALL request ${new Date()}`)
	const explorer1 = {id: 1, name: "Explorer1"}
	const explorer2 = {id: 2, name: "Explorer2"}
	const explorer3 = {id: 3, name: "Explorer3"}
	const explorer4 = {id: 4, name: "Explorer4"}
	const explorers = [explorer1, explorer2, explorer3, explorer4]
	res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
	console.log(`Api Explorers GET request ${new Date()}`)
	console.log(`Getting explorer with id ${req.params.id}`)
	const explorer = {id: 1, name: "Oscar"}
	res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
	console.log(`Api Explorers POST request ${new Date()}`)
	const requestBody = req.body
	res.status(201).json({mesagge: "Created"})
})

app.put('/v1/explorers/:id', (req, res) => {
	console.log(`Api Explorers PUT request ${new Date()}`)
	console.log(`Update explorer with id ${req.params.id}`)
	const requestBody = req.body
	res.status(200).json({message: "Updated!"})
})

app.delete('/v1/explorers/:id', (req, res) => {
	console.log(`Api Explorers DELETE request ${new Date()}`)
	console.log(`Delete explorer with id ${req.params.id}`)
	const requestBody = req.body
	res.status(200).json({message: "Deleted"})	
})
