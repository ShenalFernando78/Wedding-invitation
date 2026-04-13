var weddingDate = new Date("May 14, 2026 09:30:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
var distance = weddingDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";

}, 1000);


document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;

    const phoneNumber = '94705693045'; // Replace with the number to receive confirmations (country code + number)
    const message = `Hello! My name is ${name}. I will ${attending === 'Yes' ? 'attend' : 'not attend'} the wedding.`;

    // Open WhatsApp chat with the message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
});
