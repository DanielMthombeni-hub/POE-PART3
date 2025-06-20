document.addEventListener("DOMContentLoaded", function () {
    // Coordinates for 23 Jorissen street, Braamfontein, Johannesburg
    const lat = -26.195028;
    const lng = 28.032250;

    // Initialize the map with scroll zoom disabled
    const map = L.map("map", {
      scrollWheelZoom: false // disables scroll hijacking
    }).setView([lat, lng], 13);

    // Add tile layer from OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker
    L.marker([lat, lng])
    .addTo(map)
      .bindPopup("<b>DFU DETAILERS</b><br>23 Jorissen street, Braamfontein, Johannesburg.")
      .openPopup();
  });
