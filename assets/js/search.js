var loader = document.querySelector('.loader');
var container = document.querySelector('.mainResults');
var errorDiv = document.querySelector('.error')

function searchCrypto() {
  const nameCrypto = document.querySelector('.inputSearcherValue').value;
  const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-sGh6VMWT3vn7w7L4CrzPewVY'}};
  loader.style.display = "block";
  if (nameCrypto === '') {
    errorDiv.innerHTML = `<p>Put some name</p>`;
  } 
  else {
    
    fetch(`https://api.coingecko.com/api/v3/coins/${nameCrypto }`, options)
    .then(response => response.json())
    .then(response => {
  
      if (response.error) {
        //errorDiv.textContent = response.error; 
        errorDiv.innerHTML = response.error; 
        
  
  } else {
    var i;
    var name, price, img, market_cap, price_24h, crypto = "";
    name = response.name;
    price = response.market_data.current_price.usd;
    price = price.toLocaleString('es-ES', { maximumFractionDigits: 2 });
    img = response.image.large;
    market_cap = response.market_data.market_cap.usd;
    market_cap = market_cap.toLocaleString('es-ES', { maximumFractionDigits: 2 });
    price_24h = response.market_data.price_change_percentage_24h;
    price_24h = price_24h.toFixed(2);
  
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
  }
  })
  .catch(err => {
  console.error(err);
  });
  }
}