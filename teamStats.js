const team = {
    _players: [
      {firstName: 'barbara', lastName: 'hajmiler', age: 29},
      {firstName: 'josip', lastName: 'bosnjakovic', age: 28},
      {firstName: 'junior', lastName: 'bos-haj', age: 1}
    ],
    _games: [
      {opponent: 'chelsea', teamPoints: 22, opponentPoints: 25},
      {opponent: 'barcelona', teamPoints: 26, opponentPoints: 20},
      {opponent: 'liverpool', teamPoints: 28, opponentPoints: 22},
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('saf', 'fsafa', 2547);
  console.log(team.players);
  team.addGame('titan', 100, 98);
  console.log(team.games);
  