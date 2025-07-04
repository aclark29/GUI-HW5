// Andrew Clark
// 7/4/25
// Dynamically set up divs to hold the tiles on the board line

function setBoardSlots() {
    const slotWidth = 50;
    const spacing = 12.5;
    var totalOffset = slotWidth +  2 * spacing;

    for (let i = 0; i < 15; i++) {
    const slot = document.getElementById(`boardSlot${i}`);
    if (slot) {
        slot.style.position = 'absolute';
        slot.style.width = '50px';
        slot.style.height = '50px';
        slot.style.top = `${spacing}px`;
        if (i === 0) {
            slot.style.left = `${spacing}px`;
        } else {
            slot.style.left = `${i * totalOffset + spacing}px`;
        }
        slot.style.left = `${i * totalOffset + spacing}px`;
        //slot.style.border = '1px solid blue';
    }
    }
}

setBoardSlots();