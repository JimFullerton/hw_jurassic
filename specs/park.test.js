const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');
const Diets = require('../diets.js');

describe('Park', function() {
  let alice;
  let bob;
  let carol;
  let dave;
  let eve;
  let fred;
  let jurassic;

  beforeEach( () => {
    // write your code here
    alice = new Dinosaur("t-rex", "carnivore", 50);
    bob = new Dinosaur("diplodocus", "herbivore", 40);
    carol = new Dinosaur("velociraptor", "carnivore", 30);
    dave = new Dinosaur("triceratops", "herbivore", 20);
    eve = new Dinosaur("stegasaurus", "herbivore", 25);
    fred = new Dinosaur("dyerthinkhesaurus", "omnivore", 55);
    jurassic = new Park("Jurassic Park", 10, []);

  });

  test('should have a name', () => {
    expect(jurassic.name).toBe("Jurassic Park");
  });

  test('should have a ticket price', () => {
    expect(jurassic.ticketPrice).toBe(10);
  });

  test('should have a collection of dinosaurs', () => {
    jurassic.addDinosaur(alice);
    jurassic.addDinosaur(bob);
    jurassic.addDinosaur(carol);
    expect(jurassic.dinosaurCollection.length).toBe(3);
  });

  test('should be able to add a dinosaur to its collection', () => {
    jurassic.addDinosaur(dave);
    expect(jurassic.dinosaurCollection[0].species).toBe("triceratops");
  });

  test('should be able to remove a dinosaur from its collection', () => {
    jurassic.addDinosaur(dave);
    jurassic.addDinosaur(eve);
    jurassic.addDinosaur(fred);
    jurassic.removeDinosaur(eve);
    expect(jurassic.dinosaurCollection.length).toBe(2);
  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    jurassic.addDinosaur(alice);
    jurassic.addDinosaur(bob);
    jurassic.addDinosaur(carol);
    jurassic.addDinosaur(dave);
    jurassic.addDinosaur(eve);
    jurassic.addDinosaur(fred);
    expect(jurassic.mostPopular()).toBe("dyerthinkhesaurus")
  });

  test('should be able to find all dinosaurs of a particular species', () => {
    jurassic.addDinosaur(alice);
    jurassic.addDinosaur(bob);
    jurassic.addDinosaur(carol);
    expect(jurassic.findBySpecies("diplodocus")).toBe(1);
  });

  test('should be able to remove all dinosaurs of a particular species', () => {
    jurassic.addDinosaur(alice);
    jurassic.extinction("t-rex");
    expect(jurassic.findBySpecies("t-rex")).toBe(0);
  });

  test('should calculate visitors per day', () => {
    jurassic.addDinosaur(alice);
    jurassic.addDinosaur(bob);
    jurassic.addDinosaur(carol);
    jurassic.addDinosaur(dave);
    jurassic.addDinosaur(eve);
    jurassic.addDinosaur(fred);
    expect(jurassic.visitorsPerDay()).toBe(220)
  });

  test('should calculate visitors per year', () => {
    jurassic.addDinosaur(alice);
    jurassic.addDinosaur(bob);
    jurassic.addDinosaur(carol);
    jurassic.addDinosaur(dave);
    jurassic.addDinosaur(eve);
    jurassic.addDinosaur(fred);
    expect(jurassic.visitorsPerYear()).toBe(80300)
  });

  test('should calculate takings per year', () => {
    jurassic.addDinosaur(alice);
    jurassic.addDinosaur(bob);
    jurassic.addDinosaur(carol);
    jurassic.addDinosaur(dave);
    jurassic.addDinosaur(eve);
    jurassic.addDinosaur(fred);
    expect(jurassic.takingsPerYear()).toBe(803000)
  });

  test('should provide diet object', () => {
    jurassic.addDinosaur(alice);
    jurassic.addDinosaur(bob);
    jurassic.addDinosaur(carol);
    jurassic.addDinosaur(dave);
    jurassic.addDinosaur(eve);
    jurassic.addDinosaur(fred);
    expect(jurassic.showDiets()).toBe()
  })

});
