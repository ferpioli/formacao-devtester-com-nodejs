const supertest = require('supertest');

const express = require('express');

const chai = require('chai')

const expect = chai.expect;

const app = require('../app.js')

const request = supertest(app)

describe('API tests', function(){
    it('servidor online',function(done){
        request
        .get('/')
        .expect(200)
       .end(function(err, res){
           console.log(res.body);
           expect(res.body).to.eql({msg: 'Ola node com Express'})
           done(err);
       })

    })
})