const Http = new XMLHttpRequest();
const url='https://geoip-db.com/json/';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}