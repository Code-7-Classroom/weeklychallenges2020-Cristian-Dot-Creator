
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

//post 
app.post('/employee', function(req,res){
    const sData = {
        id:data.employee.length + 1, 
        name: req.body.name,
        salary: req.body.salary,
        job: req.body.job

    }
    if(!sData) {
        res.status(404).send(sData)
    }
    data.employee.push(sData)
    res.send(sData)
});


//Put
app.put('/employee/:id', function (req,res) {
    const sData = data.employee.find(function(student){
        return parseInt(req.params.id) === student.id
    });
    
    if(!data){
        res.status(404).send(`Couldnt find the employee`)
    }

    sData.name = req.body.name,




//Delete
app.delete('/employee/:id', function (req,res){
    const sData = data.employee.find(function(student){
        return parseInt(req.params.id) === student.id
    });
    
    if(!data){
        res.status(404).send(`Couldnt find the employee`)
    }

    const index = data.employee.indexOf(sData)
    
    data.employee.splice(index,1)

    res.send(sData)
});






const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`server is running on port ${port}`);
});