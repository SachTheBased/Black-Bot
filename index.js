function token_gen() {
    blacket.socket.send(
    JSON.stringify({
      type: "chat",
        data: "hacking in tokens for you..."
    }));

    setTimeout(() => {
      blacket.socket.send(
      JSON.stringify({
        type: "chat",
          data: "done hacking in tokens!!!"
      })
    )}, 1000);
}

function get_user(name) {
    fetch(`/worker/user/${name}`)
    .then(response => response.json())
    .then(data => {
        var user = `Name: ${name} Tokens: ${data['user']['tokens']} EXP: ${data['user']['exp']} Boxes Opened: ${data['user']['misc']['opened']} Messages: ${data['user']['misc']['messages']}`;
        blacket.socket.send(
        JSON.stringify({
        	type: "chat",
            data: user
        }));
    })
    .catch(error => console.error(error))
}

function get_blooks(name) {
    console.log(name);
    fetch(`/worker/user/${name}`)
    .then(response => response.json())
    .then(data => {
        var user = ``;

        for (const blook in data["user"]["blooks"]) {
            user += `${blook}: ${data["user"]["blooks"][blook]} `;
        }

        if (user.length > 1000) {
            user = "too long!!!"
        }
        
        blacket.socket.send(
        JSON.stringify({
        	type: "chat",
            data: user
        }));
    })
    .catch(error => console.error(error))
}

function net_worth(name) {
    var worth = 0;
    var blooks = {"Blacket": {"rarity": "Common", "chance": 100, "price": 0}, "Amber": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Angry Bot": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Black Licorice": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Candy Corn": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Dino Egg": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Dino Fossil": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Happy Bot": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Ice Bat": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Ice Bug": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Ice Elemental": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Jellybean": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Lil Bot": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Lollipop": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Lovely Bot": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Rock Monster": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Stegosaurus": {"rarity": "Uncommon", "chance": 19.5, "price": 5}, "Air Elemental": {"rarity": "Uncommon", "chance": 18.75, "price": 5}, "Alien": {"rarity": "Uncommon", "chance": 18.75, "price": 5}, "Earth": {"rarity": "Uncommon", "chance": 18.75, "price": 5}, "Fire Elemental": {"rarity": "Uncommon", "chance": 18.75, "price": 5}, "Meteor": {"rarity": "Uncommon", "chance": 18.75, "price": 5}, "Nature Elemental": {"rarity": "Uncommon", "chance": 18.75, "price": 5}, "Stars": {"rarity": "Uncommon", "chance": 18.75, "price": 5}, "Water Elemental": {"rarity": "Uncommon", "chance": 18.75, "price": 5}, "Frankenstein": {"rarity": "Uncommon", "chance": 18.5, "price": 5}, "Pumpkin": {"rarity": "Uncommon", "chance": 18.5, "price": 5}, "Swamp Monster": {"rarity": "Uncommon", "chance": 18.5, "price": 5}, "Vampire": {"rarity": "Uncommon", "chance": 18.5, "price": 5}, "Ankha": {"rarity": "Uncommon", "chance": 17.5, "price": 5}, "Mummy Ankha": {"rarity": "Uncommon", "chance": 17.5, "price": 5}, "Realistic Ankha": {"rarity": "Uncommon", "chance": 17.5, "price": 5}, "Apple": {"rarity": "Uncommon", "chance": 15.2, "price": 5}, "Two of Spades": {"rarity": "Uncommon", "chance": 15.2, "price": 5}, "Alice": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Clownfish": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Crab": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Drink Me": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Eat Me": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Flamingo": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Frog": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Glowing Ankha": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Grape": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Jellyfish": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Lemon": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Lime": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Old Boot": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Omar": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Orange": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Panda": {"rarity": "Uncommon", "chance": 15, "price": 5}, "qaiik": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Queen of Hearts": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Sloth": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Tenrec": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Zebra": {"rarity": "Uncommon", "chance": 15, "price": 5}, "Holiday Gift": {"rarity": "Uncommon", "chance": 14.5, "price": 5}, "Holiday Wreath": {"rarity": "Uncommon", "chance": 14.5, "price": 5}, "Hot Chocolate": {"rarity": "Uncommon", "chance": 14.5, "price": 5}, "Snow Globe": {"rarity": "Uncommon", "chance": 14.5, "price": 5}, "Stocking": {"rarity": "Uncommon", "chance": 14.5, "price": 5}, "Elf": {"rarity": "Uncommon", "chance": 13.4, "price": 5}, "Fairy": {"rarity": "Uncommon", "chance": 13.4, "price": 5}, "Slime Monster": {"rarity": "Uncommon", "chance": 13.4, "price": 5}, "Witch": {"rarity": "Uncommon", "chance": 13.4, "price": 5}, "Wizard": {"rarity": "Uncommon", "chance": 13.4, "price": 5}, "Breakfast Combo": {"rarity": "Uncommon", "chance": 12.5, "price": 5}, "Cereal": {"rarity": "Uncommon", "chance": 12.5, "price": 5}, "Milk": {"rarity": "Uncommon", "chance": 12.5, "price": 5}, "Orange Juice": {"rarity": "Uncommon", "chance": 12.5, "price": 5}, "Toast": {"rarity": "Uncommon", "chance": 12.5, "price": 5}, "Yogurt": {"rarity": "Uncommon", "chance": 12.5, "price": 5}, "Mummy": {"rarity": "Rare", "chance": 10.15, "price": 20}, "Zombie": {"rarity": "Rare", "chance": 10.15, "price": 20}, "Ankha's House": {"rarity": "Rare", "chance": 10, "price": 20}, "Buddy Bot": {"rarity": "Rare", "chance": 10, "price": 20}, "Frost Elemental": {"rarity": "Rare", "chance": 10, "price": 20}, "Lava Elemental": {"rarity": "Rare", "chance": 10, "price": 20}, "Mark Ankha": {"rarity": "Rare", "chance": 10, "price": 20}, "Planet": {"rarity": "Rare", "chance": 10, "price": 20}, "UFO": {"rarity": "Rare", "chance": 10, "price": 20}, "Watson": {"rarity": "Rare", "chance": 10, "price": 20}, "Brontosaurus": {"rarity": "Rare", "chance": 9, "price": 20}, "Dragon": {"rarity": "Rare", "chance": 9, "price": 20}, "Jester": {"rarity": "Rare", "chance": 9, "price": 20}, "Pancakes": {"rarity": "Rare", "chance": 9, "price": 20}, "Queen": {"rarity": "Rare", "chance": 9, "price": 20}, "Velociraptor": {"rarity": "Rare", "chance": 9, "price": 20}, "Waffle": {"rarity": "Rare", "chance": 9, "price": 20}, "Chocolate": {"rarity": "Rare", "chance": 8.5, "price": 20}, "Dink": {"rarity": "Rare", "chance": 8.5, "price": 20}, "Donk": {"rarity": "Rare", "chance": 8.5, "price": 20}, "Peppermint": {"rarity": "Rare", "chance": 8.5, "price": 20}, "Piotr": {"rarity": "Rare", "chance": 8.5, "price": 20}, "acai": {"rarity": "Rare", "chance": 7.5, "price": 20}, "Gingerbread House": {"rarity": "Rare", "chance": 7.1, "price": 20}, "Gingerbread Man": {"rarity": "Rare", "chance": 7.1, "price": 20}, "Reindeer": {"rarity": "Rare", "chance": 7.1, "price": 20}, "Elephant": {"rarity": "Rare", "chance": 7, "price": 20}, "Lemur": {"rarity": "Rare", "chance": 7, "price": 20}, "Peacock": {"rarity": "Rare", "chance": 7, "price": 20}, "Blobfish": {"rarity": "Rare", "chance": 6.8, "price": 20}, "Octopus": {"rarity": "Rare", "chance": 6.8, "price": 20}, "Pufferfish": {"rarity": "Rare", "chance": 6.8, "price": 20}, "Caramel Apple": {"rarity": "Rare", "chance": 6.7, "price": 20}, "Blueberry": {"rarity": "Rare", "chance": 6.5, "price": 20}, "Cheshire Cat": {"rarity": "Rare", "chance": 6.5, "price": 20}, "Dormouse": {"rarity": "Rare", "chance": 6.5, "price": 20}, "Raspberry": {"rarity": "Rare", "chance": 6.5, "price": 20}, "Strawberry": {"rarity": "Rare", "chance": 6.5, "price": 20}, "White Rabbit": {"rarity": "Rare", "chance": 6.5, "price": 20}, "Snowman": {"rarity": "Epic", "chance": 5.15, "price": 75}, "Cerulean": {"rarity": "Epic", "chance": 5, "price": 75}, "French Toast": {"rarity": "Epic", "chance": 5, "price": 75}, "iBlooket": {"rarity": "Epic", "chance": 5, "price": 75}, "Unicorn": {"rarity": "Epic", "chance": 5, "price": 75}, "Werewolf": {"rarity": "Epic", "chance": 5, "price": 75}, "Bush Monster": {"rarity": "Epic", "chance": 4.5, "price": 75}, "Gummy Worm": {"rarity": "Epic", "chance": 4.5, "price": 75}, "Space Elemental": {"rarity": "Epic", "chance": 4.5, "price": 75}, "Spaceship": {"rarity": "Epic", "chance": 4.5, "price": 75}, "High Ankha": {"rarity": "Epic", "chance": 4, "price": 75}, "Narwhal": {"rarity": "Epic", "chance": 3.9, "price": 75}, "Brainy Bot": {"rarity": "Epic", "chance": 3.7, "price": 75}, "Triceratops": {"rarity": "Epic", "chance": 3.7, "price": 75}, "Chameleon": {"rarity": "Epic", "chance": 3.48, "price": 75}, "Black Ankha": {"rarity": "Epic", "chance": 2.5, "price": 75}, "Caterpillar": {"rarity": "Epic", "chance": 2.5, "price": 75}, "Dragon Fruit": {"rarity": "Epic", "chance": 2.5, "price": 75}, "Mad Hatter": {"rarity": "Epic", "chance": 2.5, "price": 75}, "Watermelon": {"rarity": "Epic", "chance": 2.5, "price": 75}, "Pizza": {"rarity": "Epic", "chance": 2, "price": 75}, "King": {"rarity": "Legendary", "chance": 1, "price": 200}, "root": {"rarity": "Legendary", "chance": 1, "price": 200}, "Sandwich": {"rarity": "Legendary", "chance": 1, "price": 200}, "Santa Claus": {"rarity": "Legendary", "chance": 1, "price": 200}, "Ghost": {"rarity": "Legendary", "chance": 0.65, "price": 200}, "Baby Shark": {"rarity": "Legendary", "chance": 0.5, "price": 200}, "Golden Ankha": {"rarity": "Legendary", "chance": 0.5, "price": 200}, "Lion": {"rarity": "Legendary", "chance": 0.5, "price": 200}, "Astronaut": {"rarity": "Legendary", "chance": 0.45, "price": 200}, "Electric Elemental": {"rarity": "Legendary", "chance": 0.45, "price": 200}, "Rock Candy": {"rarity": "Legendary", "chance": 0.35, "price": 200}, "Yeti": {"rarity": "Legendary", "chance": 0.35, "price": 200}, "King of Hearts": {"rarity": "Legendary", "chance": 0.3, "price": 200}, "Mega Bot": {"rarity": "Legendary", "chance": 0.3, "price": 200}, "Starfruit": {"rarity": "Legendary", "chance": 0.3, "price": 200}, "Tyrannosaurus Rex": {"rarity": "Legendary", "chance": 0.3, "price": 200}, "susdog": {"rarity": "Legendary", "chance": 0.25, "price": 250}, "Megalodon": {"rarity": "Legendary", "chance": 0.2, "price": 250}, "Ice Slime": {"rarity": "Chroma", "chance": 0.08, "price": 300}, "Lovely Frog": {"rarity": "Chroma", "chance": 0.08, "price": 300}, "White Chocolate": {"rarity": "Chroma", "chance": 0.08, "price": 300}, "Lucky Frog": {"rarity": "Chroma", "chance": 0.07, "price": 300}, "Spring Frog": {"rarity": "Chroma", "chance": 0.06, "price": 300}, "Agent Owl": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Black Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Blizzard Clownfish": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Blue Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Brown Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Chocolate Milk": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Crimson Octopus": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Cyan Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Donut Blobfish": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Doxy": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Egypt Snow Globe": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Frozen Fossil": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Golden Amber": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Green Apple": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Green Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Haunted Pumpkin": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Japan Snow Globe": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Lemon Crab": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Lime Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "London Snow Globe": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Master Elf": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "New York Snow Globe": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Orange Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Paris Snow Globe": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Pink Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Pirate Pufferfish": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Plasma Elemental": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Poison Dart Frog": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Purple Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Rainbow Jellyfish": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Rainbow Narwhal": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Red Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Red Licorice": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Yellow Astronaut": {"rarity": "Chroma", "chance": 0.05, "price": 300}, "Catson": {"rarity": "Chroma", "chance": 0.03, "price": 300}, "Frost Wreath": {"rarity": "Chroma", "chance": 0.03, "price": 300}, "Pumpkin Cookie": {"rarity": "Chroma", "chance": 0.03, "price": 300}, "Mummy Cookie": {"rarity": "Chroma", "chance": 0.025, "price": 300}, "Blue Gummy Worm": {"rarity": "Chroma", "chance": 0.02, "price": 300}, "Ghost Cookie": {"rarity": "Chroma", "chance": 0.02, "price": 300}, "Ice Crab": {"rarity": "Chroma", "chance": 0.02, "price": 300}, "Rainbow Panda": {"rarity": "Chroma", "chance": 0.02, "price": 300}, "Tiger Zebra": {"rarity": "Chroma", "chance": 0.02, "price": 300}, "Tropical Globe": {"rarity": "Chroma", "chance": 0.02, "price": 300}, "White Peacock": {"rarity": "Chroma", "chance": 0.02, "price": 300}, "Zone Ankha": {"rarity": "Chroma", "chance": 0.02, "price": 300}, "Anaconda Wizard": {"rarity": "Chroma", "chance": 0.0175, "price": 300}, "Chick Chicken": {"rarity": "Chroma", "chance": 0.0175, "price": 300}, "Chicken Chick": {"rarity": "Chroma", "chance": 0.0175, "price": 300}, "Haunted Cookie": {"rarity": "Chroma", "chance": 0.0175, "price": 300}, "Owl Sheriff": {"rarity": "Chroma", "chance": 0.0175, "price": 300}, "Raccoon Bandit": {"rarity": "Chroma", "chance": 0.0175, "price": 300}, "Pumpkin King": {"rarity": "Chroma", "chance": 0.015, "price": 300}, "Vampire Frog": {"rarity": "Chroma", "chance": 0.015, "price": 300}, "Spooky Cookie": {"rarity": "Chroma", "chance": 0.013, "price": 300}, "Spooky Pumpkin": {"rarity": "Chroma", "chance": 0.0125, "price": 300}, "Festive Ankha": {"rarity": "Chroma", "chance": 0.01, "price": 350}, "Golden Gift": {"rarity": "Chroma", "chance": 0.01, "price": 350}, "Naughty Ankha": {"rarity": "Chroma", "chance": 0.01, "price": 350}, "Space Terminal": {"rarity": "Chroma", "chance": 0.01, "price": 350}, "Spooky Mummy": {"rarity": "Chroma", "chance": 0.01, "price": 350}, "Blue Raspberry": {"rarity": "Mystical", "chance": 0.0075, "price": 1000}, "Space Debugger": {"rarity": "Mystical", "chance": 0.0075, "price": 1000}, "Diamond Gift": {"rarity": "Mystical", "chance": 0.005, "price": 1000}, "Phantom King": {"rarity": "Mystical", "chance": 0.005, "price": 1000}, "Rainbow Jellybean": {"rarity": "Mystical", "chance": 0.005, "price": 1000}, "Spooky Ghost": {"rarity": "Mystical", "chance": 0.005, "price": 1000}, "Tim the Alien": {"rarity": "Mystical", "chance": 0.005, "price": 1000}, "Xotic": {"rarity": "Mystical", "chance": 0.005, "price": 1000}, "Rainbow Ankha": {"rarity": "Mystical", "chance": 0.003, "price": 1000}, "Rainbow Astronaut": {"rarity": "Mystical", "chance": 0.0025, "price": 1000}, "Ankha Cookie": {"rarity": "Iridescent", "chance": 0, "price": 25000}, "Baby Blue Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Bia": {"rarity": "Iridescent", "chance": 0, "price": 25000}, "Black Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Black Cerulean": {"rarity": "Iridescent", "chance": 0, "price": 25000}, "Blue Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Brown Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Burgandy Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Dull Blue Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Dust Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Golden Cerulean": {"rarity": "Iridescent", "chance": 0, "price": 25000}, "Golden Moai": {"rarity": "Iridescent", "chance": 0, "price": 25000}, "Gray Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Green Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Light Blue Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Lime Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Maroon Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Mint Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Moai": {"rarity": "Iridescent", "chance": 0, "price": 25000}, "Orange Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Party Pig": {"rarity": "Chroma", "chance": 0, "price": 350}, "Pink Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Purple Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Rainbow Blook": {"rarity": "Mystical", "chance": 0, "price": 1000}, "Rainbow Cerulean": {"rarity": "Iridescent", "chance": 0, "price": 25000}, "Red Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Salmon Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Tan Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Teal Blook": {"rarity": "Common", "chance": 0, "price": 0}, "White Blook": {"rarity": "Common", "chance": 0, "price": 0}, "Yellow Blook": {"rarity": "Common", "chance": 0, "price": 0}};
    fetch(`/worker/user/${name}`)
    .then(response => response.json())
    .then(data => {
        for (const blook in data["user"]["blooks"]) {
            console.log(blooks[blook]);
            try {
              if (blooks[blook]["rarity"] == "Uncommon") {
                  worth += 5 * data["user"]["blooks"][blook];
              } else if (blooks[blook]["rarity"] == "Rare") {
                  worth += 20 * data["user"]["blooks"][blook];
              } else if (blooks[blook]["rarity"] == "Epic") {
                  worth += 80 * data["user"]["blooks"][blook];
              } else if (blooks[blook]["rarity"] == "Legendary") {
                  worth += 225 * data["user"]["blooks"][blook];
              } else if (blooks[blook]["rarity"] == "Chroma") {
                  worth += 1000 * data["user"]["blooks"][blook];
              } else if (blooks[blook]["rarity"] == "Mystical") {
                  worth += 3000 * data["user"]["blooks"][blook];
              }
            } catch {
               console.log("");
            }
        }

        worth += data["user"]["tokens"];

        blacket.socket.send(
        JSON.stringify({
        	type: "chat",
            data: `${name}'s networth estimation is ${worth} tokens`
        }));
    })
    .catch(error => console.error(error))
}

function status_ () {
    blacket.socket.send(
    JSON.stringify({
        type: "chat",
        data: "Status: Bot is Up!!!"
    }));
}

function help() {
    blacket.socket.send(
    JSON.stringify({
        type: "chat",
        data: "Help | $blooks [user] - shows user blooks | $stats [user] - shows user stats | $networth [user] - shows user's networth | $hack - hacks in tokens for you | $status - checks bots status"
    }));
}

blacket.socket.onmessage = (msg) => {
    msg = JSON.parse(msg.data);
    if (msg["type"] == "chat") {
        if (msg["message"].startsWith("$stats")) {
            setTimeout(() => {
    		    get_user(msg["message"].split(" ")[1]);
        	}, 1000);
    	} else if (msg["message"].startsWith("$blooks")) {
            setTimeout(() => {
    		    get_blooks(msg["message"].split(" ")[1]);
        	}, 1000);
        } else if (msg["message"].startsWith("$help")) {
            setTimeout(() => {
                help();
            }, 1000);
        } else if (msg["message"].startsWith("$networth")) {
            setTimeout(() => {
    		    net_worth(msg["message"].split(" ")[1]);
        	}, 1000);
        } else if (msg["message"].startsWith("$hack")) {
            setTimeout(() => {
    		    token_gen();
        	}, 1000);
        } else if (msg["message"].startsWith("$status")) {
            setTimeout(() => {
    		    status_();
        	}, 1000);
        }
    }
}
