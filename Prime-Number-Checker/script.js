function cPrime() {
    const n = parseInt(document.getElementById('input').value);
    const res = document.getElementById('result');
    if (isNaN(n) || n <= 1) {
        res.textContent = "Please enter a number greater than 1.";
        res.style.color = "red";
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        res.textContent = `${n} is a Prime Number.`;
        res.style.color = "green";
    } else {
        res.textContent = `${n} is a Non-Prime Number.`;
        res.style.color = "blue";
    }
}
