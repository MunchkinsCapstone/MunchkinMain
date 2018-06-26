class Card {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.discard = this.discard.bind(this);
    }

    discard() {
        decks[this.deck].graveYard.push(this);
    }
}

class Monster extends Card {
    constructor(name, description, level, treasures, badStuff) {
        super(name, description);
        this.level = level;
        this.treasures = treasures;
        this.type = 'Monster';
        this.badStuff = badStuff;
        this.deck = 'doors';
    }

    die() {
        this.discard();
    }
}

class Buff extends Card {
    constructor(name, description, effect, remove) {
        super(name, description);
        this.effect = effect;
        this.remove = remove;
    }
}

class Modifier extends Buff {
    constructor(name, description, effect, remove) {
        super(name, description, effect, remove);
        this.type = 'Modifier';
        this.deck = 'doors';
    }
}

class Equipment extends Buff {
    constructor(name, description, bodyPart, effect, remove) {
        super(name, description, effect, remove);
        this.bodyPart = bodyPart;
        this.type = 'Equipment';
        this.deck = 'treasures';
    }
}

class Spell extends Buff {
    constructor(name, description, effect, remove) {
        super(name, description, effect, remove);
        this.type = 'Spell';
        this.deck = 'treasures';
    }
}

class Class extends Buff {
    constructor(name, description, effect, remove) {
        super(name, description, effect, remove);
        this.type = 'Class';
        this.deck = 'doors';
    }
}

class Race extends Buff {
    constructor(name, description, effect, remove) {
        super(name, description, effect, remove);
        this.type = 'Race';
        this.deck = 'doors';
    }
}

function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

class Deck {
    constructor(cards) {
        this.cards = cards;
        this.graveYard = [];
        this.draw = this.draw.bind(this);
        this.flip = this.flip.bind(this);
        this.shuffleCards = this.shuffleCards.bind(this);
        this.restock = this.restock.bind(this);
    }

    draw() {
        if (!this.cards.length) this.restock();
        return this.cards.shift();
    }

    flip() {
        return this.cards.shift();
    }

    shuffleCards() {
        this.cards = shuffle(this.cards);
    }

    restock() {
        this.cards = this.cards.concat(shuffle(this.graveYard));
    }
}

//-----------------------------------------------------------------------//
//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-CARDS-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-//
//-----------------------------------------------------------------------//

const monsters = [
    new Monster('Slime', 'A big glob o\' goop', 2, 1, (player) => {}),
    new Monster('Skeleton', 'A buncha dancin\', rattlin\' bones', 3, 1, (player) => {}),
    new Monster('Dragon', 'A gigantic fire-breathing lizard', 20, 5, (player) => {player.die()}),
    new Monster('Vampire', 'Fanged fiend', 14, 4, (player) => {}),
];

const modifiers = [
    new Modifier('Ancient', '+10 to monster', (monster) => {
        monster.level += 10;
    }, (monster) => {monster.level -= 10;}),
    new Modifier('Baby', '-5 to monster (minimum 1)', (monster) => {
        monster.shrinkage = Math.min(monster.level - 1, 5);
        monster.level -= monster.shrinkage;
    }, (monster) => {monster.level += monster.shrinkage;}),
    new Modifier('Intelligent', '+5 to monster', (monster) => {
        monster.level += 5;
    }, (monster) => {monster.level -= 5;}),
];

const equipments = [
    new Equipment('Boots', 'You wear these on yer feet', 'feet', (user) => {
        user.bonus += 2;
    }, (user) => {
        user.bonus -= 2;
    }),
    new Equipment('Sandals of Protection', '', 'feet', 2),
    new Equipment('Hat with a feather in it', '', 'head', 2),
    new Equipment('Shiny Armor', '', 'feet', 2),
];

const races = [
    new Race('Elf', 'A denizen of the North Pole'),
    new Race('Dwarf', 'Sneezy\'s cousin', (player) => {
        player.maxInventory = 6;
    }, (player) => {
        player.maxInventory = 5;
    }),
    new Race('Halfling', 'It\'s not the size, it\'s how you use it' ),
    new Race('Orc', 'Hey, some of my best friends are green!'),
];

const classes = [
    new Class('Warrior', ''),
    new Class('Bard', ''),
    new Class('Thief', ''),
    new Class('Cleric', ''),
    new Class('Accountant', ''),
];

const spells = [
    new Spell('Magic Missile')
];

const doors = new Deck(monsters.concat(modifiers).concat(races).concat(classes));
const treasures = new Deck(equipments.concat(spells));

const decks = {
    doors, treasures
}

module.exports = {
    Deck,
    Race,
    Class,
    Equipment,
    monsters,
    equipments,
    classes,
    races,
    spells,
    modifiers,
    doors,
    treasures,
    shuffle
}