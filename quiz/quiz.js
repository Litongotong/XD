//定义问题，选项，答案
// const Question = "问题";
// const answers = ["答案1", "答案2", "答案3", "答案4"];
// const correct = "答案2";

const quiz = [
  {
    Question: "吃了没",
    answers: ["没吃才怪", "忘吃了", "懒得吃", "没得吃"],
    correct: "没得吃",
  },
  {
    Question: "吃啥了",
    answers: ["豆腐脑", "豆浆", "汉堡", "椰蓉小面包"],
    correct: "椰蓉小面包",
  },
  {
    Question: "在干嘛",
    answers: ["认真学习", "认真工作", "认真干饭", "摸鱼当废物"],
    correct: "认真干饭",
  },
];
let quizIndex = 0;
const quizLength = quiz.length;
let score=0

const Button = document.getElementsByTagName("Button");
const ButtonLength = Button.length;
// document.getElementsByTagName('Button')[0].textContent=answers[0];
// document.getElementsByTagName('Button')[1].textContent=answers[1];
// document.getElementsByTagName('Button')[3].textContent=answers[3];
// document.getElementsByTagName('Button')[3].textContent=answers[3];

// Button[0].textContent=answers[0];
// Button[1].textContent=answers[1];
// Button[2].textContent=answers[2];
// Button[3].textContent=answers[3];
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].Question;
  let ButtonIndex = 0;

  while (ButtonIndex < ButtonLength) {
    Button[ButtonIndex].textContent = quiz[quizIndex].answers[ButtonIndex];
    ButtonIndex++;
  }
};
//调用setupQuiz
setupQuiz();

//判断所选内容是否正确
// Button[0].addEventListener("click", (e) => {
//   clickHandler(e)
// });
// Button[1].addEventListener("click", (e) => {
//   clickHandler(e)
// });

// Button[2].addEventListener("click", (e) => {
//   clickHandler(e)
// });

// Button[3].addEventListener("click", (e) => {
//   clickHandler(e)
// });
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("◎");
    score++;
  } else {
    window.alert("✖");
  }
  quizIndex++; 
  if (quizIndex < quizLength) {
    //如果答题结未束则
    setupQuiz();
  } else {
    //如果答题结束则
    window.alert('没有咯 你猜对了'+score+'/'+quizLength+'次');
  }
};

let handlerIndex = 0;
while (handlerIndex < ButtonLength) {
  Button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
