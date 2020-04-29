// HARD: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.


const express = require('express');
let data = require('./employee.json')


let app = express();


app.get('/employee', (req,res) => {
    if(!data){
        res.status(404).send(`Couldnt find the employee`)
    }
    res.send(data)
})


app.get('/employee/id', function (req,res){
    const employee = data.employee.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })
    if(!employee){
        res.status(404).send(`Couldnt find the employee id`)
    }
    res.send(employee)
})


app.get('/employee/:id', (req,res) => {
    res.send('this is your id number');
});







const port = process.env.PORT || 3000;


app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})