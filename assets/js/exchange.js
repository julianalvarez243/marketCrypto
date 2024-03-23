const loader = document.querySelector('.loader')

const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-sGh6VMWT3vn7w7L4CrzPewVY'}};

fetch(`https://api.coingecko.com/api/v3/exchanges`, options)
  .then(response => response.json())
  .then(response => {
    loader.style.display = "none";
    console.log(response);
    showExchange(response);
  } )
  .catch(err => console.error(err));

function showExchange(data) {
    let i;
    var name, trust, img, since, country, web, position, exchange = "";

    const container = document.querySelector('.bestsExchanges');
    for (i = 0; i < data.length; i++) {
        name = data[i].name;
        trust = data[i].trust_score;
        img = data[i].image;
        since = data[i].year_established;
        country = data[i].country;
        web = data[i].url;
        position = data[i].trust_score_rank;

        exchange += `
        <div class="card">
                <img src="${img}"  alt="Exchange logo">
                <h3>${name}</h3>
                <p clas="position">Top: ${position}</p>
                <p class="trust">Trust: ${trust}/10</p>
                <p class="since">Since: ${since}</p>
                <p class="country">Country: ${country}</p>
                <p class="oficialWeb"><a target="_blank" href="${web}">Web</a></p> 
            </div>
        `;
    }

    container.innerHTML = exchange;
    

    console.log(name);
}