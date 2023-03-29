document.querySelector(".buscador").addEventListener('click', getFetch)
const temperature = document.getElementById ("temperature")
function getFetch(){
  const choice = document.querySelector(".clima").value
  console.log(choice)
  const url = `https://goweather.herokuapp.com/weather/${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.temperature)
        temperature.innerText = data.temperature
    
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}