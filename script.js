class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static ageCompare(user1, user2) {
    if (user1.age > user2.age) {
      console.log(`${User1.firstName} è più anziano di ${User2.firstName}`);
    } else if (user1.age < user2.age) {
      console.log(`${User2.firstName} è più anziano di ${User1.firstName}`);
    } else {
      console.log(
        `${User1.firstName} e ${User2.firstName} hanno la stessa età`
      );
    }
  }
}

const User1 = new User("Mario", "Rossi", 35, "Palermo");
const User2 = new User("Luigi", "Verdi", 27, "Roma");
User.ageCompare(User1, User2);

const form = document.getElementById("pet-form");

const petArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let petsName = document.getElementById("pet-name").value;
  console.log(petsName);
  let ownersName = document.getElementById("owner-name").value;
  let petSpecies = document.getElementById("species").value;
  let petBreed = document.getElementById("breed").value;

  class Pet {
    constructor() {
      this.petName = petsName;
      this.ownerName = ownersName;
      this.species = petSpecies;
      this.breed = petBreed;
    }
    static hasSameOwner(pet1, pet2) {
      return pet1.ownerName === pet2.ownerName;
    }
  }

  const newPet = new Pet(petsName, ownersName, petSpecies, petBreed);

  petArray.push(newPet);

  form.reset(); //Per qualche motivo la riassegnazione di .value a "" non ha avuto effetto

  if (petArray.length > 1) {
    console.log(Pet.hasSameOwner(petArray[0], petArray[1]));
  }
});
