const input = document.querySelector("input");
const btn = document.querySelector("button");
const weather = document.querySelector(".weather");

input.focus();

const fetchData = () => {
  const address = input.value;

  fetch(`http://localhost:3000/weather/?address=${address}`)
    .then(data => {
      return data.json();
    })
    .then(res => {
      weather.textContent = res.forecast;
    });
};

btn.addEventListener("click", fetchData);

document.addEventListener("keydown", e => {
  if (e.keyCode === 13) {
    fetchData();
  }
});
