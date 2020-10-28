const container = document.querySelector('.container');

fetch('https://pokeapi.co/api/v2/pokemon/cubone')
.then (response => {
    if(response.ok) {
        return response.json();
    }
}) 
.then(pokemon => {
    const cubone = {
        ability: pokemon.abilities[0].ability.name,
        name : pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        move: pokemon.moves[5].move.name,
        image: pokemon.sprites.other['official-artwork']['front_default'],
        purchaseLink: 'https://www.ebay.com/i/143700133225?chn=ps'
    }
    
    const cuboneCard = makePokemonCard(cubone);
    container.appendChild(cuboneCard);

})
.catch(error => {
    console.log(error)
})

function makePokemonCard(pokemon) {
    //Create a div element, add class and style
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '300px';
        //Create an img tag, src, add class, alt
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src', pokemon.image);
    image.style.width = '300px';
    image.setAttribute('alt', `This is ${pokemon.name}`);
        //Append img to card div
    card.appendChild(image);

        //Create div , add class
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
            //Create H5 element, add class, add text
            const nameElement = document.createElement('h5');
            nameElement.classList.add('card-title');
            nameElement.textContent = pokemon.name;
            // Create P tag add class, text
            const heightWeight = document.createElement('p');
            heightWeight.classList.add('card-text');
            heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;

            const move = document.createElement('p');
            move.classList.add('card-text');
            move.textContent = pokemon.move;

            const ability = document.createElement('p');
            ability.classList.add('card-text');
            ability.textContent = pokemon.ability;

            // Create A tag add href, add 2 classes, add text
            const purchaseLink = document.createElement('a');
            purchaseLink.classList.add('btn', 'btn-primary');
            purchaseLink.setAttribute('href', pokemon.purchaseLink);
            purchaseLink.setAttribute('target', '_blank');
            purchaseLink.textContent = `Buy ${pokemon.name} card`;
            
            //Append to card-body div
            cardBody.appendChild(nameElement);
            cardBody.appendChild(heightWeight);
            cardBody.appendChild(move);
            cardBody.appendChild(ability);
            cardBody.appendChild(purchaseLink);
            //Append card-body div to card
            card.appendChild(cardBody);
return card;
    //Append card div to container
}
