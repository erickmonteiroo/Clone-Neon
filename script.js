async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    displayUser(user);
    console.log(data);
}

function displayUser(user) {
    const nome = document.getElementById('nome')
    const cpf = document.getElementById('cpf')
    const celular = document.getElementById('celular')
    const dia = document.getElementById('dia')
    const mes = document.getElementById('mes')
    const ano = document.getElementById('ano')
    const email = document.getElementById('email')

    nome.value = `${user.name.title} ${user.name.first} ${user.name.last}`
    cpf.value = `${user.location.street.number}`
    celular.value = `${user.phone}`
    email.value = `${user.email}`
    dia.value = getRandomInt(1, 31)
    mes.value = getRandomInt(1, 12)
    ano.value = getRandomInt(1900, 2021)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

window.onload = function() {
    getRandomUser();
  };

