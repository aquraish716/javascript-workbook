const arrOfPeople = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
    ]

    const listOfPlayers = [];
    const blueTeam = [];
    const redTeam = [];
    //created playerc object with id, name, age, skillset, placeborn attributes
    class PlayerC {
    constructor(id, name, age, skillSet, placeBorn){
        this.id = id,
        this.name = name, 
        this.age = age,
        this.skillSet = skillSet,
        this.placeBorn = placeBorn
    }
    }
    //created an extension to playerc that adds a teamofcolor and mascot for the blue team 
    class BlueTeammate extends PlayerC {
        constructor(id, name, age, skillSet, placeBorn, teamOfColor, mascot){
        super(id, name, age, skillSet, placeBorn)
        this.teamOfColor = teamOfColor;
        this.mascot = mascot;
    }
    }
//created an extension to playerc that adds a teamofcolor and mascot for the red team 
    class RedTeammate extends PlayerC{
        constructor(id, name, age, skillSet, placeBorn, teamOfColor, mascot){
            super(id, name, age, skillSet, placeBorn)
            this.teamOfColor = teamOfColor;
            this.mascot = mascot;
        }
    }

    const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function() {makePlayer(person);
            let buttonClick = event.target;
            let clickedUser = buttonClick.parentElement;
            clickedUser.remove(person);
        })
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
    })
    }

    //created a function that makes a player and created two team color options. when player is selected, they are then removed on click
    let makePlayer = (person) => {
        console.log(`li ${person.id} was clicked!`);
        
        let li = document.createElement('li');
        let players = document.getElementById("players");
        let blueButton = document.createElement('button');
        blueButton.innerText = "Blue Team";
        let redButton = document.createElement('button');
        redButton.innerText = "Red Team";
        players.appendChild(li).innerHTML = `Name:  ${person.name} - Age: ${person.age} - Skills: ${person.skillSet} - PlaceBorn: ${person.placeBorn} `;
        li.append(blueButton);
        li.appendChild(redButton);
        blueButton.addEventListener('click', function(){makeBluePlayer(person);
            let buttonClick = event.target;
            let clickedUser = buttonClick.parentElement;
            clickedUser.remove(person);});
        redButton.addEventListener('click', function(){makeRedPlayer(person);
            let buttonClick = event.target;
            let clickedUser = buttonClick.parentElement;
            clickedUser.remove(person);});

    
    }
//created a function to make a blue player from the player options, it is removed from players when selected on click
    let makeBluePlayer = (person) => {
        let li = document.createElement('li');
        let blueButton = document.createElement('button');
        let ul = document.getElementById('blue');
        let blue = new BlueTeammate(true, true, true, true, true, 'Blue', 'Patriots');
        ul.appendChild(li).innerText = `Name: ${person.name} - Age: ${person.age} - Skills: ${person.skillSet} - PlaceBorn: ${person.placeBorn} - Team Color: ${blue.teamOfColor} - Team Mascot: ${blue.mascot}`;
        
    }

   //created a function to make a red player from the player options, it is removed from players when selected on click
    let makeRedPlayer = (person) => {
        let li = document.createElement('li');
        let blueButton = document.createElement('button');
        let ul = document.getElementById('red');
        let red = new RedTeammate(true, true, true, true, true, 'Red', 'Bills');
        ul.appendChild(li).innerText = `Name: ${person.name} - Age: ${person.age} - Skills: ${person.skillSet} - PlaceBorn: ${person.placeBorn} - Team Color: ${red.teamOfColor} - Team Mascot: ${red.mascot}`;
    }

/*Created three test to check if color of team is blue, 
if blueteamate team color is blue socks, and if redteammate team color is red socks*/

let assert = require('assert');

if (typeof describe === 'function'){
    describe('Player', () => {
    it('should add a blue color to a player', () => {
        let bluePlayer2 = new BlueTeammate(true, true, true, true, true, 'blue', true);
        assert.equal(bluePlayer2.teamOfColor, 'blue');})
    it('should add a mascot to a blue player', () => {
        let bluePlayer2 = new BlueTeammate(true, true, true, true, true, true, 'Blue Socks');
        assert.equal(bluePlayer2.mascot, 'Blue Socks');})
    it('should add a mascot to a red player', () => {
        let redPlayer2 = new RedTeammate(true, true, true, true, true, true, 'Red Socks');
        assert.equal(redPlayer2.mascot, 'Red Socks');})
    })}