var question1_id=document.getElementById('question1');
console.log(question1_id)


var question2_tagname=document.getElementsByName('h1')
console.log(question2_tagname)



var question3_tagname=document.getElementsByClassName('question1')
console.log(question3_tagname)


var answer_4 =document.getElementsByClassName('question4');

answer_4[0].innerHTML="hello world";


var answer_5=document.getElementsByClassName('question5')


function change()
{
answer_5[0].innerHTML="Welcome to Elevation academy"

}

var answer6=document.getElementsByClassName("question6")

answer6[0].style.color="red";


var boxes=document.querySelector('.parent')
let count =true;

function box()
{
   if(count)
   {
    boxes.style.display='block';
    count =false;
   }
   else
   {
    boxes.style.display='flex';
    count=true;
   }
}


// let display=document.querySelectorAll('h5')
// console.log(display)
// display[0].addEventListener('click',()=>
// {
//     function startclock()
//     {
//         let time=new Date();
//         let hrs=time.getHours();
//         let min =time.getMinutes();
//         let sec=time.getSeconds();
//         console.log(`${hrs}:${min}:${sec}`)
//         display[0].innerHTML=`${hrs}:${min}:${sec}`
//     }

//      setInterval(() => {
//         startclock();
        
//      }, 1000);



//     })

let display=document.querySelectorAll('h5')
function startclock(){
let time=new Date();
let hrs=time.getHours();
let min =time.getMinutes();
let sec=time.getSeconds();
display[0].innerHTML=`${hrs}:${min}:${sec}`
}
setInterval(() => {
         startclock();
            
      }, 1000);




   //  --------------------------------------game js------------------------------------------
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
let checkNum = document.querySelector("#number")
let btn = document.querySelector(".btn")
let chance =document.querySelector(".Chance")
let score =document.querySelector(".score")
let update = document.querySelector(".Guess")
let randomNum = parseInt((Math.random()*100)+1)
let body=document.querySelector("body")
let win =document.querySelector(".text")

console.log(randomNum)

let count1= 100;

const callme=()=>{
    if(randomNum < parseInt(checkNum.value)){
        update.innerHTML = "Your Guess is High ";
        count1--;
        chance.innerHTML=`${count1}`;
    }
    else if (randomNum > parseInt(checkNum.value)){
        update.innerHTML = "Your Guess is Low ";
        count1--;
        chance.innerHTML=`${count1}`;
    }
    else{
        update.innerHTML = `${randomNum}`;
        count1--;
        score.innerHTML=`${count}`;
        body.style.backgroundColor ="#78e08f"
        win.innerHTML = "Your Are Win "      
    }
}
