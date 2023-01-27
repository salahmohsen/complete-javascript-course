// 'use strict';
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // const players1 = game.players[0];
// // const players2 = game.players[1];
// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   team1;
//   console.log(`${players.length} are socred`);
// };
// // team1 > team2 && console.log('team 1 is more likely to win!');
// // team1 < team2 && console.log('team 2 is more likely to win!');

// // printGoals(...game.scored);

// for (const [i, playerScored] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${playerScored}`);
// }

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     n: 1.3,
//   },
// };

// /*----------Task 1------------*/

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// /*----------Task 2------------*/

// let average = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(`average is: ${average}`);

// /*----------Task 3------------*/

// /*----------Method 1 for Task 3------------*/

// for (const [teamName, odd] of Object.entries(game.odds)) {
//   game[teamName]
//     ? console.log(`odd of victory ${game[teamName]}: ${odd}`)
//     : console.log(`odd of victory ${teamName}: ${odd}`);
// }

/*----------Method 2 for Task 3------------*/

// const matches = [];

// for (let i of Object.keys(game))
//   for (let l of Object.keys(game.odds)) {
//     i == l
//       ? console.log(`odd of victory ${game[i]}: ${game.odds[l]}`) &
//         matches.push(l)
//       : null;
//   }

// const oddsArray = [...Object.keys(game.odds)];

// const differences = oddsArray.filter(x => !matches.includes(x));

// for (const item of differences) {
//   console.log(`odd of victory ${item}: ${game.odds[item]}`);
// }

/*----------Method 2 for Task 3------------*/

// const [...gameKeys] = Object.keys(game);
// const [...oddsKeys] = Object.keys(game.odds);
// const teamsA = gameKeys.filter(item => oddsKeys.includes(item));
// const teamsNA = oddsKeys.filter(item => !gameKeys.includes(item));
// for (i of teamsA) console.log(`odd of ${game[i]}: ${game.odds[i]}`);
// for (i of teamsNA) console.log(`odd of ${i}: ${game.odds[i]}`);

// /*----------Task 4 [Bonus]------------*/

// let scorers = {};
// for (item of Object.values(game.scored)) {
//   scorers[item] ? (scorers[item] += 1) : (scorers[item] = 1);
// }
// console.log(scorers);

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// const [...events] = new Set(gameEvents.values());
// gameEvents.delete(64);

// console.log(gameEvents.size);
// const time = [...gameEvents.keys()].pop();

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
//   min < 45
//     ? console.log(`[FIRST HALF] ${min}: ${event}`)
//     : console.log(`[Second HALF] ${min}: ${event}`);
// }


