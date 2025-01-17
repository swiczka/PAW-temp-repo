(function () {

  const cw1Button = document.getElementById("showCw1ResultButton");
  const cw1Input = document.getElementById("capitalName");
  const cw2Button = document.getElementById("cw2Button");
  const cw3Button = document.getElementById("cw3Button");
  const cw4Button = document.getElementById("cw4Button");

  cw1Button.addEventListener("click", function (){
    fetch(`https://restcountries.com/v3.1/capital/${cw1Input.value}`)
      .then(response => response.json())
      .then(array => {
        console.log(array)
        const name = array[0]["name"]["common"];
        const capital = array[0]["capital"][0];
        const population = array[0]["population"];
        const region = array[0]["region"];
        const subregion = array[0]["subregion"];
        answer.innerHTML = `
        <table>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Region</th>
            <th>Subregion</th>
          </tr>
          <tr>
            <td>${name}</td>
            <td>${capital}</td>
            <td>${population}</td>
            <td>${region}</td>
            <td>${subregion}</td>
          </tr>
        </table>`;
          //answer.innerHTML = JSON.stringify(array);
      })
  });

const apiToken = "QOrmLMwxmKuZaJJAPyvVswDtcTsvGRVp";

cw2Button.addEventListener("click", async function () {
  answer.innerHTML = "Loading...";
  const response = await fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/stations", {
    method: 'GET',
    headers: {
      'token': apiToken
    }
  });


  const data = await response.json();
  const stations = data.results;
  console.log(stations);


  answerString = `
    <table>
          <tr>
            <th>Station ID</th>
            <th>Name</th>
            <th>State</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
  `;
  stations.forEach(station => {
    let id = station["id"];
    let name = station["name"].split(",")[0];
    let state = station["name"].split(",")[1];
    let lat = station["latitude"];
    let long = station["longitude"];

    answerString +=
    `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${state}</td>
      <td>${lat}</td>
      <td>${long}</td>
    </tr>
    `
  });
  

  answerString += `</table>`;
  answer.innerHTML = answerString;
});

cw3Button.addEventListener("click", async function () {
  answer.innerHTML = "Loading...";
  const response = await fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/datasets", {
    method: 'GET',
    headers: {
      'token': apiToken
    }
  });

  const data = await response.json();
  const locations = data;

  console.log(locations);

  answerString = `
    <table>
          <tr>
            <th>Location ID</th>
            <th>Name</th>
            <th>Country</th>
          </tr>
  `;
  
  locations.forEach(location => {
    let id = location["id"];
    let name = location["name"].split(",")[0];
    let country = location["name"].split(",")[1];
    answerString +=
    `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${country}</td>
    </tr>
    `
  });

  answerString += "</table>";
  answer.innerHTML = answerString;
});

cw4Button.addEventListener("click", async function(){
  answer.innerHTML = "Loading...";
  const response = await fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/data?dataset=daily-summaries&stations=USC00457180,USC00390043", {
    method: 'GET',
    headers: {
      'token': apiToken
    }
  });

  const data = await response.json();
  console.log(data);
});

})();