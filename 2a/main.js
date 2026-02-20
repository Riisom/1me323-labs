// -----------------------------
// Labb 2a – Objekt i JavaScript
// -----------------------------

// 1️⃣ Cat-objekt
const cat = {
  name: "Misse",
  age: 5,
  isIndoor: true
};

console.log("Cat namn:", cat.name);       // Punktnotation
console.log("Cat ålder:", cat["age"]);   // Hakparentesnotation

// Dynamisk egenskap
cat.color = "Grå";
cat.age = 6;
delete cat.isIndoor;
console.log("Har katten ett namn? ", "name" in cat);

// -----------------------------
// 2️⃣ Person-objekt
const person = {
  firstName: "Anna",
  lastName: "Svensson",
  age: 28,
  occupation: "Frontend Developer",
  address: {
    street: "Baker Street 221B",
    city: "London",
    country: "UK"
  }
};

// Dynamiska egenskaper
person.hobby = "Läsa böcker";
person.age = 37;
delete person.occupation;
console.log("Har jag en sysselsättning? ", "occupation" in person);
console.log(person);
console.log("Min stad:", person.address.city);
console.log(person["lastName"]);

// -----------------------------
// 3️⃣ Film-objekt
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  isSciFi: true,
  production: {
    company: "Warner Bros.",
    country: "USA"
  },
  actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
};

console.log(movie);
console.log("Produktionsland:", movie.production.country);
console.log("Första skådespelaren:", movie.actors[0]);

// -----------------------------
// 4️⃣ Visa data i DOM
const personElement = document.getElementById("person");
const movieElement = document.getElementById("movie");

// Person
personElement.innerHTML = `
  <h2>${person.firstName} ${person.lastName}</h2>
  <p>Ålder: ${person.age}</p>
  <p>Hobby: ${person.hobby}</p>
  <p>Adress: ${person.address.street}, ${person.address.city}, ${person.address.country}</p>
`;

// Film
movieElement.innerHTML = `
  <h2>${movie.title} (${movie.releaseYear})</h2>
  <p>Regissör: ${movie.director}</p>
  <p>Skådespelare: ${movie.actors.join(", ")}</p>
  <p>Produktionsbolag: ${movie.production.company}, ${movie.production.country}</p>
  <p>Sci-Fi: ${movie.isSciFi ? "Ja" : "Nej"}</p>
`;

// -----------------------------
// 5️⃣ Iterera över person
console.log("Iterera över person:");
for (const key in person) {
  console.log(key, person[key]);
}

// Object.keys()-exempel
const personKeys = Object.keys(person);
console.log("Alla nycklar i person:", personKeys);