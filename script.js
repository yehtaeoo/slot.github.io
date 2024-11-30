const symbols = ['🍒', '🍋', '🔔', '⭐', '🍉'];

const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');
const balanceDisplay = document.getElementById('balance');

let balance = 1000000;

spinButton.addEventListener('click', () => {
    if (balance >= 50000) {
        balance -= 50000;
        balanceDisplay.textContent = balance;

        // Add spin animation
        reel1.style.transform = 'rotate(360deg)';
        reel2.style.transform = 'rotate(360deg)';
        reel3.style.transform = 'rotate(360deg)';
        
        setTimeout(() => {
            const slot1 = getRandomSymbol();
            const slot2 = getRandomSymbol();
            const slot3 = getRandomSymbol();
            
            reel1.textContent = slot1;
            reel2.textContent = slot2;
            reel3.textContent = slot3;
            
            reel1.style.transform = 'rotate(0deg)';
            reel2.style.transform = 'rotate(0deg)';
            reel3.style.transform = 'rotate(0deg)';
            
            if (slot1 === slot2 && slot2 === slot3) {
                balance += 1000000;
                result.textContent = 'You Win!';
            } else {
                result.textContent = 'Try Again!';
            }
            
            balanceDisplay.textContent = balance;
        }, 500);
        
    } else {
        result.textContent = 'Not enough balance!';
    }
});

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
