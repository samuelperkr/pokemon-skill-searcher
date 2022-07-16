const pokemon = document.querySelector('#poke-name');
const btn = document.querySelector('.btn');
const h2 = document.querySelector('h2');
const p = document.querySelector('p strong');
const img = document.querySelector('img');

btn.addEventListener('click', () => {
    if(pokemon.value == '') {
        h2.innerHTML = 'Digite algo!';
        return;
    }

    const lowerCaseName = pokemon.value.toLowerCase();

    let url = `https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`;

    fetch(url)
    .then(res => res.json())
    .then(out => {
        h2.innerHTML = 'Nome: ' + out.name;
        p.innerHTML = 'Habilidades: ' + out.abilities[0].ability.name + ', ' + out.abilities[1].ability.name;
        img.src = out.sprites.other['official-artwork']['front_default'];
        img.classList.add('img-opacity');
    })
    .catch(err => { 
        h2.innerHTML = 'Esse pokémon não existe!';
        throw err;
    });
});




