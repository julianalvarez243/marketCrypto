const loader = document.querySelector('.loader')
const container = document.querySelector('.categorie');
const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-sGh6VMWT3vn7w7L4CrzPewVY'}};

fetch('https://api.coingecko.com/api/v3/coins/categories', options)
  .then(response => response.json())
  .then(response => {
    loader.style.display = 'none';
    console.log(response);
    showCategorie(response);
  })
  .catch(err => console.error(err));

function showCategorie(data) {
    let i,j = 0;
    
    var name, description, categorie = "", img1, img2, img3;

    for (i = 0; i < data.length; i++) {
    
      name = data[i].name;
      description = data[i].content;
      img1 = data[i].top_3_coins[0];
      img2 = data[i].top_3_coins[1];
      img3 = data[i].top_3_coins[2];

      categorie += `
      <div class="categ">
      <h3>${name}</h3>
      <p class="descriptionCategorie">${description}</p>
      <p class="top3">Top 3 in ${name}</p>
      <img src="${img1}" alt=""> 
      <img src="${img2}" alt="">
      <img src="${img3}" alt="">

      <hr>
      </div>
        `;
    }

    container.innerHTML = categorie;
    

    console.log(name);
}