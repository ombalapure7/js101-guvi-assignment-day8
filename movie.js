class Movie {
  // step a)                 // step b)
  constructor(title, studio, rating="PG13") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    this.ratingTypes = ["R", "U", "PG13"];
  }

  getTitle() {
    return this.title;
  }

  getStudio() {
    return this.studio;
  }
}

// step 4
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(casinoRoyale.getTitle());
console.log(casinoRoyale.getStudio());
console.log(casinoRoyale.ratingTypes);


/* Filter PG13 Movies */
const eternals = new Movie("Eternals", "Marvel Studios", "PG13");
const deadpool = new Movie("Deadpool", "Marvel Studios", "R");
const shrek = new Movie("Shrek", "Dream Works", "U");
const findingNemo = new Movie("Finding Nemo", "Pixar", "U");
const interstellar = new Movie("Interstallar", "Warner Bros", "PG13");

const moviesArr = [eternals, deadpool, shrek, findingNemo, interstellar];

// step 3
const pg13Movies = function getPG(moviesArr) { 
  return moviesArr.filter((movie) => movie.rating === "PG13");
}

console.log(pg13Movies(moviesArr));


