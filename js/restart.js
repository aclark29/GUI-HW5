// Andrew Clark
// 7/4/25
// Resets the game
$(document).ready(function () {
  $('#restart').on('click', function () {
    for (const letter in ScrabbleTiles) {
      ScrabbleTiles[letter]['number-remaining'] = ScrabbleTiles[letter]['original-distribution'];
    }

    $(".boardSlot").each(function () {
      const $slot = $(this);
      const $tile = $slot.data("tile");
      if ($tile) {
        $tile.remove();
        $slot.removeData("tile").data("occupied", false);
      }
    });

    $('.tileSlot').empty();

    totalScore = 0;
    $('#scoreDisplay').text('');
    $('#wordDisplay').text('');
    $('#totalScore').text('Total Score: 0');
    $('#tilesRemaining').text('Tiles Remaining: 100');

    loadTiles();

    displayTilesRemaining();
  });
});