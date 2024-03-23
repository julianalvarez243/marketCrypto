const url = 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news?pair_ID=1057391&page=1&time_utc_offset=28800&lang_ID=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '518c270132msh356e49a7b5905ecp100570jsn56e62f9565ca',
		'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
	}
};

var loader = document.querySelector('.loader')

fetch(url, options)

  .then(response => {
    // Verifica si la respuesta tiene un estado exitoso (200 OK)
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    // Convierte la respuesta a formato JSON y la retorna
    return response.json();
  })
  .then(data => {
    console.log(data);
    showNews(data);
    loader.style.display = "none";
  })
  .catch(error => {
    // Captura y maneja errores
    console.error('Error en la solicitud:', error);
  });

function showNews(data) {
    var i, title, img, link, author;
    var news = "";
	const container = document.querySelector('.news');
    for (i = 0; i < 10; i++) {
        
        title = data.data[0].screen_data.news[i].HEADLINE
        img = data.data[0].screen_data.news[i].related_image_big;
        link = data.data[0].screen_data.news[i].news_link;
        news += `
		<div class="card">
		<img src="${img}"  alt="Image ilustrative">
		<h3>${title}</h3>
		<p class="oficialWeb"><a target="_blank" href="${link}">Full text</a></p> 
		</div>
    `;        
    }
    container.innerHTML = news;
    
};