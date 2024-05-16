//variáveis de escopo global
var nome = document.querySelector("#inputName");
var nomeHelp = document.querySelector("#inputNameHelp");
var ano = document.querySelector("#inputYear");
var anoHelp = document.querySelector("#inputYearHelp");
var email = document.querySelector("#inputEmail");
var emailHelp = document.querySelector("#inputEmailHelp");
var senha = document.querySelector("#inputPassword");
var senhaHelp = document.querySelector("#inputPasswordHelp");
var senhaMeter = document.querySelector("#passStrengthMeter");

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo inputName mude, será chamada a função validarNome*/
nome.addEventListener('focusout', validarNome);
email.addEventListener('focusout', validarEmail);
senha.addEventListener('focusout', validarSenha);

function calcularAnoBaseMin() {
    const anoAtual = new Date().getFullYear(); // Obtém o ano atual
    const anoBase = anoAtual - 1900; // Calcula a diferença entre o ano atual e 1900
    return anoBase;
}

function calcularAnoBaseMax() {
    const anoAtual = new Date().getFullYear(); // Obtém o ano atual
    const dif = anoAtual - 2022; //calcula a diferença do ano atual e 2022
    return dif;
}

/*declaração tradicional de função validarNome(e)
'e' é o objeto do tipo evento que contém, alpem de outras propriedades, o objeto que iniciou o evento,
neste caso o objeto 'nome'
*/
function validarNome(e){ 
    //declaração da expressão regular para definir o formato de um nome válido
    const regexNome = /^(?:[A-Z][a-z]{5,})(?: [A-Z][a-z]{1,})?(?: [A-Z][a-z]{1,})?$/


    console.log(e);
    console.log(e.target.value);
    const nomeTrimmado = nome.value.trim()

    if(nomeTrimmado.match(regexNome) == null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputNameHelp
        nomeHelp.textContent = "Formato de nome inválido"; 
        nomeHelp.style.color="red";
    }
    else{
        nomeHelp.textContent = "Nome váildo!";
        nomeHelp.style.color="green";
    }       
}  

function validarEmail(email) {
    var regexEmail = /\S+@\S+\.\S+/;

    console.log(email);
    console.log(email.target.value); 

    if (email.target.value.length < 6 || email.target.value.length > 20){
        emailHelp.textContent = "Formato de email inválido. O email deve conter entre 6 e 20 caracteres!"; 
        emailHelp.style.color="red";
    }
    else if(email.target.value.trim().match(regexEmail) == null){
        emailHelp.textContent = "Formato de email inválido. Exemplo: example@usp.br"; 
        emailHelp.style.color="red";
    }
    else{
        emailHelp.textContent = "";
    }    
  }

  function validarSenha(e) {
    const regexSenhaFraca = /^(?=.*[!@#$%^&*])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{1,7}$/;
    const regexSenhaModerada = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z])[A-Za-z0-9!@#$%^&*]{8,}$/;
    const regexSenhaForte = /^(?=(.*?[!@#$%^&*]){2})(?=(.*?\d){2})(?=(.*?[A-Z]){2}).{12,}$/;
    const nomeTrimmado = nome.value.trim().split(' ')[0];
    const primeiroNomeComposto = nome.value.trim().split(' ')[1];
    const anoNascimento = ano.value.trim()

    console.log(e.target.value); // Impressão em console do valor do objeto 'senha' que originou o evento  
    console.log(nomeTrimmado); //
    console.log(primeiroNomeComposto);
    console.log(e.target.value.trim().includes(nomeTrimmado));
    console.log(e.target.value.trim().includes(anoNascimento));

    if (e.target.value.trim() === '') {
        senhaHelp.textContent = "Campo de senha vazio";
        senhaHelp.style.color = "red";
        senhaMeter.value = 0;
        senhaMeter.low = 0;
        senhaMeter.high = 100;
        senhaMeter.optimum = 100;
    }else if (e.target.value.trim().match(regexSenhaForte)) {
        senhaHelp.textContent = "Senha forte";
        senhaHelp.style.color = "green";
        senhaMeter.value = 100; // Valor para senha forte
        senhaMeter.low = 75;
        senhaMeter.high = 100;
        senhaMeter.optimum = 100;
    }else if (e.target.value.trim().match(regexSenhaModerada)) {
        senhaHelp.textContent = "Senha moderada";
        senhaHelp.style.color = "yellow";
        senhaMeter.value = 50; // Valor para senha moderada
        senhaMeter.low = 25;
        senhaMeter.high = 75;
        senhaMeter.optimum = 100;
    }else if (e.target.value.trim().match(regexSenhaFraca)) {
        senhaHelp.textContent = "Senha fraca";
        senhaHelp.style.color = "red";
        senhaMeter.value = 20; // Valor para senha fraca
        senhaMeter.low = 25;
        senhaMeter.high = 70;
        senhaMeter.optimum = 100;
    }
    else if(e.target.value.trim().includes(nomeTrimmado) || e.target.value.trim().includes(primeiroNomeComposto) || e.target.value.trim().includes(anoNascimento)){
            senhaHelp.textContent = "A senha não pode conter seu ano de nascimento ou seu nome!";
            senhaHelp.style.color = "red";
    }else {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "black";
        senhaMeter.value = 0; // Valor para senha inválida
        senhaMeter.low = 20;
        senhaMeter.high = 80;
        senhaMeter.optimum = 100;
    }
}

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco seja mudado, será chamada a função validarNome*/

//declaração de função de forma anônima usando uma expressão de função de seta =>
ano.addEventListener('focusout', () => {
    //declaração da expressão regular para definir o formato de um ano válido
    const regexAno = /^[0-9]{4}$/;
    //tirar (trim) espaços em branco antes e depois da string
    const anoTrimado = ano.value.trim();
    console.log(ano.value);

    if(anoTrimado.match(regexAno) == null){
        anoHelp.textContent = "Formato de ano inválido";
        anoHelp.style.color="red";
    }
    else{
        //objeto Date
        var date = new Date();
        const anoMax = calcularAnoBaseMax()
        const anoMin = calcularAnoBaseMin()
        //obtem o ano atual
        console.log(date.getFullYear()); 
        
        if( parseInt(anoTrimado) > parseInt(date.getFullYear() - anoMax) ){
            anoHelp.textContent = `Ano inválido. O ano não pode ser maior que ${date.getFullYear()-anoMax}.`;
            anoHelp.style.color="red";
        }
        else if( parseInt(anoTrimado) < parseInt(date.getFullYear()) - anoMin){
            anoHelp.textContent = `Ano inválido. O ano não pode ser menor que ${date.getFullYear()-anoMin}.`;
            anoHelp.style.color="red";
        }
        else{
            anoHelp.textContent="";
        }        
        
    }
          
}

);