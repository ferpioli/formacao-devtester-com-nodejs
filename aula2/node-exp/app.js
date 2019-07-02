const express = require('express');

const app = express();

app.get('/', function(req, res){
    return res.json({msg:'Ola node com Express'});

});

app.get('/users', function(req, res){
    var users=[
        {id: 1, name: "Fernando", email: "fernando@teste.com"},
        {id: 2, name: "camila", email: "camila@teste.com"},
        {id: 3, name: "bruce", email: "bruce@test.com"}
    ]
    return res.json(users)
});

app.get('/users:id', function(req,res){
    return res.json(req.params.id)

})
app.listen(3000);