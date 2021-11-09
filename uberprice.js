class Uber {
  constructor(lat1, lon1, lat2, lon2) {
    this.lat1 = lat1;
    this.lon1 = lon1;
    this.lat2 = lat2;
    this.lon2 = lon2;
  }

  // Get uber fare price
  getUberPrice() {
    let R = 63;
    let distance = this.calcCrow(this.lat1, this.lon1, this.lat2, this.lon2, R);
    distance = distance.toFixed(2);
    console.log(distance);

    // Rs.10 for 1km
    let basFare = 10;
    let fare  = basFare * distance;
    fare = fare.toFixed(2);
    return fare;
  }

  //This function takes in latitude and longitude of two location and returns the distance between them
  calcCrow(lat1, lon1, lat2, lon2, R) {
    let dLat = this.toRad(lat2 - lat1);
    let dLon = this.toRad(lon2 - lon1);
    let resLat1 = this.toRad(lat1);
    let resLat2 = this.toRad(lat2);

    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(resLat1) * Math.cos(resLat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  toRad(Value) {
    return (Value * Math.PI) / 180;
  }
}

const ride1 = new Uber(21.145754, 20.770566, 79.087952, 78.5966373);
console.log("Fare price: ", ride1.getUberPrice());
