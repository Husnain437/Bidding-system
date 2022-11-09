const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

var cors = require('cors')
const EmployeeRoute = require('./routes/employee')
const AuthRoute = require('./routes/auth')
const BidRoute = require('./routes/bidroute')


// mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb+srv://HusnainAli:Husnain437@cluster0.j57ee.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!')

})

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 3002


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/bid', BidRoute)
app.use('/api/employee', EmployeeRoute)
app.use('/api', AuthRoute)