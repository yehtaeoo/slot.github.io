const symbols = ['🍒', '🍋', '🔔', '⭐', '🍉'];

const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');

spinButton.addEventListener('click', () => {
    const slot1 = getRandomSymbol();
    const slot2 = getRandomSymbol();
    const slot3 = getRandomSymbol();

    reel1.textContent = slot1;
    reel2.textContent = slot2;
    reel3.textContent = slot3;

    if (slot1 === slot2 && slot2 === slot3) {
        result.textContent = 'You Win!';
    } else {
        result.textContent = 'Try Again!';
    }
});

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
