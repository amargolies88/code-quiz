//Building Main Container
var mainContainer = $("<div>");
mainContainer.addClass("container-fluid p-sm-5");
$(document.body).append(mainContainer);

//Building Banner
var banner = $("<div>").addClass("row no-gutters banner-row");
mainContainer.append(banner);

var bannerText = $("<h1>JavaScript Quiz</h1>");
banner.append(bannerText);

//Build Button Splash Area
var questionRow = $("<div>").addClass("row no-gutters question-row");
mainContainer.append(questionRow);

var splashButtonStart = $("<button>Start</button>").addClass("btn btn-primary");
questionRow.append(splashButtonStart);

splashButtonStart.click(startQuiz);


function startQuiz() {
    splashButtonStart.remove();
    let takingQuiz = true;
    let timer = 0;
    let questionIndex = 0;

    let questionTitleCol = $("<div>").addClass("col question-title-col border");
    questionRow.append(questionTitleCol);

    let questionText = $("<h4>").addClass("question-");
    questionTitleCol.append(questionText);

    let timerCol = $("<div>").addClass("col-auto border");
    questionRow.append(timerCol);

    let timerText = $("<span>").addClass("timer-text");
    timerCol.append(timerText);

    setInterval(
        function () {
            timerText.text((timer += 0.1).toFixed(1));
        },
        100
    );

    //Create Answer Row
    let answerRow = $("<div>").addClass("row no-gutters answer-row");
    mainContainer.append(answerRow);

    let correct = 0;
    let wrong = 0;

    loadQuestion();

    function loadQuestion() {
        answerRow.empty();
        let question = questions[questionIndex];
        questionText.text(question.title);

        question.choices.forEach(choice => {
            let choiceCol = $("<div>").addClass("col border");
            let choiceText = $("<span>").addClass("choice");
            choiceText.text(choice);
            choiceCol.append(choiceText);
            answerRow.append(choiceCol);
            choiceCol.click(function () {
                if (this.children[0].textContent == question.answer) {
                    correct++;
                } else {
                    wrong++;
                }
                if (questionIndex < (questions.length - 1)) {
                    questionIndex++;
                    loadQuestion();
                } else {
                    endQuiz();
                }
            });
        });
    }
}