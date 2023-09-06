const geolib = require("geolib");

function coordinatesFromUrl(url) {
  url = url.split("place/");
  const res = url[1].split(",");

  const latitude = parseFloat(res[0]);
  const longitude = parseFloat(res[1]);

  const coordinateObj = { latitude, longitude };
  return coordinateObj;
}

function calculateDistance(points1, points2) {
  return geolib.getDistance(points1, points2);
}

// Example usage:
const url1 = "https://www.google.com/maps/place/29.945690,78.164246";
const url2 = "https://www.google.com/maps/place/29.854263,77.888000";

try {
  const points1 = coordinatesFromUrl(url1);
  const points2 = coordinatesFromUrl(url2);

  const distance = calculateDistance(points1, points2);

  console.log(`Distance between the two points: ${distance / 1000}Km`);
} catch (error) {
  console.error("Error:", error.message);
}
