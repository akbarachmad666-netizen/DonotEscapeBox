let hasKey = false;
let foundClue = false;
let code = "427"; // hidden code
let input = "";

// helper
function setText(msg) {
  document.getElementById("text").innerText = msg;
}

function updateInventory() {
  let items = [];
  if (hasKey) items.push("Key 🔑");
  if (foundClue) items.push("Clue 🧩");

  document.getElementById("items").innerText = items.length ? items.join(", ") : "Empty";
}

// interactions
function checkBox() {
  if (!hasKey) {
    hasKey = true;
    setText("You found a key inside the box.");
    updateInventory();
  } else {
    setText("Nothing else inside.");
  }
}

function checkPaper() {
  setText("The paper says: 'The middle number is 2x2. The last is 7.'");
}

function checkWall() {
  if (!foundClue) {
    foundClue = true;
    setText("You notice scratches: 'First number = 4'");
    updateInventory();
  } else {
    setText("Just a scratched wall.");
  }
}

function checkDoor() {
  if (!hasKey) {
    setText("The door is locked.");
    return;
  }

  document.getElementById("keypad").classList.remove("hidden");
  setText("Enter the code.");
}

// keypad
function press(num) {
  if (input.length < 3) {
    input += num;
    document.getElementById("codeInput").value = input;
  }
}

function clearCode() {
  input = "";
  document.getElementById("codeInput").value = "";
}

function submitCode() {
  if (input === code) {
    setText("You escaped! 🎉");
    document.getElementById("keypad").classList.add("hidden");
  } else {
    setText("Wrong code.");
    clearCode();
  }
}
