const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")

const btn5 = document.querySelector(".all")

let cancel = null

const colors = ["black", "darkslategrey", "greenyellow", "midnightblue"]
let index = 0


btn5.addEventListener('click', function(){
cancel = setInterval( function(){
    document.body.style.background = colors[index]
    index++
    if(index===colors.length){
        index = 0
    }
},1000)



})

btn1.addEventListener('click', function (){
    document.body.style.background = 'black';
    clearInterval(cancel)
})

btn2.addEventListener('click', function (){
    document.body.style.background = 'darkslategrey';
    clearInterval(cancel)
})

btn3.addEventListener('click', function (){
    document.body.style.background = 'greenyellow';
    clearInterval(cancel)
})
btn4.addEventListener('click', function(){
    document.body.style.background = 'midnightblue';
    clearInterval(cancel)
})