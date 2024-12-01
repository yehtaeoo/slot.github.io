const symbols = ['🍒', '🍋', '🔔', '⭐', '🍉', '💎', '🍇', '🍓', '🍍', '💰'];

const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const reel4 = document.getElementById('reel4');
const reel5 = document.getElementById('reel5');
const spinButton = document.getElementById('spinButton');
const stopButton = document.getElementById('stopButton');
const result = document.getElementById('result');
const balanceDisplay = document.getElementById('balance');
const totalBetDisplay = document.getElementById('total-bet');
const winDisplay = document.getElementById('win');

let balance = 1000000000;
let totalBet = 6000000000;

document.getElementById('bet-plus').addEventListener('click', () => {
    totalBet += 500000;
    totalBetDisplay.textContent = totalBet.toLocaleString();
});

document.getElementById('bet-minus').addEventListener('click', () => {
    if (totalBet > 0) {
        totalBet -= 500000;
        totalBetDisplay.textContent = totalBet.toLocaleString();
    }
});

spinButton.addEventListener('click', () => {
    if (balance >= totalBet) {
        balance -= totalBet;
        balanceDisplay.textContent = balance.toLocaleString();

        // Add spin animation
        [reel1, reel2, reel3, reel4, reel5].forEach(reel => reel.style.transform = 'rotate(360deg)');

        setTimeout(() => {
            const slot1 = getRandomSymbol();
            const slot2 = getRandomSymbol();
            const slot3 = getRandomSymbol();
            const slot4 = getRandomSymbol();
            const slot5 = getRandomSymbol();

            [reel1, reel2, reel3, reel4, reel5].forEach((reel, index) => {
                reel.textContent = [slot1, slot2, slot3, slot4, slot5][index];
                reel.style.transform = 'rotate(0deg)';
            });

            if (slot1 === slot2 && slot2 === slot3 && slot3 === slot4 && slot4 === slot5) {
                const winAmount = totalBet * 1.5; // Example win calculation
                balance += winAmount;
                winDisplay.textContent = winAmount.toLocaleString();
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

stopButton.addEventListener('click', () => {[_{{{CITATION{{{_1{](https://github.com/hyurl/cool-node/tree/b9091f76937076e02849032776c31a6863adc8aa/README.md)
