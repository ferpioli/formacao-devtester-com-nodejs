import chai from 'chai';
import chaiHttp from 'chai-http';
import MoviesModel from '../models/movie'


chai.use(chaiHttp);

const app = require('../app');
const expect = chai.expect;
const request = chai.request(app);

describe('get movies', () => {
    describe('deve retornar uma lista de filmes', () => {

        before((done) => {
            let movies = [
                { name: 'Deadpool2', year: 2018, cast: ['Ryan Reynolds', 'Josh Brolin'], plot: 'O Super soldado Cable vem do futuro com a missão...' },
                { name: 'Vingadores Era de Ultron', year: 2015, cast: ['Robert Downey Jr.', 'Eliabeth Olsen'], plot: 'Ao tentar proteger o planeta de ameaças Tony Stark...' },
                { name: 'Vingadores Endgame', year: 2019, cast: ['Robert Downey Jr.', 'Chris Evans'], plot: 'Apos Thanos eliminar metade das criaturas vivas os vingadores...' }
            ]
            MoviesModel.insertMany(movies, (err, result) => { });
            done();
        })

        it('quando eu faço um get', (done) => {
            request
                .get('/movies')
                .end((err, res) => {
                    expect(res).to.has.status(200);
                    expect(res.body.data).to.be.an('array');
                    expect(res.body.data.length).to.be.a('number')
                    console.log(res.body.data.length);
                    done();
                })


        })
    })
})