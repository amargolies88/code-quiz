//Building Main Container
let mainContainer = $("<div>");
mainContainer.addClass("container-fluid p-sm-5");
$(document.body).append(mainContainer);

//Building header
let header = $("<div>").addClass("row no-gutters header-row");
mainContainer.append(header);

//Build Page Title
let headerTitleCol = $("<div>").addClass("col-auto mr-2")
header.append(headerTitleCol);

let headerText = $("<h1>JavaScript Quiz</h1>");
headerTitleCol.append(headerText);

//build View High Scores Button Col
let viewScoresCol = $("<div>").addClass("col");
header.append(viewScoresCol);

//Build View High Scores Button
let viewScoresBtn = $("<button>").addClass("btn mt-2 btn-sm btn-success");
viewScoresCol.append(viewScoresBtn);
viewScoresBtn.text("View High Scores");

//Get highscores array from local storage if it exists


//Build Button Splash Area
let questionRow = $("<div>").addClass("row no-gutters question-row");
mainContainer.append(questionRow);

let splashButtonStart = $("<button>Start</button>").addClass("btn btn-primary");
questionRow.append(splashButtonStart);

//Splash button executes main function startQuiz()
splashButtonStart.click(startQuiz);

//Set global quiz variables
let takingQuiz = false;
let timer = 0;
let correct = 0;
let wrong = 0;
let questionIndex = 0;
let score = 0;
let highScores = [];
if (localStorage.length !== 0) {
    highScores = JSON.parse(localStorage.highScores);
}
//MAIN FUNCTION - Executed after Splash Button clicked
function startQuiz() {

    //function to update timer display
    function updateTimer() {
        timerText.text(timer.toFixed(2));
    }

    //might not use this delete later
    takingQuiz = true;

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
            let choiceCol = $("<div>").addClass("col choice-col");
            let choiceText = $("<span>").addClass("choice");
            choiceCol.append(choiceText);
            answerRow.append(choiceCol);
            //Set choice text to current choice in questions[]
            choiceText.text(choice);

            //Add click listener to this Choice Col when clicked...
            choiceCol.click(function () {
                //If this(div for choice col)'s children's text content (which is the choice)
                //equals the correct answer
                if (this.children[0].textContent == question.answer) {
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

        score = Math.round(timer + (correct * timer * 10));

        //Clean old answers
        answerRow.empty();

        //Pause Timer
        clearInterval(timerInterval);

        //Set main header to display "Quiz Finished"
        questionText.text("Quiz Finished");

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

        form.submit(function (event) {
            event.preventDefault();
            user = inputName.val();
            if (user === ""){
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

        });
    }

    //Remove some content before creating quiz content
    splashButtonStart.remove();

    //Create Col with <h2> question text
    let questionTitleCol = $("<div>").addClass("col question-title-col");
    questionRow.append(questionTitleCol);
    let questionText = $("<h2>").addClass("question-text");
    questionTitleCol.append(questionText);

    //Create Col for timer <span>
    let timerCol = $("<div>").addClass("col-auto");
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

    //Create Answer Row
    let answerRow = $("<div>").addClass("row no-gutters answer-row");
    mainContainer.append(answerRow);

    //Load question
    loadQuestion();
}

