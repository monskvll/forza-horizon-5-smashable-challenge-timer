function calculateTime() {
    const lastChallengeDay = "08";
    const lastChallengeMonth = "Sep";
    const lastChallengeYear = "2022";
    const parsedLastChallengeDate = Date.parse(`${lastChallengeDay} ${lastChallengeMonth} ${lastChallengeYear} 15: 00: 00 GMT`);
    const currentDate = Date.now();
    const ellapsedTime = currentDate - parsedLastChallengeDate;
    const daysInMilliseconds = ellapsedTime / 1000 / 60 / 60 / 24;

    const timer = document.getElementById("timer");
    timer.textContent = `${Math.floor(daysInMilliseconds)} days`;
}

calculateTime();