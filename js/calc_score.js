// Andrew Clark
// 7/4/25
// calculates the current score -- called whenever a tile is dropped, also
// shows the word being updated
function calcScore() {
    let score = 0;
    let wordMultiplier = 1;
    let word = "";

    // iterate through slots, get letters in each
    $(".boardSlot").each(function () {
    const $slot = $(this);
    const $tile = $slot.data("tile");


    if ($tile) {
        const letter = $tile.data("letter");
        // append letter to word (for future display)
        word += letter;
        const letterScore = ScrabbleTiles[letter]["value"];
        let tileScore = letterScore;

        // uses classes for double letters and words, tracks bonuses
        if ($slot.hasClass("doubleLetter")) {
            tileScore *= 2;
        }

        // increment score
        score += tileScore;

        if ($slot.hasClass("doubleWord")) {
            wordMultiplier *= 2;
        }
    }
    });

    score *= wordMultiplier;
    //display the score and word
    $('#scoreDisplay').text(`Score: ${score}`);
    $('#wordDisplay').text(`Word: ${word}`);
    return score;
}
