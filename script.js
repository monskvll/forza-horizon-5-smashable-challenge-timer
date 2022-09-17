

function calculateTime() {
    const timer = document.getElementById("timer");
    const lastChallengeDate = Date.parse('08 Sep 2022 15: 00: 00 GMT');
    const currentDate = Date.now();
    const ellapsedTime = currentDate - lastChallengeDate;
    const daysInMilliseconds = ellapsedTime / 1000 / 60 / 60 / 24;

    timer.textContent = `${Math.floor(daysInMilliseconds)} days`;
}

calculateTime();