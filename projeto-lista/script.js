function addItem(){
    let itens = document.getElementById('itens');

    let item = document.createElement('div');
    item.className = 'item';

    let esq = document.createElement('span');
    esq.className = 'esq';

    let nome = document.createElement('div');
    nome.className = 'nome';
    let nomeValue = document.getElementById('nomebar');
    let nomeText = document.createTextNode(nomeValue.value);
    nome.appendChild(nomeText);

    item.appendChild(esq);
    item.appendChild(nome);
    itens.appendChild(item);
}