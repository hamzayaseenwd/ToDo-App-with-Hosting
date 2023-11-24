var questions = [
    {
        question: "What is the largest mammal on land?",
        option1: "Elephant", 
        option2:  "Giraffe", 
        option3: "Hippopotamus",
        answer: "Elephant"
  },{
    question: "In which year did World War I begin?",
    option1: "1914",
    option2: "1918",
    option3: "1939",
    correctAns: "1914"
},
{
    question:"how many data types in js?",
    option1:"Six (6)",
    option2:"Seven(7)",
    option3:"Eight(8)",
    correctAns:"Eight(8)"
},
{
    question:"how many days in febuary",
    option1:"Thirty (30)",
    option2:"Twenty Eight (28)",
    option3:"Twenty Nine (29)",
    correctAns:"Twenty Eight (28)"
},
  {
    question:"HTML stands for",
    option1:"Hyper Text markup language",
    option2:"Hyper Link markup language",
    option3:"Hyper Text makeup language",
    correctAns:"Hyper Text markup language"
},
{
    question:"In how many ways can CSS be written in?",
    option1:"One (1)",
    option2:"Two (2)",
    option3:"Three (3)",
    correctAns:"Three (3)"
},
{
    question:"Which tag gives your the largest heading in html",
    option1:"<h6>",
    option2:"<h2>",
    option3:"<h1>",
    correctAns:"<h1>"
},
{
    question:"CSS stands for",
    option1:"Cascading Style sheet",
    option2:"Cascading Styling sheet",
    option3:"Cascading super sheet",
    correctAns:"Cascading Style sheet"
},
{
    question: "What is the capital of Australia?",
      option1: "Sydney",
      option2: "Canberra", 
      option3: "Melbourne",
      correctAns: "Canberra"
},

{
      question: "Who wrote 'Romeo and Juliet'?",
      option1: "Charles Dickens",
      option2: "William Shakespeare",
      option3: "Jane Austen",
      answer: "William Shakespeare"
},
{
      question: "What is the currency of Brazil?",
      option1: "Euro", 
      option2: "Real", 
      option3: "Peso",
      answer: "Real"
},
];


var para = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var button = document.getElementById("btn");
var timer = document.getElementById("timer")
var index = 0;
var score = 0;
var min = 1;
var sec = 59;



setInterval(function(){
    timer.innerHTML = `${min}:${sec}`;
    sec--
    if(sec<0){
        min--;
        sec = 59    
    }
    if(min<0){
        min= 1;
        sec = 59;
        nextQuestion()
    }
},1000)


function nextQuestion(){

    var getOptions = document.getElementsByName("options");

    for(var i = 0;i<getOptions.length;i++)
    {
        if(getOptions[i].checked){
            var selectedValue = getOptions[i].value;
            // console.log(selectedValue)
            var selectedQues = questions[index - 1]["question"];
            var selectedAns = questions[index-1][`option${selectedValue}`]
            var correctAns = questions[index - 1]["correctAns"]
            if(selectedAns == correctAns){
                score++
            }
        }
        min = 1;
        sec = 59;
        getOptions[i].checked = false
    }

    button.disabled = true

    if(index >questions.length - 1){
        
        var percentage = ((score / questions.length)*100).toFixed(2)

        if (percentage <= 70.00) {
            Swal.fire(
                'Good job!',
                `Your percentage is ${percentage}`,
                'success'
                )
                nextQuestion()
            }
    }else{

        
        para.innerHTML = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++
    }
}

// nextQuestion()


function clicked()
{
    button.disabled = false
}
