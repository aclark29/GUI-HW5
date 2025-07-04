// Andrew Clark
// 7/4/25
// Dynamically loads tile images into html
function loadTiles() {
    var rackTiles = randomTiles();  // get initial 7 random tiles

    $('.tileSlot').empty();

    for (let i = 0; i < rackTiles.length; i++) {
        const letter = rackTiles[i];
        let tile;
        if (letter != '_') {
            tile = $(
                `<div class="tile" id="tile${i}">
                    <img src="graphics_data/Scrabble_Tile_${letter}.jpg">
                </div>`
            );
        } else {
            tile = $(
                `<div class="tile" id="tile${i}">
                    <img src="graphics_data/Scrabble_Tile_Blank.jpg">
                </div>`
            );
        }
        tile.data("letter", letter);
        $(`#ts${i}`).append(tile);

        tile.draggable({
            revert: "invalid",
            cursor: "grab",
            helper: "original"
        });
    };
}

loadTiles();
