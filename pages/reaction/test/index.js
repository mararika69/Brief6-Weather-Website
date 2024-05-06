document.getElementById('fetchButton').addEventListener('click', function() {
  api-key('https://weather-backend-kappa.vercel.app/reactions')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          console.log(data);
          return response.json();
      })
      .then(data => {
          displayData(data);
      })
      .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
      });
});

function displayData(data) {
  const display = document.getElementById('dataDisplay');
  display.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
}
