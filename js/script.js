console.log("script.js connected!");

let questionBlocks = document.querySelectorAll(".question-block");
let userAnswers = {};

questionBlocks.forEach(function(block, index) {
    let buttons = block.querySelectorAll(".answer-btn"); 
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(btn){
                btn.classList.remove("selected");
            });
            button.classList.add("selected"); 
            userAnswers[index] = button.dataset.answer;

            console.log(userAnswers);
        });
    });
});

function displayResult() {
    let Zurich = 0;
    let Rio = 0;
    let NY = 0;
    let Wellington = 0;

    for (let i in userAnswers) {
        let city = userAnswers[i];
        if (city == "Zurich, Switzerland") {
            Zurich++;
        } else if (city == "Rio de Janeiro, Brazil") {
            Rio++;
        } else if (city == "New York, U.S.A.") {
            NY++;
        } else if (city == "Wellington, New Zealand") {
            Wellington++;
        }
    }

    let finalCity = "";
    if (Zurich >= Rio && Zurich >= NY && Zurich >= Wellington) {
        finalCity = "Zurich, Switzerland";
    } else if (Rio >= Zurich && Rio >= NY && Rio >= Wellington) {
        finalCity = "Rio de Janeiro, Brazil";
    } else if (NY >= Zurich && NY >= Rio && NY >= Wellington) {
        finalCity = "New York, U.S.A.";
    } else {
        finalCity = "Wellington, New Zealand";
    }

     let resultContainer = document.querySelector("#result-container");
    let resultText = document.querySelector("#result-text");
    
    resultContainer.style.display = "block";
    resultText.textContent = finalCity;
}

document.querySelector("#show-result").addEventListener("click", displayResult);