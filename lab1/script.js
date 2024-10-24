(function () {

  document.getElementById("ex1_button").addEventListener("click", function () {
    container = document.getElementById("ex1_content");
    container.innerHTML = "";
  
    for (var i = 0; i < 10; i++) {
      container.innerHTML += i + ", ";
    }
  });

  document.getElementById("ex2_text").addEventListener("input", function(){
    const input = this.value;
    const content = document.getElementById("ex2_content");
    content.innerHTML = ''; 
        let regex = /[a-zA-Z]/;
        let specialChar = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/

      if (input.length !== 9) {
        content.innerHTML += 'Długość numeru musi być równa 9<br>';
      }if (regex.test(input)) {
        content.innerHTML += 'Numer nie może zawierać liter<br>';
      }if (specialChar.test(input)) {
        content.innerHTML += 'Numer nie może zawierać znaków specjalnych<br>';
      }if(input.length ==9){
        content.innerHTML += " Numer telefonu jest poprawny<br>";
    }
  })

  draggableElement = document.getElementById('ex3_element');
  draggableElement.draggable = "true";
  draggableElement.addEventListener('dragstart', drag);
  
  containerOne = document.getElementById('ex3_one');
  containerTwo = document.getElementById('ex3_two');
  
  containerOne.addEventListener('dragover', allowDrop);
  containerTwo.addEventListener('dragover', allowDrop);
  containerOne.addEventListener('drop', drop);
  containerTwo.addEventListener('drop', drop);

  function drag(event){
    event.dataTransfer.setData("text", event.target.id);
  }

  function allowDrop(event){
    event.preventDefault();
  }

  function drop(event){
    event.preventDefault();
    draggedElementId = event.dataTransfer.getData('text');
    draggedElement = document.getElementById(draggedElementId);
    event.target.appendChild(draggedElement);
    }
})();