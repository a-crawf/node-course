const { MongoClient, ObjectID } = require('mongodb')

//Using full localhost IP to prevent bugs and performance issues
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
//Has an id field on it because id is a binary object saved in the DB for memory optimisation. 
//This is why you see ObjectId(...) in the table. It's showing that it's not actually a string underneath. 
//The raw value is what you would get back from the ObjectId(...) 
//function if you were to call it with the string representation.
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteOne({
        _id: new ObjectID("60051e3e95c3113ad4527ad4")
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})