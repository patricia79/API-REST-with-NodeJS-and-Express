# API-REST-with-NodeJS-and-Express

function playDices() {

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let result = dice1 + dice2
    let play = ' '
    if (dice1 + dice2 === 7) {
        play = 'win'
        } else {
        play = 'lose'
            }
    return { play, dice1, dice2, result } 
}
module.exports = playDices