const url = 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-analysis?pair_ID=1057391&time_utc_offset=28800&lang_ID=1&page=1';
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
    showAnalysis(data);
    loader.style.display = "none";
  })
  .catch(error => {
    // Captura y maneja errores
    console.error('Error en la solicitud:', error);
  });

function showAnalysis(data) {
    var i;
    var analysis = "";
    for (i = 0; i < data.data[0].screen_data.analysis.length; i++) {
        var container = document.querySelector('.analysis');
        var title = data.data[0].screen_data.analysis[i].article_title;
        var img = data.data[0].screen_data.analysis[i].related_image;
        var link = data.data[0].screen_data.analysis[i].article_href;
        var author = data.data[0].screen_data.analysis[i].article_author;
        analysis += `
        <div class="card">
        <img src="${img}" alt="Image ilustrative">
        <p class="author">${author}</p>
        <h3>${title}</h3>
        <p class="oficialWeb"><a target="_blank" href="${link}">Full text here</a></p> 
        </div>
    `;        
    }
    container.innerHTML = analysis;
    
};