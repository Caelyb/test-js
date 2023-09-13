// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code
const players = data.getPlayers()

const test1 = (players) => {
    for (i = 0; players.length > i; i++) {
        console.log("PLAYER "+i)
        console.log("NAME:", players[i].name)
        console.log("LASTNAME:", players[i].lastname)
        console.log("POSITION:", players[i].position)
    }
}

// test1(players)


/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
const compareByLength = (a, b) => {
    return b.length - a.length;
  }


const test2 = (players) => {
    array = []
    for (i = 0; players.length > i; i++) {
      array.push(players[i].name)
    } 
    array.sort(compareByLength)
  return array
}

//console.log("Player names in decending order:",test2(players))

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average 
 * Output example -> Goals per match: 2.19
 */

// Your code

const test3 = (players) => {
    array = []
    for (i = 0; players.length > i; i++) {
      array.push(players[i].scoringChance)
    } 
    // Calculate the average
    const average = array.reduce((sum, num) => sum + num, 0) / array.length;
    // divide by 100 to get from percentage to prob, x 10 players
  return average/10
}

// console.log("Average team score", test3(players))

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code

const test4 = (first, last) => {
    // this function uses full name to avoid 2 players having the same name giving multiple outputs.
    for (i = 0; players.length > i; i++) {
        if (players[i].name == first) {
            if (players[i].lastname == last) {
                console.log(players[i].position)
        }
      } 
    }
}

// test4(players[4].name, players[4].lastname)

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

const test5 = (players) => {
    team1 = []
    team2 = players
    teamSize = players.length/2 

    for (i = 0; i < teamSize ; i++) {
        let index = Math.floor(Math.random() * team2.length);
        team1.push(players[index])
        team2.splice(index, 1)

    }
    // console.log("Team 1:", (team1)) // check teams have different players
    // console.log("Team 2:", (team2))
    console.log("Team 1 score:", Math.round(test3(team1)))
    console.log("Team 2 score:", Math.round(test3(team2)))
}

test5(players)