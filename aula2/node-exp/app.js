const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/', function (req, res) {
    return res.json({ msg: 'Ola node com Express' });

})

app.get('/users', function (req, res) {
    var users = [
        { id: 1, name: "Fernando", email: "fernando@test.com" },
        { id: 2, name: "camila", email: "camila@test.com" },
        { id: 3, name: "bruce", email: "bruce@test.com" }
    ]
    return res.json(users);
})

app.get('/users/:id', function (req, res) {
    var user = { id: 1, name: "Fernando", email: "fernando@test.com" }
    if (user.id == req.params.id) {
        res.json(user)
    } else {
        res.status(404).json({ msg: 'usuário não encontrado. ' })

    }

})
app.post('/users', function(req, res){
    var newUser = req.body;
    newUser.id= '4'
    return res.json(newUser)

})
app.listen(3000);

module.exports = app;