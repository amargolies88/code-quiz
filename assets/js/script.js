//Building Main Container
let mainContainer = $("<div>");
mainContainer.addClass("container-fluid p-sm-5");
$(document.body).append(mainContainer);

//Building Banner
let banner = $("<div>").addClass("row no-gutters banner-row");
mainContainer.append(banner);

let bannerText = $("<h1>JavaScript Quiz</h1>");
banner.append(bannerText);

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
var wrong = 0;
let questionIndex = 0;

//MAIN FUNCTION - Executed after Splash Button clicked
function startQuiz() {

    //function to update timer display
    function updateTimer(){
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
            let choiceCol = $("<div>").addClass("col border");
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
        updateTimer();
        //Clean old answers
        answerRow.empty();

        //Pause Timer
        clearInterval(timerInterval);

        //Set main header to display "Quiz Finished"
        questionText.text("Quiz Finished");

        //Set Score Title Col and Score Title Text
        var scoreCol = $("<div>").addClass("col-12");
        answerRow.append(scoreCol);

        var scoreText = $("<h4>Score: </h4>").addClass("score-title");
        scoreCol.append(scoreText);

        //Display Total Time Col and Total Time Text and set total time text
        var totalTimeCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(totalTimeCol);

        var totalTimeTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        totalTimeCol.append(totalTimeTitle);
        totalTimeTitle.text("Total Time: ");

        var totalTimeText = $("<span>").addClass("score-value");
        totalTimeTitle.append(totalTimeText);
        totalTimeText.text(`${((questions.length * 15) - (timer + (wrong * 10))).toFixed(2)} seconds`);

        //Same for Time Remaining
        var timeRemainingCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(timeRemainingCol);

        var timeRemainingTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        timeRemainingCol.append(timeRemainingTitle);
        timeRemainingTitle.text("Time Remaining: ");

        var timeRemainingText = $("<span>").addClass("score-value");
        timeRemainingTitle.append(timeRemainingText);
        timeRemainingText.text(`${timer.toFixed(2)} seconds`);

        //Same for Total Questions
        var totalQuestionsCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(totalQuestionsCol);

        var totalQuestionsTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        totalQuestionsCol.append(totalQuestionsTitle);
        totalQuestionsTitle.text("Total Questions: ");

        var totalQuestionsText = $("<span>").addClass("score-value");
        totalQuestionsTitle.append(totalQuestionsText);
        totalQuestionsText.text(questionIndex + 1);

        //Same for Total Correct
        var totalCorrectCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(totalCorrectCol);

        var totalCorrectTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        totalCorrectCol.append(totalCorrectTitle);
        totalCorrectTitle.text("Correct: ");

        var totalCorrectText = $("<span>").addClass("score-value");
        totalCorrectTitle.append(totalCorrectText);
        totalCorrectText.text(correct);

        //Same for Total Wrong
        var totalWrongCol = $("<div>").addClass("col-12 px-2");
        answerRow.append(totalWrongCol);

        var totalWrongTitle = $("<h5>").addClass("score-key pr-2 text-nowrap");
        totalWrongCol.append(totalWrongTitle);
        totalWrongTitle.text("Wrong: ");

        var totalWrongText = $("<span>").addClass("score-value");
        totalWrongTitle.append(totalWrongText);
        totalWrongText.text(wrong);

        //Create High Scores

        //Create High Scores Title
        var highScoreTitleCol = $("<div>").addClass("col-12");
        answerRow.append(highScoreTitleCol);
        var highScoreTitleText = $("<h4>").addClass("score-title")
        highScoreTitleCol.append(highScoreTitleText);
        highScoreTitleText.text("High Scores:");
    }

    //Remove some content before creating quiz content
    splashButtonStart.remove();

    //Create Col with <h4> question text
    let questionTitleCol = $("<div>").addClass("col question-title-col border");
    questionRow.append(questionTitleCol);
    let questionText = $("<h4>").addClass("question-text");
    questionTitleCol.append(questionText);

    //Create Col for timer <span>
    let timerCol = $("<div>").addClass("col-auto border");
    questionRow.append(timerCol);
    let timerText = $("<span>").addClass("timer-text");
    timerCol.append(timerText);

    //Update timer every 10ms
    var timerInterval = setInterval(
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

