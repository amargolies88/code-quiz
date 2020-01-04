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

    //might not use this delete later
    takingQuiz = true;

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
        //Set main header to display "Quiz Finished"
        questionText.text("Quiz Finished");

        //Set Score display and stats

            //Display Total Time

            //Total Questions

            //Total Correct

            //Total Wrong

            
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
    setInterval(
        function () {
            timerText.text((timer += 0.01).toFixed(2));
        },
        10
    );

    //Create Answer Row
    let answerRow = $("<div>").addClass("row no-gutters answer-row");
    mainContainer.append(answerRow);

    //Load question
    loadQuestion();
}

