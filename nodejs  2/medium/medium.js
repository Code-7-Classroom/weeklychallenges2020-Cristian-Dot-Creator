
const express = require('express');
let data = require('./employee.json')


let app = express();


app.get('/api/employee', (req,res) => {
    if(!data){
        res.status(404).send(`Couldnt find the employee`)
    }
    res.send(data)
})




app.get('/api/employee/id', function (req,res){
    const employee = data.employee.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })
    if(!employee){
        res.status(404).send(`Couldnt find the employee id`)
    }
    res.send(employee)
})









const port = process.env.PORT || 3000;


app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})