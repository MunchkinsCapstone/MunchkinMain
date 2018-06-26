const chalk = require('chalk');
const log = (x) => console.log(chalk.green(x));
const Player = require('./Player');

let { Deck, equipments, monsters, shuffle, doors, treasures } = require('./cards');

doors = new Deck(doors);
treasures = new Deck(treasures);

function rollDie() {
    return Math.ceil(Math.random() * 6);
}

class Game {
    constructor(players) {
		doors.shuffleCards();
        treasures.shuffleCards();
        players = players.map(player => new Player(player));
        this.players = shuffle(players);
        this.playerOrder = this.players.slice();
        this.currentPlayer = {};
        this.drawTreasure = () => {
            this.currentPlayer.draw(treasures);
            log(this.currentPlayer.hand.map(card => card.name))
        };
        this.lootRoom = () => {
            this.currentPlayer.draw(doors);
            log(this.currentPlayer.hand.map(card => card.name))
        };
        players.forEach(player => {
            for (let i = 0; i < 4; i++) {
                player.draw(doors);
                player.draw(treasures);
            }
        });
        this.active = true;
        this.battle = { isActive: false };
        this.startTurn = this.startTurn.bind(this);
        this.knockKnock = this.knockKnock.bind(this);
        this.startBattle = this.startBattle.bind(this);
        this.endTurn = this.endTurn.bind(this);
        this.startTurn();
    }

    startTurn() {
        this.currentPlayer = this.players.shift();
        this.currentPlayer.isActive = true;
        log('ACTIVE PLAYER: ' + this.currentPlayer.name)
    }

    knockKnock() {
        log('*knock* *knock*');
        const card = doors.flip();
        if (card.type === 'Monster') this.startBattle(card);
        else {
            log('You found: ' + card.name + '!')
            this.currentPlayer.hand.push(card);
        }
    }

    endTurn() {
        if (this.currentPlayer.hand.length > this.currentPlayer.maxInventory) {
            return log('You are carrying too many items!');
        }
        else {
            this.currentPlayer.isActive = false;
            this.players.push(this.currentPlayer);
            this.startTurn();
        }
    }

    startBattle(monster) {
        this.battle = new Battle(monster, this.currentPlayer);
    }

    endGame(playerName) {
        log(playerName + ' wins!');
    }
}

class Battle {
    constructor(monster, combatant) {
        this.monsters = [monster];
        this.combatants = [combatant];
        this.isActive = true;
        log('A ' + monster.name + ' approaches you!');
        log(monster.name + ': ' + monster.description);
        log('Level: ' + monster.level);
    }

    flee() {
        this.combatants.forEach(combatant => {
            const roll = rollDie();
            if (roll + combatant.run < 5) combatant.die();
        });
        this.isActive = false;
        this.combatants = [];
        this.monsters = [];
    }

    resolve() {
        const combatantsAttack = Battle.combatants
            .map(combatant => combatant.attack)
            .reduce((num1, num2) => num1 + num2);
        const monstersAttack = Battle.monsters
            .map(monster => monster.level)
            .reduce((num1, num2) => num1 + num2);
        if (combatantsAttack > monstersAttack) {
            this.monsters.forEach(monster => {
                monster.die();
                log('The ' + monster.name + ' has been slain!');
                currentPlayer.levelUp();
                for (let i = 0; i < monster.treasures; i++) {
                    currentPlayer.draw(treasures);
                }
            });
        } else {
            this.combatants.forEach(combatant => {
                combatant.die();
                log(combatant.name + ' has fallen in combat!');
            });
            this.monsters.forEach(monster => {
                monster.discard();
            });
        }
        this.isActive = false;
        this.combatants = [];
        this.monsters = [];
    }
}

// function startGame() {
//     const playerNames = ['Graham','Yang','Raymond','Ozal'];
//     const game = new Game(playerNames);
//     log('Players: ' + players.map(player=>player.name));
//     startTurn();
// }

// function endGame(playerName) {
//     log(playerName + ' wins!');
// }

// function startTurn() {
//     currentPlayer = startGame.players.shift();
//     currentPlayer.isActive = true;
// }

// function endTurn() {
//     if (currentPlayer.hand.length > currentPlayer.maxInventory) {
//         return log('You are carrying too many items!');
//     }
//     else {
//         currentPlayer.isActive = false;
//         players.push(currentPlayer);
//         startTurn();
//     }
// }

// function knockKnock() {
//     log('*knock* *knock*');
//     const card = doors.flip();
//     if (card.type === 'Monster') Battle.start(card);
//     else currentPlayer.hand.push(card);
// }

function lootRoom() {
    currentPlayer.draw(doors);
}

function simulateTurn() {
    const player = new Player('Steve');
    startGame([player]);
    log('Player: ' + player.name);
    log('Level: ' + player.level);
    log('Attack: ' + player.level + player.bonus);
    log('isActive: ' + player.isActive);
    log('Hand: ' + player.hand.slice(0, 2));
    simulateBattle();
}

function simulateBattle() {
    log('-----------------');
    knockKnock();
    currentPlayer.equip(1);
    // ^^^ Toggle the above line to change who wins
    log('-----------------');
    log('Equipment: ' + currentPlayer.equipment.feet);
    log('Attack: ' + currentPlayer.level + currentPlayer.bonus);
    log('-----------------');
    Battle.resolve();
    log('Level: ' + currentPlayer.level);
}

module.exports = {
    Player,
    rollDie,
    shuffle,
    Battle,
    lootRoom,
    doors,
    treasures,
    log,
    Game
}