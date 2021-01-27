const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.send('Site is under maintenance. Please try back soon')
// })

//Automatically parse incoming json to an object
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')

const main = async () => {
    // const task = await Task.findById('6010f5193db7c972460bf9f5')
    // //Populates data which has a relationship to this object
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('6010f49b02105f6ed4540f7a')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()