interface Dog {
  name: string;
  eating: boolean;
  sleeping: boolean;
}

class Dogs implements Dog {
  name: string;
  eating: boolean;
  sleeping: boolean;
  constructor(dog: Dog) {
    this.name = dog.name;
    this.eating = dog.eating;
    this.sleeping = dog.sleeping;
  }

  onCanEat() {
    if (this.eating) {
      console.log(`Mon chien ${this.name} mange`);
    } else {
      console.log(`Mon chien ${this.name} ne mange pas`);
    }
  }
}

const myDog = {
  name: "Brutus",
  eating: true,
  sleeping: false,
};

const dogs = new Dogs(myDog);

dogs.onCanEat();
