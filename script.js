const questions = [
    {
        question: "1. In HTML, which tag can be used to insert emojis directly into your webpage?",
        options: ["<emoji>" , "<img>", "<span>", "<smiley>"],
        answer: "<span>"
    },
    {
        question: "2. If your webpage were a movie, which HTML tag would play the starring role in the title credits?",
        options: ["<hero>", "<title>", "<main>", "<headline>"],
        answer: "<title>"
    },
    {
        question: "3. Which attribute can be used to add color to your text in HTML?",
        options: ["color", "style", "font-color", "text-color"],
        answer: "style"
    },
    {
        question: "4. What is the correct way to create a line break in HTML?",
        options: ["<breaks>", "<lb>", "<br>", "<newline>"],
        answer: "<br>"
    },
    {
        question: "5. Which HTML tag is used to define the structure of an HTML document, including headings, paragraphs, and lists?",
        options: ["<structure>", "<body>", "<document>", "<html>"],
        answer: "<body>"
    },
    {
        question: "6. If your HTML document falls asleep, which tag wakes it up?",
        options: ["<wake>", "<wakeup>", "<refresh>", "<meta http-equiv='refresh' content='0'>"],
        answer: "<meta http-equiv='refresh' content='0'>"
    },
    {
        question: "7. What HTML tag is used to define important text?",
        options: ["<bold>", "<strong>", "<important>", "<emphasize>"],
        answer: "<strong>"
    },
    {
        question: "8. Which CSS property is used to create rounded corners for an element?",
        options: ["border-radius", "corner-radius", "rounded-corners", "box-radius"],
        answer: "border-radius"
    },
    {
        question: "9. In JavaScript, what function is used to select an HTML element by its ID?",
        options: ["getElementByName", "selectElementByID", "document.getElementById", "findElementByID"],
        answer: "document.getElementById"
    },
    {
        question: "10. Which HTML entity is used to represent a space?",
        options: ["<&space>", "<&nbsp>", "<&tab>", "<&blank>"],
        answer: "<&nbsp>"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert("Correct! 🎉");
    } else {
        alert("Incorrect. 😔");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed! (☞ﾟヮﾟ)☞");
        currentQuestionIndex = 0; //Reset for a potential restart :D
        loadQuestion();
    }
}

// function nextQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         loadQuestion();
//     }
// }


//Initial load
loadQuestion();
