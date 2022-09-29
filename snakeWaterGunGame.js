alert("Let's play snake, water and gun game");

const game = (computer, player) => {
  if (computer == player) {
    alert("Match Tie! please try again.");
  } else if (computer == "s") {
    if (player == "w") {
      return false;
    } else if (player == "g") {
      return true;
    }
  } else if (computer == "w") {
    if (player == "g") {
      return false;
    } else if (player == "s") {
      return true;
    }
  } else if (computer == "g") {
    if (player == "s") {
      return false;
    } else if (player == "w") {
      return true;
    }
  }
};

alert("computer choice (snake(s), water(w) or gun(g))");
let com = Math.floor(Math.random() * 3) + 1;
if (com == 1) {
  computer = "s";
} else if (com == 2) {
  computer = "w";
} else if (com == 3) {
  computer = "g";
}

let player = prompt("Enter your choice (snake(s), water(w) or gun(g)): ");

alert("computer choice:", computer, "\nyour choice:", player);

let result = game(computer, player);

if (result == false) {
  alert("you lost!");
} else if (result == true) {
  alert("Congratulations! you won!");
}
