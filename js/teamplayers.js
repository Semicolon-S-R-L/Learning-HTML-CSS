const team ={
    _players:[{
      firstName:'Leo',
      lastName:'Messi',
      age:34,
    },
     { firstName:'Luis',
      lastName:'Suarez',
      age:35,
     },
    {firstName:'Join',
      lastName:'de Jong',
      age:22,
        },
           
    ],
    _games:[{
      opponent:'Barcelona',
      teamPoints: 22,
      opponentPoints:21,
    },
           { opponent:'Atl. Madrid',
      teamPoints: 22,
      opponentPoints:21,},
           { opponent:'Sevilla',
      teamPoints: 22,
      opponentPoints:20,},
           ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(firstName,lastName,age){
      let player = {firstName:firstName,
                 lastName:lastName,
                 age:age};
      
     this.players.push(player);
    },
    addGame(oppName,points,oppPoints){
      const game={opponent:oppName,
                  points:points,
                 opponentPoints:oppPoints,
      }
      this.games.push(game);
    }
  };
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  console.log(team.players)
  
  team.addGame('Getafe',22,18);
  team.addGame('Villarreal',22,17);
  team.addGame('Osasuna',22,15);
  console.log(team.games)