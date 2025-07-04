// Andrew Clark
// 7/4/25
// Controls how tiles are dropped on their targets -- they need a neighbor
// or they bounce back, they're on top of the rack and board, etc.
$(".boardSlot").droppable({
  accept: ".tile",
  drop: function(event, ui) {
    var $tile = ui.draggable;
    var $slot = $(this);

    if ($slot.data("occupied")) return;

    const slotId = $slot.attr("id");
    const prefix = "boardSlot";
    const slot = parseInt(slotId.replace(prefix, ""));

    // count used tiles
    let tileInfo = $(".boardSlot").filter(function () {
      return $(this).data("tile");
    });
    let numTiles = tileInfo.length;

    // if there aren't any tiles, we don't need to check neighbors
    if (numTiles === 0) {
      placeTile();
      return;
    }

    // check neighbors
    let left = $(`#${prefix}${slot - 1}`);
    let right = $(`#${prefix}${slot + 1}`);

    let hasNeighbor = false;

    if (left.length && left.data('tile')) hasNeighbor = true;
    if (right.length && right.data('tile')) hasNeighbor = true;

    // if no neighbor, send tile back to rack
    if (!hasNeighbor) {
      $tile.css({ top: 0, left: 0 });
      return;
    }

    placeTile();

    function placeTile() {
      $tile.position({
        of: $slot,
        my: "left top",
        at: "left top"
      });

      $tile.draggable("disable");
      $tile.css("z-index", 10);
      $tile.data("currentSlot", slotId);

      $slot.data("occupied", true);
      $slot.data("tile", $tile);

      calcScore();
    }
  }
});