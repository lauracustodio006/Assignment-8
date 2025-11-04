console.log("script.js connected!");

let questionBlock = document.querySelectorAll(".question-block");
let userAnswers = {};

questionBlock.forEach(function(block) {
 let button = block.querySelectorAll(".answer-btn");

    button.forEach(function(button){
        button.addEventListener("click", function() {
            button.forEach(function(btn){
                btn.classList.remove("selected");
            });

        button.classList.add("selected");

        let buttonID = button.dataset.buttonid;
        let response = button.dataset.city;
        userAnswers[buttonID] = response;

         console.log(userAnswers);
        });
    });
});
let Zurich  = 0;
let Rio = 0;
let NY = 0;
let Wellington = 0;
for (let i in )
