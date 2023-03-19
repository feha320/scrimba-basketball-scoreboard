const homeDisplay = document.getElementById("home-display");
const guestDisplay = document.getElementById("guest-display")

let homeCount = 0;
let guestCount = 0;

function addOneHome() {
  homeCount += 1;
  updateDisplay();
}

function addTwoHome() {
  homeCount += 2;
  updateDisplay();
}

function addThreeHome() {
  homeCount += 3;
  updateDisplay();
}

function addOneGuest() {
  guestCount += 1;
  updateDisplay();
}

function addTwoGuest() {
  guestCount += 2;
  updateDisplay();
}

function addThreeGuest() {
  guestCount += 3;
  updateDisplay();
}

function restart() {
  homeCount = 0;
  guestCount = 0;
  updateDisplay();
}

function updateDisplay() {
  homeDisplay.textContent = homeCount;
  guestDisplay.textContent = guestCount;
  if (homeCount > 999) {
    homeDisplay.textContent = "XXX";
  }
  if (guestCount > 999) {
    guestDisplay.textContent = "XXX";
  }
}
