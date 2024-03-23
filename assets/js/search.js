function searchCrypto() {

  var loader = document.querySelector('.loader')
  loader.style.display = "block";
  let i;
  var name, price, img, market_cap, price_24h, crypto = "";
  var nameCrypto = document.getElementById('inputSearcher'.valueOf);
  const container = document.querySelector('.mainResults');

const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-sGh6VMWT3vn7w7L4CrzPewVY'}};

fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`, options)
  .then(response => response.json())
  .then(response => {
    
    name = response.name;
    price = response.market_data.current_price.usd ;
    price = price.toLocaleString('es-ES', { maximumFractionDigits: 2 });
    img = response.image.large;
    market_cap = response.market_data.market_cap.usd;
    market_cap = market_cap.toLocaleString('es-ES', { maximumFractionDigits: 2 });
    price_24h = response.market_data.price_change_percentage_24h;
    price_24h = price_24h.toFixed(2);
    
    // Determinar el color del texto de varitionColor
    const textColor = price_24h < 0 ? 'red' : 'green';
    const row = price_24h < 0 ? '⭣' : '⭡'

    crypto += `
    <div class="card">
    <img src="${img}"  alt="Crypto logo">
    <h3>${name}</h3>
    <p class="price">Price: $${price}</p>
    <p class="marketCap">Market capital: $${market_cap}</p>
    <p class="priceChange">Variation 24h: <a class="varitionColor" style="color: ${textColor};">%${price_24h} ${row}</a></p>
    </div>
    `;

container.innerHTML = crypto;
  })
  .catch(err => console.error(err));
  
}