async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    displayInfo(user);
    console.log(data);
}

function displayInfo(user) {
    const copyright = document.getElementById('copyright')
    const foto = document.getElementById('foto')
    const local = document.getElementById('local')
    const nome = document.getElementById('nome')

    copyright.innerText = `2020, ${user.name.first} ${user.name.last}`
    foto.src = `${user.picture.large}`
    local.innerText = `${user.location.city}, ${user.location.country}`
    nome.innerText = `${user.name.first} ${user.name.last}`
}

window.onload = function() {
    getRandomUser();
  };

