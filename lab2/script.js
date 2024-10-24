(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  function prepareString(array){
    toInsert = "";
    toInsert += "<ol>";
    for (el of array){
      toInsert += `<li><u>Post nr ${el.id} użytkownika nr ${el.userId}</u><br>`;
      toInsert += `<b>${el.title}</b><br>`;
      toInsert += `${el.body}<br><br></li>`;
    }
    toInsert += "</ol>"
    return toInsert;
  }

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () { 
    answer.innerHTML = "Loading...";

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        
        toInsert = prepareString(array);
        answer.innerHTML = toInsert;
      })
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();