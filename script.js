function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
}

function openQRCode() {
      var qrcode = document.querySelector('.qrcode');
      qrcode.style.display = 'block';

      // Hide the menu after clicking on "QR Code"
      var menu = document.querySelector('.menu');
      menu.style.display = 'none';
    }