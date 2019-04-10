class Park {

  constructor(name, ticketPrice, dinosaurCollection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;
  }

  addDinosaur(dinosaur) {
    this.dinosaurCollection.push(dinosaur);
  }

  removeDinosaur(dinosaur) {
    this.dinosaurCollection.splice(this.dinosaurCollection.indexOf(dinosaur), 1)
  }

  mostPopular() {
    let popularity = 0;
    let mostPopular = '';
    for (let dino of this.dinosaurCollection) {
      if (dino._guestsAttractedPerDay > popularity) {
        popularity = dino._guestsAttractedPerDay;
        mostPopular = dino.species;
      }
    }
    return mostPopular;
  }

  findBySpecies(species) {
    let speciesCount = 0;
    for (let dino of this.dinosaurCollection) {
      if (dino.species == species) {
        speciesCount++;
      }
    }
    return speciesCount;
  }

  extinction(exSpecies) {
    for (let i = this.dinosaurCollection.length-1; i >= 0 ; i--) {
      if (this.dinosaurCollection[i].species == exSpecies) {
        this.dinosaurCollection.splice(i, 1);
      }
    }
  }

  visitorsPerDay() {
    let visitorDayCount = 0;
    for (var i = 0; i < this.dinosaurCollection.length; i++) {
      visitorDayCount += this.dinosaurCollection[i].guestsAttractedPerDay;
    };
    return visitorDayCount;
  }

  visitorsPerYear() {
    let visitorYearCount = (this.visitorsPerDay()) * 365;
    return visitorYearCount;
  }

  takingsPerYear() {
    let takingsPA = (this.visitorsPerYear()) * this.ticketPrice;
    return takingsPA;
  }

  showDiets() {
    let carni = 0;
    let herbi = 0;
    let omni = 0;

    for (var i = 0; i < this.dinosaurCollection.length; i++) {
      if (this.dinosaurCollection[i].diet == "carnivore") {
        carni++
      } else if (this.dinosaurCollection[i].diet == "herbivore") {
        herbi++
      } else {
        omni++
      }
    }
    dietRecord = new Diets(carni, herbi, omni);
    return dietRecord;
  }

}

module.exports = Park;
