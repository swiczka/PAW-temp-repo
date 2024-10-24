(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const top = document.getElementById('top');

  cw13Input = document.createElement("input", "text");
  cw13Input.placeholder = "Post's id (1-100)";
  top.appendChild(cw13Input);

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

  function prepareStringFromPost(post){
    var toInsert = ""; 
    console.log(post.id);
    toInsert += `<li><u>Post nr ${post.id} użytkownika nr ${post.userId}</u><br>`;
    toInsert += `<b>${post.title}</b><br>`;
    toInsert += `${post.body}<br><br></li>`;
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

    var toInsert = "";
  
    fetch(`https://jsonplaceholder.typicode.com/posts/${cw13Input.value}`)
    .then(response => response.json())
    .then(post => {
      toInsert = prepareStringFromPost(post);
      answer.innerHTML += toInsert;
    })
    
  })

  cw2.addEventListener("click", function () {
    //TODO
    const title = document.getElementById('postTitle').value;
    const body = document.getElementById('postBody').value;
    const id = document.getElementById('postID').value;
    answer.innerHTML = 'Processing...';

    answer.style.color="blue";
    answer.style.fontStyle = 'italic';
    answer.style.fontSize = '40px';
    answer.style.backgroundColor = '#f9f9f9';
    
    const postData = {
      title: title,
      body: body,
      userId: id
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(postData)
    })
      .then((response) => response.json())
      .then((json) => {
        answer.innerHTML = `Dodano nowy post o ID = ${json.id}`;
        console.log('Odpowiedź z serwera:', json);
      });
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();