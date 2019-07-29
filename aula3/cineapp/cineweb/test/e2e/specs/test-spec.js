

decribe('MovieList', ()=> {
  it('aplicacao no ar', ()=>{
    browser.get("/")
    var title = element(by.css('#movies h1'))
    expect(title.getText()).toEqual("cadastro de filmes")
  })
})