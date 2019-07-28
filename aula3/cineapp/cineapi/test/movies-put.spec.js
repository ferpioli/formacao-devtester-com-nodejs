import chai from 'chai';
import chaiHttp from 'chai-http';
import moviesModel from '../models/movie'

chai.use(chaiHttp);

describe.skip('Put Movies', () => {
    describe('deve atualizar o filme', (done) => {
        let movie = {
            _id: require("mongoose").Types.ObjectId(),
            name: "Capitão America 2",
            year: 2012,
            cast: ["chris Evans", "Anthony Mackie", "Scarlett johansson s2"]
        }

        it('quando o mesmo existe', (done) => {
            moviesModel.insertMany([movie], (error, result) => {

                movie.name = "Capitão America 2 - O soldado Infernal"
                movie.year = 2014

                request
                    .put('/movies/' + movie.id)
                    .send(movie)
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        done();

                    })

            })
        })

        after((done) => {
            request
                .get('/movies/' + movie._id)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.data.name).to.equal(movie.name)
                    expect(res.body.data.year).to.equal(movie.year)
                    done();
                })
        })




})
})