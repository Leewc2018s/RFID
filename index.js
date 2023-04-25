// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const light = urlParams.get('light');

function toggleLight(status) {
    if (status === 'on') {
        led.on();
    } else if (status === 'off') {
        led.off();
    }
}

// Display the name
var led;
    
boardReady({board: 'Smart', device: 'YgxM2', transport: 'mqtt', multi: true}, function (board) {
    board.samplingInterval = 50;
    led = getLed(board, 5);
    document.getElementById('name').textContent = name;
    // Toggle the light based on the 'light' parameter
    toggleLight(light);
});