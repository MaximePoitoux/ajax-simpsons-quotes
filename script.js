// // This function loads pokemon data from the Pokemon API
// function fetchSimpsonsQuotesJSON() {
//     // Feel free to download this HTML and edit it, to use another Pokemon ID
//     const pokemonId = 1;
//     const url = `https://simpsons-quotes-api.herokuapp.com/quotes${simpsonsId}`;
//     axios.get(url)
//       .then(function(response) {
//         return response.data; // response.data instead of response.json() with fetch
//       })
//       .then(function(simpsons) {
//         console.log('data decoded from JSON:', simpsons);
  
//         // Build a block of HTML
//         const simpsonsHtml = `
//           <p><strong>${simpsons.quote}</strong></p>
//           <img src="${simpsons.character}" />
//         `;
//         document.querySelector('#simpsons').innerHTML = simpsonsHtml;
//       });
//   }
  
//   fetchSimpsonsQuotesJSON();