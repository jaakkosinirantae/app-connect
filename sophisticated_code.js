/* sophisticated_code.js */

// This code simulates a virtual world where users can create and interact with various entities

// Define the Entity class
class Entity {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
    console.log(`${this.name} moved to coordinates (${this.x}, ${this.y})`);
  }
}

// Define the Player class, which extends the Entity class
class Player extends Entity {
  constructor(name, x, y, health) {
    super(name, x, y);
    this.health = health;
  }

  attack(entity) {
    console.log(`${this.name} attacked ${entity.name}`);
    // Perform attack logic...
  }

  heal(amount) {
    console.log(`${this.name} healed ${amount} health`);
    // Perform heal logic...
  }
}

// Create player and entities
const player = new Player("Alice", 0, 0, 100);
const enemy1 = new Entity("Enemy 1", 10, 5);
const enemy2 = new Entity("Enemy 2", -5, -2);

// Simulate player actions
player.moveTo(3, 2);
player.attack(enemy1);
player.heal(25);
player.moveTo(-1, -1);
player.attack(enemy2);

// Output:
// Alice moved to coordinates (3, 2)
// Alice attacked Enemy 1
// Alice healed 25 health
// Alice moved to coordinates (-1, -1)
// Alice attacked Enemy 2