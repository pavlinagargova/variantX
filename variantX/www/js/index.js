document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    navigator.geolocation.watchPosition(geolocationSuccess, geolocationError);
}

function geolocationSuccess(position){
    $('#latitude-value').text(position.coords.latitude)
    $('#longitude-value').text(position.coords.longitude)
    $('#altitude-value').text(position.coords.altitude)

}
function geolocationError(err){
    alert(err)
}