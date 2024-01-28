//object method

const myData = {
  name: "Anandan",
  age: 20,
  address: {
    country: "india",
    state: "tamilnadu",
    city: "namakkal",
    pincode: 637002,
  },
  college: {
    collegeName: "knct",
    place: "trichy",
  },
  skills: ["frontend", "backend"],
};

console.log(myData.age);
console.log(myData.address.pincode);
console.log(myData.college.collegeName);
console.log(myData.skills[1]);

//using function in object

const object = {
  action: function () {
    return "hello world";
  },
};
console.log(object.action());

//another method

const anotherObj = {
  name: "Anandan",
  age: 20,
  address: {
    country: "india",
    state: "tamilnadu",
    city: "namakkal",
    pincode: 637002,
  },
  college: {
    collegeName: "knct",
    place: "trichy",
  },
  skills: ["frontend", "backend"],

  //function used
  action: function () {
    return `What is a college name: ${this.college.collegeName}`;
  },
};

console.log(anotherObj.action());

//inheritance is an create a one objcet and add another object to add least object are inherited to new object

const vehicle = {
  door: 2,
  sound: function () {
    return "loud";
  },
};
console.log(vehicle.sound());

//inherited to

const bike = Object.create(vehicle);
console.log(bike.sound());

//another example

const movies = {
  actor: "vijay",
  music: "ani",
  director: "lokesh",
  date: 29,
};

console.log(Object.keys(movies));
console.log(Object.values(movies));

//for inloop method

for (let job in movies) {
  console.log(`${job} : it's ${movies[job]}`);
}

//delete in object

delete movies.date;
console.log(movies);

//to check a deleted values in object using this property

console.log(movies.hasOwnProperty("date"));
console.log(movies.hasOwnProperty("actor"));

//destrcturing the object

const { music: myFavmusic } = movies;
console.log(myFavmusic);

const { actor: myfavActor } = movies;
console.log(myfavActor);

const { actor, director, date, music } = movies;
console.log(actor, music);
