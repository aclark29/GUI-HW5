// Andrew Clark
// 7/4/25
// Iterate through associative array, pushing them all into an array, so there
// will be 100 tiles in the array. Then randomly select 7-rackTiles many tiles
// and return those as an array
function randomTiles(rackTiles = 0) {
    var allTiles = [];
    var selectedTiles = [];
    const numTiles = 7;
    const tilesNeeded = numTiles - rackTiles;

    for (const letter in ScrabbleTiles) {
        var left = ScrabbleTiles[letter]['number-remaining'];
        while (left > 0) {
            allTiles.push(letter);
            left--;
        }
    }

    for (let i = 0; i < tilesNeeded && allTiles.length > 0; i++) {
        let index = Math.floor(Math.random() * allTiles.length);
        const selectedTile = allTiles.splice(index, 1)[0];
        selectedTiles.push(selectedTile);
        ScrabbleTiles[selectedTile]['number-remaining']--;
    }

    return selectedTiles;
}
