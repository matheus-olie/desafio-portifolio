var regexNome = /[A-ZÀ-ü0-9@#$%¨&*-_+=^´`]/;
var regexEmail = /^(?=.{1,254}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// Função para validar o campo Nome

function validarNome() {
    const nomeInput = document.getElementById("inome");
    const nome = nomeInput.value.trim();

    if (!nome) {
        alert("O campo do nome não pode ficar em branco.");
        nomeInput.focus();
        return false;
    }

    if (nome.length > 50) {
        alert("O nome deve conter no máximo 50 caracteres.");
        nomeInput.focus();
        return false;
    }

    return true;
}

// Função para validar o campo Email
function validarEmail() {
    const emailInput = document.getElementById("iemail");
    const email = emailInput.value.trim();

    if (!email) {
        alert("O campo do e-mail não pode ficar em branco.");
        emailInput.focus();
        return false;
    }

    const emailRegex = /^(?=.{1,254}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
    if (!emailRegex.test(email)) {
        alert("O campo do e-mail deve estar em formato válido.");
        emailInput.focus();
        return false;
    }

    return true;
}

// Função para validar o campo Assunto
function validarAssunto() {
    const assuntoInput = document.getElementById("iassunto");
    const assunto = assuntoInput.value.trim();

    if (!assunto) {
        alert("O campo do assunto não pode ficar em branco.");
        assuntoInput.focus();
        return false;
    }

    if (assunto.length > 50) {
        alert("O assunto deve conter no máximo 300 caracteres.");
        assuntoInput.focus();
        return false;
    }

    return true;
}

// Função para validar o campo Mensagem
function validarMensagem() {
    const mensagemInput = document.getElementById("imensagem");
    const mensagem = mensagemInput.value.trim();

    if (!mensagem) {
        alert("O campo de mensagem não pode ficar em branco.");
        mensagemInput.focus();
        return false;
    }

    if (mensagem.length > 300) {
        alert("O campo de mensagem deve conter no máximo 300 caracteres.");
        mensagemInput.focus();
        return false;
    }

    return true;
}

// Função para verificar se todos os campos estão preenchidos
function verificarCamposPreenchidos() {
    return validarNome() && validarEmail() && validarAssunto() && validarMensagem();
}

// Função chamada ao clicar no botão de enviar
function enviarForm() {
    if (verificarCamposPreenchidos()) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Por favor, corrija os erros no formulário antes de enviar.");
    }
}
// Adicionando evento de clique ao botão de enviar
document.getElementById("botao-enviar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    enviarForm();
});