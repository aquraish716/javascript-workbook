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

    class player {
    constructor(id, name, age, skillSet, placeBorn){
        this.id = id,
        this.name = name, 
        this.age = age,
        this.skillSet = skillSet,
        this.placeBorn = placeBorn
    }
    addToRedTeam(redTeam){
        this.redTeam = redTeam;
        player.redTeam.push(this);
    }
    addToBlueTeam(blueTeam){
        this.blueTeam = blueTeam;
        player.blueTeam.push(this);
    }



    }

    class blueTeammate extends player{
    constructor(id, name, age, skillSet, placeBorn, teamOfColor){
        super(id, name, age, skillSet, placeBorn)
        this.teamOfColor = teamOfColor
    }
    }

    class redTeammate extends player{
        constructor(id, name, age, skillSet, placeBorn, teamOfColor){
            super(id, name, age, skillSet, placeBorn)
            this.teamOfColor = teamOfColor
        }
    }

    const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function() {makePlayer(person.id)} )
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
    })
    }

    const makePlayer = (id) => {
    
    let players = document.getElementById("players");
    
    let playerFind = arrOfPeople.find(function(entry){
        return entry.id === id;
    });

    let indexOfPlayer = arrOfPeople.indexOf(playerFind);

    let newPlayer = new player()



    

    listOfPlayers.push(listElement);
    console.log(`li ${id} was clicked!`)
    console.log(listOfPlayers);
    }


    const makeBluePlayer = () => {
        let bluePlayer = document.getElementById('blue');
        bluePlayer.teamOfColor = 'blue';

    }