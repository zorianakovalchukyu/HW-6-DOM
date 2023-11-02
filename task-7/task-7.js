function updateClock() {
  let now = new Date();
  let currentSeconds = now.getSeconds();
  let currentSecondsTens = Math.floor(currentSeconds / 10);
  let currentSecondsOnes = currentSeconds % 10;

  let currentMinutes = now.getMinutes();
  let currentMinutesTens = Math.floor(currentMinutes / 10);
  let currentMinutesOnes = currentMinutes % 10;

  let currentHours = now.getHours();
  let currentHoursTens = Math.floor(currentHours / 10);
  let currentHoursOnes = currentHours % 10;

  const month = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  let currentMonth = month[now.getMonth()];

  let currentDay = now.getDate();
  let currentDayTens = Math.floor(currentDay / 10);
  let currentDayOnes = currentDay % 10;

  function getClass(number) {
    switch (number) {
      case 0:
        return "zero";
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      case 7:
        return "seven";
      case 8:
        return "eight";
      case 9:
        return "nine";
    }
  }

  const secondTens = document.getElementById("second--tens");
  secondTens.classList.remove(secondTens.classList[1]);
  const secondOnes = document.getElementById("second--ones");
  secondOnes.classList.remove(secondOnes.classList[1]);
  secondTens.classList.add(getClass(currentSecondsTens));
  secondOnes.classList.add(getClass(currentSecondsOnes));

  const minuteTens = document.getElementById("minute--tens");
  minuteTens.classList.remove(minuteTens.classList[1]);
  const minuteOnes = document.getElementById("minute--ones");
  minuteOnes.classList.remove(minuteOnes.classList[1]);
  minuteTens.classList.add(getClass(currentMinutesTens));
  minuteOnes.classList.add(getClass(currentMinutesOnes));

  const hourTens = document.getElementById("hour--tens");
  hourTens.classList.remove(hourTens.classList[1]);
  const hourOnes = document.getElementById("hour--ones");
  hourOnes.classList.remove(hourOnes.classList[1]);
  hourTens.classList.add(getClass(currentHoursTens));
  hourOnes.classList.add(getClass(currentHoursOnes));
  console.log(hourOnes.classList);

  const monthElement = document.getElementById("month");
  monthElement.innerHTML = "";

  for (const char of currentMonth) {
    const letterElement = document.createElement("div");
    letterElement.classList.add("digit", "letter", char);
    monthElement.appendChild(letterElement);

    for (let i = 0; i < 7; i++) {
      const unit = document.createElement("div");
      unit.classList.add("unit");
      letterElement.appendChild(unit);
    }
  }

  const dayTens = document.getElementById("day--tens");
  dayTens.classList.remove(dayTens.classList[1]);
  const dayOnes = document.getElementById("day--ones");
  dayOnes.classList.remove(dayOnes.classList[1]);
  dayTens.classList.add(getClass(currentDayTens));
  dayOnes.classList.add(getClass(currentDayOnes));
}

function initClock() {
  updateClock();
  window.setInterval(updateClock, 1000);
}
initClock();
