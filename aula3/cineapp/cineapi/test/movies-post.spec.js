import chai from 'chai';
import chaiHttp from 'chai-http';
import moviesModel from '../models/movie'


chai.use(chaiHttp);

const app = require('../app');
const expect = chai.expect;
const request = chai.request(app);

describe("Post Movies", () => {
    it('deve cadastrar um novo filme', (done) => {
        request
            .post('/movies')
            .send({ name: "The Avengers", year: 2012, cast: ["Cris Evans", "Robert Downey Jr."] })
            .end((err, res) => {
                expect(res).to.has.status(200);
                expect(res.body.data.name).to.be.an('string')
                expect(res.body.data.year).to.be.an('number')
                expect(res.body.data.cast).to.be.an('array')
                done();
            })
    })
    describe('deve retornar erro 400',() => {
        it('quando nao informo o nome', (done)=> {
            request
            .post('/movies')
            .send({ year: 2012, cast: ["Cris Evans", "Robert Downey Jr."] })
            .end((err, res) => {
                expect(res).to.has.status(400);
                done();
            })

        })
        
    })

    describe('deve retornar erro 500', () => {
        let movie = { name: "Shazam", year: 2019, cast: ["Zachary Levi"] }

        before((done) => {
            request
                .post('/movies')
                .send(movie)
                .end((err, res) => {
                    expect(res).to.has.status(200);
                    done();

                })
            })

            it('quando o filme foi cadastrado', (done) => {
                request
                    .post('/movies')
                    .send(movie)
                    .end((err, res) => {
                        expect(res).to.has.status(500);
                        expect(res.body.errmsg).to.include('duplicate key')

                        done();
                    })
            })
        })
    })