const mymap = L.map('issMap').setView([0, 0], 1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const issIcon = L.icon({
    iconUrl: 'issPNG.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});
const tiles = L.tileLayer(tileUrl, {
    attribution
});
tiles.addTo(mymap);
const marker = L.marker([0, 0], {
    icon: issIcon
}).addTo(mymap);

const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
const first = true;
async function getISS() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const {
        latitude,
        longitude
    } = data
    marker.setLatLng([latitude, longitude]);
    if (first) {
        mymap.setView([latitude, longitude], 3);
    }
    mymap.setView([latitude, longitude]);
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
}

getISS();

setInterval(getISS, 1000);