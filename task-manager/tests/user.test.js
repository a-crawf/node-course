const request = require('supertest')
const app = require('../src/app')

test('Should sign up a new user', async() => {
    await request(app).post('/users').send({
        name: 'Andrew',
        email: 'andrew3@example.com',
        password: 'MyPass777!'
    }).expect(201)
})