
alert("Eu sou um alerta java script");
var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;

function bemVindo() {
    alert("Bem Vindo ao mundo JavaScript")
}

function mostraNome() {
    var nome = document.getElementById("nome").value;
    alert(nome);
}

function enviaCadastro() {
    var nome = document.getElementById("nome").value;
    if ( nome.length <= 0 ) {
        alert('nome deve ser informado');
    }else if(email.lenght <= 0 ){
        alert('email de ser informado');
    } else{
        alert('cadastro enviado com sucesso');
    }
}