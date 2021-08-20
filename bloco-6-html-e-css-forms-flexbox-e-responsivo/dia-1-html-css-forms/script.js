let arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
let arrayTextoEstado = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato rosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const select = document.querySelector('#estado');
const dados = document.querySelector('.dados');

function createSelect() {
  for (i = 0; i < arrayTextoEstado.length; i += 1) {
    const option = document.createElement('option');
    option.innerHTML = arrayTextoEstado[i];
    option.value = arraySiglaEstado[i];
    select.appendChild(option);
  }
}

function enviar(event) {
  event.preventDefault();
  let nome = document.querySelector('[name=nome]');
  let email = document.querySelector('[name=email]');
  let cpf = document.querySelector('[name=cpf]');
  let endereco = document.querySelector('[name=endereco]');
  let cargo = document.querySelector('[name=cargo]');
  let descricao = document.querySelector('[name=descricao]');
  let cidade = document.querySelector('[name=cidade]');
  let casa = document.querySelector('[name=casa]');
  let curriculo = document.querySelector('[name=curriculo]');
  let data = document.querySelector('[name=date]');

  if (nome.value.length > 40 || nome.value.length === 0) {
    alert('Inválido');
  }
  else if (email.value.length > 50 || email.value.length === 0) {
    alert('Inválido');
  }
  else if (cpf.value.length > 11 || cpf.value.length === 0) {
    alert('Inválido');
  }
  else if (endereco.value.length > 200 || endereco.value.length === 0) {
    alert('Inválido');
  }
  else if (cidade.value.length > 28 || cidade.value.length === 0) {
    alert('Inválido');
  }
  else if (cargo.value.length > 40 || cargo.value.length === 0) {
    alert('Inválido');
  }
  else if (descricao.value.length > 500 || descricao.value.length === 0) {
    alert('Inválido');
  }
  else if (curriculo.value.length > 1000 || curriculo.value.length === 0) {
    alert('Inválido');
  }
  else if (data.value.length === 0) {
    alert('Inválido');
  } else {
    const novosDados = document.createElement('div');
    novosDados.className = 'dados container mb-3'
    novosDados.innerHTML += nome.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += email.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += cpf.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += endereco.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += cidade.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += estado.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += casa.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += curriculo.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += cargo.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += descricao.value;
    novosDados.innerHTML += '\n';
    novosDados.innerHTML += data.value;
    dados.appendChild(novosDados);
  }
}

function apagar() {
  let inputs = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea')
  let div = document.querySelectorAll('.dados');
  console.log(inputs.length);
  for (let i = 0; i < inputs.length; i += 1) {
    let aux = inputs[i];
    aux.value = '';
  }
  for (let i = 0; i < div.length; i += 1) {
    div[i].innerText = '';
  }
  textArea.value = '';
}

window.onload = function carregarPagina() {
  createSelect();

  const btnEnviar = document.querySelector('#btnEnviar');
  btnEnviar.addEventListener('click', enviar);
  const btnApagar = document.querySelector('#btnApagar');
  btnApagar.addEventListener('click', apagar);
}

