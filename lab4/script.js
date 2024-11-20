const funnyJokeButton = document.getElementById("funnyJokeButton");
const lameJokeButton = document.getElementById("lameJokeButton");
const joke = document.getElementById("joke");

funnyJokeButton.addEventListener("click", async function () {
    const response = await fetch("http://localhost:3000/jokebook/joke/funnyJoke", {
        method: 'GET'
      });
      
      const data = await response.json();
      joke.innerHTML= `
      <p>${data.joke}</p>
      <p>${data.response}</p>`;
});

lameJokeButton.addEventListener("click", async function () {
    const response = await fetch("http://localhost:3000/jokebook/joke/lameJoke", {
        method: 'GET'
      });
      
      const data = await response.json();
      joke.innerHTML= `
      <p>${data.joke}</p>
      <p>${data.response}</p>`;
});