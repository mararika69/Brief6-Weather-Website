const url = 'https://jsonplaceholder.typicode.com/users/1/albums';
const params = {
    key1: 'value1',
    key2: 'value2'
};

fetch(url + '?' + new URLSearchParams(params))
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {

      console.log(data);
        const albumList = document.getElementById('albums-list');
        data.forEach(album => {
            const listItem = document.createElement('li');
            listItem.textContent = album.title;
            albumList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('albums-list').textContent = 'Failed to load album titles';
    });
