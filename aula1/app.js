
//alert("Eu sou um alerta java script");
// //var nome = document.getElementById("nome").value;


// function bemVindo() {
//     alert("Bem Vindo ao mundo JavaScript")
// }

// function mostraNome() {
//     var nome = document.getElementById("nome").value;
//     alert(nome);
// }

document.getElementById("btnCadastro").addEventListener("click", function(event){

    event.preventDefault();
    console.log(event)
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var sexo = "";
    var sM = document.getElementById("masculino").checked;
    var sF = document.getElementById("feminino").checked;

    if (sM == true){
        sexo = 'Masculino'
    }
    if (sF == true){
        sexo = 'Feminino'
    }
    var novoCadastro = {
        nome : nome,
        email : email,
        senha: senha,
        celular: document.getElementById("celular").value,
        tipo_contato: document.getElementById("tipoContato").value,
        sexo: sexo,
        info: document.getElementById("info").value,
        news: document.getElementById("news").checked

    }
    if (nome.length <= 0) {
        alert('nome deve ser informado');
    } else if (email.length <= 0) {
        alert('email deve ser informado');
    } else if (senha.length <= 0) {
        alert('senha deve ser informada');
    }

    else {
        alert(JSON.stringify(novoCadastro));
    }

})

function enviaCadastro(event) {

   

    
}