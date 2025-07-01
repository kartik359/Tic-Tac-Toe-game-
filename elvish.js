const ticTac=document.getElementById('main')
let boxes=document.querySelectorAll(".box")
let heading=document.getElementById("heading")
let button=document.getElementById('button');
let winningcondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let currentplayer="X"
function startGame(e){
    if (e.target.className !== "ticTac"){
    if(e.target.innerText==="")
    {
e.target.textContent=currentplayer;
winner();
if(currentplayer==="X")
{
    currentplayer="O";
}
else{
    currentplayer="X";
}
    }

}
}
ticTac.addEventListener('click',startGame)
function winner()
{
winningcondition.forEach((item)=>{
    let index0=item[0]
    let index1=item[1]
    let index2=item[2]
    let val0=boxes[index0].innerText;
    let val1=boxes[index1].innerText;
    let val2=boxes[index2].innerText;
    if(val0!=="" && val1!=="" && val2!=="")
    {
      if(val0 === val1 && val0 === val2)
      {
        boxes[index0].classList.add('additionalclass');
        boxes[index1].classList.add('additionalclass');
        boxes[index2].classList.add('additionalclass');
        heading.innerText=`winner is ${val0}`;
        ticTac.removeEventListener('click',startGame);
      }
    }
})
}
button.addEventListener('click',()=>{
boxes.forEach((item=>{
    item.innerText="";
    item.classList.remove('additionalclass')
}))
heading.innerText="Tic Tac Toe";
ticTac.addEventListener('click',startGame)
})