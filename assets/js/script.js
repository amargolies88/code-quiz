//MAIN CONTAINER
let mainContainer = $("<div>");
mainContainer.addClass("container-fluid p-sm-5");
$(document.body).append(mainContainer);

//HEADER
let header = $("<div>").addClass("row no-gutters header-row");
mainContainer.append(header);

//PAGE TITLE
let headerTitleCol = $("<div>").addClass("col-12")
header.append(headerTitleCol);

let headerText = $("<h1>JavaScript Quiz</h1>").addClass("header-text");
headerTitleCol.append(headerText);

//BUTTON SPLASH AREA WHICH BECOMES QUESTION AREA
let questionRow = $("<div>").addClass("row no-gutters question-row");
mainContainer.append(questionRow);

//START BUTTON COL
let startButtonCol = $("<div>").addClass("col-auto mr-2");
questionRow.append(startButtonCol);

//START BUTTON
let splashButtonStart = $("<button>Start</button>").addClass("btn btn-myprime");
startButtonCol.append(splashButtonStart);

//HIGH SCORES BUTTON COL
let viewScoresCol = $("<div>").addClass("col-auto");
questionRow.append(viewScoresCol);

//HIGH SCORES BUTTON
let viewScoresBtn = $("<button>").addClass("btn btn-myprime");
viewScoresCol.append(viewScoresBtn);
viewScoresBtn.text("View High Scores");

//Set Start Button to executes startQuiz()
splashButtonStart.click(startQuiz);

//Create Answer Row
let answerRow = $("<div>").addClass("row no-gutters answer-row");
mainContainer.append(answerRow);

//Set global quiz variables
let timer = 0;
let correct = 0;
let wrong = 0;
let questionIndex = 0;
let score = 0;
let highScores = [];
if (localStorage.length !== 0) {
    highScores = JSON.parse(localStorage.highScores);
}

viewScoresBtn.click(displayScores);

function displayScores() {
    viewScoresBtn.prop("disabled", true);
    let highScoreTitleCol = $("<div>").addClass("col-12 mt-2");
    answerRow.append(highScoreTitleCol);
    let highScoreTitleText = $("<h4>High Scores: </h4>").addClass("score-title")
    highScoreTitleCol.append(highScoreTitleText);
    for (let i = 0; i < highScores.length; i++) {
        const person = highScores[i];

        let personNameCol = $("<div>").addClass("col-7 col-sm-6 border-bottom mb-2 person-name-col");
        answerRow.append(personNameCol);
        let personNameText = $("<span>").addClass("highscore-name");
        personNameCol.append(personNameText);
        personNameText.text(person.userName);

        let personScoreCol = $("<div>").addClass("col-auto border-bottom mb-2 person-score-col");
        answerRow.append(personScoreCol);
        let personScoreText = $("<span>").addClass("highscore-score");
        personScoreCol.append(personScoreText);
        personScoreText.text(person.userScore);

        answerRow.append($("<div>").addClass("w-100"));
    }
}

//MAIN FUNCTION - Executed after Splash Button clicked
function startQuiz() {
    //Reset default variables
    timer = 0;
    correct = 0;
    wrong = 0;
    questionIndex = 0;
    score = 0;

    //function to update timer display
    function updateTimer() {
        timerText.text(timer.toFixed(2));
    }

    //Set timer based on questions[].length
    timer = questions.length * 15;

    //Function to load question (first and every next until end of questions[])
    function loadQuestion() {

        //Set question to current index
        let question = questions[questionIndex];
        questionText.text(question.title);

        //Create Choice Col and <span> for each choice
        question.choices.forEach(choice => {
            //Create Choice Col and <span>
            let choiceCol = $("<div>").addClass("col-7 col-sm-5 col-md choice-col mb-1 mr-1 pl-2");
            let choiceText = $("<span>").addClass("choice");
            choiceCol.append(choiceText);
            answerRow.append(choiceCol);
            //Set choice text to current choice in questions[]
            choiceText.text(choice);

            //Add click listener to this Choice Col when clicked...
            choiceCol.click(function () {
                //If this(div for choice col)'s children's text content (which is the choice)
                //equals the correct answer
                if (this.children[0].textContent === question.answer) {
                    //incriment correct count variable
                    correct++;
                } else {
                    //otherwise decrement wrong variable
                    wrong++;
                    timer -= 10;
                }

                //Clean old answers
                answerRow.empty();

                //If next question doesn't not exist (if next question exists)
                if (typeof questions[questionIndex + 1] !== "undefined") {
                    //increase quiz index and load that question
                    questionIndex++;
                    loadQuestion();
                } else {
                    //otherwise execute endQuiz()
                    endQuiz();
                }
            });
        });
    }

    //Function executed at the end of quiz | Displays Score Etc...
    function endQuiz() {
        let user = "";

        updateTimer();

        score = Math.round((correct * 1000) + (timer * 10));

        //Clean old answers
        answerRow.empty();

        //Pause Timer
        clearInterval(timerInterval);

        //Set main header to display "Quiz Finished"
        questionText.text("Quiz Finished");

        //Show Retry Button
        let retryBtnCol = $("<div>").addClass("col-auto mr-2 retry-btn-col")
        questionTitleCol.after(retryBtnCol);

        let retryBtn = $("<button>Retry</button>").addClass("btn btn-myprime");
        retryBtnCol.append(retryBtn);
        retryBtn.prop("disabled", true);
        retryBtn.click(startQuiz);

        //Set Score Title Col and Score Title Text
        let scoreCol = $("<div>").addClass("col-12");
        answerRow.append(scoreCol);

        let scoreTitle = $("<h4>Score: </h4>").addClass("score-title");
        scoreCol.append(scoreTitle);

        let scoreText = $("<span>");
        scoreTitle.append(scoreText);
        scoreText.text(score);


        //Display Total Time Col and Total Time Text and set total time text
        let totalTimeCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(totalTimeCol);

        let totalTimeTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        totalTimeCol.append(totalTimeTitle);
        totalTimeTitle.text("Total Time: ");

        let totalTimeText = $("<span>").addClass("score-value");
        totalTimeTitle.append(totalTimeText);
        totalTimeText.text(`${((questions.length * 15) - (timer + (wrong * 10))).toFixed(2)} seconds`);

        //Same for Time Remaining
        let timeRemainingCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(timeRemainingCol);

        let timeRemainingTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        timeRemainingCol.append(timeRemainingTitle);
        timeRemainingTitle.text("Time Remaining: ");

        let timeRemainingText = $("<span>").addClass("score-value");
        timeRemainingTitle.append(timeRemainingText);
        timeRemainingText.text(`${timer.toFixed(2)} seconds`);

        //Same for Total Questions
        let totalQuestionsCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(totalQuestionsCol);

        let totalQuestionsTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        totalQuestionsCol.append(totalQuestionsTitle);
        totalQuestionsTitle.text("Total Questions: ");

        let totalQuestionsText = $("<span>").addClass("score-value");
        totalQuestionsTitle.append(totalQuestionsText);
        totalQuestionsText.text(questionIndex + 1);

        //Same for Total Correct
        let totalCorrectCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(totalCorrectCol);

        let totalCorrectTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        totalCorrectCol.append(totalCorrectTitle);
        totalCorrectTitle.text("Correct: ");

        let totalCorrectText = $("<span>").addClass("score-value");
        totalCorrectTitle.append(totalCorrectText);
        totalCorrectText.text(correct);

        //Same for Total Wrong
        let totalWrongCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(totalWrongCol);

        let totalWrongTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        totalWrongCol.append(totalWrongTitle);
        totalWrongTitle.text("Wrong: ");

        let totalWrongText = $("<span>").addClass("score-value");
        totalWrongTitle.append(totalWrongText);
        totalWrongText.text(wrong);

        //Create form to submit high score
        let formCol = $("<div>").addClass("col form-col");
        answerRow.append(formCol);

        let form = $('<form>').addClass("input-name-form");
        formCol.append(form);

        let inputName = $('<input type="text" placeholder="Enter Your Name Here" size="30" autofocus>')
        form.append(inputName);

        let inputNameSubmitBtn = $(`<input type="Submit" value="Submit">`);
        form.append(inputNameSubmitBtn);

        inputName.focus();

        //Code to execute when name is submitted
        form.submit(function (event) {
            event.preventDefault();
            user = inputName.val();
            if (user === "") {
                user = "Anonymous"
            }
            let currentPerson = {
                userName: user,
                userScore: score
            };

            //If local storage is empty add first element to array and store
            if (localStorage.length === 0) {
                highScores = [currentPerson];
                localStorage.setItem("highScores", JSON.stringify(highScores));
            } else {
                //If local storage not empty and score is less than or equal to lowest score
                if (score <= highScores[highScores.length - 1].userScore) {
                    highScores.push(currentPerson);
                } else {
                    //If local storage not empty and score is not less than or equal to lowest score
                    //check if score is higher than each score in array
                    for (let i = 0; i < highScores.length; i++) {
                        const person = highScores[i];
                        if (score > person.userScore) {
                            //if score higher, insert currentPerson infront of this index
                            highScores.splice(i, 0, currentPerson);
                            break;
                        }
                    }
                }
            }
            localStorage.setItem("highScores", JSON.stringify(highScores));

            //Clear Form
            form.remove();

            //Display High Scores
            //Create High Scores Title
            displayScores();
            retryBtn.prop("disabled", false);
        });
    }

    //Remove some content before creating quiz content
    questionRow.empty();
    answerRow.empty();
    //Create Col with <h2> question text
    let questionTitleCol = $("<div>").addClass("col-auto question-title-col");
    questionRow.append(questionTitleCol);
    let questionText = $("<h2>").addClass("question-text pr-3");
    questionTitleCol.append(questionText);
    questionTitleCol.append($("<div>").addClass("w-100"));

    //Create Col for timer <span>
    let timerCol = $("<div>").addClass("col");
    questionRow.append(timerCol);
    let timerText = $("<span>").addClass("timer-text");
    timerCol.append(timerText);

    //Update timer every 10ms
    let timerInterval = setInterval(
        function () {
            timer -= .01;
            updateTimer();
            if (timer <= 0) {
                //Don't know exactly why I have to do this yet
                timer = 0;
                endQuiz();
            }
        },
        10
    );

    //Load question
    loadQuestion();
}

