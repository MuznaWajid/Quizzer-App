function submitionForm(e) {
e.preventDefault();let name = document.forms["Str-form"]["name"].value;
console.log(name);
// }storage
sessionStorage.setItem("name",name);
location.href="Quizzer.html";
console.log(name);}





// function Timer(sec,elem){
// var element = document.getElementById(elem);
// element.innerHTML="<br/><h2>Please Wait Have Some paitence for</h2>"+sec+"<h4>Seconds</h4>";

//     if (sec < 1){
//       clearTimeout(counter);
//       element.innerHTML='<br><h1 style="color=yellowgreen;font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif";>Test loaded!!</h1>';
//       element.innerHTML +='<a  type="button" href="QuizerApp.html" class="btn">Start Exam App</a>';
//   }
//   sec--;
//   var counter=setTimeout('Timer('+sec+',"'+elem+'")', 1000);
// };
// var questions=[{
//     question: "Who invented JavaScript?",
//     answers: {
//         a: "Douglas Crockford",
//         b: "Sheryl Sandberg",
//         c: "Brendan Eich"
// },
// correctAnswer: "c"},
// {
//     question: "Which one of these is a JavaScript package manager?",
//     answers: {
//       a: "Node.js",
//       b: "TypeScript",
//       c: "npm"
//     },
//     correctAnswer: "c"
//   },
//   {
//     question: "Which tool can you use to ensure code quality?",
//     answers: {
//       a: "Angular",
//       b: "jQuery",
//       c: "RequireJS",
//       d: "ESLint"
//     },
//     correctAnswer: "d"
//   },
//   {
//     question: " Which of the following is a server-side Java Script object?",
//     answers: {
//       a: "File",
//       b: "Fileupload",
//       c: "Function",
//       d: "Data"
//     },
//     correctAnswer: "a"
//   },

//   {
//     question: " Javascript can be used for storing form's contents to a database file on the server",
//     answers: {
//       a: "False",
//       b: "True",
      
//     },
//     correctAnswer: "a"
//   },
//   {
//     question: " To insert a JavaScript into an HTML page, which tag is used?",
//     answers: {
//       a: "<javascript>",
//       b: "<js>",
//       c: "<script>",
//       d: "<script = java>"
      
//     },
//     correctAnswer: "c"
//   },{
//     question: "Which of the below is used in Java script to insert special characters?",
//     answers: {
//       a: "-",
//       b: " \ ",
//       c: "&",
//       d: "%"
//     },
//     correctAnswer: "b"
//   },
//   {
//     question: "JavaScript ignores extra spaces?",
//     answers: {
//       a: "False",
//       b: " True ",
//       c: "Non of these"
//     },
//     correctAnswer: "b"
//   },
//   {
//     question: "Which of the following is used to capture all click events in a window?",
//     answers: {
//       a: "window.routeEvents(Event.CLICK );",
//       b: " window.raiseEvents(Event.CLICK );",
//       c: "window.handleEvents (Event.CLICK);",
//       d: "window.captureEvents(Event.CLICK);"
//     },
//     correctAnswer: "c"
//   },
// ];