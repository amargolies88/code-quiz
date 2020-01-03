//Building Main Container
var mainContainer = $("<div>");
mainContainer.addClass("container-fluid");
$(document.body).append(mainContainer);

//Building Banner
var banner = $("<div>").addClass("row no-gutters");
mainContainer.append(banner);

var bannerText = $("<h1>JavaScript Quiz</h1>");
banner.append(bannerText);

//Build Button Splash Area
var mainRow = $("<div>").addClass("row no-gutters");
mainContainer.append(mainRow);

var splashButtonStart = $("<button>Start</button>").addClass("btn btn-primary");
mainRow.append(splashButtonStart);

splashButtonStart.click(startQuiz);


function startQuiz(){
    splashButtonStart.remove();

    for (let i = 0; i < questions.length; i++) {
        



    }
    //Build Question Title

}