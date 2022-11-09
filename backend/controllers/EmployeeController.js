/*const { CommandStartedEvent } = require('mongodb')*/
const { response } = require('express')
const Employee = require('../models/Employee')

// show the list of Employees
const index = (req, res, next) => {
   Employee.find()
     .then(response => {
        res.json({
            response
        })
     })
     .catch(error => {
        res.json({
            message: 'An error Occured'
        })
     })
}


    // show single employee
   const show = (req, res, next) => {
       let employeeID = req.body.employeeID
       Employee.findById(employeeID)
       .then(response => {
           res.json({
               response  
           })
       })
       .catch(error => {
           res.json({
               message: 'An error Occured!'
           })
       })
   }

     // add new employee
    const store = (req, res, next) => {
           let employee = new Employee({
               name: req.body.name,
               designation: req.body.designation,
               email: req.body.email,
               phone: req.body.phone,
               age:  req.body.age
           })
           if(req.file){
               
               let path = ''
              req.files.forEach(function(files, index, arr){
                   path = path + files.path + ','
               })
               path = path.substring(0, path.lastIndexOf(","))
               employee.avatar = path
           }
           
           employee.save()
           .then(response => {
               res.json({
                   message: 'User Added Successfully!'
               })
           })
           .catch(error => {
               res.json({
                   message: 'An error Occured!'
               })
           })
    }

       // update an employee

        const update = (req, res, next) => {
            let employeeID = req.body.employeeID

            let updatedData = {
                name: req.body.name,
                designation: req.body.designation,
               email: req.body.email,
               phone: req.body.phone,
               age:  req.body.age
            }

            Employee.findByIdAndUpdate(employeeID, {$set:updatedData})
            .then(() => {
                res.json({
                    message: 'Employee updated successully!'
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error Occured!'
                })
            })
        }

         //delete an employee
          const destroy = (req, res, next) => {
              let employeeID = req.body.employeeID
              Employee.findByIdAndRemove(employeeID)
              .then(() => {
                  res.json({
                      message: 'Empolyee deleted successfully!'
                  })
              })
              .catch(error => {
                  req.json({
                      message: 'An error Occured!'
                  })
              })
          }

          module.exports = {
              index, show, store, update, destroy
          }