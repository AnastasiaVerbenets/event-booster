const API_KEY = "cAC0PQfupJc4LZexavuatT33ADOVunkK";

fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data));