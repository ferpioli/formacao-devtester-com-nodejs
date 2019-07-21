import chai from 'chai';
import chaiHttp from 'chai-http';
import moviesModel from '../models/movie'


chai.use(chaiHttp);

const app = require('../app');
const expect = chai.expect;
const request = chai.request(app);

describe('get movies', () => {
    // before((done) => {
    //     MoviesModel.deleteMany({}, (err, result) => { });
    //     done();
    // })
    describe('deve retornar uma lista de filmes', () => {

        before((done) => {
            let movies = [
                { name: 'Deadpool2', year: 2018, cast: ['Ryan Reynolds', 'Josh Brolin'], plot: 'O Super soldado Cable vem do futuro com a missão...' },
                { name: 'Vingadores Era de Ultron', year: 2015, cast: ['Robert Downey Jr.', 'Eliabeth Olsen'], plot: 'Ao tentar proteger o planeta de ameaças Tony Stark...' },
                { name: 'Vingadores Endgame', year: 2019, cast: ['Robert Downey Jr.', 'Chris Evans'], plot: 'Apos Thanos eliminar metade das criaturas vivas os vingadores...' }
            ]
            moviesModel.insertMany(movies, (err, result) => { });
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
        it('quando eu faço um filtro por nome do filme', (done) => {
            request
                .get('/movies')
                .query({ name: 'vingadores' })
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.body.data[0].name).to.equal('Vingadores Era de Ultron')
                    expect(res.body.data[1].name).to.equal('Vingadores Endgame')
                    done()
                })
        })
    })
    describe('deve retornar um unico filme', () => {
        it('quando eu busco por id ', (done) => {
            let movies = [
                { name: 'Guardioes da galaxa vol.2', year: 2017, cast: ['Chris Pratt', 'Zoe Saldana'], plot: 'Agora ja conhecidos como os guardioes da galaxia, eles viajam...' },

            ]
            moviesModel.insertMany(movies, async (err, result) => {
                var id = (result[0]._id);
                request
                    .get('/movies/' + id)
                    .end((err, res) => {
                        expect(res).to.have.status(200)
                        expect(res.body.data.name).to.eql('Guardioes da galaxa vol.2')
                        done();
                    })



            });

        })
    })
    describe('deve retornar 404', () => {
        it('quando o id nao existe no banco', (done) => {
            var id = require('mongoose').Types.ObjectId();
            request
                .get('/movies/' + id)
                .end((err, res) => {
                    console.log(res.body);
                    expect(res).to.have.status(404)
                    expect(res.body).to.eql({})
                    done();
                })



        })
    })
})