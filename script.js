// Define resources and ores
const resources = {
  wood: {
    name: 'Wood',
    quantity: 0,
    upgradeCost: 10, // Cost to upgrade to the next level
    level: 1,
    getAmount: function() {
      return Math.floor(1 * this.level); // Amount of wood collected based on level
    }
  },
  leaf: {
    name: 'Leaf',
    quantity: 0,
    upgradeCost: 15,
    level: 1,
    getAmount: function() {
      return Math.floor(1 * this.level); // Amount of leaves collected based on level
    }
  },
  // Add more resources as needed
};

const items = {
  rope: {
    name: 'Rope',
    quantity: 0,
    craft: function() {
      if (resources.leaf.quantity >= 3) {
        resources.leaf.quantity -= 3;
        this.quantity++;
      } else {
        console.log('Not enough leaves to craft Rope');
      }
    }
  },
  woodenPickaxe: {
    name: 'Wooden Pickaxe',
    quantity: 0,
    craft: function() {
      if (resources.wood.quantity >= 10 && items.rope.quantity >= 2) {
        resources.wood.quantity -= 10;
        items.rope.quantity -= 2;
        this.quantity++;
      } else {
        console.log('Not enough resources to craft Wooden Pickaxe');
      }
    }
  },
  // Add more items as needed
};

// Function to collect resources
function collectResource(resource) {
  resource.quantity += resource.getAmount();
  console.log(`Collected ${resource.getAmount()} ${resource.name}(s). You now have ${resource.quantity}.`);
}

// Function to upgrade resources
function upgradeResource(resource) {
  if (resource.quantity >= resource.upgradeCost) {
    resource.quantity -= resource.upgradeCost;
    resource.level++;
    resource.upgradeCost *= 2; // Increase the cost for the next upgrade
    console.log(`${resource.name} upgraded to level ${resource.level}.`);
  } else {
    console.log(`Not enough ${resource.name} to upgrade. You need ${resource.upgradeCost - resource.quantity} more.`);
  }
}

// Example usage
collectResource(resources.wood);
collectResource(resources.leaf);
items.rope.craft();
items.woodenPickaxe.craft();
upgradeResource(resources.wood);
upgradeResource(resources.leaf);
