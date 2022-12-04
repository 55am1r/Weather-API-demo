// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

function showPosition(position) {
    const myLat = position.coords.latitude;
    const myLong = position.coords.longitude;
    let coords = new google.maps.LatLng(myLat, myLong);
    const mapOptions = {
        zoom: 10,
        center: coords,
    }
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
    let marker = new google.maps.Marker({
        map: map,
        position: coords
    });
}
// getLocation();
// if (navigator.geolocation) {
//     console.log('got it');
// }
console.log(navigator.geolocation.getCurrentPosition(showPosition));


