let amigos = []; // Guarda os nomes dos amigos

// Adiciona um amigo na lista
function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Pega o campo de texto
    const nome = input.value.trim(); // Tira espaços do começo e fim

    // Se não escreveu nada, mostra alerta
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Coloca o nome no array
    input.value = ""; // Limpa o campo

    atualizarListaAmigos(); // Mostra a lista atualizada
}

// Mostra a lista de amigos na tela
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos'); // Pega a lista do HTML
    lista.innerHTML = ""; // Limpa a lista

    // Para cada amigo, cria um item na lista
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });

    window.adicionarAmigo = adicionarAmigo; // Deixa a função disponível para o botão
}

// Sorteia um amigo da lista
function sortearAmigo() {
    // Precisa de pelo menos dois amigos
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    // Pega um número aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostra o nome sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

window.sortearAmigo = sortearAmigo; // Deixa a função disponível para o botão

// Limpa a lista de amigos e o resultado
function limparListaAmigos() {
    amigos = []; // Esvazia o array
    atualizarListaAmigos(); // Limpa a lista na tela
    document.getElementById('resultado').innerHTML = ""; // Limpa o resultado
}

window.limparListaAmigos = limparListaAmigos; // Deixa a função disponível para o