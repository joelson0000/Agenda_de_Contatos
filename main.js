const form = document.getElementById('form-Nome');
const imgCadastrado = '<img src="./imagens/Cadastrado" alt="Dedo Positivo" />';
const imgNaoCadastrado = '<img src="./imagens/NaoCadastrado.png" alt="Foto dedo negativo" />';
const Nome = [];
const Telefone = [];
const SpanCadastrado =<span class="positivo">Cadastrado</span>;
const SpanNaoCadastrado =<span class="Negativo">NaoCadastrado</span>;

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicinaLinha();
    atualizaTabela();
});

function adicinaLinha() {
    const inputNomeUsuário = document.getElementById('nome-usuario');
    const inputTelefoneUsuário = document.getElementById('telefone-usuario');

    if (atividades.includes(inputNomeUsuário.value)) {
        alert(`A atividade: ${inputTelefoneUsuário.value} ja foi cadastrado`);
    } else {
        Nome.push(inputNomeUsuário.value);
        Telefone.push(parseFloat(inputTelefoneUsuário.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeUsuário.value}</td>`;
        linha += `<td>${inputTelefoneUsuário.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    inputNomeUsuário.value = '';
    inputTelefoneUsuário.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}