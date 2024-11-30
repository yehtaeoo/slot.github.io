const symbols = ['🍒', '🍋', '🔔', '⭐', '🍉', '💎', '🍇', '🍓', '🍍', '💰'];

const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const reel4 = document.getElementById('reel4');
const reel5 = document.getElementById('reel5');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');
const balanceDisplay = document.getElementById('balance');

let balance = 1000000000;

spinButton.addEventListener('click', () => {
    if (balance >= 750000) {
        balance -= 750000;
        balanceDisplay.textContent = balance.toLocaleString();

        // Add spin animation
        reel1.style.transform = 'rotate(360deg)';
        reel2.style.transform = 'rotate(360deg)';
        reel3.style.transform = 'rotate(360deg)';
        reel4.style.transform = 'rotate(360deg)';
        reel5.style.transform = 'rotate(360deg)';
        
        setTimeout(() => {
            const slot1 = getRandomSymbol();
            const slot2 = getRandomSymbol();
            const slot3 = getRandomSymbol();
            const slot4 = getRandomSymbol();
            const slot5 = getRandomSymbol();

            reel1.textContent = slot1;
            reel2.textContent = slot2;
            reel3.textContent = slot3;
            reel4.textContent = slot4;
            reel5.textContent = slot5;

            reel1.style.transform = 'rotate(0deg)';
            reel2.style.transform = 'rotate(0deg)';
            reel3.style.transform = 'rotate(0deg)';
            reel4.style.transform = 'rotate(0deg)';
            reel5.style.transform = 'rotate(0deg)';

            if (slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === slot5) {
                balance += 900000000;
                result.textContent = 'You Win!';
            } else {
                result.textContent = 'Try Again!';
            }

            balanceDisplay.textContent = balance.toLocaleString();
        }, 500);
    } else {
        result.textContent = 'Not enough balance!';
    }
});

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
