function exibirUsuarios(usuarios) {
    var usuario = usuarios[0];

    var elemCodigo = document.getElementById('codigo');
    elemCodigo.innerHTML = usuario.codigo;

    var elemNome = document.getElementById('nome');
    elemNome.innerHTML = usuario.nome;

    var elemEmail = document.getElementById('email');
    elemEmail.innerHTML = usuario.email;

    var elemLogin = document.getElementById('login');
    elemLogin.innerHTML = usuario.login;

    popularTabela(usuarios);

}

function popularTabela(usuarios) {
    for (var i = 0; i < usuarios.length; i++) {
        inserirLinhaTabela(usuarios[i]);
    }
}

function inserirLinhaTabela(usuario) {
    var tabela = document.getElementById('tabelaDeUsuarios');
    var numLinhas = tabela.rows.length;
    var novaLinha = tabela.insertRow(numLinhas);

    var celCodigo = novaLinha.insertCell(0);
    celCodigo.innerHTML = usuario.codigo;

    var celNome = novaLinha.insertCell(1);
    celNome.innerHTML = usuario.nome;

    var celEmail = novaLinha.insertCell(2);
    celEmail.innerHTML = usuario.email;

    var celLogin = novaLinha.insertCell(3);
    celLogin.innerHTML = usuario.login;

}