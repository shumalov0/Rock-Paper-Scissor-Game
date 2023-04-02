function checker(input) {
    let choices = ["Daş", "Kağız", "Qayçı"];
    let num = Math.floor(Math.random() * 3);
  
    //    computer
    document.getElementById(
      "computer-choice"
    ).innerHTML = `Komputer secdi: <span> ${choices[num].toUpperCase()}</span>`;
  
    //    user
    document.getElementById("user-choice").innerHTML = `Sən seçdin : <span>
      ${input.toUpperCase()}</span>`;
  
    let computerChoice = choices[num];
  
    switch (choiceObject[input][computerChoice]) {
      case "Qalib":
        result.style.cssText = "background-color:#cefdce; color:#689f38;";
        result.innerHTML = `SƏN QAZANDIN `;
        user_score++;
        break;
      case "uduzdun":
        result.style.cssText = "background-color:#ffdde0; color:#d32f2f;";
        result.innerHTML = `SƏN MƏĞLUB OLDUN `;
        computer_score++;
        break;
      case "Bərabərə":
        result.style.cssText = "background-color:#e5e5e5; color:#808080;";
        result.innerHTML = `BƏRABƏRƏ `;
        break;
    }
  
    document.getElementById("computer-score").innerHTML = computer_score;
    document.getElementById("user-score").innerHTML = user_score;
  }
  
  let result = document.getElementById("result");
  let [computer_score, user_score] = [0, 0];
  let choiceObject = {
    Daş: {
      Daş: "Bərabərə",
      Kağız: "uduzdun",
      Qayçı: "Qalib",
    },
    Kağız: {
      Daş: "Qalib",
      Kağız: "Bərabərə",
      Qayçı: "uduzdun",
    },
    Qayçı: {
      Daş: "uduzdun",
      Kağız: "Qalib",
      Qayçı: "Bərabərə",
    },
  };
  