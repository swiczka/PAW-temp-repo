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
})();