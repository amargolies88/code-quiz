# code-quiz

## Description

This single-page web application uses HTML CSS and Javascript to conduct a quiz. The quiz presents questions and choices which it checks with the correct answer all of which is stored in local stored in the [assets/js/questions.js](assets/js/questions.js) file.



## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

### Visit The Deployed Website
[https://amargolies88.github.io/code-quiz](https://amargolies88.github.io/code-quiz)

### or Download
Download this repository, [code-quiz](https://github.com/amargolies88/code-quiz). Locate this repository in your local directory. There is nothing else needed to install this project. A web browser program is needed to view the completed project (Google Chrome, Firefox, Edge...). An IDE (Integrated Development Environment) such as Visual Studio Code is also useful to view and edit the code.

### and Open
Navigate to this repository locally. The main page, index.html, is located inside the root directory. Right click on one of the html files and choose open with code, or select the "open with" menu and choose your preferred editor.

The files can also be viewed in the web browser by choosing to open with your preferred web browser. The CSS files can be found in assets/css/. The javascript file can be found in assets/js/.

The bulk of the program can be found in the [main javascript file](assets/js/script.js)

## Usage

### Intro Page
The intro page displays two buttons. The start button begins the quiz. The View High Scores button displays a list of high scores obtained and stored in local storage.

![Intro Page](documentation/screenshots/intro-page.png)

### High Scores
A list of high scores is displayed

![High Scores](documentation/screenshots/high-scores.png)

### Quiz Environment
The question is displayed below the page header in large text. A timer counts down to 0. The user is presented with multiple choices. The question, the choice, and the answer are all stored inside an object in the [assets/js/questions.js](assets/js/questions.js) file.

![Quiz Environment](documentation/screenshots/quiz-environment.png)

### Timer
A timer counts down during the quiz and stops either when it hits zero or the user answers all the questions. Any remaining time is calculated into a formula as a bonus to the user's final score. 10 seconds is lost on the timer for every wrong answer.

![Timer](documentation/screenshots/quiz-timer.png)

### Quiz Completion
The completion screen shows the user's final score along with other statistics. Those statistics are total time, time remaining, total questions, questions correct, and questions wrong.

Below the questions an input box is focused by the browser. Clicking submit or hitting enter while the input box is focused will store the user's name and their highscore in local storage. If no name is entered, the name will default to "Anonymous".

After submitting, the input box and button are removed and the high scores are automatically displayed.

![Quiz Completion](documentation/screenshots/quiz-completion.png)

### Retry
The retry button is enabled after the user submits their score. This button returns the user to the beginning of the quiz where they can try again.

![Retry Button](documentation/screenshots/quiz-retry.png)

### Adaptive Resizing
This web application uses bootstrap to make the application easy to use with any size window.

##### 500px wide:
![500px Wide Screenshot](documentation/screenshots/width-500px.png)
##### 576px wide:
![576px Wide Screenshot](documentation/screenshots/width-576px.png)
##### 768px wide:
![768px Wide Screenshot](documentation/screenshots/width-768px.png)

## Credits

Visual Studio Code https://code.visualstudio.com

Bootstrap https://getbootstrap.com

jQuery https://jquery.com

## License

Creative Commons Legal Code

CC0 1.0 Universal

    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
    INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
    HEREUNDER.

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer
exclusive Copyright and Related Rights (defined below) upon the creator
and subsequent owner(s) (each and all, an "owner") of an original work of
authorship and/or a database (each, a "Work").

Certain owners wish to permanently relinquish those rights to a Work for
the purpose of contributing to a commons of creative, cultural and
scientific works ("Commons") that the public can reliably and without fear
of later claims of infringement build upon, modify, incorporate in other
works, reuse and redistribute as freely as possible in any form whatsoever
and for any purposes, including without limitation commercial purposes.
These owners may contribute to the Commons to promote the ideal of a free
culture and the further production of creative, cultural and scientific
works, or to gain reputation or greater distribution for their Work in
part through the use and efforts of others.

For these and/or other purposes and motivations, and without any
expectation of additional consideration or compensation, the person
associating CC0 with a Work (the "Affirmer"), to the extent that he or she
is an owner of Copyright and Related Rights in the Work, voluntarily
elects to apply CC0 to the Work and publicly distribute the Work under its
terms, with knowledge of his or her Copyright and Related Rights in the
Work and the meaning and intended legal effect of CC0 on those rights.

1. Copyright and Related Rights. A Work made available under CC0 may be
protected by copyright and related or neighboring rights ("Copyright and
Related Rights"). Copyright and Related Rights include, but are not
limited to, the following:

  i. the right to reproduce, adapt, distribute, perform, display,
     communicate, and translate a Work;
 ii. moral rights retained by the original author(s) and/or performer(s);
iii. publicity and privacy rights pertaining to a person's image or
     likeness depicted in a Work;
 iv. rights protecting against unfair competition in regards to a Work,
     subject to the limitations in paragraph 4(a), below;
  v. rights protecting the extraction, dissemination, use and reuse of data
     in a Work;
 vi. database rights (such as those arising under Directive 96/9/EC of the
     European Parliament and of the Council of 11 March 1996 on the legal
     protection of databases, and under any national implementation
     thereof, including any amended or successor version of such
     directive); and
vii. other similar, equivalent or corresponding rights throughout the
     world based on applicable law or treaty, and any national
     implementations thereof.

2. Waiver. To the greatest extent permitted by, but not in contravention
of, applicable law, Affirmer hereby overtly, fully, permanently,
irrevocably and unconditionally waives, abandons, and surrenders all of
Affirmer's Copyright and Related Rights and associated claims and causes
of action, whether now known or unknown (including existing as well as
future claims and causes of action), in the Work (i) in all territories
worldwide, (ii) for the maximum duration provided by applicable law or
treaty (including future time extensions), (iii) in any current or future
medium and for any number of copies, and (iv) for any purpose whatsoever,
including without limitation commercial, advertising or promotional
purposes (the "Waiver"). Affirmer makes the Waiver for the benefit of each
member of the public at large and to the detriment of Affirmer's heirs and
successors, fully intending that such Waiver shall not be subject to
revocation, rescission, cancellation, termination, or any other legal or
equitable action to disrupt the quiet enjoyment of the Work by the public
as contemplated by Affirmer's express Statement of Purpose.

3. Public License Fallback. Should any part of the Waiver for any reason
be judged legally invalid or ineffective under applicable law, then the
Waiver shall be preserved to the maximum extent permitted taking into
account Affirmer's express Statement of Purpose. In addition, to the
extent the Waiver is so judged Affirmer hereby grants to each affected
person a royalty-free, non transferable, non sublicensable, non exclusive,
irrevocable and unconditional license to exercise Affirmer's Copyright and
Related Rights in the Work (i) in all territories worldwide, (ii) for the
maximum duration provided by applicable law or treaty (including future
time extensions), (iii) in any current or future medium and for any number
of copies, and (iv) for any purpose whatsoever, including without
limitation commercial, advertising or promotional purposes (the
"License"). The License shall be deemed effective as of the date CC0 was
applied by Affirmer to the Work. Should any part of the License for any
reason be judged legally invalid or ineffective under applicable law, such
partial invalidity or ineffectiveness shall not invalidate the remainder
of the License, and in such case Affirmer hereby affirms that he or she
will not (i) exercise any of his or her remaining Copyright and Related
Rights in the Work or (ii) assert any associated claims and causes of
action with respect to the Work, in either case contrary to Affirmer's
express Statement of Purpose.

4. Limitations and Disclaimers.

 a. No trademark or patent rights held by Affirmer are waived, abandoned,
    surrendered, licensed or otherwise affected by this document.
 b. Affirmer offers the Work as-is and makes no representations or
    warranties of any kind concerning the Work, express, implied,
    statutory or otherwise, including without limitation warranties of
    title, merchantability, fitness for a particular purpose, non
    infringement, or the absence of latent or other defects, accuracy, or
    the present or absence of errors, whether or not discoverable, all to
    the greatest extent permissible under applicable law.
 c. Affirmer disclaims responsibility for clearing rights of other persons
    that may apply to the Work or any use thereof, including without
    limitation any person's Copyright and Related Rights in the Work.
    Further, Affirmer disclaims responsibility for obtaining any necessary
    consents, permissions or other rights required for any use of the
    Work.
 d. Affirmer understands and acknowledges that Creative Commons is not a
    party to this document and has no duty or obligation with respect to
    this CC0 or use of the Work.