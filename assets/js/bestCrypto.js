const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-sGh6VMWT3vn7w7L4CrzPewVY'}};

var loader = document.querySelector('.loader')


fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, options)
  .then(response => response.json())
  .then(response => {
    loader.style.display = "none";

    showBestCrypto(response);
  } )
  .catch(err => console.error(err));

function showBestCrypto(data) {
    let i;
    var name, price, img, market_cap, price_24h, crypto = "";
    const variationColor = document.querySelector('.varitionColor');
    const container = document.querySelector('.bestsCryptos');
    for (i = 0; i < data.length; i++) {
        name = data[i].name;
        price = data[i].current_price;
        price = price.toLocaleString('es-ES', { maximumFractionDigits: 2 });
        img = data[i].image;
        market_cap = data[i].market_cap;
        market_cap = market_cap.toLocaleString('es-ES', { maximumFractionDigits: 2 });
        price_24h = data[i].price_change_percentage_24h;
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
    }

    container.innerHTML = crypto;
    

}