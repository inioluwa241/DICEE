'use strict'

const resetBtn = document.querySelector(".reset-btn")
const refreshBtn = document.querySelector(".refresh-btn")
const rollBtn = document.querySelector(".roll-btn")
const switchBtn = document.querySelector(".switch-btn")
const player =document.querySelectorAll(".player")
const player1 =document.querySelector(".player-1")
const player2 =document.querySelector(".player-2")
const rollScore =document.querySelector(".roll-score")
const diceImg =document.querySelector(".dice-img")
const rollScore1 = document.querySelector("#roll-score-1")
const rollScore2 = document.querySelector("#roll-score-2")
const totalScore1 = document.querySelector("#total-score-1")
const totalScore2 = document.querySelector("#total-score-2")
const currentPlayer = document.querySelector(".current-player")
const open= document.querySelector('.fas')
const nav=document.querySelector('nav')


open.addEventListener('click', function(){
    nav.style.display="block"
})
let valRollScore1=0
let valRollScore2=0
let score1=0
let score2=0

const switchFunc = function(){
    if(rollScore1.classList.contains("current-player")){
        score1+=valRollScore1
        totalScore1.innerHTML=`${score1}`
        valRollScore1=0
        rollScore1.innerHTML=`${valRollScore1}`
    }else if(rollScore2.classList.contains("current-player")){
        score2+=valRollScore2
        totalScore2.innerHTML=`${score2}`
        valRollScore2=0
        rollScore2.innerHTML=`${valRollScore2}`
    }
    player1.classList.toggle("current-player")
    player2.classList.toggle("current-player")
    rollScore1.classList.toggle("current-player")
    rollScore2.classList.toggle("current-player")
}
// switchFunc()


player1.classList.add("current-player")
rollScore1.classList.add("current-player")

// CLICKING THE ROLL
rollBtn.addEventListener('click', function(){
    const diceNum=(Math.floor(Math.random()*6)+1)
    diceImg.src=`dice-${diceNum}.jpg`

if(rollScore1.classList.contains("current-player")){
    valRollScore1+=diceNum
    rollScore1.innerHTML=`${valRollScore1}`
}else if(rollScore2.classList.contains("current-player")){
    valRollScore2+=diceNum
    rollScore2.innerHTML=`${valRollScore2}`
}

// CONDITION FOR SWITCH
if(diceNum===1){
    switchFunc()
}
})

// CLICKING THE SWITCH
switchBtn.addEventListener('click',function(){
    switchFunc()
})
// CLICKING THE RESET
resetBtn.addEventListener('click', function(){
 valRollScore1=0
 valRollScore2=0
 score1=0
 score2=0
 totalScore1.innerHTML=`${0}`
 totalScore2.innerHTML=`${0}`
})
