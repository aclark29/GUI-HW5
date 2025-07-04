// Andrew Clark
// 7/4/25
// 
let totalScore = 0;
$(document).ready(function () {
  $('#submitWord').on('click', function () {
    const currentScore = calcScore();  // get the current score
    totalScore += currentScore;

    $('#totalScore').text(`Total Score: ${totalScore}`);

    // remove tiles from the board and clear slots
    $(".boardSlot").each(function () {
      const $slot = $(this);
      const $tile = $slot.data("tile");
      if ($tile) {
        $tile.remove();
        $slot.removeData("tile").data("occupied", false);
      }
    });

    // count how many tiles are on the rack (max of 7)
    let rackTileCount = 0;
    for (let i = 0; i < 7; i++) {
        if ($(`#ts${i}`).children().length > 0) {
            rackTileCount++;
        }
    }

    // refill rack with (7 - rackTileCount) tiles
    let newTiles = randomTiles(rackTileCount);
    let tileIndex = 0;

    for (let i = 0; i < 7 && tileIndex < newTiles.length; i++) {
      const $slot = $(`#ts${i}`);
      if ($slot.children().length === 0) {
        const letter = newTiles[tileIndex];
        tileIndex++;
        let imgFile;
        if (letter === "_") {
            imgFile = "Blank";
        } else {
            imgFile = letter;
        }

        const tile = $(`
            <div class="tile" id="tile${i}">
                <img src="graphics_data/Scrabble_Tile_${imgFile}.jpg" alt="${letter}">
            </div>
        `);


        tile.data("letter", letter);
        $slot.append(tile);

        tile.draggable({
          revert: "invalid",
          cursor: "grab",
          helper: "original"
        });
      }
    }

    // clear the round displays
    $('#scoreDisplay').text('');
    $('#wordDisplay').text('');
    displayTilesRemaining();
  });
});

// counts tiles remaining
function displayTilesRemaining() {
  let totalRemaining = 0;
  for (const letter in ScrabbleTiles) {
    totalRemaining += ScrabbleTiles[letter]['number-remaining'];
  }
  $('#tilesRemaining').text(`Tiles Remaining: ${totalRemaining}`);
}
